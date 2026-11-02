import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Loader2, ArrowRight, X, Sparkles, Star, Zap, Shield, Crown } from 'lucide-react';
import { openRazorpayCheckout } from '../utils/razorpay';

const ProgramFees = ({ programName, programCode, formData = { name: '', email: '', phone: '' } }) => {
    const navigate = useNavigate();
    const [loadingPayment, setLoadingPayment] = useState(null);
    const [partPayModal, setPartPayModal] = useState({ isOpen: false, plan: '' });
    const [customPartPayAmount, setCustomPartPayAmount] = useState('');

    // Admin Override State
    const [adminPaymentInputs, setAdminPaymentInputs] = useState({
        selfPaced: '',
        mentorLed: '',
        professional: ''
    });

    // Coupon State per Plan
    const [couponInputs, setCouponInputs] = useState({
        selfPaced: '',
        mentorLed: '',
        professional: ''
    });

    const [couponStates, setCouponStates] = useState({
        selfPaced: { applied: false, discount: 0, type: '', message: { type: '', text: '' } },
        mentorLed: { applied: false, discount: 0, type: '', message: { type: '', text: '' } },
        professional: { applied: false, discount: 0, type: '', message: { type: '', text: '' } }
    });

    const handleAdminOverridePayment = (planName, stage, customAmount) => {
        if (!customAmount || isNaN(customAmount) || parseInt(customAmount) < 0) {
            alert("Please enter a valid amount (0 or more).");
            return;
        }

        const finalAmount = parseInt(customAmount);
        const paymentId = `PAY_ADMIN_${Date.now()}_${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

        const queryParams = new URLSearchParams({
            program: programCode,
            plan: planName.toLowerCase().replace(' ', '_'),
            stage: stage,
            pid: paymentId,
            amt: finalAmount
        }).toString();

        navigate(`/enroll?${queryParams}`);
    };

    const handleApplyCoupon = (planKey) => {
        const defaultCoupons = [
            { code: 'INTERNZLEARN10', discount: 10 },
            { code: 'INTERNZLEARN20', discount: 20 },
            { code: 'INTERNZLEARN30', discount: 30 },
            { code: 'INTERNZLEARN48', discount: 47.06 },
            { code: 'INTERNZLEARN50', discount: 50 },
            { code: 'INTERNZLEARN60', discount: 60 },
            { code: 'INTERNZLEARN70', discount: 70 },
            { code: 'INTERNZLEARN80', discount: 80 },
            { code: 'INTERNZLEARN90', discount: 90 },
            { code: 'INTERNZLEARN100', discount: 100 },
            { code: 'INTERNZ_SPECIAL', type: 'SPECIAL_FIXED' },
            { code: 'FINANCE', type: 'SPECIAL_FIXED' },
            { code: 'INTERNZ', type: 'SPECIAL_FIXED' },
            { code: 'SPECIAL', type: 'SPECIAL_FIXED' },
            // Custom Fixed Price Coupons for Self Paced ONLY
            { code: 'INZ3K24', value: 3000, type: 'FIXED_PRICE', planRestriction: 'selfPaced' },
            { code: 'INTZ35PRO', value: 3500, type: 'FIXED_PRICE', planRestriction: 'selfPaced' },
            { code: 'LNZ400X', value: 4000, type: 'FIXED_PRICE', planRestriction: 'selfPaced' },
            { code: 'IZL45ADV', value: 4500, type: 'FIXED_PRICE', planRestriction: 'selfPaced' },
            { code: 'MASTER5KIZ', value: 5000, type: 'FIXED_PRICE', planRestriction: 'selfPaced' },
            // Custom Fixed Price Coupons for Mentor Led ONLY
            { code: 'INZ4000X', value: 4000, type: 'FIXED_PRICE', planRestriction: 'mentorLed' },
            { code: 'SKILL4500', value: 4500, type: 'FIXED_PRICE', planRestriction: 'mentorLed' },
            { code: 'PRO5000IN', value: 5000, type: 'FIXED_PRICE', planRestriction: 'mentorLed' },
            { code: 'GROW5500Z', value: 5500, type: 'FIXED_PRICE', planRestriction: 'mentorLed' },
            { code: 'LEARN6000', value: 6000, type: 'FIXED_PRICE', planRestriction: 'mentorLed' },
            { code: 'ELITE6500', value: 6500, type: 'FIXED_PRICE', planRestriction: 'mentorLed' },
            { code: 'ADV7000IN', value: 7000, type: 'FIXED_PRICE', planRestriction: 'mentorLed' },
            { code: 'MASTER7500', value: 7500, type: 'FIXED_PRICE', planRestriction: 'mentorLed' },
            { code: 'INZ8000PRO', value: 8000, type: 'FIXED_PRICE', planRestriction: 'mentorLed' },
            // Custom Fixed Price Coupons for Professional ONLY
            { code: 'ZEPHYR7', value: 7000, type: 'FIXED_PRICE', planRestriction: 'professional' },
            { code: 'AURIX75', value: 7500, type: 'FIXED_PRICE', planRestriction: 'professional' },
            { code: 'VOLT8X', value: 8000, type: 'FIXED_PRICE', planRestriction: 'professional' },
            { code: 'KRYPT85', value: 8500, type: 'FIXED_PRICE', planRestriction: 'professional' },
            { code: 'ZENITH9', value: 9000, type: 'FIXED_PRICE', planRestriction: 'professional' },
            { code: 'ORB95X', value: 9500, type: 'FIXED_PRICE', planRestriction: 'professional' },
            { code: 'TITAN10', value: 10000, type: 'FIXED_PRICE', planRestriction: 'professional' },
            { code: 'QUANT105', value: 10500, type: 'FIXED_PRICE', planRestriction: 'professional' },
            { code: 'NEXUS11', value: 11000, type: 'FIXED_PRICE', planRestriction: 'professional' },
            { code: 'ELEV115', value: 11500, type: 'FIXED_PRICE', planRestriction: 'professional' },
            { code: 'PRIME12', value: 12000, type: 'FIXED_PRICE', planRestriction: 'professional' },
            { code: 'AXIOM125', value: 12500, type: 'FIXED_PRICE', planRestriction: 'professional' },
            { code: 'VERTEX13', value: 13000, type: 'FIXED_PRICE', planRestriction: 'professional' },
            { code: 'SUMMIT135', value: 13500, type: 'FIXED_PRICE', planRestriction: 'professional' },
            { code: 'APEX14', value: 14000, type: 'FIXED_PRICE', planRestriction: 'professional' }
        ];

        const savedCoupons = localStorage.getItem('adminCoupons');
        const localCoupons = savedCoupons ? JSON.parse(savedCoupons) : [];
        const allCoupons = [...defaultCoupons, ...localCoupons];

        const codeToApply = couponInputs[planKey]?.trim().toUpperCase();
        const validCoupon = allCoupons.find(c => c.code === codeToApply);

        setCouponStates(prev => {
            const newState = { ...prev };
            if (validCoupon) {
                // Check if coupon has plan restriction
                if (validCoupon.planRestriction && validCoupon.planRestriction !== planKey) {
                    newState[planKey] = {
                        applied: false,
                        discount: 0,
                        type: '',
                        message: { type: 'error', text: 'Not valid for this plan' }
                    };
                } else if (validCoupon.code === 'INTERNZLEARN100') {
                    // Admin Override Mode
                    newState[planKey] = {
                        applied: true,
                        discount: 100,
                        type: 'ADMIN_OVERRIDE',
                        message: { type: 'success', text: 'Admin Mode Activated' }
                    };
                } else if (validCoupon.type === 'FIXED_PRICE') {
                    newState[planKey] = {
                        applied: true,
                        discount: validCoupon.value,
                        type: 'FIXED_PRICE',
                        message: { type: 'success', text: `Price: ₹${validCoupon.value}` }
                    };
                } else if (validCoupon.type === 'SPECIAL_FIXED') {
                    newState[planKey] = {
                        applied: true,
                        discount: 0,
                        type: 'SPECIAL_FIXED',
                        message: { type: 'success', text: 'Offer Applied!' }
                    };
                } else {
                    newState[planKey] = {
                        applied: true,
                        discount: parseInt(validCoupon.discount),
                        type: 'PERCENTAGE',
                        message: { type: 'success', text: `${validCoupon.discount}% OFF applied` }
                    };
                }
            } else {
                newState[planKey] = {
                    applied: false,
                    discount: 0,
                    type: '',
                    message: { type: 'error', text: 'Invalid code' }
                };
            }
            return newState;
        });
    };

    const getDiscountedPrice = (originalPrice, planKey) => {
        const state = couponStates[planKey];
        if (!state?.applied) return originalPrice;

        if (state.type === 'ADMIN_OVERRIDE') return 0; // Or whatever visual indicator you prefer
        if (state.type === 'FIXED_PRICE') return state.discount;
        if (state.type === 'SPECIAL_FIXED') {
            if (originalPrice === 5700) return 3000;
            if (originalPrice === 8500) return 5000;
            if (originalPrice === 14300) return 8999;
            return originalPrice;
        }
        return Math.round(originalPrice - (originalPrice * state.discount / 100));
    };

    const handlePayment = (originalAmount, planName, stage, buttonId, customAmount = null, planKey = null) => {
        let finalAmount;
        if (stage === 'registration') {
            finalAmount = customAmount ? parseInt(customAmount) : 1000;
        } else {
            finalAmount = planKey ? getDiscountedPrice(originalAmount, planKey) : originalAmount;
        }

        if (finalAmount <= 0) finalAmount = 1;

        setLoadingPayment(buttonId);

        openRazorpayCheckout({
            amountRupees: finalAmount,
            name: "InternzLearn",
            description: `${programName} - ${planName} (${stage === 'registration' ? `Registration: ₹${finalAmount}` : 'Full Payment'})`,
            prefill: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone
            },
            onSuccess: (response) => {
                setLoadingPayment(null);
                const queryParams = new URLSearchParams({
                    program: programCode,
                    plan: planName.toLowerCase().replace(' ', '_'),
                    stage: stage,
                    pid: response.razorpay_payment_id,
                    amt: finalAmount
                }).toString();
                navigate(`/enroll?${queryParams}`);
            },
            onError: () => {
                setLoadingPayment(null);
            }
        });
    };

    const openPartPayModal = (planName) => {
        setPartPayModal({ isOpen: true, plan: planName });
    };

    const handlePartPaySubmit = (e) => {
        e.preventDefault();
        if (!customPartPayAmount || isNaN(customPartPayAmount) || customPartPayAmount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }
        handlePayment(0, partPayModal.plan, 'registration', 'part-pay-custom', customPartPayAmount);
        setPartPayModal({ isOpen: false, plan: '' });
        setCustomPartPayAmount('');
    };

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden" id="fees">
            {/* Ambient Background Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-2 block">Choose Your Plan</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Pricing</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Select the perfect plan that suits your learning style and career goals.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Self Paced Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ y: -10 }}
                        className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30"></div>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-gray-800/50 rounded-xl text-gray-400">
                                <Zap size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Self Paced</h3>
                                <p className="text-xs text-gray-500">For independent learners</p>
                            </div>
                        </div>

                        <div className="my-6">
                            {couponStates.selfPaced.applied && (
                                <span className="text-sm text-gray-500 line-through block mb-1">₹5,700</span>
                            )}
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-white">
                                    {couponStates.selfPaced.type === 'ADMIN_OVERRIDE' ? 'Admin Mode' : `₹${getDiscountedPrice(5700, 'selfPaced').toLocaleString()}`}
                                </span>
                                <span className="text-gray-500 text-sm">/ one-time</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            {[
                                "Recorded Lectures",
                                "Assignments",
                                "Course Certificate",
                                "6 Months Access"
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                                    <CheckCircle size={16} className="text-gray-500 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="space-y-3 mt-auto">
                            {couponStates.selfPaced.type === 'ADMIN_OVERRIDE' ? (
                                <div className="space-y-2">
                                    <input
                                        type="number"
                                        placeholder="Enter Amount Paid by Student"
                                        className="w-full bg-black/40 border border-indigo-500/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                                        value={adminPaymentInputs.selfPaced}
                                        onChange={(e) => setAdminPaymentInputs({ ...adminPaymentInputs, selfPaced: e.target.value })}
                                    />
                                    <button
                                        onClick={() => handleAdminOverridePayment('Self Paced', 'full', adminPaymentInputs.selfPaced)}
                                        className="w-full py-3.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                                    >
                                        Generate Receipt
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <button
                                        onClick={() => handlePayment(5700, 'Self Paced', 'full', 'self-full', null, 'selfPaced')}
                                        disabled={loadingPayment}
                                        className="w-full py-3.5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 border border-white/5 transition-all flex items-center justify-center gap-2 group/btn"
                                    >
                                        {loadingPayment === 'self-full' ? <Loader2 className="animate-spin" size={20} /> : 'Enroll Now'}
                                        {!loadingPayment && <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />}
                                    </button>
                                    <button
                                        onClick={() => openPartPayModal('Self Paced')}
                                        disabled={loadingPayment}
                                        className="w-full py-3.5 text-gray-400 font-semibold text-sm hover:text-white transition-colors"
                                    >
                                        Book Your Slot
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/5">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="COUPON CODE"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gray-500 uppercase tracking-wide pr-20 placeholder:text-gray-600"
                                    value={couponInputs.selfPaced}
                                    onChange={(e) => setCouponInputs({ ...couponInputs, selfPaced: e.target.value })}
                                />
                                <button
                                    onClick={() => handleApplyCoupon('selfPaced')}
                                    className="absolute right-1 top-1 bottom-1 px-3 bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold rounded uppercase tracking-wider transition-colors"
                                >
                                    Apply
                                </button>
                            </div>
                            <AnimatePresence>
                                {couponStates.selfPaced.message.text && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className={`text-[10px] mt-2 font-medium flex items-center gap-1 ${couponStates.selfPaced.message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
                                    >
                                        {couponStates.selfPaced.message.type === 'success' ? <CheckCircle size={10} /> : <X size={10} />}
                                        {couponStates.selfPaced.message.text}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Mentor Led Plan (Most Popular) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0a] border border-indigo-500/30 p-8 rounded-3xl shadow-[0_0_50px_-10px_rgba(79,70,229,0.15)] relative z-20 md:-translate-y-6 flex flex-col h-full overflow-hidden"
                    >
                        {/* Popular Badge */}
                        <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl shadow-lg uppercase tracking-wider flex items-center gap-1">
                            <Star size={12} className="fill-white" /> Most Popular
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                                <Sparkles size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Mentor Led</h3>
                                <p className="text-xs text-indigo-300/70">Best value for money</p>
                            </div>
                        </div>

                        <div className="my-6">
                            {couponStates.mentorLed.applied && (
                                <span className="text-sm text-indigo-300/50 line-through block mb-1">₹8,500</span>
                            )}
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300">
                                    {couponStates.mentorLed.type === 'ADMIN_OVERRIDE' ? 'Admin Mode' : `₹${getDiscountedPrice(8500, 'mentorLed').toLocaleString()}`}
                                </span>
                                <span className="text-indigo-200/50 text-sm">/ one-time</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            {[
                                "Everything in Self Paced",
                                "Live Doubt Sessions",
                                "Internship Certificate",
                                "Project Review",
                                "1 Year Access",
                                "Career Support"
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-200 text-sm font-medium">
                                    <div className="bg-indigo-500/20 p-1 rounded-full text-indigo-400">
                                        <CheckCircle size={12} strokeWidth={3} />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="space-y-3 mt-auto">
                            {couponStates.mentorLed.type === 'ADMIN_OVERRIDE' ? (
                                <div className="space-y-2">
                                    <input
                                        type="number"
                                        placeholder="Enter Amount Paid by Student"
                                        className="w-full bg-black/40 border border-indigo-500/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                                        value={adminPaymentInputs.mentorLed}
                                        onChange={(e) => setAdminPaymentInputs({ ...adminPaymentInputs, mentorLed: e.target.value })}
                                    />
                                    <button
                                        onClick={() => handleAdminOverridePayment('Mentor Led', 'full', adminPaymentInputs.mentorLed)}
                                        className="w-full py-3.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                                    >
                                        Generate Receipt
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <button
                                        onClick={() => handlePayment(8500, 'Mentor Led', 'full', 'mentor-full', null, 'mentorLed')}
                                        disabled={loadingPayment}
                                        className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group/btn"
                                    >
                                        {loadingPayment === 'mentor-full' ? <Loader2 className="animate-spin" size={20} /> : 'Enroll Now'}
                                        {!loadingPayment && <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />}
                                    </button>
                                    <button
                                        onClick={() => openPartPayModal('Mentor Led')}
                                        disabled={loadingPayment}
                                        className="w-full py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-colors"
                                    >
                                        Book Your Slot
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="mt-6 pt-6 border-t border-indigo-500/20">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="COUPON CODE"
                                    className="w-full bg-black/30 border border-indigo-500/30 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 uppercase tracking-wide pr-20 placeholder:text-indigo-300/30"
                                    value={couponInputs.mentorLed}
                                    onChange={(e) => setCouponInputs({ ...couponInputs, mentorLed: e.target.value })}
                                />
                                <button
                                    onClick={() => handleApplyCoupon('mentorLed')}
                                    className="absolute right-1 top-1 bottom-1 px-3 bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold rounded uppercase tracking-wider transition-colors"
                                >
                                    Apply
                                </button>
                            </div>
                            <AnimatePresence>
                                {couponStates.mentorLed.message.text && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className={`text-[10px] mt-2 font-medium flex items-center gap-1 ${couponStates.mentorLed.message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
                                    >
                                        {couponStates.mentorLed.message.type === 'success' ? <CheckCircle size={10} /> : <X size={10} />}
                                        {couponStates.mentorLed.message.text}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Professional Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ y: -10 }}
                        className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                                <Crown size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Professional</h3>
                                <p className="text-xs text-gray-500">Ultimate career acceleration</p>
                            </div>
                        </div>

                        <div className="my-6">
                            {couponStates.professional.applied && (
                                <span className="text-sm text-gray-500 line-through block mb-1">₹14,300</span>
                            )}
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-white">
                                    {couponStates.professional.type === 'ADMIN_OVERRIDE' ? 'Admin Mode' : `₹${getDiscountedPrice(14300, 'professional').toLocaleString()}`}
                                </span>
                                <span className="text-gray-500 text-sm">/ one-time</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                            {[
                                "1-on-1 Mentorship",
                                "Job Assistance",
                                "Unlimited Mock Interviews",
                                "Lifetime Access",
                                "Premium Projects"
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                                    <div className="bg-purple-500/10 p-1 rounded-full text-purple-400">
                                        <Shield size={12} strokeWidth={3} />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="space-y-3 mt-auto">
                            {couponStates.professional.type === 'ADMIN_OVERRIDE' ? (
                                <div className="space-y-2">
                                    <input
                                        type="number"
                                        placeholder="Enter Amount Paid by Student"
                                        className="w-full bg-black/40 border border-indigo-500/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                                        value={adminPaymentInputs.professional}
                                        onChange={(e) => setAdminPaymentInputs({ ...adminPaymentInputs, professional: e.target.value })}
                                    />
                                    <button
                                        onClick={() => handleAdminOverridePayment('Professional', 'full', adminPaymentInputs.professional)}
                                        className="w-full py-3.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                                    >
                                        Generate Receipt
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <button
                                        onClick={() => handlePayment(14300, 'Professional', 'full', 'prof-full', null, 'professional')}
                                        disabled={loadingPayment}
                                        className="w-full py-3.5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 border border-white/5 transition-all flex items-center justify-center gap-2 group/btn"
                                    >
                                        {loadingPayment === 'prof-full' ? <Loader2 className="animate-spin" size={20} /> : 'Enroll Now'}
                                        {!loadingPayment && <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />}
                                    </button>
                                    <button
                                        onClick={() => openPartPayModal('Professional')}
                                        disabled={loadingPayment}
                                        className="w-full py-3.5 text-gray-400 font-semibold text-sm hover:text-white transition-colors"
                                    >
                                        Book Your Slot
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/5">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="COUPON CODE"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500 uppercase tracking-wide pr-20 placeholder:text-gray-600"
                                    value={couponInputs.professional}
                                    onChange={(e) => setCouponInputs({ ...couponInputs, professional: e.target.value })}
                                />
                                <button
                                    onClick={() => handleApplyCoupon('professional')}
                                    className="absolute right-1 top-1 bottom-1 px-3 bg-purple-600 hover:bg-purple-500 text-white text-[10px] font-bold rounded uppercase tracking-wider transition-colors"
                                >
                                    Apply
                                </button>
                            </div>
                            <AnimatePresence>
                                {couponStates.professional.message.text && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className={`text-[10px] mt-2 font-medium flex items-center gap-1 ${couponStates.professional.message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
                                    >
                                        {couponStates.professional.message.type === 'success' ? <CheckCircle size={10} /> : <X size={10} />}
                                        {couponStates.professional.message.text}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* Pay Remaining Link */}
                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm mb-3">Already registered?</p>
                    <button
                        onClick={() => navigate(`/pay-remaining?program=${programCode}`)}
                        className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold flex items-center justify-center gap-2 mx-auto hover:bg-indigo-500/10 py-2 px-6 rounded-full transition-all"
                    >
                        Pay Remaining Fee <ArrowRight size={14} />
                    </button>
                </div>
            </div>

            {/* Part Pay Custom Amount Modal */}
            <AnimatePresence>
                {partPayModal.isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#0F0F0F] border border-white/10 rounded-3xl p-8 w-full max-w-md shadow-2xl relative"
                        >
                            <button
                                onClick={() => setPartPayModal({ isOpen: false, plan: '' })}
                                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="mb-6">
                                <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400 mb-4">
                                    <Shield size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Secure Your Seat</h3>
                                <p className="text-gray-400 text-sm">
                                    Pay a small registration fee now to block your slot. You can pay the remaining amount later.
                                </p>
                            </div>

                            <form onSubmit={handlePartPaySubmit}>
                                <div className="mb-6">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Enter Amount (₹)</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">₹</span>
                                        <input
                                            type="number"
                                            min="1"
                                            value={customPartPayAmount}
                                            onChange={(e) => setCustomPartPayAmount(e.target.value)}
                                            placeholder="e.g. 1000"
                                            required
                                            className="w-full pl-8 pr-4 py-3 bg-black border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 text-white font-bold text-lg"
                                        />
                                    </div>
                                    <p className="text-[10px] text-gray-500 mt-2">Minimum recommended amount: ₹1,000</p>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 shadow-lg shadow-indigo-500/25 transition-all"
                                >
                                    Proceed to Pay
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProgramFees;
