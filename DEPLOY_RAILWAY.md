# Hướng Dẫn Deploy Lên Railway

Ứng dụng này nên deploy lên Railway vì project dùng Node.js Express và MySQL.

## 1. Chuẩn bị

- Có tài khoản GitHub.
- Có tài khoản Railway.
- Đưa project này lên GitHub repository.

Không đưa file `.env` thật lên GitHub.

## 2. Tạo project trên Railway

1. Vào Railway.
2. Chọn `New Project`.
3. Chọn `Deploy from GitHub repo`.
4. Chọn repository chứa project.
5. Railway sẽ tự nhận Node.js app và dùng `npm start`.

## 3. Thêm MySQL

Trong cùng project Railway:

1. Chọn `New`.
2. Chọn `Database`.
3. Chọn `Add MySQL`.

Sau khi tạo xong, MySQL service sẽ có các biến môi trường:

```env
MYSQLHOST
MYSQLPORT
MYSQLUSER
MYSQLPASSWORD
MYSQLDATABASE
MYSQL_URL
```

Backend đã hỗ trợ các biến này, nên không cần dùng mật khẩu MySQL local.

## 4. Gắn biến MySQL cho web service

Vào web service của ứng dụng, mở phần `Variables` và thêm:

```env
MYSQLHOST=${{ MySQL.MYSQLHOST }}
MYSQLPORT=${{ MySQL.MYSQLPORT }}
MYSQLUSER=${{ MySQL.MYSQLUSER }}
MYSQLPASSWORD=${{ MySQL.MYSQLPASSWORD }}
MYSQLDATABASE=${{ MySQL.MYSQLDATABASE }}
```

Nếu tên service MySQL trên Railway khác `MySQL`, chọn biến bằng giao diện của Railway để tránh gõ sai.

## 5. Tạo domain public

1. Vào web service.
2. Mở tab `Settings`.
3. Tìm phần `Networking`.
4. Chọn `Generate Domain`.

Railway sẽ tạo một link dạng:

```text
https://ten-project.up.railway.app
```

## 6. Tài khoản demo

```text
Tên đăng nhập: admin
Mật khẩu: admin123
```

## 7. Kiểm tra sau khi deploy

1. Mở domain Railway.
2. Đăng nhập bằng `admin / admin123`.
3. Tạo một hồ sơ rủi ro.
4. Lưu hồ sơ.
5. Mở lại phần hồ sơ đã lưu.

Nếu lưu và xem lại được hồ sơ, nghĩa là backend đã kết nối MySQL thành công.
