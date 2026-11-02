import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, Check, Star, Shield, Zap, Lock, CreditCard } from 'lucide-react';
import { openRazorpayCheckout } from '../utils/razorpay';
import { motion } from 'framer-motion';

const PackEnrollmentSection = ({
    title = "Tech Career Pack",
    originalPrice = "50,000",
    currentPrice = "24,999",
    discountPercentage = "50%",
    packId = "tech-career-pack",
    features = [
        "Lifetime Access to Course Content",
        "30+ Industry Recognized Certificates",
        "Letter of Recommendation (LOR)",
        "Internship Assistance & Job Portal Access",
        "Live Doubt Clearing Sessions",
        "Practical Capstone Projects"
    ]
}) => {
    const navigate = useNavigate();
    const [loadingPayment, setLoadingPayment] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePayment = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone) {
            alert("Please fill in all details");
            return;
        }

        setLoadingPayment(true);

        // Remove commas if present and parse
        const finalAmount = parseInt(String(currentPrice).replace(/,/g, ''), 10);

        openRazorpayCheckout({
            amountRupees: finalAmount,
            name: "InternzLearn",
            description: `${title} - Enrollment`,
            prefill: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone
            },
            onSuccess: (response) => {
                setLoadingPayment(false);
                const queryParams = new URLSearchParams({
                    program: packId,
                    plan: 'career_pack',
                    stage: 'full',
                    pid: response.razorpay_payment_id,
                    amt: finalAmount
                }).toString();
                navigate(`/enroll?${queryParams}`);
            },
            onError: (error) => {
                console.error("Payment Error:", error);
                setLoadingPayment(false);
                alert("Payment initiation failed. Please try again.");
            }
        });
    };

    return (
        <section id="pricing" className="py-20 bg-[#0B0F14] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primaryBlue/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-accentGreen/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

                    {/* Left Column: Value Proposition & Pricing */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-1/2 space-y-8"
                    >
                        <div>
                            <span className="inline-block px-4 py-1 rounded-full bg-accentGreen/10 text-accentGreen text-sm font-bold border border-accentGreen/20 mb-4">
                                Limited Time Offer
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                                Invest in your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue to-accentGreen">Future Today</span>
                            </h2>
                            <p className="text-gray-400 text-lg mt-4 max-w-xl">
                                Join thousands of students who have transformed their careers with our industry-leading curriculum and mentorship.
                            </p>
                        </div>

                        {/* Pricing Card */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 relative group hover:border-primaryBlue/30 transition-all duration-300">
                            <div className="absolute top-0 right-0 p-4">
                                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow-lg animate-pulse">
                                    {discountPercentage} OFF
                                </span>
                            </div>

                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-gray-500 text-xl line-through decoration-red-500/50">₹{originalPrice}</span>
                            </div>
                            <div className="flex items-end gap-2 mb-6">
                                <span className="text-5xl md:text-6xl font-bold text-white">₹{currentPrice}</span>
                                <span className="text-gray-400 font-medium mb-2">/ lifetime access</span>
                            </div>

                            <div className="space-y-4 mb-8">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 p-1 bg-green-500/10 rounded-full">
                                            <Check size={14} className="text-green-500" />
                                        </div>
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 py-4 border-t border-white/10">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <img key={i} src={`https://randomuser.me/api/portraits/thumb/men/${i + 20}.jpg`} alt="" className="w-8 h-8 rounded-full border-2 border-[#0B0F14]" />
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <p className="text-white font-bold">4.8/5 Rating</p>
                                    <p className="text-gray-500 text-xs">from 2000+ students</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Enrollment Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <div className="bg-[#1A1F26] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl h-full flex flex-col justify-center relative overflow-hidden">
                            {/* Decorative glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primaryBlue/10 blur-[80px] rounded-full pointer-events-none"></div>

                            <div className="mb-8 relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-2">Secure your Spot</h3>
                                <p className="text-gray-400 text-sm">Fill in your details to get started immediately.</p>
                            </div>

                            <form onSubmit={handlePayment} className="space-y-6 relative z-10">
                                <div className="space-y-4">
                                    <div className="group">
                                        <label className="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-2 group-focus-within:text-primaryBlue transition-colors">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full bg-[#0B0F14] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primaryBlue focus:ring-1 focus:ring-primaryBlue transition-all placeholder-gray-600"
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-2 group-focus-within:text-primaryBlue transition-colors">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full bg-[#0B0F14] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primaryBlue focus:ring-1 focus:ring-primaryBlue transition-all placeholder-gray-600"
                                            placeholder="Enter your email address"
                                            required
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-2 group-focus-within:text-primaryBlue transition-colors">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full bg-[#0B0F14] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primaryBlue focus:ring-1 focus:ring-primaryBlue transition-all placeholder-gray-600"
                                            placeholder="+91  Wait for OTP..."
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex gap-3 items-start">
                                    <Shield size={18} className="text-primaryBlue flex-shrink-0 mt-0.5" />
                                    <p className="text-xs text-blue-200/80 leading-relaxed">
                                        Your payment is secured with 256-bit SSL encryption. We do not store your card details.
                                    </p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loadingPayment}
                                    className="w-full bg-gradient-to-r from-primaryBlue to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-[0_4px_20px_rgba(0,174,239,0.3)] hover:shadow-[0_6px_25px_rgba(0,174,239,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 relative overflow-hidden group"
                                >
                                    {loadingPayment ? (
                                        <Loader2 className="animate-spin" size={20} />
                                    ) : (
                                        <>
                                            <span>Proceed to Pay ₹{currentPrice}</span>
                                            <CreditCard size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-xs text-gray-500">
                                    By enrolling, you agree to our Terms & Conditions
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PackEnrollmentSection;
