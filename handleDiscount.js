const CustomerType = {
    DIAMOND: 'DIAMOND',
    GOLD: 'GOLD',
    SILVER: 'SILVER',
}

const Coupon = {
    TYPE_1: 'TYPE_1',
    TYPE_2: 'TYPE_2',
}

const handleDiscount = {
    CustomerType: {
        DIAMOND: 'DIAMOND',
        GOLD: 'GOLD',
        SILVER: 'SILVER',
    },
    Coupon: {
        TYPE_1: 'TYPE_1',
        TYPE_2: 'TYPE_2',
    },
    getBill: (
        total, typeOfCustomer = null, typeOfCoupon = null
    ) => {
        let discount = 0;

        if (typeOfCustomer === CustomerType.DIAMOND) {
            discount += 0.2
        } else if (typeOfCustomer === CustomerType.GOLD) {
            discount += 0.15
        } else if (typeOfCustomer === CustomerType.SILVER) {
            discount += 0.1
        } else {
            discount += 0
        }

        if (typeOfCoupon === Coupon.TYPE_1) {
            discount += 0.1
        } else if (typeOfCoupon === Coupon.TYPE_2) {
            discount += 0.05
        } else {
            discount += 0
        }

        const discountPrice = total * discount
        
        return total - discountPrice
    }
}

module.exports = handleDiscount