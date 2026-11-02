import React, { useState } from 'react';
import { Send, User, Mail, Phone, BookOpen, GraduationCap, CheckCircle, AlertCircle, Loader2, Award, Users, Megaphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CampusAmbassadorForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        year: '',
        whyJoin: ''
    });

    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        if (!formData.name.trim()) return "Name is required";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) return "Valid email is required";
        if (!formData.phone.trim() || formData.phone.length < 10) return "Valid phone number is required";
        if (!formData.college.trim()) return "College name is required";
        if (!formData.year.trim()) return "Year of study is required";
        if (!formData.whyJoin.trim()) return "Please tell us why you want to join";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const error = validateForm();
        if (error) {
            setErrorMessage(error);
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        // Use the SAME Apps Script URL as before, assuming the user updates the backend code
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx9YStCSXPnmckNzkY_dGXSM3i4eOInyPYYlq8_HVNFz4mXO2oz-EKQTzLRUPKsT2IBzA/exec';

        try {
            const formPayload = new FormData();
            formPayload.append('formType', 'ambassador'); // Key to distinguish forms in Apps Script
            formPayload.append('name', formData.name);
            formPayload.append('email', formData.email);
            formPayload.append('phone', formData.phone);
            formPayload.append('college', formData.college);
            formPayload.append('year', formData.year);
            formPayload.append('whyJoin', formData.whyJoin);
            formPayload.append('timestamp', new Date().toISOString());

            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: formPayload
            });

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', college: '', year: '', whyJoin: '' });
            setTimeout(() => setStatus('idle'), 5000);

        } catch (err) {
            console.error("Submission Error:", err);
            setErrorMessage("Network error. Please try again.");
            setStatus('error');
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#0F172A] border border-white/10 rounded-3xl shadow-2xl overflow-hidden relative"
            >
                {/* Decorative Background Mesh */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-60 h-60 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-violet-600/20 blur-[80px] rounded-full pointer-events-none"></div>

                {/* Header Section */}
                <div className="relative p-8 text-center border-b border-white/10">
                    <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl mb-4 ring-1 ring-white/10">
                        <Award className="w-8 h-8 text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
                        Campus Leadership Program
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                        Represent InternzLearn at your campus. Build leadership experience, grow your professional network, and create meaningful impact.
                    </p>

                    {/* Benefits Pills */}
                    <div className="flex flex-wrap justify-center gap-3 mt-6">
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-1.5">
                            <Users size={12} className="text-blue-400" /> Networking
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-1.5">
                            <Megaphone size={12} className="text-violet-400" /> Leadership
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-1.5">
                            <Award size={12} className="text-amber-400" /> Certificate
                        </span>
                    </div>
                </div>

                {/* Form Section */}
                <div className="p-8 relative z-10">
                    {status === 'success' ? (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center py-12"
                        >
                            <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-green-500/10">
                                <CheckCircle size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
                            <p className="text-slate-400 mb-8 max-w-xs mx-auto">
                                Thank you for your interest. Our team will review your profile and get in touch with you soon.
                            </p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="px-8 py-3 bg-white/10 hover:bg-white/15 text-white rounded-xl transition-all font-medium text-sm"
                            >
                                Submit Another Response
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors h-5 w-5" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-[#020617] border border-white/10 focus:border-blue-500/50 text-white rounded-xl pl-12 pr-4 py-3.5 outline-none transition-all placeholder:text-slate-600"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors h-5 w-5" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full bg-[#020617] border border-white/10 focus:border-blue-500/50 text-white rounded-xl pl-12 pr-4 py-3.5 outline-none transition-all placeholder:text-slate-600"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone Input */}
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Phone Number</label>
                                    <div className="relative group">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors h-5 w-5" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full bg-[#020617] border border-white/10 focus:border-blue-500/50 text-white rounded-xl pl-12 pr-4 py-3.5 outline-none transition-all placeholder:text-slate-600"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Year of Study */}
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Year of Study</label>
                                    <div className="relative group">
                                        <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors h-5 w-5" />
                                        <select
                                            name="year"
                                            value={formData.year}
                                            onChange={handleChange}
                                            className="w-full bg-[#020617] border border-white/10 focus:border-blue-500/50 text-white rounded-xl pl-12 pr-4 py-3.5 outline-none transition-all placeholder:text-slate-600 appearance-none cursor-pointer"
                                            required
                                        >
                                            <option value="" disabled>Select Year</option>
                                            <option value="1st Year">1st Year</option>
                                            <option value="2nd Year">2nd Year</option>
                                            <option value="3rd Year">3rd Year</option>
                                            <option value="4th Year">4th Year</option>
                                            <option value="Graduated">Graduated</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* College Input - Full Width */}
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">College / University</label>
                                <div className="relative group">
                                    <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors h-5 w-5" />
                                    <input
                                        type="text"
                                        name="college"
                                        value={formData.college}
                                        onChange={handleChange}
                                        placeholder="Enter your college name"
                                        className="w-full bg-[#020617] border border-white/10 focus:border-blue-500/50 text-white rounded-xl pl-12 pr-4 py-3.5 outline-none transition-all placeholder:text-slate-600"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Why Join - Text area */}
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Why do you want to be a Campus Ambassador?</label>
                                <textarea
                                    name="whyJoin"
                                    value={formData.whyJoin}
                                    onChange={handleChange}
                                    placeholder="Tell us about your leadership experience and why you'd be a great fit..."
                                    rows="4"
                                    className="w-full bg-[#020617] border border-white/10 focus:border-blue-500/50 text-white rounded-xl p-4 outline-none transition-all placeholder:text-slate-600 resize-none text-sm"
                                    required
                                />
                            </div>

                            {/* Error Message */}
                            <AnimatePresence>
                                {errorMessage && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center gap-3 text-red-400 text-sm"
                                    >
                                        <AlertCircle size={18} />
                                        <p>{errorMessage}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:shadow-lg hover:shadow-blue-500/25 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:grayscale group"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Processing Application...
                                    </>
                                ) : (
                                    <>
                                        Submit Application
                                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            <p className="text-center text-[10px] text-slate-500">
                                By submitting, you agree to our Terms & Conditions and Privacy Policy.
                            </p>
                        </form>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default CampusAmbassadorForm;
