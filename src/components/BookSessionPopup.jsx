import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Send, User, Mail, Phone, BookOpen, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { programDetails } from '../data/programDetails';

const BookSessionPopup = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: ''
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
        if (!formData.interest.trim()) return "Please select an area of interest";
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

        // Using the same script URL as CourseInterestForm for consistency
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx9YStCSXPnmckNzkY_dGXSM3i4eOInyPYYlq8_HVNFz4mXO2oz-EKQTzLRUPKsT2IBzA/exec';

        try {
            const formPayload = new FormData();
            formPayload.append('name', formData.name);
            formPayload.append('email', formData.email);
            formPayload.append('phone', formData.phone);
            formPayload.append('course', formData.interest); // Mapping interest to course for the script
            formPayload.append('source', 'Book Career Session Popup'); // customized source
            formPayload.append('formType', 'career_session');
            formPayload.append('timestamp', new Date().toISOString());
            console.log("Submitting form with payload:", Object.fromEntries(formPayload.entries()));
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: formPayload
            });

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', interest: '' });

            // Auto close after success? Maybe just show success message.
            setTimeout(() => {
                setStatus('idle');
                onClose();
            }, 3000);

        } catch (err) {
            console.error("Submission Error:", err);
            setErrorMessage("Network error. Please try again.");
            setStatus('error');
        }
    };

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Popup Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-md bg-[#0F172A] rounded-2xl shadow-2xl border border-white/10 overflow-y-auto max-h-[90vh]"
                    >
                        {/* Decorative Gradient */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accentGreen via-primaryBlue to-purple-600" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full z-10"
                        >
                            <X size={20} />
                        </button>

                        {/* Header */}
                        <div className="p-6 pb-0 text-center">
                            <h2 className="text-2xl font-bold text-white mb-2">Book Free Career Session</h2>
                            <p className="text-gray-400 text-sm">Talk to our experts and map your career path.</p>
                        </div>

                        {/* Form */}
                        <div className="p-6">
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Session Booked!</h3>
                                    <p className="text-gray-400 text-sm">Our team will contact you shortly.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="relative group">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primaryBlue transition-colors h-5 w-5" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                            className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-primaryBlue/50 focus:bg-white/10 transition-all placeholder:text-gray-500"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primaryBlue transition-colors h-5 w-5" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address"
                                            className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-primaryBlue/50 focus:bg-white/10 transition-all placeholder:text-gray-500"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primaryBlue transition-colors h-5 w-5" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number"
                                            className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-primaryBlue/50 focus:bg-white/10 transition-all placeholder:text-gray-500"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primaryBlue transition-colors h-5 w-5" />
                                        <select
                                            name="interest"
                                            value={formData.interest}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-primaryBlue/50 focus:bg-white/10 transition-all placeholder:text-gray-500 appearance-none"
                                        >
                                            <option value="" disabled className="bg-gray-900 text-gray-400">Select Program</option>
                                            {Object.values(programDetails).map((program) => (
                                                <option key={program.title} value={program.title} className="bg-gray-900 text-white">
                                                    {program.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

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

                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full bg-gradient-to-r from-accentGreen to-primaryBlue text-darkMainBg font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,174,239,0.3)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-95"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <Loader2 className="animate-spin" size={20} />
                                                Booking...
                                            </>
                                        ) : (
                                            <>
                                                Book Session
                                                <Send size={18} className="text-darkMainBg" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default BookSessionPopup;
