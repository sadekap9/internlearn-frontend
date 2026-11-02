import React, { useState } from 'react';
import { Copy, Check, Tag, Sparkles, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const ProfessionalCoupons = () => {
    const [copiedCode, setCopiedCode] = useState(null);

    const coupons = [
        { code: 'ZEPHYR7', price: 7000, savings: 7300, color: 'from-blue-600 to-cyan-500' },
        { code: 'AURIX75', price: 7500, savings: 6800, color: 'from-purple-600 to-pink-500' },
        { code: 'VOLT8X', price: 8000, savings: 6300, color: 'from-green-600 to-emerald-500' },
        { code: 'KRYPT85', price: 8500, savings: 5800, color: 'from-orange-600 to-amber-500' },
        { code: 'ZENITH9', price: 9000, savings: 5300, color: 'from-red-600 to-rose-500' },
        { code: 'ORB95X', price: 9500, savings: 4800, color: 'from-indigo-600 to-purple-500' },
        { code: 'TITAN10', price: 10000, savings: 4300, color: 'from-teal-600 to-cyan-500' },
        { code: 'QUANT105', price: 10500, savings: 3800, color: 'from-violet-600 to-fuchsia-500' },
        { code: 'NEXUS11', price: 11000, savings: 3300, color: 'from-pink-600 to-rose-500' },
        { code: 'ELEV115', price: 11500, savings: 2800, color: 'from-sky-600 to-blue-500' },
        { code: 'PRIME12', price: 12000, savings: 2300, color: 'from-amber-600 to-yellow-500' },
        { code: 'AXIOM125', price: 12500, savings: 1800, color: 'from-lime-600 to-green-500' },
        { code: 'VERTEX13', price: 13000, savings: 1300, color: 'from-emerald-600 to-teal-500' },
        { code: 'SUMMIT135', price: 13500, savings: 800, color: 'from-cyan-600 to-sky-500' },
        { code: 'APEX14', price: 14000, savings: 300, color: 'from-fuchsia-600 to-purple-500' }
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-full mb-4">
                        <Crown className="w-4 h-4 text-amber-400" />
                        <span className="text-sm font-semibold text-amber-300">Elite Offers</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Professional Plan Coupon Codes
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Premium discounts for Professional plan. Get 1-on-1 mentorship and job assistance at unbeatable prices!
                    </p>
                </motion.div>

                {/* Coupon Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    {coupons.map((coupon, index) => (
                        <motion.div
                            key={coupon.code}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -8, scale: 1.03 }}
                            className="relative group"
                        >
                            {/* Card */}
                            <div className="bg-gradient-to-br from-[#0F0F0F] to-[#1a1a1a] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl h-full">

                                {/* Gradient Accent */}
                                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${coupon.color} rounded-t-2xl`}></div>

                                {/* Icon */}
                                <div className="flex justify-center mb-3">
                                    <div className={`p-2.5 bg-gradient-to-br ${coupon.color} rounded-xl shadow-lg`}>
                                        <Tag className="w-5 h-5 text-white" />
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="text-center mb-3">
                                    <div className="text-3xl font-black text-white mb-1">
                                        ₹{coupon.price.toLocaleString()}
                                    </div>
                                    <div className="text-xs text-green-400 font-semibold">
                                        Save ₹{coupon.savings.toLocaleString()}
                                    </div>
                                </div>

                                {/* Coupon Code */}
                                <div className="mb-3">
                                    <div className="bg-black/50 border border-white/10 rounded-lg p-2.5 text-center">
                                        <div className="text-[10px] text-gray-500 mb-1">CODE</div>
                                        <div className="text-sm font-mono font-bold text-white tracking-wider">
                                            {coupon.code}
                                        </div>
                                    </div>
                                </div>

                                {/* Copy Button */}
                                <button
                                    onClick={() => handleCopy(coupon.code)}
                                    className={`w-full py-2.5 rounded-lg font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 ${copiedCode === coupon.code
                                            ? 'bg-green-500 text-white'
                                            : `bg-gradient-to-r ${coupon.color} text-white hover:opacity-90 shadow-md hover:shadow-lg`
                                        }`}
                                >
                                    {copiedCode === coupon.code ? (
                                        <>
                                            <Check className="w-3.5 h-3.5" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-3.5 h-3.5" />
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
                    transition={{ delay: 0.7 }}
                    className="mt-10 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/10 border border-amber-500/20 rounded-full">
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                        <p className="text-sm text-amber-300">
                            Valid only on <span className="font-bold">Professional</span> plan • Original Price: ₹14,300
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default ProfessionalCoupons;
