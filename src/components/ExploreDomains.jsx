import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Cpu, Code, TrendingUp, Heart, Lightbulb, Megaphone, Palette, Briefcase, ArrowRight, Sparkles, Zap, ChevronLeft, ChevronRight, X, Check, Star, Users, Award, Clock, Download, Play, Shield, Database, Cloud, Brain, BookOpen } from 'lucide-react';

import techBg from '../assets/tech-bg.jpg';
import codersBg from '../assets/coders-bg.png';
import financialBg from '../assets/financial-bg.png';
import medicalBg from '../assets/medical-bg.png';
import startupBg from '../assets/startup-bg.png';
import newtechBg from '../assets/newtech-bg.png';
import marketingBg from '../assets/marketing-bg.png';
import designBg from '../assets/design-bg.png';





// Full-Screen Tech Career Pack Experience
const TechCareerPackFullScreen = ({ onClose }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const techCourses = [
        {
            title: 'Artificial Intelligence',
            icon: <Brain size={24} />,
            duration: '12 weeks',
            level: 'Advanced',
            students: '3.2k',
            gradient: 'from-violet-500/20 to-purple-500/20'
        },
        {
            title: 'Machine Learning',
            icon: <Cpu size={24} />,
            duration: '10 weeks',
            level: 'Intermediate',
            students: '4.8k',
            gradient: 'from-blue-500/20 to-cyan-500/20'
        },
        {
            title: 'Cloud Computing',
            icon: <Cloud size={24} />,
            duration: '8 weeks',
            level: 'Beginner',
            students: '5.1k',
            gradient: 'from-cyan-500/20 to-teal-500/20'
        },
        {
            title: 'Cybersecurity',
            icon: <Shield size={24} />,
            duration: '14 weeks',
            level: 'Advanced',
            students: '2.9k',
            gradient: 'from-red-500/20 to-orange-500/20'
        },
        {
            title: 'Full Stack Development',
            icon: <Code size={24} />,
            duration: '16 weeks',
            level: 'Intermediate',
            students: '6.3k',
            gradient: 'from-green-500/20 to-emerald-500/20'
        },
        {
            title: 'Data Science',
            icon: <Database size={24} />,
            duration: '12 weeks',
            level: 'Advanced',
            students: '4.1k',
            gradient: 'from-indigo-500/20 to-blue-500/20'
        }
    ];

    const stats = [
        { label: 'Active Students', value: '15,234', icon: <Users size={20} /> },
        { label: 'Completion Rate', value: '92%', icon: <Award size={20} /> },
        { label: 'Average Rating', value: '4.8/5', icon: <Star size={20} /> },
        { label: 'Career Growth', value: '156%', icon: <TrendingUp size={20} /> }
    ];

    const floatingIcons = [
        { Icon: Brain, delay: 0, x: 20, y: 30 },
        { Icon: Cloud, delay: 0.5, x: 80, y: 20 },
        { Icon: Shield, delay: 1, x: 15, y: 70 },
        { Icon: Database, delay: 1.5, x: 85, y: 65 }
    ];



    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 overflow-y-auto"
            style={{
                perspective: '1200px',
                transformStyle: 'preserve-3d'
            }}
        >
            {/* Animated Background */}
            <motion.div
                className="fixed inset-0 bg-gradient-to-br from-black via-slate-950 to-indigo-950"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.015]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat'
                }} />

                {/* Floating Light Orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[100px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)'
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.25, 0.4, 0.25]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />

                <motion.div
                    className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full blur-[100px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)'
                    }}
                    animate={{
                        scale: [1, 1.25, 1],
                        opacity: [0.2, 0.35, 0.2]
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </motion.div>

            {/* Close Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                onClick={onClose}
                className="fixed top-8 right-8 z-50 p-4 rounded-full glass-panel group hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <X size={24} className="text-white group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>

            {/* Main Content */}
            <motion.div
                className="relative z-10 min-h-screen px-6 py-20"
                style={{
                    transformStyle: 'preserve-3d'
                }}
            >
                <div className="max-w-7xl mx-auto">
                    {/* Floating Icons Background */}
                    {floatingIcons.map(({ Icon, delay, x, y }, index) => (
                        <motion.div
                            key={index}
                            className="absolute opacity-10"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0.05, 0.15, 0.05],
                                scale: [0.8, 1.2, 0.8],
                                x: [0, 20, 0],
                                y: [0, -20, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                delay: delay,
                                ease: "easeInOut"
                            }}
                            style={{
                                left: `${x}%`,
                                top: `${y}%`,
                                transform: `translateZ(-100px)`
                            }}
                        >
                            <Icon size={120} className="text-blue-500" />
                        </motion.div>
                    ))}

                    {/* Hero Section */}
                    <motion.div
                        className="text-center mb-16"
                        style={{ transform: 'translateZ(30px)' }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
                        >
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent filter drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                                Tech Career Pack
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{
                                duration: 0.8,
                                delay: 0.4,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
                        >
                            Build High-Paying Tech Careers with Industry-Grade Skills
                        </motion.p>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                        style={{ transform: 'translateZ(50px)' }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.5 + index * 0.1,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                className="glass-panel p-6 group hover:scale-105 transition-transform cursor-pointer"
                                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                                        {stat.icon}
                                    </div>
                                </div>
                                <motion.div
                                    className="text-3xl font-bold text-white mb-1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Course Cards Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                        style={{ transform: 'translateZ(80px)' }}
                    >
                        {techCourses.map((course, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                    rotateX: 12,
                                    scale: 0.8,
                                    filter: 'blur(10px)'
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    rotateX: 0,
                                    scale: 1,
                                    filter: 'blur(0px)'
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.7 + index * 0.1,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                whileHover={{
                                    y: -12,
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                                className="course-card-glass group cursor-pointer relative overflow-hidden"
                            >
                                {/* Gradient Border */}
                                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-blue-500/50 via-cyan-500/50 to-violet-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${course.gradient} backdrop-blur-[40px]`}></div>
                                </div>

                                {/* Content */}
                                <div className="relative p-6">
                                    {/* Icon with Glow */}
                                    <motion.div
                                        className="mb-4 p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 w-fit relative"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-xl group-hover:bg-blue-500/40 transition-all duration-500"></div>
                                        <div className="relative text-blue-400 group-hover:text-cyan-300 transition-colors">
                                            {course.icon}
                                        </div>
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                                        {course.title}
                                    </h3>

                                    {/* Details */}
                                    <div className="space-y-2 text-sm text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} className="text-blue-400" />
                                            <span>{course.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Award size={16} className="text-violet-400" />
                                            <span>{course.level}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users size={16} className="text-cyan-400" />
                                            <span>{course.students} enrolled</span>
                                        </div>
                                    </div>

                                    {/* Hover Action */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        className="mt-4 flex items-center gap-2 text-blue-400 font-medium"
                                    >
                                        <span>Learn More</span>
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </motion.div>

                                    {/* Light Sweep Animation */}
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                        animate={{
                                            background: [
                                                'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
                                                'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)'
                                            ],
                                            x: ['-100%', '200%']
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 1.5,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="glass-panel p-12 text-center"
                        style={{ transform: 'translateZ(60px)' }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Ready to Launch Your Tech Career?
                        </h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join 15,000+ students who have transformed their careers with our comprehensive tech training program.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            {/* Primary CTA with Magnetic Effect */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.96 }}
                                className="relative group px-8 py-4 rounded-xl overflow-hidden"
                            >
                                {/* Animated Gradient Background */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600"
                                    animate={{
                                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    style={{
                                        backgroundSize: '200% 200%'
                                    }}
                                />

                                {/* Glow Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                                </div>

                                <span className="relative flex items-center gap-2 text-white font-bold text-lg">
                                    <Sparkles size={20} />
                                    Enroll Now
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.button>

                            {/* Secondary CTA with Magnetic Effect */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.96 }}
                                className="relative group px-8 py-4 rounded-xl glass-panel-outline"
                            >
                                <span className="relative flex items-center gap-2 text-white font-bold text-lg">
                                    <Download size={20} />
                                    Download Curriculum
                                </span>
                            </motion.button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <Check size={16} className="text-green-500" />
                                <span>100% Job Support</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check size={16} className="text-green-500" />
                                <span>Live Projects</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check size={16} className="text-green-500" />
                                <span>Industry Mentors</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <style>{`
                .glass-panel {
                    background: rgba(255, 255, 255, 0.04);
                    backdrop-filter: blur(40px);
                    -webkit-backdrop-filter: blur(40px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37),
                                inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
                    border-radius: 1rem;
                }

                .glass-panel-outline {
                    background: rgba(255, 255, 255, 0.02);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 2px solid;
                    border-image: linear-gradient(120deg, 
                        rgba(59, 130, 246, 0.5),
                        rgba(6, 182, 212, 0.5),
                        rgba(139, 92, 246, 0.5)
                    ) 1;
                    border-radius: 1rem;
                    position: relative;
                }

                .glass-panel-outline::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 1rem;
                    padding: 2px;
                    background: linear-gradient(120deg, 
                        rgba(59, 130, 246, 0.5),
                        rgba(6, 182, 212, 0.5),
                        rgba(139, 92, 246, 0.5)
                    );
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                }

                .course-card-glass {
                    background: rgba(255, 255, 255, 0.04);
                    backdrop-filter: blur(30px);
                    -webkit-backdrop-filter: blur(30px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    box-shadow: 0 30px 80px 0 rgba(0, 0, 0, 0.6),
                                inset 0 1px 0 0 rgba(255, 255, 255, 0.05);
                    border-radius: 1.5rem;
                    position: relative;
                }

                @media (prefers-reduced-motion: reduce) {
                    * {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }
            `}</style>
        </motion.div>
    );
};

const ExploreDomains = () => {
    const navigate = useNavigate();
    const [activePack, setActivePack] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const containerRef = useRef(null);
    const [showAllCourses, setShowAllCourses] = useState({});
    const [currentPage, setCurrentPage] = useState(0);

    const careerPacks = [
        {
            id: 1,
            name: 'Tech Career Pack',
            icon: <Cpu size={32} className="text-blue-400" />,
            gradient: 'from-blue-600/20 via-blue-500/10 to-cyan-600/20',
            borderColor: 'border-blue-500/30',
            hoverBorderColor: 'border-blue-400/60',
            backgroundImage: techBg,
            tagColor: 'bg-blue-500',
            courses: [
                'Artificial Intelligence',
                'Machine Learning (ML)',
                'Cloud Computing',
                'Cybersecurity',
                'Full Stack & Web Development',
                'Drone Engineering',
                'Python & Java Programming',
                'DevOps Engineering',
                'Blockchain Technology',
                'Data Science Fundamentals'
            ],
            stats: {
                enrolled: '15.2k',
                completion: '92%',
                rating: '4.8'
            }
        },
        {
            id: 2,
            name: 'Coders Pack',
            icon: <Code size={32} className="text-green-400" />,
            gradient: 'from-green-600/20 via-emerald-500/10 to-emerald-600/20',
            borderColor: 'border-green-500/30',
            hoverBorderColor: 'border-green-400/60',
            backgroundImage: codersBg,
            tag: 'Beginner Friendly',
            tagColor: 'bg-green-500',
            courses: [
                'Python Programming',
                'Data Analytics',
                'SQL',
                'Full Stack Development',
                'App Development',
                'Web Development',
                'Data Structures & Algorithms',
                'Java',
                'Git & Version Control',
                'API Development'
            ],
            stats: {
                enrolled: '12.8k',
                completion: '89%',
                rating: '4.7'
            }
        },
        {
            id: 3,
            name: 'Financial Analyst Pack',
            icon: <TrendingUp size={32} className="text-purple-400" />,
            gradient: 'from-purple-600/20 via-indigo-500/10 to-indigo-600/20',
            borderColor: 'border-purple-500/30',
            hoverBorderColor: 'border-purple-400/60',
            backgroundImage: financialBg,
            tag: 'High Demand',
            tagColor: 'bg-purple-500',
            courses: [
                'Financial Management',
                'Stock Market & Trading',
                'Investment Banking',
                'Financial Modelling',
                'Accounting & Taxation',
                'Advanced Excel',
                'Communication for Finance Professionals',
                'Risk Management',
                'Corporate Finance'
            ],
            stats: {
                enrolled: '8.9k',
                completion: '94%',
                rating: '4.9'
            }
        },
        {
            id: 4,
            name: 'Medical Pack',
            icon: <Heart size={32} className="text-red-400" />,
            gradient: 'from-red-600/20 via-pink-500/10 to-rose-600/20',
            borderColor: 'border-red-500/30',
            hoverBorderColor: 'border-red-400/60',
            backgroundImage: medicalBg,
            tag: 'Specialized',
            tagColor: 'bg-red-500',
            courses: [
                'Soft Skills for Healthcare',
                'Medical Writing',
                'Hospital Management',
                'Psychology',
                'Genetics Engineering',
                'Medical Coding',
                'Healthcare Analytics',
                'Clinical Research',
                'Neurology'
            ],
            stats: {
                enrolled: '7.5k',
                completion: '91%',
                rating: '4.6'
            }
        },
        {
            id: 5,
            name: 'Startup Pack',
            icon: <Lightbulb size={32} className="text-yellow-400" />,
            gradient: 'from-yellow-600/20 via-amber-500/10 to-orange-600/20',
            borderColor: 'border-yellow-500/30',
            hoverBorderColor: 'border-yellow-400/60',
            backgroundImage: startupBg,
            tag: 'Trending',
            tagColor: 'bg-yellow-500',
            courses: [
                'Entrepreneurship',
                'Digital Marketing',
                'Branding & Advertising',
                'HR Management',
                'Finance for Founders',
                'AI for Startups',
                'Pitching to Investors',
                'Lean Startup Methodology'
            ],
            stats: {
                enrolled: '10.3k',
                completion: '88%',
                rating: '4.5'
            }
        },
        {
            id: 6,
            name: 'New Age Technology',
            icon: <Zap size={32} className="text-cyan-400" />,
            gradient: 'from-cyan-600/20 via-teal-500/10 to-emerald-600/20',
            borderColor: 'border-cyan-500/30',
            hoverBorderColor: 'border-cyan-400/60',
            backgroundImage: newtechBg,
            tag: 'Future Tech',
            tagColor: 'bg-cyan-500',
            courses: [
                'IoT (Internet of Things)',
                'Electric Vehicle Engineering',
                'Cybersecurity',
                'Space Technology',
                'Generative AI',
                'Machine Learning',
                'Quantum Computing',
                'Robotics & Automation'
            ],
            stats: {
                enrolled: '13.7k',
                completion: '93%',
                rating: '4.8'
            }
        },
        {
            id: 7,
            name: 'New Age Marketing',
            icon: <Megaphone size={32} className="text-pink-400" />,
            gradient: 'from-pink-600/20 via-rose-500/10 to-fuchsia-600/20',
            borderColor: 'border-pink-500/30',
            hoverBorderColor: 'border-pink-400/60',
            backgroundImage: marketingBg,
            tag: 'High Growth',
            tagColor: 'bg-pink-500',
            courses: [
                'Social Media Marketing',
                'Performance Marketing',
                'D2C Commerce',
                'Branding',
                'AI for Marketers',
                'Content Creation',
                'SEO & SEM',
                'Marketing Analytics'
            ],
            stats: {
                enrolled: '11.2k',
                completion: '90%',
                rating: '4.7'
            }
        },
        {
            id: 8,
            name: 'Design Pack',
            icon: <Palette size={32} className="text-violet-400" />,
            gradient: 'from-violet-600/20 via-purple-500/10 to-fuchsia-600/20',
            borderColor: 'border-violet-500/30',
            hoverBorderColor: 'border-violet-400/60',
            backgroundImage: designBg,
            tag: 'Creative',
            tagColor: 'bg-violet-500',
            courses: [
                'UI/UX Design',
                'VFX & Animation',
                'Graphic Design',
                'AR/VR Design',
                'AI Tools for Designers',
                'Product Design',
                'Motion Graphics',
                'Design Systems'
            ],
            stats: {
                enrolled: '9.8k',
                completion: '92%',
                rating: '4.8'
            }
        }
    ];

    const toggleShowAllCourses = (packId) => {
        setShowAllCourses(prev => ({
            ...prev,
            [packId]: !prev[packId]
        }));
    };

    const itemsPerPage = 8;
    const totalPages = Math.ceil(careerPacks.length / itemsPerPage);

    const handlePrev = () => {
        setCurrentPage(prev => (prev > 0 ? prev - 1 : totalPages - 1));
    };

    const handleNext = () => {
        setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : 0));
    };



    const visiblePacks = careerPacks.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    return (
        <>
            <AnimatePresence>
                {activePack?.id === 1 && (
                    <TechCareerPackFullScreen onClose={() => setActivePack(null)} />
                )}
            </AnimatePresence>

            <section id="explore-domains" className="relative py-24 bg-gradient-to-b from-gray-900 via-darkMainBg to-gray-900 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primaryBlue/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accentGreen/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/10 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
                                animationDelay: `${Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight lg:whitespace-nowrap">
                            Discover InternzLearn <span className="bg-gradient-to-r from-primaryBlue via-cyan-400 to-accentGreen bg-clip-text text-transparent animate-gradient-x">Career Packs</span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-6">
                            Curated with top-quality courses and resources to provide comprehensive learning and great value.
                        </p>
                    </div>

                    <div className="relative" ref={containerRef}>
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-3 bg-darkMainBg/80 backdrop-blur-sm rounded-full border border-white/20 hover:border-primaryBlue hover:bg-primaryBlue/20 transition-all duration-300 group"
                        >
                            <ChevronLeft size={24} className="text-white group-hover:text-primaryBlue transition-colors" />
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-3 bg-darkMainBg/80 backdrop-blur-sm rounded-full border border-white/20 hover:border-accentGreen hover:bg-accentGreen/20 transition-all duration-300 group"
                        >
                            <ChevronRight size={24} className="text-white group-hover:text-accentGreen transition-colors" />
                        </button>

                        <div className="flex justify-center gap-2 mb-8">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPage === i
                                        ? 'bg-gradient-to-r from-primaryBlue to-accentGreen w-8'
                                        : 'bg-white/30'
                                        }`}
                                />
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {visiblePacks.map((pack, index) => {
                                const isHovered = hoveredIndex === index;
                                const showingAll = showAllCourses[pack.id];

                                return (
                                    <motion.div
                                        key={pack.id}
                                        layoutId={pack.id === 1 ? `tech-pack-${pack.id}` : undefined}
                                        className="career-card relative group cursor-pointer transition-all duration-500"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        onClick={() => {
                                            setActivePack(pack);
                                        }}
                                    >
                                        <div
                                            className={`relative h-full bg-gradient-to-br ${pack.gradient} backdrop-blur-sm p-6 rounded-2xl border ${pack.borderColor} transition-all duration-500 overflow-hidden group-hover:${pack.hoverBorderColor} group-hover:shadow-2xl group-hover:shadow-primaryBlue/20`}
                                            style={{
                                                transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                                                backgroundImage: pack.backgroundImage
                                                    ? `linear-gradient(to bottom right, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url(${pack.backgroundImage})`
                                                    : undefined,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}
                                        >
                                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-500"></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-darkMainBg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            {pack.tag && (
                                                <div className="absolute top-4 right-4 z-10">
                                                    <span className={`${pack.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm`}>
                                                        {pack.tag}
                                                    </span>
                                                </div>
                                            )}

                                            <div className="relative z-10 mb-6">
                                                <div className="relative inline-block">
                                                    <div className={`absolute inset-0 ${isHovered ? 'animate-ping' : ''} rounded-xl ${pack.tagColor.replace('bg-', 'bg-')}/30`}></div>
                                                    <div className="relative p-4 bg-darkMainBg/50 rounded-xl border border-white/10 backdrop-blur-sm">
                                                        {pack.icon}
                                                    </div>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-4 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primaryBlue group-hover:to-accentGreen transition-all duration-300">
                                                {pack.name}
                                            </h3>

                                            <div className="flex items-center gap-4 mb-4 relative z-10">
                                                <div className="flex items-center gap-1">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span className="text-sm text-gray-300">{pack.stats.enrolled} enrolled</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                    <span className="text-sm text-gray-300">{pack.stats.rating} ★</span>
                                                </div>
                                            </div>

                                            <div className="relative z-10">
                                                <ul className="space-y-2.5 mb-4">
                                                    {(showingAll ? pack.courses : pack.courses.slice(0, 4)).map((course, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors group/item"
                                                        >
                                                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-primaryBlue to-accentGreen group-hover/item:scale-125 transition-transform"></div>
                                                            <span className="truncate">{course}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {pack.courses.length > 4 && (
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            toggleShowAllCourses(pack.id);
                                                        }}
                                                        className="text-sm text-primaryBlue hover:text-accentGreen font-medium flex items-center gap-1 transition-colors"
                                                    >
                                                        {showingAll ? 'Show Less' : `+${pack.courses.length - 4} more`}
                                                        <ArrowRight size={14} className={`transition-transform ${showingAll ? 'rotate-90' : ''}`} />
                                                    </button>
                                                )}
                                            </div>

                                            <div className="relative z-10 mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                                <button onClick={(e) => { e.stopPropagation(); navigate(`/career-pack/${pack.name.toLowerCase().replace(/\s+/g, '-')}`); }} className="w-full bg-gradient-to-r from-primaryBlue to-accentGreen hover:from-primaryBlue/90 hover:to-accentGreen/90 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primaryBlue/30">
                                                    Explore Pack
                                                    <ArrowRight size={18} />
                                                </button>
                                            </div>

                                            {isHovered && (
                                                <>
                                                    <div className="absolute top-4 left-4 w-2 h-2 bg-primaryBlue rounded-full animate-ping"></div>
                                                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-accentGreen rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                                                </>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>



                    {/* Trending Courses Section */}
                    <div className="mt-32 mb-20 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Trending <span className="text-primaryBlue">Courses</span>
                            </h2>
                            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                                Discover our Trending Courses, offering the latest skills and knowledge in high-demand fields to keep you ahead in your career.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Data Science */}
                            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-transform duration-300">
                                <div className="h-48 bg-gradient-to-br from-blue-900 to-slate-900 relative flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-500"></div>
                                    <h3 className="text-2xl font-black text-white relative z-10 uppercase tracking-wider text-center px-4 drop-shadow-lg">
                                        Data<br />Science
                                    </h3>
                                </div>
                                <div className="p-6 h-full">
                                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                        This course will help you learn how to use data and statistical models to make predictions, communicate your findings with a broad range of audiences.
                                    </p>
                                    <button onClick={() => navigate('/program/data-science')} className="px-6 py-2 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors text-sm border border-white/10">
                                        Read More
                                    </button>
                                </div>
                            </div>

                            {/* Digital Marketing */}
                            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-transform duration-300">
                                <div className="h-48 bg-gradient-to-br from-purple-900 to-indigo-900 relative flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-500"></div>
                                    <h3 className="text-2xl font-black text-white relative z-10 uppercase tracking-wider text-center px-4 drop-shadow-lg">
                                        Digital<br />Marketing
                                    </h3>
                                </div>
                                <div className="p-6 h-full">
                                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                        This course aims to set a solid foundation for the digital marketing skills required for successful campaigns in the digital world.
                                    </p>
                                    <button onClick={() => navigate('/program/digital-marketing')} className="px-6 py-2 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors text-sm border border-white/10">
                                        Read More
                                    </button>
                                </div>
                            </div>

                            {/* Full Stack Web Development */}
                            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-transform duration-300">
                                <div className="h-48 bg-gradient-to-br from-gray-900 to-zinc-800 relative flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-500"></div>
                                    <h3 className="text-2xl font-black text-white relative z-10 uppercase tracking-wider text-center px-4 drop-shadow-lg">
                                        Full Stack<br />Web Development
                                    </h3>
                                </div>
                                <div className="p-6 h-full">
                                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                        The Web Development course will teach you how to create web pages, apps, and other online content by using the languages HTML, and CSS.
                                    </p>
                                    <button onClick={() => navigate('/program/full-stack-web-development')} className="px-6 py-2 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors text-sm border border-white/10">
                                        Read More
                                    </button>
                                </div>
                            </div>

                            {/* Machine Learning */}
                            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-transform duration-300">
                                <div className="h-48 bg-gradient-to-br from-blue-900 to-cyan-900 relative flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-500"></div>
                                    <h3 className="text-2xl font-black text-white relative z-10 uppercase tracking-wider text-center px-4 drop-shadow-lg">
                                        Machine<br />Learning
                                    </h3>
                                </div>
                                <div className="p-6 h-full">
                                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                        The Machine Learning course will teach you how to leverage data, build models, and create intelligent systems by using tools and techniques.
                                    </p>
                                    <button onClick={() => navigate('/program/machine-learning')} className="px-6 py-2 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors text-sm border border-white/10">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-16 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primaryBlue/20 via-transparent to-accentGreen/20 blur-3xl"></div>

                        <div className="mt-32 mb-20 relative z-10">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                    Why Choose <span className="text-primaryBlue">InternzLearn</span> for Your Learning Journey?
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    {
                                        title: "Expert Mentorship",
                                        description: "Learn from industry professionals who offer valuable insights, real-world experiences, and guidance to deepen your understanding.",
                                        icon: <Users size={32} className="text-blue-400" />,
                                        color: "bg-blue-500/10"
                                    },
                                    {
                                        title: "Comprehensive Curriculum",
                                        description: "Our courses cover in-demand technologies and essential skills, providing the knowledge and abilities needed for success in your career.",
                                        icon: <BookOpen size={32} className="text-cyan-400" />,
                                        color: "bg-cyan-500/10"
                                    },
                                    {
                                        title: "Flexible Learning Options",
                                        description: "We offer self-paced courses and live virtual classrooms to fit your learning preferences and schedule, ensuring flexibility and convenience.",
                                        icon: <Clock size={32} className="text-green-400" />,
                                        color: "bg-green-500/10"
                                    },
                                    {
                                        title: "Hands-On Projects",
                                        description: "Engage in hands-on projects that reinforce learning and provide practical experience, allowing you to showcase your skills to potential employers.",
                                        icon: <Code size={32} className="text-orange-400" />,
                                        color: "bg-orange-500/10"
                                    },
                                    {
                                        title: "Personalized Guidance",
                                        description: "Receive tailored support from instructors and staff, including feedback and assistance to overcome challenges and achieve your learning goals.",
                                        icon: <Heart size={32} className="text-red-400" />,
                                        color: "bg-red-500/10"
                                    },
                                    {
                                        title: "Career Advancement",
                                        description: "Enhance your professional growth with new skills and knowledge, positioning yourself for promotions and career changes. We offer job placement support.",
                                        icon: <TrendingUp size={32} className="text-purple-400" />,
                                        color: "bg-purple-500/10"
                                    },
                                    {
                                        title: "Premium Educational Resources",
                                        description: "Access high-quality resources like video lectures, reading materials, and interactive exercises, designed to provide comprehensive topic understanding.",
                                        icon: <Award size={32} className="text-yellow-400" />,
                                        color: "bg-yellow-500/10"
                                    },
                                    {
                                        title: "Community Support",
                                        description: "Join a vibrant community of learners, collaborate with peers, participate in discussions, and share knowledge in a supportive environment.",
                                        icon: <Zap size={32} className="text-pink-400" />,
                                        color: "bg-pink-500/10"
                                    }
                                ].map((feature, index) => (
                                    <div key={index} className="glass-panel p-6 hover:-translate-y-2 transition-transform duration-300 border border-white/10 group">
                                        <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primaryBlue transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px) translateX(0px); }
                        50% { transform: translateY(-20px) translateX(10px); }
                    }
                    
                    @keyframes gradient-x {
                        0%, 100% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                    }
                    
                    .animate-gradient-x {
                        background-size: 200% 200%;
                        animation: gradient-x 3s ease infinite;
                    }
                    
                    .career-card {
                        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    
                    .career-card:hover {
                        z-index: 10;
                    }
                `}</style>
            </section>
        </>
    );
};

export default ExploreDomains;
