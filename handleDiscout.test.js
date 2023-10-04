const handleDiscount = require('./handleDiscount')

test('DIAMOND CUSTOMER', () => {
    expect(handleDiscount.getBill(1000, handleDiscount.CustomerType.DIAMOND, handleDiscount.Coupon.TYPE_1)).toBe(700)
    expect(handleDiscount.getBill(1000, handleDiscount.CustomerType.DIAMOND, handleDiscount.Coupon.TYPE_2)).toBe(750)
    expect(handleDiscount.getBill(1000, handleDiscount.CustomerType.DIAMOND, null)).toBe(800)
})

test('GOLD CUSTOMER', () => {
    expect(handleDiscount.getBill(1000, handleDiscount.CustomerType.GOLD, handleDiscount.Coupon.TYPE_1)).toBe(750)
    expect(handleDiscount.getBill(1000, handleDiscount.CustomerType.GOLD, handleDiscount.Coupon.TYPE_2)).toBe(800)
    expect(handleDiscount.getBill(1000, handleDiscount.CustomerType.GOLD, null)).toBe(850)
})

test('SILVER CUSTOMER', () => {
    expect(handleDiscount.getBill(1000, handleDiscount.CustomerType.SILVER, handleDiscount.Coupon.TYPE_1)).toBe(800)
    expect(handleDiscount.getBill(1000, handleDiscount.CustomerType.SILVER, handleDiscount.Coupon.TYPE_2)).toBe(850)
    expect(handleDiscount.getBill(1000, handleDiscount.CustomerType.SILVER, null)).toBe(900)
})

test('NORMAL CUSTOMER', () => {
    expect(handleDiscount.getBill(1000, null, handleDiscount.Coupon.TYPE_1)).toBe(900)
    expect(handleDiscount.getBill(1000, null, handleDiscount.Coupon.TYPE_2)).toBe(950)
    expect(handleDiscount.getBill(1000, null, null)).toBe(1000)
})