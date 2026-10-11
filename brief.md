Đóng vai trò là một chuyên gia JavaScript. Tôi cần bạn viết hàm cartTotal cho dự án của tôi.
Trước tiên, hãy tuân thủ nghiêm ngặt các luật của dự án sau đây:

# Project Rules cho AI Assistant

## 1. Stack (Công nghệ sử dụng)

- Plain JavaScript (Vanilla JS).
- Node.js built-in test runner (`node --test`).

## 2. Commands (Các lệnh cơ bản)

- Cài đặt dependency (nếu có công cụ dev): `npm install`
- Chạy test: `npm test`
- Chạy format code: `npm run format` (sẽ cấu hình sau)

## 3. NEVER (Những điều tuyệt đối KHÔNG ĐƯỢC LÀM)

- NEVER sử dụng bất kỳ thư viện (dependencies) nào của bên thứ 3 trong code logic (ví dụ: không dùng lodash, mathjs...). Phải giải quyết bài toán bằng JS thuần.
- NEVER thay đổi hoặc xóa bỏ các test case đã có sẵn trong file `test/cart.test.js`.
- NEVER để hàm `cartTotal` trả về kiểu chuỗi (`string`), kết quả cuối cùng bắt buộc phải được chuyển về kiểu số (`number`).

Tiếp theo là mô tả công việc (The brief):
