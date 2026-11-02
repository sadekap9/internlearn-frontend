import React, { useState } from 'react';
import { Send, User, Mail, Phone, BookOpen, GraduationCap, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CourseInterestForm = ({ initialCourse }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        course: initialCourse || ''
    });

    const [status, setStatus] = useState('idle'); // idle, loading, success, error
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
        if (!formData.course.trim()) return "Course interest is required";
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

        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx9YStCSXPnmckNzkY_dGXSM3i4eOInyPYYlq8_HVNFz4mXO2oz-EKQTzLRUPKsT2IBzA/exec';

        try {
            // Create FormData object (standard for forms)
            const formPayload = new FormData();
            formPayload.append('name', formData.name);
            formPayload.append('email', formData.email);
            formPayload.append('phone', formData.phone);
            formPayload.append('college', formData.college);
            formPayload.append('course', formData.course);
            formPayload.append('timestamp', new Date().toISOString());

            // Use 'no-cors' mode
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: formPayload
            });

            // Since we can't read the response in no-cors, we assume success
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', college: '', course: initialCourse || '' });
            setTimeout(() => setStatus('idle'), 5000);

        } catch (err) {
            console.error("Submission Error:", err);
            setErrorMessage("Network error. Please try again.");
            setStatus('error');
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-1">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#0F172A]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">Enroll Now</h2>
                    <p className="text-blue-100 text-sm">Start your journey with us today!</p>
                </div>

                {/* Form */}
                <div className="p-6 space-y-4">
                    {status === 'success' ? (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center py-8 space-y-4"
                        >
                            <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Application Received!</h3>
                            <p className="text-slate-400 text-sm">We'll get back to you shortly.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm"
                            >
                                Submit Another
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name Input */}
                            <div className="relative group">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-violet-400 transition-colors h-5 w-5" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all placeholder:text-slate-500"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div className="relative group">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-violet-400 transition-colors h-5 w-5" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all placeholder:text-slate-500"
                                    required
                                />
                            </div>

                            {/* Phone Input */}
                            <div className="relative group">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-violet-400 transition-colors h-5 w-5" />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all placeholder:text-slate-500"
                                    required
                                />
                            </div>

                            {/* College Input */}
                            <div className="relative group">
                                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-violet-400 transition-colors h-5 w-5" />
                                <input
                                    type="text"
                                    name="college"
                                    value={formData.college}
                                    onChange={handleChange}
                                    placeholder="College/University"
                                    className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all placeholder:text-slate-500"
                                    required
                                />
                            </div>

                            {/* Course Interest Input */}
                            <div className="relative group">
                                <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-violet-400 transition-colors h-5 w-5" />
                                {initialCourse ? (
                                    <input
                                        type="text"
                                        name="course"
                                        value={formData.course}
                                        readOnly
                                        className="w-full bg-white/10 border border-white/10 text-white text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none opacity-80 cursor-not-allowed"
                                        title="Course is automatically selected based on the page"
                                    />
                                ) : (
                                    <select
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        className="w-full bg-[#0F172A] border border-white/10 text-white text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all placeholder:text-slate-500 appearance-none cursor-pointer"
                                        required
                                    >
                                        <option value="" disabled className="text-slate-500">Select Interested Course</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="Data Science">Data Science</option>
                                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                                        <option value="Machine Learning">Machine Learning</option>
                                        <option value="Cyber Security">Cyber Security</option>
                                        <option value="Cloud Computing">Cloud Computing</option>
                                        <option value="Other">Other</option>
                                    </select>
                                )}
                            </div>

                            {/* Error Message */}
                            <AnimatePresence>
                                {errorMessage && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-center gap-2 text-red-400 text-sm"
                                    >
                                        <AlertCircle size={16} />
                                        <p>{errorMessage}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:shadow-lg hover:shadow-violet-500/25 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        Submit Application
                                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>

                {/* Footer Micro-text */}
                <div className="bg-[#020617]/50 p-3 text-center border-t border-white/5">
                    <p className="text-[10px] text-slate-500">
                        Secure submission powered by Google
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default CourseInterestForm;
