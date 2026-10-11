// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options) {
  // 1. Nếu giỏ hàng trống, trả về 0 ngay lập tức (không tính VAT, không tính ship)
  if (!items || items.length === 0) {
    return 0;
  }

  let subtotal = 0;

  // 2. Tính subtotal và xử lý ngoại lệ
  for (const item of items) {
    if (item.price < 0) {
      throw new RangeError("Price cannot be negative");
    }

    // Kiểm tra số lượng phải là số nguyên dương
    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError("Quantity must be a positive integer");
    }

    subtotal += item.price * item.qty;
  }

  // 3. Tính toán VAT và Phí vận chuyển
  const vat = options.vatRate * subtotal;
  const shipping = subtotal >= options.freeShipFrom ? 0 : options.shipFee;

  // 4. Tính tổng và làm tròn về phần nguyên (trả về kiểu Number)
  const total = subtotal + vat + shipping;
  return Math.round(total);
}
