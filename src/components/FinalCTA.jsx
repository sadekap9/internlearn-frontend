import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BookSessionPopup from './BookSessionPopup';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
    const navigate = useNavigate();
    const [isSessionPopupOpen, setIsSessionPopupOpen] = useState(false);

    return (
        <section className="relative py-24 bg-darkMainBg overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primaryBlue/10 rounded-full blur-[120px] animate-blob" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accentGreen/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Main Heading */}
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Ready to Transform Your{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue via-cyan-400 to-accentGreen">
                            Career?
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                        Join thousands of learners who have accelerated their careers with InternzLearn.
                        Start your journey to success today.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <button onClick={() => navigate('/join/learner')} className="group px-8 py-4 bg-gradient-to-r from-accentGreen to-lime-400 text-darkMainBg font-bold rounded-xl shadow-lg shadow-accentGreen/20 hover:shadow-accentGreen/40 transition-all duration-300 hover:scale-105">
                            <span className="flex items-center justify-center gap-2">
                                Start Learning Now
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>

                        <button onClick={() => setIsSessionPopupOpen(true)} className="group px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                            <span className="flex items-center justify-center gap-2">
                                Talk to Advisor
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <p className="text-sm text-gray-500">
                        ⭐ 4.9/5 Rating • 50,000+ Students • 100% Placement Support
                    </p>
                </motion.div>
            </div>

            <style>{`
                .animate-blob {
                    animation: blob 10s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
            `}</style>

            <BookSessionPopup isOpen={isSessionPopupOpen} onClose={() => setIsSessionPopupOpen(false)} />
        </section>
    );
};

export default FinalCTA;
