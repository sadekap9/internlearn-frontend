import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';
import BookSessionPopup from './BookSessionPopup';

const HeroSection = ({ description = "Join India's fastest-growing tech learning platform. Get job-ready with industry-certified programs designed by Fortune 500 experts." }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isSessionPopupOpen, setIsSessionPopupOpen] = useState(false);

    // Typewriter State
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const domains = [
        "Data Science",
        "Financial Management",
        "Web Development",
        "AI & Machine Learning",
        "Cyber Security",
        "Cloud Computing",
    ];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % domains.length;
            const fullText = domains[i];

            setDisplayedText(
                isDeleting
                    ? fullText.substring(0, displayedText.length - 1)
                    : fullText.substring(0, displayedText.length + 1)
            );

            // Typing Speed Control
            let typeSpeed = isDeleting ? 30 : 100;

            if (!isDeleting && displayedText === fullText) {
                // Determine pause at end of word
                typeSpeed = 2000;
                setIsDeleting(true);
            } else if (isDeleting && displayedText === '') {
                // Determine pause before next word
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                typeSpeed = 500;
            }

            setTypingSpeed(typeSpeed);
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, loopNum, typingSpeed]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 bg-black overflow-hidden perspective-[1000px]">

            {/* Advanced Box Animation Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Mouse follow glowing light - INCREASED BRIGHTNESS & SPREAD */}
                <div
                    className="absolute z-0 w-[800px] h-[800px] rounded-full bg-cyan-400/20 blur-[150px] transition-transform duration-300 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x - 400}px, ${mousePosition.y - 400}px)`
                    }}
                ></div>

                {/* Interactive Grid that lights up near mouse - EXPANDED */}
                <div
                    className="absolute inset-0 z-0 opacity-60"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '80px 80px',
                        maskImage: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
                        WebkitMaskImage: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
                    }}
                ></div>

                {/* Floating 3D Boxes */}
                <ul className="floating-boxes absolute inset-0 z-0 m-0 p-0 h-full w-full">
                    {[...Array(12)].map((_, i) => (
                        <li key={i} className="absolute list-none block bg-gradient-to-tr from-white/5 to-white/10 border border-white/10 backdrop-blur-md rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] animate-float-box pointer-events-none">
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-500/10 to-transparent"></div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-5xl mx-auto flex flex-col justify-center h-full">

                    {/* Main Headline with Gradient */}
                    <div className="animate-fade-in-up">

                        {/* Main Headline with Gradient */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] sm:leading-tight mb-6 tracking-tight">
                            Master{' '}
                            <span className="relative inline-block min-w-[200px] sm:min-w-[300px] md:min-w-[400px] text-left">
                                <span className="bg-gradient-to-r from-primaryBlue via-cyan-400 to-primaryBlue bg-clip-text text-transparent animate-gradient">
                                    {displayedText}
                                </span>
                                {/* Cursor */}
                                <span className="animate-blink inline-block w-1 h-8 sm:h-12 md:h-16 bg-accentGreen ml-1 align-middle"></span>
                            </span>
                            <br className="hidden lg:block" />
                            {' '}<span className="inline-block lg:inline"> & Transform Your </span>{' '}
                            <span className="bg-gradient-to-r from-accentGreen to-lime-400 bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0">
                                Career
                            </span>
                        </h1>

                        {/* Enhanced Subtext */}
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-darkTextSecondary mb-8 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-medium">
                            {description}
                        </p>

                        {/* Key Benefits Pills */}
                        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
                            {['100% Placement Support', 'Live Projects', 'Expert Mentors', 'Flexible Learning'].map((benefit, idx) => (
                                <div key={idx} className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-darkCardBg rounded-full border border-darkBorder shadow-sm hover:shadow-md hover:border-primaryBlue/50 transition-all duration-300">
                                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-accentGreen mr-1.5 sm:mr-2" />
                                    <span className="text-xs sm:text-sm font-semibold text-gray-300">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs with Advanced Styling */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16 sm:mb-20">
                            <button
                                onClick={() => document.getElementById('explore-domains')?.scrollIntoView({ behavior: 'smooth' })}
                                className="group w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-accentGreen hover:bg-lime-400 text-darkMainBg font-bold rounded-xl shadow-lg shadow-accentGreen/20 hover:shadow-accentGreen/40 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:-translate-y-1 text-sm sm:text-base">
                                Explore Programs
                                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => setIsSessionPopupOpen(true)}
                                className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-transparent hover:bg-darkCardBg text-white font-bold rounded-xl border-2 border-primaryBlue shadow-lg shadow-primaryBlue/20 hover:shadow-primaryBlue/40 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:-translate-y-1 text-sm sm:text-base">
                                Book Free Counseling
                            </button>
                        </div>

                    </div>

                    {/* Premium Stats Section */}
                    <div className="relative mt-auto animate-fade-in-up">
                        {/* Compact Glass Strip */}
                        <div className="bg-white/5 backdrop-blur-md border-y border-white/10 py-4 sm:py-6 rounded-2xl sm:rounded-none mx-[-16px] sm:mx-auto px-4 sm:px-0">

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 relative z-10 max-w-6xl mx-auto">

                                {/* Stat 1 - Rating */}
                                <div className="flex flex-col items-center justify-center text-center group hover:-translate-y-0.5 transition-transform duration-300">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-br from-yellow-300 to-amber-500 bg-clip-text text-transparent tracking-tight mb-1">4.9/5</h3>
                                    <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider">Student Rating</p>
                                    <p className="text-[9px] sm:text-[10px] text-gray-600 font-medium font-mono mt-0.5">12k+ Reviews</p>
                                </div>

                                {/* Stat 2 - Learners */}
                                <div className="flex flex-col items-center justify-center text-center group hover:-translate-y-0.5 transition-transform duration-300">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-br from-cyan-300 to-blue-600 bg-clip-text text-transparent tracking-tight mb-1">50K+</h3>
                                    <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider">Active Learners</p>
                                    <p className="text-[9px] sm:text-[10px] text-gray-600 font-medium font-mono mt-0.5">Global Community</p>
                                </div>

                                {/* Stat 3 - Success Rate */}
                                <div className="flex flex-col items-center justify-center text-center group hover:-translate-y-0.5 transition-transform duration-300">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-br from-lime-300 to-green-600 bg-clip-text text-transparent tracking-tight mb-1">94%</h3>
                                    <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider">Success Rate</p>
                                    <p className="text-[9px] sm:text-[10px] text-gray-600 font-medium font-mono mt-0.5">Career Switch</p>
                                </div>

                                {/* Stat 4 - Partners */}
                                <div className="flex flex-col items-center justify-center text-center group hover:-translate-y-0.5 transition-transform duration-300">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-br from-purple-300 to-indigo-600 bg-clip-text text-transparent tracking-tight mb-1">500+</h3>
                                    <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider">Hiring Partners</p>
                                    <p className="text-[9px] sm:text-[10px] text-gray-600 font-medium font-mono mt-0.5">Top Tech Giants</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <BookSessionPopup isOpen={isSessionPopupOpen} onClose={() => setIsSessionPopupOpen(false)} />

            {/* Custom CSS for animations */}
            <style>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient {
                    background-size: 200% auto;
                    animation: gradient 3s linear infinite;
                }
                .animate-fade-in-up {
                    animation: fadeInUp 1s ease-out forwards;
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translate3d(0, 40px, 0);
                    }
                    to {
                        opacity: 1;
                        transform: translate3d(0, 0, 0);
                    }
                }
                /* Blinking Cursor Animation */
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 0.8s infinite;
                }
                
                /* Floating Boxes Animation */
                .perspective-\\[1000px\\] {
                    perspective: 1000px;
                }
                .floating-boxes li {
                    bottom: -150px;
                }
                .floating-boxes li:nth-child(1) { left: 5%; width: 60px; height: 60px; animation-delay: 0s; animation-duration: 18s; }
                .floating-boxes li:nth-child(2) { left: 15%; width: 30px; height: 30px; animation-delay: 2s; animation-duration: 20s; }
                .floating-boxes li:nth-child(3) { left: 25%; width: 45px; height: 45px; animation-delay: 4s; animation-duration: 15s; }
                .floating-boxes li:nth-child(4) { left: 35%; width: 70px; height: 70px; animation-delay: 0s; animation-duration: 22s; border-radius: 16px; }
                .floating-boxes li:nth-child(5) { left: 45%; width: 40px; height: 40px; animation-delay: 1s; animation-duration: 16s; }
                .floating-boxes li:nth-child(6) { left: 55%; width: 55px; height: 55px; animation-delay: 3s; animation-duration: 19s; }
                .floating-boxes li:nth-child(7) { left: 65%; width: 90px; height: 90px; animation-delay: 2s; animation-duration: 25s; border-radius: 20px; }
                .floating-boxes li:nth-child(8) { left: 75%; width: 35px; height: 35px; animation-delay: 5s; animation-duration: 14s; }
                .floating-boxes li:nth-child(9) { left: 85%; width: 65px; height: 65px; animation-delay: 0s; animation-duration: 21s; }
                .floating-boxes li:nth-child(10) { left: 90%; width: 40px; height: 40px; animation-delay: 6s; animation-duration: 17s; }
                .floating-boxes li:nth-child(11) { left: 10%; width: 80px; height: 80px; animation-delay: 8s; animation-duration: 26s; }
                .floating-boxes li:nth-child(12) { left: 80%; width: 50px; height: 50px; animation-delay: 7s; animation-duration: 23s; }

                @keyframes float-box {
                    0% {
                        transform: translateY(0) rotate(0deg) translateZ(0);
                        opacity: 0;
                    }
                    15% {
                        opacity: 1;
                    }
                    85% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-120vh) rotate(360deg) translateZ(200px);
                        opacity: 0;
                    }
                }
            `}</style>
        </section>
    );
};

export default HeroSection;
