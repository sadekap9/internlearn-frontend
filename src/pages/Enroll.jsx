
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const Enroll = () => {
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState('filling'); // 'filling', 'submitting', 'success', 'error'

    // Query Params
    // Query Params
    const rawProgram = searchParams.get('program') || 'Artificial Intelligence';

    const formatProgramName = (slug) => {
        if (!slug) return 'Artificial Intelligence';
        const s = slug.toLowerCase();
        if (s === 'ai') return 'Artificial Intelligence';
        if (s === 'vlsi') return 'VLSI Design';
        if (s === 'autocad') return 'AutoCAD';
        return slug.split(/[-_]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const program = formatProgramName(rawProgram);
    const plan = searchParams.get('plan') || '';
    const stage = searchParams.get('stage') || ''; // 'registration', 'full', 'balance'
    const paymentId = searchParams.get('pid') || '';
    const amountPaid = searchParams.get('amt') || '';

    // Form Data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        startDate: ''
    });

    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        if (formData.startDate) {
            const start = new Date(formData.startDate);
            let durationMonths = 2; // Default for Self Paced and Mentor Led

            if (plan.toLowerCase().includes('professional')) {
                durationMonths = 3;
            }

            const end = new Date(start);
            end.setMonth(start.getMonth() + durationMonths);

            // Format to YYYY-MM-DD for display or submission
            setEndDate(end.toISOString().split('T')[0]);
        } else {
            setEndDate('');
        }
    }, [formData.startDate, plan]);

    // App Script URLs - User to replace these
    // App Script URLs - User to replace these
    // App Script URLs - User to replace these
    // App Script URLs - User to replace these
    // App Script URLs - User to replace these
    const APPS_SCRIPT_REGISTRATION_URL = "https://script.google.com/macros/s/AKfycbx9YStCSXPnmckNzkY_dGXSM3i4eOInyPYYlq8_HVNFz4mXO2oz-EKQTzLRUPKsT2IBzA/exec";
    const APPS_SCRIPT_FULLPAID_URL = "https://script.google.com/macros/s/AKfycbx9YStCSXPnmckNzkY_dGXSM3i4eOInyPYYlq8_HVNFz4mXO2oz-EKQTzLRUPKsT2IBzA/exec";

    useEffect(() => {
        // Scroll to top
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        if (formData.name.length < 2) return false;
        // Simple email regex
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return false;
        // Allow +91 and 10 digit phones
        if (!/^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/.test(formData.phone) || formData.phone.length < 10) return false;
        if (formData.college.length < 2) return false;
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            alert("Please fill all fields correctly.");
            return;
        }

        setStatus('submitting');

        const payload = {
            ...formData,
            formType: 'ONBOARDING', // Critical for backend to choose correct sheet
            course: program === 'ai' ? 'Artificial Intelligence' : program,
            plan: plan.replace('_', ' '),
            stage: stage.toUpperCase(),
            payment_amount: amountPaid,
            payment_id: paymentId,
            payment_status: 'Success',
            timestamp: new Date().toISOString(),
            startDate: formData.startDate,
            endDate: endDate
        };

        // Determine correct endpoint
        let endpoint = '';
        if (stage === 'registration') {
            endpoint = APPS_SCRIPT_REGISTRATION_URL;
        } else if (stage === 'full' || stage === 'balance') {
            endpoint = APPS_SCRIPT_FULLPAID_URL;
        }

        try {
            await fetch(endpoint, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            setStatus('success');
        } catch (error) {
            console.error("Submission error", error);
            // In no-cors, we can't really read errors, but usually network failure triggers this
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="min-h-screen bg-darkMainBg text-white pt-24 px-4 flex items-center justify-center">
                <div className="max-w-md w-full bg-darkCardBg border border-white/10 p-8 rounded-2xl text-center shadow-2xl">
                    <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Enrollment Successful!</h2>
                    <p className="text-gray-400 mb-6">
                        {stage === 'registration'
                            ? "Check your email for the Payment Receipt. The Offer Letter will be released after full payment."
                            : "Check your email for the Offer Letter and course access details."}
                    </p>
                    <a href="/" className="inline-block px-6 py-3 bg-primaryBlue text-white font-bold rounded-xl hover:bg-blue-600 transition-colors">
                        Go Home
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-darkMainBg text-white pt-24 pb-12 px-4 selection:bg-primaryBlue selection:text-white">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-bold mb-4 border border-green-500/20">
                        <CheckCircle size={16} />
                        Payment Captured
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Complete Your Enrollment</h1>
                    <p className="text-gray-400">Please provide your details to generate your offer letter.</p>
                </div>

                {/* Main Form Card */}
                <div className="bg-darkCardBg border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
                    {/* Summary */}
                    <div className="bg-white/5 rounded-xl p-4 mb-8 border border-white/5 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Program</p>
                            <p className="font-bold text-lg">{program === 'ai' ? 'Artificial Intelligence' : program}</p>
                        </div>
                        <div className="bg-primaryBlue/10 px-4 py-2 rounded-lg border border-primaryBlue/20">
                            <p className="text-xs text-blue-300 uppercase tracking-wider mb-1">Plan</p>
                            <p className="font-bold text-primaryBlue capitalize">{plan.replace('_', ' ')}</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue/50 text-white placeholder:text-gray-600 transition-all"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue/50 text-white placeholder:text-gray-600 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 98765 43210"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue/50 text-white placeholder:text-gray-600 transition-all"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">College / University</label>
                                <input
                                    type="text"
                                    name="college"
                                    value={formData.college}
                                    onChange={handleChange}
                                    placeholder="Your College Name"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue/50 text-white placeholder:text-gray-600 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Start Date</label>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue/50 text-white placeholder:text-gray-600 transition-all [color-scheme:dark]"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">End Date (Calculated)</label>
                                <input
                                    type="date"
                                    value={endDate}
                                    disabled
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none text-gray-400 cursor-not-allowed [color-scheme:dark]"
                                />
                                <p className="text-xs text-gray-500">
                                    Duration: {plan.toLowerCase().includes('professional') ? '3 Months' : '2 Months'}
                                </p>
                            </div>
                        </div>

                        {/* Stage specific notices */}
                        {stage === 'registration' && (
                            <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl flex gap-3 text-yellow-200 text-sm">
                                <AlertCircle size={20} className="shrink-0" />
                                <p>Your registration is confirmed. Please remember to pay the remaining fee later to complete your admission.</p>
                            </div>
                        )}
                        {(stage === 'full' || stage === 'balance') && (
                            <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl flex gap-3 text-green-200 text-sm">
                                <CheckCircle size={20} className="shrink-0" />
                                <p>Offer letter will be sent to your email shortly after confirmation.</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full py-4 bg-gradient-to-r from-primaryBlue to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {status === 'submitting' ? (
                                <>
                                    <Loader2 className="animate-spin" /> Processing...
                                </>
                            ) : 'Complete Enrollment'}
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

export default Enroll;
