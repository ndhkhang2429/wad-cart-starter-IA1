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
// Giỏ hàng trống
test("returns 0 when the cart is empty", () => {
  const items = [];
  const options = { vatRate: 0.1, freeShipFrom: 500000, shipFee: 30000 };
  assert.equal(cartTotal(items, options), 0);
});

// Ngưỡng miễn phí vận chuyển
test("applies free shipping when subtotal exactly equals freeShipFrom", () => {
  const items = [{ name: "Giày Thể Thao", price: 500000, qty: 1 }];
  const options = { vatRate: 0.1, freeShipFrom: 500000, shipFee: 30000 };
  // Subtotal = 500,000, VAT = 50,000, Shipping = 0 (vì subtotal >= 500,000)
  assert.equal(cartTotal(items, options), 550000);
});

// Trường hợp price không hợp lệ
test("throws RangeError if price is negative", () => {
  const items = [{ name: "Sản phẩm lỗi", price: -10000, qty: 1 }];
  const options = { vatRate: 0.1, freeShipFrom: 500000, shipFee: 30000 };
  assert.throws(() => {
    cartTotal(items, options);
  }, RangeError);
});

// Trường hợp qty không hợp lệ
test("throws RangeError if qty is not a positive integer", () => {
  const options = { vatRate: 0.1, freeShipFrom: 500000, shipFee: 30000 };

  // Qty bằng 0
  assert.throws(() => {
    cartTotal([{ name: "Sản phẩm A", price: 10000, qty: 0 }], options);
  }, RangeError);

  // Qty là số âm
  assert.throws(() => {
    cartTotal([{ name: "Sản phẩm B", price: 10000, qty: -5 }], options);
  }, RangeError);

  // Qty là số thập phân
  assert.throws(() => {
    cartTotal([{ name: "Sản phẩm C", price: 10000, qty: 1.5 }], options);
  }, RangeError);
});
