import React, { useState } from 'react';
import { Copy, Check, Tag, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const MentorLedCoupons = () => {
    const [copiedCode, setCopiedCode] = useState(null);

    const coupons = [
        { code: 'INZ4000X', price: 4000, savings: 4500, color: 'from-blue-500 to-cyan-500' },
        { code: 'SKILL4500', price: 4500, savings: 4000, color: 'from-purple-500 to-pink-500' },
        { code: 'PRO5000IN', price: 5000, savings: 3500, color: 'from-green-500 to-emerald-500' },
        { code: 'GROW5500Z', price: 5500, savings: 3000, color: 'from-orange-500 to-amber-500' },
        { code: 'LEARN6000', price: 6000, savings: 2500, color: 'from-red-500 to-rose-500' },
        { code: 'ELITE6500', price: 6500, savings: 2000, color: 'from-indigo-500 to-purple-500' },
        { code: 'ADV7000IN', price: 7000, savings: 1500, color: 'from-teal-500 to-cyan-500' },
        { code: 'MASTER7500', price: 7500, savings: 1000, color: 'from-violet-500 to-fuchsia-500' },
        { code: 'INZ8000PRO', price: 8000, savings: 500, color: 'from-pink-500 to-rose-500' }
    ];

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    return (
        <div className="py-16 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
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
                        <span className="text-sm font-semibold text-indigo-300">Premium Offers</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Mentor Led Coupon Codes
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Exclusive discounts for Mentor Led plan. Get expert guidance at the best price!
                    </p>
                </motion.div>

                {/* Coupon Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coupons.map((coupon, index) => (
                        <motion.div
                            key={coupon.code}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="relative group"
                        >
                            {/* Card */}
                            <div className="bg-gradient-to-br from-[#0F0F0F] to-[#1a1a1a] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl h-full">

                                {/* Gradient Accent */}
                                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${coupon.color} rounded-t-2xl`}></div>

                                {/* Icon */}
                                <div className="flex justify-center mb-4">
                                    <div className={`p-3 bg-gradient-to-br ${coupon.color} rounded-xl shadow-lg`}>
                                        <Tag className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="text-center mb-4">
                                    <div className="text-4xl font-black text-white mb-1">
                                        ₹{coupon.price.toLocaleString()}
                                    </div>
                                    <div className="text-sm text-green-400 font-semibold">
                                        Save ₹{coupon.savings.toLocaleString()}
                                    </div>
                                </div>

                                {/* Coupon Code */}
                                <div className="mb-4">
                                    <div className="bg-black/50 border border-white/10 rounded-lg p-3 text-center">
                                        <div className="text-xs text-gray-500 mb-1">COUPON CODE</div>
                                        <div className="text-base font-mono font-bold text-white tracking-wider">
                                            {coupon.code}
                                        </div>
                                    </div>
                                </div>

                                {/* Copy Button */}
                                <button
                                    onClick={() => handleCopy(coupon.code)}
                                    className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${copiedCode === coupon.code
                                            ? 'bg-green-500 text-white'
                                            : `bg-gradient-to-r ${coupon.color} text-white hover:opacity-90 shadow-md hover:shadow-lg`
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
                    transition={{ delay: 0.6 }}
                    className="mt-10 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                        <p className="text-sm text-indigo-300">
                            Valid only on <span className="font-bold">Mentor Led</span> plan • Original Price: ₹8,500
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default MentorLedCoupons;
