
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader2, CreditCard, Lock } from 'lucide-react';
import { openRazorpayCheckout } from '../utils/razorpay';
import { programDetails } from '../data/programDetails';

const PayRemaining = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    // Auto-fill from query if available
    // Auto-fill from query if available
    const [email, setEmail] = useState(searchParams.get('email') || '');
    const [phone, setPhone] = useState(searchParams.get('phone') || '');
    const [amount, setAmount] = useState('');
    const [selectedProgram, setSelectedProgram] = useState(searchParams.get('program') || 'data-science');
    const [selectedPlan, setSelectedPlan] = useState('self_paced');

    const [loading, setLoading] = useState(false);

    const handlePayRemaining = (e) => {
        e.preventDefault();
        if (!email || !phone) {
            alert("Please enter email and phone.");
            return;
        }

        setLoading(true);

        const currentAmount = parseInt(amount);

        if (!currentAmount || currentAmount <= 0) {
            alert("Please enter a valid amount.");
            setLoading(false);
            return;
        }

        openRazorpayCheckout({
            amountRupees: currentAmount,
            name: "InternzLearn",
            description: `Balance Payment - ${selectedProgram}`,
            prefill: {
                email: email,
                phone: phone
            },
            onSuccess: (response) => {
                setLoading(false);
                // Redirect to Enroll page with stage='balance'
                const queryParams = new URLSearchParams({
                    program: selectedProgram,
                    plan: selectedPlan,
                    stage: 'balance',
                    pid: response.razorpay_payment_id,
                    amt: currentAmount,
                }).toString();

                navigate(`/enroll?${queryParams}`);
            },
            onError: () => {
                setLoading(false);
            }
        });
    };

    return (
        <div className="min-h-screen bg-darkMainBg text-white pt-24 pb-12 px-4 flex items-center justify-center">
            <div className="max-w-md w-full bg-darkCardBg border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primaryBlue/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="text-center mb-8 relative z-10">
                    <h1 className="text-3xl font-bold mb-2">Pay Remaining Fee</h1>
                    <p className="text-gray-400">Complete your payment for your enrolled program.</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8 text-center">
                    <p className="text-sm text-gray-400 mb-1 uppercase tracking-wider">Remaining Amount</p>
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-2xl font-bold text-gray-400">₹</span>
                        <input
                            type="number"
                            min="1"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder=""
                            className="w-40 bg-transparent text-4xl font-bold text-white text-center focus:outline-none border-b border-white/20 focus:border-primaryBlue transition-colors"
                        />
                    </div>
                </div>

                <form onSubmit={handlePayRemaining} className="space-y-4 relative z-10">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Email Used for Registration</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue text-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Select Program</label>
                        <select
                            value={selectedProgram}
                            onChange={(e) => setSelectedProgram(e.target.value)}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue text-white [&>option]:bg-darkCardBg"
                        >
                            {/* Map programs from data */
                                Object.entries(programDetails).map(([key, program]) => (
                                    <option key={key} value={key}>
                                        {program.title}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Select Your Plan</label>
                        <select
                            value={selectedPlan}
                            onChange={(e) => setSelectedPlan(e.target.value)}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue text-white [&>option]:bg-darkCardBg"
                        >
                            <option value="self_paced">Self Paced</option>
                            <option value="mentor_led">Mentor Led</option>
                            <option value="professional">Professional</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Phone Number</label>
                        <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue text-white"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-primaryBlue text-white font-bold rounded-xl shadow-[0_0_20px_rgba(0,174,239,0.3)] hover:bg-blue-600 transition-all flex items-center justify-center gap-2 mt-4"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <CreditCard size={20} />}
                        {loading ? 'Processing...' : `Pay ₹${amount || 0} Now`}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
                        <Lock size={12} />
                        Secure Payment via Razorpay
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PayRemaining;
