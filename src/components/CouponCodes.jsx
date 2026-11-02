import React, { useState } from 'react';
import { Copy, Check, Tag, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const CouponCodes = () => {
    const [copiedCode, setCopiedCode] = useState(null);

    const coupons = [
        { code: 'INZ3K24', price: 3000, savings: 2700, color: 'from-blue-500 to-cyan-500' },
        { code: 'INTZ35PRO', price: 3500, savings: 2200, color: 'from-purple-500 to-pink-500' },
        { code: 'LNZ400X', price: 4000, savings: 1700, color: 'from-green-500 to-emerald-500' },
        { code: 'IZL45ADV', price: 4500, savings: 1200, color: 'from-orange-500 to-red-500' },
        { code: 'MASTER5KIZ', price: 5000, savings: 700, color: 'from-indigo-500 to-purple-500' }
    ];

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    return (
        <div className="py-16 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full mb-4">
                        <Sparkles className="w-4 h-4 text-indigo-400" />
                        <span className="text-sm font-semibold text-indigo-300">Exclusive Offers</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Special Coupon Codes
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Get massive discounts on Self Paced plan. Choose the price that works best for you!
                    </p>
                </motion.div>

                {/* Coupon Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {coupons.map((coupon, index) => (
                        <motion.div
                            key={coupon.code}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="relative group"
                        >
                            {/* Card */}
                            <div className="bg-gradient-to-br from-[#0F0F0F] to-[#1a1a1a] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl">

                                {/* Gradient Accent */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${coupon.color} rounded-t-2xl`}></div>

                                {/* Icon */}
                                <div className="flex justify-center mb-4">
                                    <div className={`p-3 bg-gradient-to-br ${coupon.color} rounded-xl`}>
                                        <Tag className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="text-center mb-4">
                                    <div className="text-3xl font-black text-white mb-1">
                                        ₹{coupon.price.toLocaleString()}
                                    </div>
                                    <div className="text-xs text-green-400 font-semibold">
                                        Save ₹{coupon.savings.toLocaleString()}
                                    </div>
                                </div>

                                {/* Coupon Code */}
                                <div className="mb-4">
                                    <div className="bg-black/50 border border-white/10 rounded-lg p-3 text-center">
                                        <div className="text-xs text-gray-500 mb-1">CODE</div>
                                        <div className="text-sm font-mono font-bold text-white tracking-wider">
                                            {coupon.code}
                                        </div>
                                    </div>
                                </div>

                                {/* Copy Button */}
                                <button
                                    onClick={() => handleCopy(coupon.code)}
                                    className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${copiedCode === coupon.code
                                            ? 'bg-green-500 text-white'
                                            : `bg-gradient-to-r ${coupon.color} text-white hover:opacity-90`
                                        }`}
                                >
                                    {copiedCode === coupon.code ? (
                                        <>
                                            <Check className="w-4 h-4" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4" />
                                            Copy Code
                                        </>
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Info Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                        <p className="text-sm text-indigo-300">
                            Valid only on <span className="font-bold">Self Paced</span> plan • Original Price: ₹5,700
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default CouponCodes;
