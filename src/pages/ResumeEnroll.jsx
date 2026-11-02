import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CheckCircle, Loader2, AlertCircle, Briefcase } from 'lucide-react';

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx9YStCSXPnmckNzkY_dGXSM3i4eOInyPYYlq8_HVNFz4mXO2oz-EKQTzLRUPKsT2IBzA/exec";

const ResumeEnroll = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const plan = searchParams.get('plan') || 'Placement Mastery Pack';
    const paymentId = searchParams.get('pid') || '';
    const amountPaid = searchParams.get('amt') || '999';

    const [status, setStatus] = useState('filling'); // 'filling' | 'submitting' | 'success' | 'error'
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', college: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        if (formData.name.length < 2) return false;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return false;
        if (!/^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/.test(formData.phone) || formData.phone.length < 10) return false;
        if (formData.college.length < 2) return false;
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) { alert('Please fill all fields correctly.'); return; }
        setStatus('submitting');

        const payload = {
            ...formData,
            formType: 'PLACEMENT_MASTERY',
            plan,
            payment_id: paymentId,
            payment_amount: amountPaid,
            payment_status: 'Success',
            timestamp: new Date().toISOString(),
        };

        try {
            await fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            // Unlock placement in localStorage so builder recognises it
            localStorage.setItem('internz_resume_placement', 'true');
            localStorage.setItem('internz_resume_premium', 'true');
            localStorage.setItem('internz_resume_paid', 'true');

            setStatus('success');
        } catch (error) {
            console.error('Submission error', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="min-h-screen bg-[#06080F] text-white pt-24 px-4 flex items-center justify-center">
                <div className="max-w-md w-full bg-white/5 border border-white/10 p-8 rounded-2xl text-center shadow-2xl">
                    <div className="w-20 h-20 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Briefcase size={40} />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">🎉 You're In!</h2>
                    <p className="text-gray-400 mb-2">
                        Your <span className="text-amber-400 font-semibold">Placement Mastery Pack</span> is now active.
                    </p>
                    <p className="text-gray-500 text-sm mb-8">
                        Payment receipt has been sent to <strong className="text-white">{formData.email}</strong>. You can now start building your ATS Resume with full AI access.
                    </p>
                    <button
                        onClick={() => navigate('/resume-builder')}
                        className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-1"
                    >
                        Start Building My Resume →
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#06080F] text-white pt-24 pb-12 px-4 selection:bg-amber-500 selection:text-white">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm font-bold mb-4 border border-amber-500/20">
                        <CheckCircle size={16} /> Payment Captured — ₹{amountPaid}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Complete Your Enrollment</h1>
                    <p className="text-gray-400">Please provide your details. A payment receipt will be sent to your email.</p>
                </div>

                {/* Form Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
                    {/* Summary */}
                    <div className="bg-amber-500/5 rounded-xl p-4 mb-8 border border-amber-500/10 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Plan</p>
                            <p className="font-bold text-amber-400 text-lg">{plan}</p>
                        </div>
                        <div className="bg-green-500/10 px-4 py-2 rounded-lg border border-green-500/20">
                            <p className="text-xs text-green-300 uppercase tracking-wider mb-1">Amount Paid</p>
                            <p className="font-bold text-green-400">₹{amountPaid}</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Full Name</label>
                                <input
                                    type="text" name="name" value={formData.name} onChange={handleChange}
                                    placeholder="John Doe" required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500/50 text-white placeholder:text-gray-600 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Email Address</label>
                                <input
                                    type="email" name="email" value={formData.email} onChange={handleChange}
                                    placeholder="john@example.com" required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500/50 text-white placeholder:text-gray-600 transition-all"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Phone Number</label>
                                <input
                                    type="tel" name="phone" value={formData.phone} onChange={handleChange}
                                    placeholder="+91 98765 43210" required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500/50 text-white placeholder:text-gray-600 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">College / University</label>
                                <input
                                    type="text" name="college" value={formData.college} onChange={handleChange}
                                    placeholder="Your College Name" required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500/50 text-white placeholder:text-gray-600 transition-all"
                                />
                            </div>
                        </div>

                        {/* Notice */}
                        <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl flex gap-3 text-blue-200 text-sm">
                            <AlertCircle size={20} className="shrink-0 mt-0.5" />
                            <p>Payment receipt will be sent to your email. Access to the Placement Mastery course and AI Resume Builder will be unlocked immediately.</p>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {status === 'submitting' ? (
                                <><Loader2 className="animate-spin" /> Processing...</>
                            ) : 'Complete Enrollment & Unlock Access'}
                        </button>
                    </form>

                    {status === 'error' && (
                        <p className="text-red-400 text-center mt-4">Something went wrong. Please check your internet and try again.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResumeEnroll;
