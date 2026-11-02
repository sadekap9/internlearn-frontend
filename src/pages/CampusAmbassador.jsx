import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users,
    Award,
    Gift,
    Briefcase,
    Clock,
    BookOpen,
    Megaphone,
    Share2,
    UserPlus,
    FileText,
    ChevronDown,
    ChevronUp,
    CheckCircle,
    ArrowRight,
    Star,
    X,
    Target,
    Zap,
    TrendingUp,
    Globe,
    Layers,
    Smile
} from 'lucide-react';
import CampusAmbassadorForm from '../components/CampusAmbassadorForm';

const CampusAmbassador = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleApplyClick = (e) => {
        e.preventDefault();
        setShowForm(true);
    };

    const testimonials = [
        { name: "Ananya Sharma", college: "DU Tech, Bangalore", quote: "Built confidence, leadership, and earned my first stipend.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" },
        { name: "Rohit Verma", college: "Mechanical Engg, Pune", quote: "Great exposure and flexible schedule for students.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" },
        { name: "Priya Patel", college: "NMIMS, Mumbai", quote: "Certificate + experience helped in placements.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150" }
    ];

    const faqs = [
        { q: "Who can apply?", a: "Any college student from any stream (Engineering, Management, Arts, etc.) can apply. We look for enthusiasm and leadership potential!" },
        { q: "Is it paid?", a: "Yes! It is a performance-based program. You earn stipends and incentives based on your milestones and activities." },
        { q: "Time commitment?", a: "It's flexible. You can dedicate 3-5 hours a week alongside your regular college studies." },
        { q: "Certificate included?", a: "Absolutely. You will receive an official Internship Certificate and a Letter of Recommendation upon successful completion." },
        { q: "Need experience?", a: "No prior experience is required. We provide training and mentorship to help you succeed." },
        { q: "Can I do with studies?", a: "Yes, the program is designed to be student-friendly and won't hamper your academic schedule." }
    ];

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500 selection:text-white pt-20 overflow-x-hidden">

            {/* 🟣 HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950 z-0"></div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]"
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"
                ></motion.div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="text-left space-y-8"
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                                Become the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Campus Leader</span> Who Creates Real Impact
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-xl text-gray-300 font-light leading-relaxed max-w-xl">
                                Represent InternzLearn at your college, build leadership skills, grow your network, and earn performance rewards — all while you study.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleApplyClick}
                                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 text-lg"
                                >
                                    Apply Now <ArrowRight size={20} />
                                </motion.button>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="/Internz%20learn%20brochure.pdf"
                                    download="Internz_Learn_Brochure.pdf"
                                    className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-xl transition-all backdrop-blur-sm flex items-center justify-center gap-2 text-lg group"
                                >
                                    <Award size={20} className="text-yellow-400 group-hover:scale-110 transition-transform" />
                                    Download Brochure
                                </motion.a>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="pt-8 border-t border-white/10">
                                <div className="flex flex-wrap items-center gap-6 md:gap-12">
                                    {[
                                        { num: "500+", label: "Ambassadors" },
                                        { num: "100+", label: "Colleges" },
                                        { num: "10K+", label: "Students Impacted" },
                                    ].map((stat, i) => (
                                        <React.Fragment key={i}>
                                            <div className="text-center">
                                                <p className="text-3xl font-bold text-white">{stat.num}</p>
                                                <p className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</p>
                                            </div>
                                            {i < 2 && <div className="w-px h-10 bg-white/10 hidden md:block"></div>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/20 group">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-80"></div>
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.8 }}
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                                    alt="Students Collaborating"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-8 left-8 z-20">
                                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                                        <p className="font-bold text-white text-lg">Learn • Lead • Earn</p>
                                        <p className="text-indigo-300 text-sm">Join the movement today</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-xl z-30 max-w-[200px]"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                                        <TrendingUp size={20} />
                                    </div>
                                    <span className="font-bold text-white text-sm">Growth</span>
                                </div>
                                <p className="text-xs text-gray-400">Boost your career trajectory with real-world experience.</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 🟣 SECTION 2 — WHAT IS CAMPUS AMBASSADOR PROGRAM */}
            <section className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideInLeft}
                            className="md:w-1/2 relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800"
                                    alt="Campus Ambassador Presenting"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/60 to-transparent"></div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600 rounded-full blur-[80px] opacity-50"></div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="md:w-1/2"
                        >
                            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                What is the <br />
                                <span className="text-indigo-400">Campus Ambassador</span> Program?
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-gray-300 text-lg leading-relaxed mb-6">
                                The Campus Ambassador Program is a leadership and career-building opportunity for motivated students who want to stand out beyond academics.
                            </motion.p>
                            <motion.p variants={fadeInUp} className="text-gray-300 text-lg leading-relaxed mb-8">
                                As an Ambassador, you become the official student representative of InternzLearn in your college — helping students discover career programs, internships, and skill-building opportunities. You act as a bridge between your campus and industry exposure.
                            </motion.p>

                            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { text: "Represent InternzLearn on campus", icon: Globe },
                                    { text: "Guide students toward career programs", icon: Target },
                                    { text: "Promote learning opportunities", icon: Megaphone },
                                    { text: "Gain real corporate exposure", icon: Briefcase }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeInUp}
                                        whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.1)" }}
                                        className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 transition-colors"
                                    >
                                        <item.icon size={20} className="text-indigo-400 flex-shrink-0" />
                                        <span className="text-sm font-medium text-gray-200">{item.text}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 🟣 SECTION 3 — WHY JOIN (VALUE PROPOSITION) */}
            <section className="py-24 bg-slate-950 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-2 block">Value Proposition</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Students Join This Program</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {[
                            { title: "Leadership Experience", desc: "Develop real leadership and communication skills.", icon: Users, color: "text-blue-400", bg: "bg-blue-500/10" },
                            { title: "Industry Exposure", desc: "Work with a fast-growing EdTech startup.", icon: Layers, color: "text-purple-400", bg: "bg-purple-500/10" },
                            { title: "Personal Branding", desc: "Build your profile and LinkedIn credibility.", icon: Star, color: "text-yellow-400", bg: "bg-yellow-500/10" },
                            {
                                title: "Performance Rewards",
                                desc: "Earn stipend and milestone bonuses.",
                                icon: Gift,
                                color: "text-green-400",
                                bg: "bg-green-500/10",
                                image: "https://images.unsplash.com/photo-1579621970563-ebec7560eb3e?auto=format&fit=crop&q=80&w=800"
                            }
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                variants={scaleIn}
                                whileHover={{ y: -10, borderColor: "rgba(99, 102, 241, 0.5)" }}
                                className={`relative overflow-hidden bg-slate-900 border border-white/5 p-8 rounded-2xl transition-all group ${card.image ? 'md:col-span-2 md:row-span-1' : ''}`}
                            >
                                {card.image && (
                                    <>
                                        <div className="absolute inset-0 z-0">
                                            <img src={card.image} alt="Background" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
                                        </div>
                                    </>
                                )}
                                <div className="relative z-10">
                                    <div className={`w-16 h-16 ${card.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform backdrop-blur-sm`}>
                                        <card.icon size={32} className={card.color} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                                    <p className="text-gray-400">{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 🟣 SECTION 4 — PROGRAM IMPACT STATS */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="py-20 bg-indigo-900/20 border-y border-white/5"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-12">Program Impact</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        {[
                            { num: "500+", label: "Active Ambassadors" },
                            { num: "100+", label: "Partner Colleges" },
                            { num: "10K+", label: "Students Reached" },
                            { num: "₹50K+", label: "Rewards Distributed" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.1 }}
                                className="p-4"
                            >
                                <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.num}</p>
                                <p className="text-indigo-300 uppercase tracking-wider text-sm font-semibold">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-xl text-gray-300 italic max-w-2xl mx-auto">"A growing national student leadership network."</p>
                </div>
            </motion.section>

            {/* 🟣 SECTION 5 — PERKS & BENEFITS */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <span className="text-purple-400 font-bold uppercase tracking-widest text-sm mb-2 block">Rewards</span>
                        <h2 className="text-4xl font-bold mb-4">Ambassador Benefits & Rewards</h2>
                        <p className="text-gray-400 text-lg">We value your contribution. Here's what you get.</p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            { title: "Official Certification", desc: "Internship Certificate + Ambassador Offer Letter", icon: Award, color: "from-blue-400 to-blue-600" },
                            { title: "Performance Stipend", desc: "Earn up to ₹25,000 based on milestones", icon: Zap, color: "from-yellow-400 to-orange-500" },
                            { title: "Free Premium Courses", desc: "Power BI, Tableau, Product Management & more", icon: BookOpen, color: "from-green-400 to-emerald-600" },
                            { title: "Exclusive Merchandise", desc: "Ambassador kits & branded goodies", icon: Gift, color: "from-pink-400 to-rose-600" },
                            { title: "Career Support", desc: "Priority job & internship referrals", icon: Briefcase, color: "from-indigo-400 to-purple-600" },
                            { title: "Flexible Schedule", desc: "Work anytime alongside studies", icon: Clock, color: "from-teal-400 to-cyan-600" }
                        ].map((perk, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
                                className="relative group overflow-hidden bg-slate-900 border border-white/5 p-8 rounded-3xl transition-all"
                            >
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${perk.color} opacity-10 rounded-bl-[100px] group-hover:scale-150 transition-transform duration-500`}></div>
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${perk.color} flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform`}>
                                    <perk.icon size={28} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{perk.title}</h3>
                                <p className="text-gray-400">{perk.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 🟣 SECTION 6 — WHAT YOU WILL DO */}
            <section className="py-24 bg-slate-900 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideInLeft}
                            className="md:w-5/12 sticky top-24"
                        >
                            <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-2 block">Responsibilities</span>
                            <h2 className="text-4xl font-bold mb-6">Your Responsibilities as an <span className="text-indigo-400">Ambassador</span></h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                As the face of InternzLearn, you play a crucial role in connecting students with the right opportunities. It's not just about sharing links; it's about leading a community.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleApplyClick}
                                className="px-8 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-lg"
                            >
                                Start Your Journey
                            </motion.button>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="md:w-7/12 space-y-6"
                        >
                            {[
                                { title: "Spread Awareness", desc: "Share posters, reels, and updates", icon: Megaphone },
                                { title: "Educate Students", desc: "Explain program benefits and clear doubts", icon: BookOpen },
                                { title: "Connect Interested Students", desc: "Share links & guide them through registration", icon: Share2 },
                                { title: "Collect Leads", desc: "Help students register for relevant programs", icon: UserPlus },
                                { title: "Run Campus Activities", desc: "Organize workshops & campaigns", icon: Users },
                                { title: "Represent InternzLearn", desc: "Be the official campus point of contact", icon: Award }
                            ].map((task, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    whileHover={{ x: 10, borderColor: "rgba(99, 102, 241, 0.3)" }}
                                    className="flex items-start gap-6 p-6 bg-slate-950 border border-white/5 rounded-2xl transition-all"
                                >
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 text-indigo-400">
                                        <task.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">{task.title}</h4>
                                        <p className="text-gray-400">{task.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 🟣 SECTION 7 — PROGRAMS YOU PROMOTE */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Programs You Will Promote</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Help students choose the right path for their career growth.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideInLeft}
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/10 p-10 h-full transition-all"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] group-hover:bg-blue-600/20 transition-all"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 text-blue-400 group-hover:scale-110 transition-transform">
                                    <Target size={40} />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Career Starter Programs</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    Industry-ready training designed for beginners. These programs include hands-on projects, certification, and fundamental skill building.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {['Project-based Learning', 'Beginner Friendly', 'Certified Training'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle size={18} className="text-blue-500" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideInRight}
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/10 p-10 h-full transition-all"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] group-hover:bg-purple-600/20 transition-all"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-8 text-purple-400 group-hover:scale-110 transition-transform">
                                    <Star size={40} />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Mentorship Programs</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    Guided learning with industry experts. Perfect for students looking for deep dives, specialized skills, and career roadmap planning.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {['Expert Mentors', 'Advanced Curriculum', 'Career Guidance'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle size={18} className="text-purple-500" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 🟣 SECTION 8 — SELECTION PROCESS */}
            <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-20"
                    >
                        <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-2 block">How It Works</span>
                        <h2 className="text-4xl font-bold mb-4">How to Become a Campus Ambassador</h2>
                    </motion.div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 rounded-full origin-left"
                        ></motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-4 gap-8"
                        >
                            {[
                                { step: "Step 1", title: "Apply Online", desc: "Fill the application form", color: "blue" },
                                { step: "Step 2", title: "Profile Screening", desc: "We review your motivation", color: "purple" },
                                { step: "Step 3", title: "Interaction", desc: "Quick discussion round", color: "pink" },
                                { step: "Step 4", title: "Selected 🎉", desc: "You're officially onboard", color: "green" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={scaleIn}
                                    className="relative z-10 flex flex-col items-center text-center group"
                                >
                                    <div className={`w-16 h-16 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center font-bold text-xl text-white mb-6 shadow-[0_0_20px_rgba(79,70,229,0.3)] bg-gradient-to-br from-${item.color}-500 to-${item.color}-700 group-hover:scale-110 transition-transform duration-300`}>
                                        {idx + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 🟣 SECTION 9 — TESTIMONIALS */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-3xl font-bold mb-12 text-center"
                    >
                        What Our Ambassadors Say
                    </motion.h2>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                                className="bg-white/5 border border-white/5 p-8 rounded-2xl relative transition-all"
                            >
                                <div className="absolute -top-4 -left-4 text-6xl text-indigo-500/20 font-serif">"</div>
                                <p className="text-gray-300 italic mb-6 relative z-10">{t.quote}</p>
                                <div className="flex items-center gap-4">
                                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500" />
                                    <div>
                                        <h4 className="font-bold text-white text-sm">{t.name}</h4>
                                        <p className="text-xs text-gray-500">{t.college}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 🟣 SECTION 10 — FAQ */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-3xl font-bold mb-12 text-center"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <div className="space-y-4">
                        {faqs.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-950 border border-white/5 rounded-xl overflow-hidden"
                            >
                                <button
                                    className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors focus:outline-none"
                                    onClick={() => toggleFaq(i)}
                                >
                                    <span className="font-medium text-white">{f.q}</span>
                                    {openFaq === i ? <ChevronUp size={20} className="text-indigo-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-6 pb-6 text-gray-400 border-t border-white/5 overflow-hidden"
                                        >
                                            <div className="pt-4">{f.a}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🟣 FINAL CTA SECTION */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={scaleIn}
                        className="bg-gradient-to-r from-indigo-900 to-purple-900 border border-white/10 p-12 md:p-20 rounded-[3rem] relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Learn, Lead, and Earn?</h2>
                            <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
                                Join the fastest growing student ambassador network and build your career before graduation.
                            </p>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-6"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleApplyClick}
                                    className="px-10 py-5 bg-white text-indigo-900 font-bold rounded-xl hover:bg-indigo-50 transition-all shadow-xl text-lg w-full sm:w-auto"
                                >
                                    Apply Now
                                </motion.button>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="/Internz%20learn%20brochure.pdf"
                                    download="Internz_Learn_Brochure.pdf"
                                    className="px-10 py-5 bg-indigo-800/50 border border-indigo-400/30 text-white font-bold rounded-xl hover:bg-indigo-800 transition-all backdrop-blur-md text-lg w-full sm:w-auto"
                                >
                                    Download Brochure
                                </motion.a>
                            </motion.div>

                            <p className="mt-8 text-sm text-indigo-300/60 uppercase tracking-widest font-semibold">
                                Limited Ambassador Slots Per College
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Form Modal */}
            <AnimatePresence>
                {showForm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl hide-scrollbar"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowForm(false)}
                                className="absolute top-6 right-6 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                            <CampusAmbassadorForm />
                        </motion.div>
                        <div className="absolute inset-0 -z-10" onClick={() => setShowForm(false)}></div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default CampusAmbassador;
