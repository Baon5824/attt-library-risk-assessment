# Web App Demo Đánh Giá Rủi Ro ATTT Thư Viện

**Nhóm thực hiện:** Nhóm 19  
**Đề tài:** Xây dựng quy trình đánh giá rủi ro an toàn thông tin theo ISO/IEC 27001 cho hệ thống thư viện trường đại học.

## 1. Giới thiệu ngắn

Đây là web app demo phục vụ bài tập lớn môn An toàn thông tin. Ứng dụng mô phỏng một quy trình đánh giá rủi ro theo tinh thần ISO/IEC 27001 cho hệ thống thư viện trường đại học.

Người dùng đăng nhập vào hệ thống, chọn tài sản thông tin cần đánh giá, chọn nhóm rủi ro mẫu, nhập mô tả tình huống rủi ro, trả lời checklist và xem kết quả tính điểm. Hồ sơ đánh giá sau khi lưu sẽ được ghi vào cơ sở dữ liệu MySQL.

Ứng dụng tập trung vào mục tiêu học thuật và demo quy trình, không thay thế công cụ đánh giá rủi ro chuyên nghiệp.

## 2. Công nghệ sử dụng

- Frontend: HTML, CSS, JavaScript thuần.
- Backend: Node.js, Express.
- Database: MySQL.
- Lưu hồ sơ rủi ro: bảng `risk_records`.
- Quản lý tài khoản demo: bảng `users`.

## 3. Tài khoản demo

Ứng dụng chỉ sử dụng một tài khoản demo để quá trình trình bày đơn giản và nhất quán:

```text
Tên đăng nhập: admin
Mật khẩu: admin123
```

Sau khi đăng nhập, giao diện hiển thị người dùng là **Người dùng**.

## 4. Cách chạy project

### Bước 1: Chuẩn bị môi trường

Máy cần cài:

- Node.js.
- MySQL Server.
- Trình duyệt web.

### Bước 2: Cấu hình database

Trong thư mục source code, tạo file `.env` từ file `.env.example`.

Nội dung tham khảo:

```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=mat_khau_mysql_cua_ban
DB_NAME=library_risk_db
PORT=8088
```

Trong đó, `DB_PASSWORD` là mật khẩu MySQL trên máy đang chạy demo.

### Bước 3: Cài package Node.js

Mở terminal tại thư mục chứa source code và chạy:

```bash
npm install
```

### Bước 4: Chạy ứng dụng

```bash
npm start
```

Sau đó mở trình duyệt:

```text
http://127.0.0.1:8088/index.html
```

## 5. Chức năng chính

- Đăng nhập bằng tài khoản demo.
- Chọn tài sản thông tin cần đánh giá.
- Chọn nhóm rủi ro trong thư viện rủi ro mẫu.
- Nhập mô tả rủi ro.
- Trả lời checklist khả năng xảy ra.
- Trả lời checklist mức độ ảnh hưởng.
- Tự động tính điểm rủi ro.
- Hiển thị mức rủi ro bằng màu sắc.
- Gợi ý biện pháp xử lý rủi ro.
- Lưu hồ sơ đánh giá vào MySQL.
- Xem lại hồ sơ rủi ro đã lưu.

## 6. Công thức tính điểm rủi ro

Ứng dụng sử dụng công thức:

```text
Điểm rủi ro = Khả năng xảy ra × Mức độ ảnh hưởng
```

Phân loại mức rủi ro:

- 1-4: Thấp.
- 5-9: Trung bình.
- 10-16: Cao.
- 17-25: Rất cao.

## 7. Cấu trúc database

Ứng dụng dùng 2 bảng chính:

### Bảng `users`

Dùng để lưu tài khoản demo đăng nhập hệ thống.

### Bảng `risk_records`

Dùng để lưu hồ sơ đánh giá rủi ro, gồm tài sản, nhóm rủi ro, mô tả, điểm khả năng, điểm ảnh hưởng, điểm rủi ro, mức rủi ro và biện pháp gợi ý.

Khi chạy server, nếu database hoặc bảng chưa tồn tại, ứng dụng sẽ tự tạo theo cấu trúc trong `schema.sql`.

## 8. Gợi ý deploy online

Với phiên bản dùng Node.js và MySQL, cách gọn nhất là deploy lên Railway vì có thể tạo web service và MySQL trong cùng một project.

Các bước tổng quát:

1. Đưa thư mục `SOURCE` lên một repository GitHub.
2. Trên Railway, tạo project mới và chọn deploy từ GitHub repository.
3. Thêm một MySQL service trong cùng project.
4. Deploy web service.
5. Tạo public domain cho web service.

Backend đã hỗ trợ cả biến môi trường kiểu local (`DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`) và biến môi trường MySQL do Railway cấp (`MYSQLHOST`, `MYSQLPORT`, `MYSQLUSER`, `MYSQLPASSWORD`, `MYSQLDATABASE`).

Không nên deploy trực tiếp lên GitHub Pages vì ứng dụng có backend Node.js và database MySQL.

## 9. Ghi chú

Ứng dụng chỉ phục vụ mục đích demo học thuật, không thay thế công cụ đánh giá rủi ro chuyên nghiệp.
