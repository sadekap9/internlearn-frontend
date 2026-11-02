import { useState, useCallback } from 'react';

/**
 * Shared coupon hook for all payment pages.
 * Supports the admin coupons from localStorage.
 *
 * Usage:
 *   const { couponCode, setCouponCode, discount, discountedPrice, couponMessage, applyCoupon, removeCoupon } = useCoupon(originalPrice);
 */
const PERCENT_COUPONS = {};

export function useCoupon(originalPrice = 0) {
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);              // percentage value
    const [isPercentCoupon, setIsPercentCoupon] = useState(false);
    const [couponMessage, setCouponMessage] = useState({ type: '', text: '' });

    const applyCoupon = useCallback(() => {
        const code = couponCode.trim().toUpperCase();

        if (PERCENT_COUPONS[code]) {
            setIsPercentCoupon(true);
            setDiscount(PERCENT_COUPONS[code]);
            setCouponMessage({ type: 'success', text: `${PERCENT_COUPONS[code]}% OFF applied.` });
            return;
        }

        // Check localStorage admin coupons
        let adminCoupons = [];
        try {
            const saved = localStorage.getItem('adminCoupons');
            if (saved) adminCoupons = JSON.parse(saved);
        } catch { }

        const adminMatch = adminCoupons.find(c => c.code?.toUpperCase() === code);

        if (adminMatch) {
            setIsPercentCoupon(false);
            setDiscount(Number(adminMatch.discount) || 0);
            setCouponMessage({ type: 'success', text: `Coupon applied! ₹${adminMatch.discount} OFF` });
        } else {
            setDiscount(0);
            setIsPercentCoupon(false);
            setCouponMessage({ type: 'error', text: 'Invalid coupon code' });
        }
    }, [couponCode]);

    const removeCoupon = useCallback(() => {
        setCouponCode('');
        setDiscount(0);
        setIsPercentCoupon(false);
        setCouponMessage({ type: '', text: '' });
    }, []);

    // Calculate discounted price
    const discountAmount = isPercentCoupon
        ? Math.round(originalPrice * (discount / 100))
        : discount;
    const discountedPrice = Math.max(0, originalPrice - discountAmount);

    return {
        couponCode,
        setCouponCode,
        discount,
        discountAmount,
        discountedPrice,
        isPercentCoupon,
        couponMessage,
        applyCoupon,
        removeCoupon,
    };
}
