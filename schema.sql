CREATE DATABASE IF NOT EXISTS library_risk_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE library_risk_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password_hash CHAR(64) NOT NULL,
  role VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

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
);

INSERT INTO users (username, password_hash, role)
VALUES
  ('admin', SHA2('admin123', 256), 'Người dùng')
ON DUPLICATE KEY UPDATE
  password_hash = VALUES(password_hash),
  role = VALUES(role);

DELETE FROM users WHERE username <> 'admin';
