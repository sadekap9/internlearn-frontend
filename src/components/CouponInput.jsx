import React from 'react';
import { CheckCircle2, X, Tag } from 'lucide-react';

/**
 * Compact coupon input component for career pack payment sidebars.
 * Works with the useCoupon hook.
 */
const CouponInput = ({
    couponCode,
    setCouponCode,
    discount,
    discountAmount,
    couponMessage,
    applyCoupon,
    removeCoupon,
}) => (
    <div className="mt-4 pt-4 border-t border-white/5">
        <div className="flex justify-between items-center mb-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Tag size={12} /> Coupon Code
            </h4>
            {discount > 0 && (
                <span className="text-xs text-green-400 font-bold">
                    -₹{discountAmount?.toLocaleString()}
                </span>
            )}
        </div>
        <div className="flex gap-2">
            <input
                type="text"
                placeholder="e.g. INTERNZLEARN10"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                disabled={discount > 0}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 disabled:opacity-50 uppercase tracking-wider"
            />
            <button
                onClick={discount > 0 ? removeCoupon : applyCoupon}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${discount > 0
                    ? 'bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20'
                    : 'bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20'
                    }`}
            >
                {discount > 0 ? '×' : 'Apply'}
            </button>
        </div>
        {couponMessage.text && (
            <div className={`text-[10px] mt-2 font-medium flex items-center gap-1 ${couponMessage.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {couponMessage.type === 'success' ? <CheckCircle2 size={10} /> : <X size={10} />}
                {couponMessage.text}
            </div>
        )}
    </div>
);

export default CouponInput;
