Đóng vai trò là một chuyên gia JavaScript. Tôi cần bạn hoàn thiện bài tập tính toán tổng tiền giỏ hàng (cartTotal) cho đồ án của tôi. 

Trước tiên, hãy tuân thủ nghiêm ngặt các luật của dự án (rules) sau đây:
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

1. MỤC TIÊU VÀ PHẠM VI (SCOPE):
- Cần triển khai hàm `cartTotal(items, options)` trong file `src/cart.js`.
- Bổ sung thêm các test case vào file `test/cart.test.js`.
- Tuyệt đối chỉ sử dụng Plain JavaScript, KHÔNG dependencies.

2. HỢP ĐỒNG (CONTRACT) & CÔNG THỨC:
- `items`: Mảng chứa các object sản phẩm `{ name, price, qty }`.
- `options`: Object chứa các thông số `{ vatRate, freeShipFrom, shipFee }`.
- `subtotal` (tạm tính) = Tổng của tất cả (`price` * `qty`).
- `VAT` = `vatRate` * `subtotal`.
- `shipping` (phí vận chuyển) = `0` nếu `subtotal` >= `freeShipFrom`, ngược lại thì bằng `shipFee`.
- Kết quả trả về: là tổng của `subtotal + VAT + shipping`. Yêu cầu BẮT BUỘC trả về kiểu SỐ (number), được làm tròn đến phần nguyên (whole đồng).

3. XỬ LÝ LỖI VÀ TRƯỜNG HỢP NGOẠI LỆ (EDGE CASES):
- Nếu giỏ hàng trống (mảng items rỗng): Trả về `0` (không tính VAT, không tính phí ship).
- Quăng lỗi `RangeError` trong hai trường hợp:
  + `price` (giá sản phẩm) là số âm (< 0).
  + `qty` (số lượng) không phải là số nguyên dương (not a positive integer).

4. YÊU CẦU KIỂM THỬ (TESTING):
- Viết thêm test case vào `test/cart.test.js` sử dụng Node.js built-in test runner (`node --test`, sử dụng thư viện `assert`).
- Phải cover đủ các trường hợp: 
  + Happy path (Worked example đã có sẵn, hãy đảm bảo nó pass).
  + Giỏ hàng trống (Empty cart).
  + Ngưỡng miễn phí vận chuyển (Free-shipping threshold - test trường hợp subtotal vừa đúng bằng freeShipFrom).
  + Cả hai trường hợp quăng `RangeError` (price âm và qty không hợp lệ).
- Không được xóa test case đã có sẵn.

---
Dưới đây là cấu trúc code hiện tại của dự án. Xin hãy đọc, giữ nguyên các phần đã có và chỉ trả về cho tôi nội dung hoàn chỉnh của 2 file này sau khi bạn đã code xong:

// FILE: src/cart.js
// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options) {
  throw new Error("not implemented");
}

// FILE: test/cart.test.js
import { test } from "node:test";
import assert from "node:assert/strict";
import { cartTotal } from "../src/cart.js";

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test("the example from the slides", () => {
  const items = [
    { name: "Áo thun", price: 180000, qty: 2 },
    { name: "Sổ tay", price: 45000, qty: 1 },
  ];
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 };
  assert.equal(cartTotal(items, options), 467400);
});