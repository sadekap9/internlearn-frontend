import React from 'react';
import { motion } from 'framer-motion';
import { Search, Video, Code, Award, Rocket, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Choose Your Path",
            desc: "Explore our wide range of industry-aligned tech courses and select the one that fits your career goals.",
            icon: <Search className="w-6 h-6" />,
            color: "from-blue-400 to-blue-600"
        },
        {
            id: 2,
            title: "Learn from Experts",
            desc: "Attend live interactive classes and mentorship sessions led by professionals from top tech giants.",
            icon: <Video className="w-6 h-6" />,
            color: "from-purple-400 to-purple-600"
        },
        {
            id: 3,
            title: "Build Real Projects",
            desc: "Apply your knowledge by working on live capstone projects that simulate real-world industry challenges.",
            icon: <Code className="w-6 h-6" />,
            color: "from-cyan-400 to-cyan-600"
        },
        {
            id: 4,
            title: "Earn Certification",
            desc: "Receive a globally recognized internship completion certificate to validate your new skills.",
            icon: <Award className="w-6 h-6" />,
            color: "from-yellow-400 to-orange-600"
        },
        {
            id: 5,
            title: "Get Hired",
            desc: "Benefit from our dedicated placement support, mock interviews, and resume building to land your dream job.",
            icon: <Rocket className="w-6 h-6" />,
            color: "from-green-400 to-emerald-600"
        }
    ];

    return (
        <section className="relative py-24 bg-darkMainBg overflow-hidden" id="how-it-works">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primaryBlue/5 rounded-full blur-[100px] animate-blob" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accentGreen/5 rounded-full blur-[100px] animate-blob animation-delay-2000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Your Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue to-accentGreen">Success</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            A simplified 5-step process to transform your career from beginner to professional.
                        </p>
                    </motion.div>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-white/5 rounded-full">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primaryBlue via-purple-500 to-accentGreen opacity-50"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="relative group"
                            >
                                {/* Step Marker (Desktop) */}
                                <div className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-darkMainBg border-2 border-white/10 rounded-full items-center justify-center z-10 group-hover:border-primaryBlue/50 transition-colors duration-300 shadow-[0_0_0_4px_#020617]">
                                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                                </div>

                                {/* Card */}
                                <div className="h-full pt-8 lg:pt-16">
                                    <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-white/20 hover:bg-white/10 transition-all duration-300 group-hover:-translate-y-2">

                                        {/* Large Number Watermark */}
                                        <div className="absolute top-2 right-4 text-6xl font-black text-white/5 select-none pointer-events-none">
                                            0{step.id}
                                        </div>

                                        {/* Icon */}
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} p-[1px] mb-6 shadow-lg`}>
                                            <div className="w-full h-full bg-darkCardBg rounded-xl flex items-center justify-center text-white group-hover:bg-opacity-90 transition-all">
                                                {step.icon}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {step.desc}
                                        </p>

                                        {/* Hover Glow */}
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-20"
                >
                    <button className="px-8 py-4 bg-white text-darkMainBg font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg shadow-white/5 hover:scale-105 transform duration-200">
                        Start Your Journey Now
                    </button>
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
        </section>
    );
};

export default HowItWorks;
