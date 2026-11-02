import React, { useState } from 'react';
import { Calendar, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BookSessionPopup from './BookSessionPopup';
import dataScienceHero from '../assets/data-science-hero.png';
import deloitteLogo from '../assets/deloitte.png';
import phonepeLogo from '../assets/phonepe.png';
import zomatoLogo from '../assets/zomato.png';

const JobAssuranceProgram = () => {
    const navigate = useNavigate();
    const [isSessionPopupOpen, setIsSessionPopupOpen] = useState(false);

    return (
        <section className="relative py-20 bg-darkMainBg overflow-hidden">

            {/* Advanced Background Effects - Same as Hero */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Animated gradient orbs */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-primaryBlue/10 blur-3xl animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] rounded-full bg-accentGreen/5 blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-purple-500/10 blur-3xl animate-blob animation-delay-4000"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Our Programs
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 font-medium">
                        Master in-demand skills and launch your career.
                    </p>
                </div>

                <div className="bg-darkCardBg/50 backdrop-blur-md rounded-3xl shadow-2xl border border-darkBorder overflow-hidden grid grid-cols-1 lg:grid-cols-2 hover:border-primaryBlue/30 transition-colors duration-500 group mb-12">

                    {/* LEFT CONTENT */}
                    <div className="p-6 md:p-10 flex flex-col justify-center relative z-10">


                        <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                            Data Science <br />
                            <span className="bg-gradient-to-r from-primaryBlue to-cyan-400 bg-clip-text text-transparent">
                                Job Ready Program
                            </span>
                        </h2>

                        <p className="text-darkTextSecondary text-base md:text-lg mb-6 max-w-xl">
                            A hands-on data science program designed for
                            entrepreneurs, professionals, and freshers who want
                            to build a high-paying career with real-world skills.
                        </p>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-gray-500 font-medium text-sm">
                                Mentors from
                            </span>
                            <div className="flex gap-4 md:gap-6 items-center text-gray-300 font-semibold text-sm md:text-base">
                                <img src={deloitteLogo} alt="Deloitte" className="h-8 object-contain" />
                                <img src={phonepeLogo} alt="PhonePe" className="h-8 object-contain" />
                                <img src={zomatoLogo} alt="Zomato" className="h-8 object-contain" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
                            <div className="flex items-center gap-3 bg-darkMainBg/50 p-3 md:p-4 rounded-xl border border-darkBorder hover:border-primaryBlue/50 transition-all duration-300 group/item">
                                <div className="p-2 bg-primaryBlue/10 rounded-lg group-hover/item:bg-primaryBlue/20 transition-colors">
                                    <Calendar className="text-primaryBlue w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">
                                        Duration
                                    </p>
                                    <p className="font-bold text-white text-sm md:text-base">
                                        5 – 7 Months
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-darkMainBg/50 p-3 md:p-4 rounded-xl border border-darkBorder hover:border-accentGreen/50 transition-all duration-300 group/item">
                                <div className="p-2 bg-accentGreen/10 rounded-lg group-hover/item:bg-accentGreen/20 transition-colors">
                                    <TrendingUp className="text-accentGreen w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">
                                        Highest Salary
                                    </p>
                                    <p className="font-bold text-white text-sm md:text-base">
                                        ₹14.8 LPA
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={() => navigate('/program/data-science')} className="bg-accentGreen hover:bg-lime-400 text-darkMainBg px-8 py-3 rounded-xl font-bold shadow-lg shadow-accentGreen/20 hover:shadow-accentGreen/40 transition-all duration-300 transform hover:scale-105">
                                Know More
                            </button>

                            <button onClick={() => setIsSessionPopupOpen(true)} className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-primaryBlue/50 font-semibold text-white hover:bg-primaryBlue/10 transition-all duration-300 transform hover:scale-105">
                                Talk to an Expert
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative h-full min-h-[400px] lg:min-h-full bg-gradient-to-br from-primaryBlue/5 to-purple-500/5 flex items-center justify-center overflow-hidden">
                        {/* Glow effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primaryBlue/20 blur-[100px] rounded-full opacity-50"></div>

                        <img
                            src={dataScienceHero}
                            alt="Data Science Illustration"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>


            </div>

            {/* Custom CSS for animations */}
            <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                .animate-blob {
                    animation: blob 10s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>

            <BookSessionPopup isOpen={isSessionPopupOpen} onClose={() => setIsSessionPopupOpen(false)} />
        </section>
    );
};

export default JobAssuranceProgram;
