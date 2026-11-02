import React, { useState } from 'react';
import { X, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import vtuLogo from '../assets/vtu-logo.png';
import apscheLogo from '../assets/apsche-logo.jpg';

const tnskLogo = '/cGwUW-1D_400x400-removebg-preview.png';

const AccreditationPopup = () => {
    const [isVisible, setIsVisible] = useState(true);

    const closePopup = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Popup Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-lg bg-[#0F172A] rounded-2xl shadow-2xl border border-white/10 overflow-hidden max-h-[90vh] overflow-y-auto"
                    >
                        {/* Decorative Gradient */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 mb-4">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Build Your Career With</h3>
                                <p className="text-gray-400">Government Recognized Programs</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center items-stretch">
                                {/* VTU Card */}
                                <div className="flex-1 bg-white/5 rounded-xl p-4 border border-white/5 hover:border-yellow-500/30 transition-all group text-center">
                                    <div className="h-16 sm:h-20 flex items-center justify-center mb-3">
                                        <img
                                            src={vtuLogo}
                                            alt="VTU Karnataka"
                                            className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <h4 className="font-bold text-white mb-1">VTU Karnataka</h4>
                                    <span className="inline-block px-2 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded-full border border-yellow-500/20">
                                        Government Listed
                                    </span>
                                    <p className="text-gray-500 text-xs mt-2">Visvesvaraya Technological University</p>
                                </div>

                                {/* APSCHE Card */}
                                <div className="flex-1 bg-white/5 rounded-xl p-4 border border-white/5 hover:border-green-500/30 transition-all group text-center">
                                    <div className="h-16 sm:h-20 flex items-center justify-center mb-3">
                                        <img
                                            src={apscheLogo}
                                            alt="APSCHE"
                                            className="max-h-full max-w-full object-contain rounded-md filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <h4 className="font-bold text-white mb-1">APSCHE</h4>
                                    <span className="inline-block px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
                                        Government Verified
                                    </span>
                                    <p className="text-gray-500 text-xs mt-2">Andhra Pradesh State Council of Higher Education</p>
                                </div>

                                {/* TNSK Card */}
                                <div className="flex-1 bg-white/5 rounded-xl p-4 border border-white/5 hover:border-blue-500/30 transition-all group text-center">
                                    <div className="h-16 sm:h-20 flex items-center justify-center mb-3">
                                        <img
                                            src={tnskLogo}
                                            alt="TNSK Tamil Nadu State Council of Higher Education"
                                            className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <h4 className="font-bold text-white mb-1">TNSK</h4>
                                    <span className="inline-block px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                                        Government Approved
                                    </span>
                                    <p className="text-gray-500 text-xs mt-2">Tamil Nadu State Council of Higher Education</p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <button
                                    onClick={closePopup}
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-500/25"
                                >
                                    Explore Programs
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AccreditationPopup;
