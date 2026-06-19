const path = require("path");
const express = require("express");
const mysql = require("mysql2/promise");
require("dotenv").config();

const app = express();
const PORT = Number(process.env.PORT || 8088);
const DB_NAME = process.env.DB_NAME || process.env.MYSQLDATABASE || "library_risk_db";

let pool = null;
let dbError = null;

app.use(express.json({ limit: "1mb" }));
app.use(express.static(__dirname));

async function initDatabase() {
  const baseConfig = {
    host: process.env.DB_HOST || process.env.MYSQLHOST || "127.0.0.1",
    port: Number(process.env.DB_PORT || process.env.MYSQLPORT || 3306),
    user: process.env.DB_USER || process.env.MYSQLUSER || "root",
    password: process.env.DB_PASSWORD || process.env.MYSQLPASSWORD || "",
    waitForConnections: true,
    connectionLimit: 10
  };

  if (!process.env.MYSQLHOST) {
    const adminConnection = await mysql.createConnection(baseConfig);
    await adminConnection.query(
      `CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
    );
    await adminConnection.end();
  }

  pool = mysql.createPool({
    ...baseConfig,
    database: DB_NAME
  });

  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50) NOT NULL UNIQUE,
      password_hash CHAR(64) NOT NULL,
      role VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS risk_records (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NULL,
      risk_id VARCHAR(20) NOT NULL,
      risk_group VARCHAR(255) NOT NULL,
      asset VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      threat TEXT,
      weakness TEXT,
      control_gap_score INT NOT NULL,
      likelihood_score INT NOT NULL,
      likelihood_label VARCHAR(50) NOT NULL,
      impact_total INT NOT NULL,
      impact_score INT NOT NULL,
      impact_label VARCHAR(50) NOT NULL,
      risk_score INT NOT NULL,
      risk_level VARCHAR(50) NOT NULL,
      suggestions JSON NULL,
      assessed_at DATETIME NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT fk_risk_records_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE SET NULL
    )
  `);

  await pool.query(`
    INSERT INTO users (username, password_hash, role)
    VALUES
      ('admin', SHA2('admin123', 256), 'Người dùng')
    ON DUPLICATE KEY UPDATE
      password_hash = VALUES(password_hash),
      role = VALUES(role)
  `);

  await pool.query("DELETE FROM users WHERE username <> 'admin'");
}

function requireDatabase(response) {
  if (pool) return true;
  response.status(503).json({
    message: "Chưa kết nối được MySQL. Hãy điền đúng DB_USER/DB_PASSWORD trong file .env rồi chạy lại server.",
    detail: dbError ? dbError.message : undefined
  });
  return false;
}

app.get("/api/health", (request, response) => {
  response.json({
    ok: Boolean(pool),
    database: DB_NAME,
    error: dbError ? dbError.message : null
  });
});

app.post("/api/login", async (request, response) => {
  if (!requireDatabase(response)) return;

  const { username, password } = request.body;
  if (!username || !password) {
    response.status(400).json({ message: "Thiếu tên đăng nhập hoặc mật khẩu." });
    return;
  }

  const [rows] = await pool.execute(
    `SELECT id, username, role
     FROM users
     WHERE username = ? AND password_hash = SHA2(?, 256)
     LIMIT 1`,
    [username, password]
  );

  if (rows.length === 0) {
    response.status(401).json({ message: "Tên đăng nhập hoặc mật khẩu không đúng." });
    return;
  }

  response.json({
    ...rows[0],
    loginAt: new Date().toISOString()
  });
});

app.get("/api/risk-records", async (request, response) => {
  if (!requireDatabase(response)) return;

  const { userId, username } = request.query;
  const where = [];
  const params = [];

  if (userId) {
    where.push("r.user_id = ?");
    params.push(Number(userId));
  } else if (username) {
    where.push("u.username = ?");
    params.push(username);
  }

  const [rows] = await pool.execute(
    `SELECT
       r.id,
       r.risk_id AS riskId,
       r.risk_group AS riskGroup,
       r.asset,
       r.description,
       r.threat,
       r.weakness,
       r.control_gap_score AS controlGapScore,
       r.likelihood_score AS likelihoodScore,
       r.likelihood_label AS likelihoodLabel,
       r.impact_total AS impactTotal,
       r.impact_score AS impactScore,
       r.impact_label AS impactLabel,
       r.risk_score AS riskScore,
       r.risk_level AS riskLevel,
       r.suggestions,
       DATE_FORMAT(r.assessed_at, '%d/%m/%Y %H:%i:%s') AS assessedAt,
       u.username
     FROM risk_records r
     LEFT JOIN users u ON u.id = r.user_id
     ${where.length ? `WHERE ${where.join(" AND ")}` : ""}
     ORDER BY r.created_at DESC, r.id DESC`,
    params
  );

  response.json(rows.map((row) => ({
    ...row,
    suggestions: parseSuggestions(row.suggestions)
  })));
});

app.post("/api/risk-records", async (request, response) => {
  if (!requireDatabase(response)) return;

  const { userId, username, result } = request.body;
  if (!result) {
    response.status(400).json({ message: "Thiếu dữ liệu kết quả đánh giá." });
    return;
  }

  const resolvedUserId = await resolveUserId(userId, username);

  const assessedAt = toMysqlDateTime(result.assessedAt);
  const suggestions = JSON.stringify(result.suggestions || []);

  const [insertResult] = await pool.execute(
    `INSERT INTO risk_records (
      user_id, risk_id, risk_group, asset, description, threat, weakness,
      control_gap_score, likelihood_score, likelihood_label,
      impact_total, impact_score, impact_label,
      risk_score, risk_level, suggestions, assessed_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      resolvedUserId,
      result.riskId,
      result.riskGroup,
      result.asset,
      result.description,
      result.threat,
      result.weakness,
      result.controlGapScore,
      result.likelihood.score,
      result.likelihood.label,
      result.impactTotal,
      result.impact.score,
      result.impact.label,
      result.riskScore,
      result.level.label,
      suggestions,
      assessedAt
    ]
  );

  response.status(201).json({
    id: insertResult.insertId,
    message: "Đã lưu hồ sơ rủi ro vào MySQL."
  });
});

app.get(/.*/, (request, response) => {
  response.sendFile(path.join(__dirname, "index.html"));
});

async function resolveUserId(userId, username) {
  if (userId) return Number(userId);
  if (!username) return null;

  const [rows] = await pool.execute(
    "SELECT id FROM users WHERE username = ? LIMIT 1",
    [username]
  );

  return rows[0] ? rows[0].id : null;
}

function parseSuggestions(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;

  try {
    return JSON.parse(value);
  } catch (error) {
    return [];
  }
}

function toMysqlDateTime(value) {
  if (!value) return new Date();

  const parsed = new Date(value);
  if (!Number.isNaN(parsed.getTime())) return parsed;

  return new Date();
}

initDatabase()
  .catch((error) => {
    dbError = error;
    console.error("Không thể kết nối hoặc khởi tạo MySQL:", error.message);
  })
  .finally(() => {
    app.listen(PORT, () => {
      console.log(`Library Risk Assessment chạy tại http://127.0.0.1:${PORT}`);
    });
  });
