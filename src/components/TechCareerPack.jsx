import React, { useState } from 'react';
import {
    Search,
    CheckCircle2,
    X,
    Sparkles,
    Layers,
    BadgeCheck,
    Zap,
    Briefcase,
    ArrowRight,
    PlayCircle,
    Star,
    Trash2,
    Loader2,
    ChevronRight,
    Rocket,
    Target,
    Users,
    Award,
    ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import techCareerHero from '../assets/tech-career-hero.png';

const COURSES = [
    { id: 'tcp1', slug: 'artificial-intelligence', title: 'Artificial Intelligence', duration: '1 Month', level: 'Advanced', popular: true, rating: 4.9, image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&q=80' },
    { id: 'tcp2', slug: 'machine-learning', title: 'Machine Learning (ML)', duration: '1 Month', level: 'Advanced', popular: true, rating: 4.9, image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&q=80' },
    { id: 'tcp3', slug: 'cloud-computing', title: 'Cloud Computing', duration: '1 Month', level: 'Advanced', popular: true, rating: 4.8, image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80' },
    { id: 'tcp4', slug: 'cybersecurity', title: 'Cybersecurity', duration: '1 Month', level: 'Advanced', popular: true, rating: 4.8, image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80' },
    { id: 'tcp5', slug: 'full-stack-web-development', title: 'Full Stack & Web Development', duration: '1 Month', level: 'Intermediate', popular: true, rating: 4.7, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80' },
    { id: 'tcp6', slug: 'drone-engineering', title: 'Drone Engineering', duration: '1 Month', level: 'Intermediate', popular: false, rating: 4.6, image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=500&q=80' },
    { id: 'tcp7', slug: 'python-java-programming', title: 'Python & Java Programming', duration: '1 Month', level: 'Beginner', popular: false, rating: 4.5, image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80' },
    { id: 'tcp8', slug: 'devops-engineering', title: 'DevOps Engineering', duration: '1 Month', level: 'Advanced', popular: true, rating: 4.7, image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&q=80' },
    { id: 'tcp9', slug: 'blockchain-technology', title: 'Blockchain Technology', duration: '1 Month', level: 'Advanced', popular: false, rating: 4.6, image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=500&q=80' },
    { id: 'tcp10', slug: 'data-science-fundamentals', title: 'Data Science Fundamentals', duration: '1 Month', level: 'Beginner', popular: true, rating: 4.6, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80' },
];

const PRICE_LIVE = 6000;
const PRICE_RECORDED = 4000;

const FAQS = [
    { question: 'Are there any prerequisites before starting a course?', answer: 'No specific prerequisites. The courses are designed for beginners and cover all fundamentals from scratch.' },
    { question: 'What is the duration of each course?', answer: 'Each Kickstarter course is of the duration of one month. During this time, you will work on projects and assignments.' },
    { question: 'What is the validity of each course?', answer: 'You get lifetime access to the course content, including all recorded sessions and study materials.' },
    { question: 'Are the study hours flexible?', answer: 'Yes, absolutely! For recorded courses, you can watch at your own pace. For live sessions, recordings are provided if you miss them.' },
    { question: 'Do you have an option for Free-trial?', answer: 'Yes, we provide the first module and introductory live session completely free so you can evaluate the learning experience.' },
    { question: 'If I pay for a course now, will I able to start the course later?', answer: 'Yes! Your course validity begins exactly from the day you choose to start learning, not from the date of payment.' }
];

const TechCareerPackSelection = () => {
    const navigate = useNavigate();
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [activeFaq, setActiveFaq] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    const [loadingPayment, setLoadingPayment] = useState(false);
    const [modalCourse, setModalCourse] = useState(null);

    const filteredCourses = COURSES.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const selectCourse = (course, mode, e) => {
        e.stopPropagation(); // prevent card click when clicking buttons
        const price = mode === 'live' ? PRICE_LIVE : PRICE_RECORDED;
        const existingIndex = selectedCourses.findIndex(c => c.id === course.id);
        if (existingIndex >= 0) {
            setSelectedCourses(prev => {
                const newArr = [...prev];
                newArr[existingIndex] = { ...course, mode, price };
                return newArr;
            });
        } else {
            setSelectedCourses(prev => [...prev, { ...course, mode, price }]);
        }
    };

    const removeCourse = (courseId, e) => {
        if (e) e.stopPropagation();
        setSelectedCourses(prev => prev.filter(c => c.id !== courseId));
    };

    const clearSelection = () => setSelectedCourses([]);

    const baseValuePerCourse = 10000;
    const currentPrice = selectedCourses.reduce((sum, c) => sum + c.price, 0);
    const totalValue = selectedCourses.length * baseValuePerCourse;
    const savings = totalValue - currentPrice;
    const minCourses = 2;
    const maxCourses = 10;
    const isSelectionValid = selectedCourses.length >= minCourses;

    const handlePayment = () => {
        setLoadingPayment(true);
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onerror = () => { alert('Razorpay SDK failed to load.'); setLoadingPayment(false); };
        script.onload = () => {
            const options = {
                key: 'rzp_live_SC3NdmLYHHNtCs',
                amount: currentPrice * 100,
                currency: 'INR',
                name: 'InternzLearn',
                description: `Tech Career Pack (${selectedCourses.length} Courses)`,
                image: 'https://internzlearn.com/logo.png',
                handler: (response) => { setLoadingPayment(false); alert(`Payment Successful! ID: ${response.razorpay_payment_id}`); },
                prefill: { name: '', email: '', contact: '' },
                theme: { color: '#00AEEF' },
                modal: { ondismiss: () => setLoadingPayment(false) },
            };
            new window.Razorpay(options).open();
        };
        document.body.appendChild(script);
    };

    return (
        <div className="min-h-screen bg-[#020617] text-white font-sans pt-20 relative overflow-x-hidden selection:bg-indigo-500/30">

            {/* Ambient BG */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-600/5 rounded-full blur-[150px] mix-blend-screen" />
            </div>

            {/* Notification Toast */}
            <AnimatePresence>
                {showNotification && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: -20, x: '-50%' }}
                        className="fixed top-24 left-1/2 z-[100] bg-red-500/10 border border-red-500/50 text-red-200 px-6 py-3 rounded-full shadow-2xl backdrop-blur-xl flex items-center gap-3"
                    >
                        <div className="bg-red-500 rounded-full p-1"><X size={12} className="text-white" /></div>
                        <span className="font-medium text-sm">Limit reached.</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Course Detail Modal */}
            <AnimatePresence>
                {modalCourse && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setModalCourse(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setModalCourse(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Left Side */}
                            <div className="md:w-1/3 p-8 bg-[#0a0f1a] flex flex-col items-center justify-center text-center relative overflow-hidden shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
                                <div className="relative z-10 w-48 h-48 bg-[#05080f] shadow-2xl shadow-black border border-white/5 rounded-2xl flex items-center justify-center p-6 text-white text-2xl font-bold leading-tight">
                                    {modalCourse.title}
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="md:w-2/3 p-6 md:p-10 overflow-y-auto bg-white flex flex-col">
                                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-slate-900 leading-tight">Your Learning Journey In a Nutshell</h2>
                                <p className="text-slate-500 text-sm mb-8">From the basics to an advanced curriculum, explore modules that help you kick-start your career</p>

                                <div className="space-y-4">
                                    {[
                                        { title: 'Introduction & Foundations', live: '2 Live Classes', proj: '1 Project' },
                                        { title: 'Core Concepts & Techniques', live: '3 Live Classes', proj: '1 Project' },
                                        { title: 'Advanced Applications', live: '3 Live Classes', proj: '2 Projects' },
                                        { title: 'Capstone Project Integration', live: '2 Live Classes', proj: '1 Project' },
                                    ].map((mod, i) => (
                                        <div key={i} className="border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-300 transition-colors bg-slate-50">
                                            <div className="flex items-center gap-3 font-semibold text-slate-800">
                                                <ChevronRight className="text-slate-400 w-4 h-4" />
                                                {mod.title}
                                            </div>
                                            <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                                                <span className="bg-orange-100 text-orange-600 px-3 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap">
                                                    <Zap size={12} className="fill-orange-600" /> {mod.live}
                                                </span>
                                                <span className="bg-amber-100 text-amber-600 px-3 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap">
                                                    <Briefcase size={12} className="fill-amber-600" /> {mod.proj}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section className="relative pt-8 pb-16 lg:pt-12 lg:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="max-w-3xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-3 mb-4"
                            >
                                <span className="px-3 py-1 bg-gradient-to-r from-primaryBlue to-accentGreen rounded-full text-[10px] font-bold uppercase tracking-widest text-black shadow-lg shadow-blue-500/20">
                                    Official Pack
                                </span>
                                <div className="h-px w-10 bg-white/20" />
                                <span className="text-xs font-medium text-blue-300 tracking-wider uppercase">Tech Career</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-6xl md:text-8xl font-black leading-tight mb-6 tracking-tighter"
                            >
                                Tech Career <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                                    Pack
                                </span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-6 mb-8"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#0B0F14] flex items-center justify-center text-[10px] text-white font-bold ${i === 1 ? 'bg-blue-500' : i === 2 ? 'bg-purple-500' : 'bg-green-500'}`}>
                                                {i === 1 ? 'A' : i === 2 ? 'R' : 'S'}
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-white text-lg font-bold">15.2k Enrolled</span>
                                </div>
                                <div className="h-6 w-px bg-white/10" />
                                <div className="flex items-center gap-2">
                                    <Star size={20} className="text-yellow-400 fill-yellow-400" />
                                    <span className="text-white text-lg font-bold">4.8 Rating</span>
                                </div>
                            </motion.div>

                            <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-light">
                                Click any course below to explore its full detail page, or select courses to build your custom pack.
                                Mix and match <span className="text-yellow-300">Live</span> and <span className="text-purple-300">Recorded</span> classes.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="w-full lg:w-[450px] relative perspective-1000 mt-8 lg:mt-0"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0B0F14] transform hover:scale-[1.02] transition-transform duration-500">
                                <div className="bg-[#1A1F26] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className="ml-4 flex-1 bg-[#0B0F14] rounded-md h-6 w-1/2" />
                                </div>
                                <img src={techCareerHero} alt="Tech Career Pack" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" />
                                <div className="absolute -bottom-6 -left-6 bg-[#1A1F26] border border-white/10 p-4 rounded-xl shadow-2xl z-20 hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-500/20 p-2 rounded-lg">
                                            <BadgeCheck className="text-green-400" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-sm">Placement Support</p>
                                            <p className="text-gray-400 text-xs">Included with Pack</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Interface */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 flex flex-col lg:flex-row gap-10 relative z-10">

                <div className="flex-1">
                    {/* Visual Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {[
                            { step: '01', title: 'Click a Course', text: 'Explore the full details of any domain', icon: Search },
                            { step: '02', title: 'Customize Mode', text: 'Live or Recorded for each course', icon: Layers },
                            { step: '03', title: 'Start Learning', text: 'Get instant access & certificates', icon: Rocket },
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className="relative overflow-hidden bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-6 group hover:from-white/[0.08] hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] backdrop-blur-sm">
                                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
                                    <div className="flex justify-between items-start mb-4 relative z-10">
                                        <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center border border-white/10 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-colors duration-500">
                                            <Icon className="text-slate-400 group-hover:text-blue-400 transition-colors" size={24} />
                                        </div>
                                        <div className="text-5xl font-black text-white/[0.03] group-hover:text-white/[0.08] transition-colors pointer-events-none select-none">
                                            {item.step}
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-lg text-white mb-2 relative z-10">{item.title}</h3>
                                    <p className="text-sm text-slate-400 relative z-10">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Search Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                Available Courses
                                <span className="text-xs font-bold bg-white/10 text-slate-300 px-2.5 py-1 rounded-md border border-white/5">
                                    {filteredCourses.length}
                                </span>
                            </h2>
                            <p className="text-slate-500 text-xs mt-1">Click a course card to view full details</p>
                        </div>
                        <div className="relative w-full md:w-72 group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative bg-slate-900 border border-white/10 rounded-xl flex items-center overflow-hidden focus-within:border-blue-500/50 transition-colors">
                                <Search className="ml-4 text-slate-500 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Search courses..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-transparent border-none text-white text-sm px-4 py-3 placeholder:text-slate-600 focus:outline-none focus:ring-0"
                                />
                            </div>
                        </div>
                    </div>

                    {/* ── Course Grid ── */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        <AnimatePresence mode="popLayout">
                            {filteredCourses.map((course) => {
                                const selectedCourse = selectedCourses.find(c => c.id === course.id);
                                const isSelected = !!selectedCourse;

                                return (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        whileHover={{ y: -4 }}
                                        key={course.id}
                                        onClick={() => setModalCourse(course)}
                                        className={`relative group p-6 rounded-3xl border overflow-hidden transition-all duration-500 flex flex-col h-full backdrop-blur-md cursor-pointer ${isSelected
                                            ? 'bg-gradient-to-br from-blue-900/40 to-indigo-900/20 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.3)] scale-[1.02] z-20'
                                            : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] z-10'
                                            }`}
                                    >
                                        {/* Hover glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                        {/* Course Image */}
                                        <div className="w-full h-32 rounded-xl mb-4 overflow-hidden relative z-10 border border-white/5 bg-black/50 shrink-0">
                                            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#0b0f19] z-10 opacity-80" />
                                            <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                            {/* Top row with badges overlay */}
                                            <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-20">
                                                <div className="flex items-center gap-2">
                                                    {course.popular ? (
                                                        <div className="bg-amber-500/90 border border-amber-400 text-white shadow-lg text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
                                                            <Sparkles size={10} /> BESTSELLER
                                                        </div>
                                                    ) : (
                                                        <div className="bg-black/50 border border-white/20 text-white shadow-lg text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
                                                            <Layers size={10} /> {course.level}
                                                        </div>
                                                    )}
                                                </div>
                                                {isSelected && (
                                                    <div className="bg-blue-500 text-white rounded-full p-0.5 shadow-lg shadow-blue-500/40">
                                                        <CheckCircle2 size={16} strokeWidth={3} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>


                                        <h3 className="font-bold text-lg text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors relative z-10">
                                            {course.title}
                                        </h3>

                                        <div className="flex items-center gap-4 text-xs text-slate-400 mb-5 relative z-10">
                                            <span className="flex items-center gap-1.5">
                                                <PlayCircle size={12} className="text-slate-500" /> {course.duration}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Star size={12} className="text-amber-500 fill-amber-500" /> {course.rating}
                                            </span>
                                        </div>

                                        {/* Explore Course Button */}
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); setModalCourse(course); }}
                                            className="self-start mt-2 mb-4 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-bold flex items-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all z-10 relative group-hover:border-blue-500/30 group-hover:text-blue-300"
                                        >
                                            Explore Course <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </button>

                                        {/* Mode selection buttons */}
                                        <div className="mt-auto relative z-10 space-y-2">
                                            {isSelected ? (
                                                <div className="space-y-2">
                                                    <div className={`p-2 rounded-lg border flex items-center justify-between gap-2 ${selectedCourse.mode === 'live'
                                                        ? 'bg-blue-500/20 border-blue-500/30 text-blue-300'
                                                        : 'bg-purple-500/20 border-purple-500/30 text-purple-300'}`}>
                                                        <div className="flex items-center gap-2 text-xs font-bold">
                                                            {selectedCourse.mode === 'live' ? <Zap size={12} className="text-yellow-300 fill-yellow-300" /> : <PlayCircle size={12} />}
                                                            {selectedCourse.mode === 'live' ? 'Live Selected' : 'Recorded Selected'}
                                                        </div>
                                                        <span className="text-xs font-bold">₹{selectedCourse.price.toLocaleString()}</span>
                                                    </div>
                                                    <button
                                                        onClick={(e) => removeCourse(course.id, e)}
                                                        className="w-full py-2 rounded-lg text-xs font-medium text-red-300 bg-red-500/10 hover:bg-red-500/20 border border-red-500/10 transition-colors flex items-center justify-center gap-1"
                                                    >
                                                        <Trash2 size={12} /> Remove
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-2 gap-2">
                                                    <button
                                                        onClick={(e) => selectCourse(course, 'recorded', e)}
                                                        className="py-2 px-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/30 transition-all text-left"
                                                    >
                                                        <div className="text-[10px] uppercase font-bold text-purple-300 mb-0.5 flex items-center gap-1">
                                                            <PlayCircle size={10} /> Recorded
                                                        </div>
                                                        <div className="text-sm font-bold text-white">₹{PRICE_RECORDED.toLocaleString()}</div>
                                                    </button>
                                                    <button
                                                        onClick={(e) => selectCourse(course, 'live', e)}
                                                        className="py-2 px-2 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all text-left"
                                                    >
                                                        <div className="text-[10px] uppercase font-bold text-yellow-300 mb-0.5 flex items-center gap-1">
                                                            <Zap size={10} className="fill-yellow-300" /> Live
                                                        </div>
                                                        <div className="text-sm font-bold text-white">₹{PRICE_LIVE.toLocaleString()}</div>
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>

                    {/* How You Will Learn Section */}
                    <div className="mt-20 pt-16 border-t border-white/10">
                        <div className="mb-10 lg:mb-12 text-left md:text-center max-w-2xl md:mx-auto">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Here’s how you will learn</h2>
                            <p className="text-slate-400 text-lg">The courses are designed specially for beginners</p>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-16">
                            {/* Left Side: Image Visual */}
                            <div className="relative rounded-[2rem] overflow-hidden group border border-white/10 shadow-2xl h-80 lg:h-auto hidden lg:block">
                                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay z-10" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#020617] via-transparent to-transparent z-10" />
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" alt="Students learning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute bottom-8 left-8 z-20">
                                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl flex items-center gap-4 shadow-2xl">
                                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                                            <BadgeCheck className="text-white" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-lg">Premium Learning</p>
                                            <p className="text-white/70 text-sm">Industry-vetted curriculum</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Pointers */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
                                {[
                                    { icon: Target, title: 'Pick courses that you would like to explore', desc: 'With over 8 courses, you can create a combination that suits your interests', color: 'text-blue-400', bg: 'bg-blue-500/10' },
                                    { icon: Users, title: 'Learn LIVE from industry experts', desc: 'Captains work for top brands and are here to help you get there', color: 'text-purple-400', bg: 'bg-purple-500/10' },
                                    { icon: Briefcase, title: 'Work on projects & complete milestones', desc: 'Projects that will help you get real-world practical experience', color: 'text-orange-400', bg: 'bg-orange-500/10' },
                                    { icon: Award, title: 'Unlock certificates & internship opportunities', desc: 'Industry-recognised certificates which are resume-worthy', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                                ].map((pt, i) => (
                                    <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 group shadow-lg">
                                        <div className={`w-12 h-12 ${pt.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/10 border border-transparent group-hover:border-white/10 transition-all`}>
                                            <pt.icon className={pt.color} size={24} />
                                        </div>
                                        <h4 className="text-white font-bold text-[15px] mb-2 leading-snug">{pt.title}</h4>
                                        <p className="text-slate-400 text-xs leading-relaxed">{pt.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Stats Impact Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border border-white/10 rounded-3xl overflow-hidden bg-white/[0.02] backdrop-blur-sm shadow-xl">
                    {[
                        { number: '91%', label: 'Completion Rate' },
                        { number: '15,200+', label: 'Students Enrolled' },
                        { number: '93%', label: 'Live Engagement' },
                        { number: '4.8 / 5', label: 'Student Satisfaction' },
                    ].map((stat, i) => (
                        <div key={i} className="p-8 text-center group hover:bg-white/[0.04] transition-colors">
                            <div className="text-4xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors tracking-tight">{stat.number}</div>
                            <div className="text-slate-500 text-sm font-medium uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Career Outcomes */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div>
                        <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Where You Can Go</p>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">Careers you can build<br className="hidden md:block" /> after this pack</h2>
                    </div>
                    <p className="text-slate-400 max-w-xs leading-relaxed text-sm">These are the real roles our students land at. Domain expertise is the shortcut to a focused career path.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {[
                        { role: 'AI / ML Engineer', desc: 'Build models that power intelligent systems, recommendations, and automation.', badge: 'High Demand', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80' },
                        { role: 'Cloud Architect', desc: 'Design and manage scalable infrastructure for global-scale applications.', badge: 'High Salary', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80' },
                        { role: 'Cybersecurity Analyst', desc: 'Identify threats, protect systems, and keep organisations secure.', badge: 'Critical Role', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80' },
                        { role: 'Full Stack Developer', desc: 'Own the entire product from API to polished UI, from day one.', badge: 'Versatile', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80' },
                        { role: 'DevOps Engineer', desc: 'Automate deployments, monitor systems, and keep teams shipping fast.', badge: 'Evergreen', img: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=80' },
                        { role: 'Data Scientist', desc: 'Turn raw data into actionable insight that drives product and business decisions.', badge: 'Future-Proof', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
                    ].map((c, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                            <div className="h-32 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[#020617] z-10" />
                                <img src={c.img} alt={c.role} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-3 left-3 z-20">
                                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-500/80 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">{c.badge}</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-white text-base mb-1.5 group-hover:text-blue-400 transition-colors">{c.role}</h4>
                                <p className="text-slate-400 text-xs leading-relaxed">{c.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* What You Get Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 relative z-10">
                <div className="text-center mb-12">
                    <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Every Course Includes</p>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">What this pack gives you</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: Zap, title: 'Live Interactive Sessions', desc: 'Join live classes with industry mentors every week. Ask questions directly, not in a forum thread.', accent: 'from-yellow-500/20 to-orange-500/10', border: 'border-yellow-500/20', iconColor: 'text-yellow-400', iconBg: 'bg-yellow-500/10' },
                        { icon: Users, title: 'Expert Industry Mentors', desc: 'Your mentors come from companies like Infosys, TCS, and global MNCs. Real work experience, real guidance.', accent: 'from-blue-500/20 to-cyan-500/10', border: 'border-blue-500/20', iconColor: 'text-blue-400', iconBg: 'bg-blue-500/10' },
                        { icon: Award, title: 'Dual Certificates Per Course', desc: 'One for course completion, one for your internship. Ten courses means twenty verified credentials.', accent: 'from-emerald-500/20 to-green-500/10', border: 'border-emerald-500/20', iconColor: 'text-emerald-400', iconBg: 'bg-emerald-500/10' },
                        { icon: Briefcase, title: 'Portfolio Projects', desc: 'Every course includes hands-on projects built for real-world conditions, not toy datasets.', accent: 'from-purple-500/20 to-violet-500/10', border: 'border-purple-500/20', iconColor: 'text-purple-400', iconBg: 'bg-purple-500/10' },
                        { icon: Target, title: 'Placement Assistance', desc: 'Resume reviews, mock interviews, and direct referrals to partner companies once you graduate.', accent: 'from-pink-500/20 to-rose-500/10', border: 'border-pink-500/20', iconColor: 'text-pink-400', iconBg: 'bg-pink-500/10' },
                        { icon: PlayCircle, title: 'Lifetime Access to Recordings', desc: 'Miss a session? Every live class is recorded and available to you indefinitely.', accent: 'from-slate-500/20 to-slate-600/10', border: 'border-slate-500/20', iconColor: 'text-slate-400', iconBg: 'bg-slate-500/10' },
                    ].map((item, i) => (
                        <div key={i} className={`relative overflow-hidden rounded-2xl border ${item.border} bg-gradient-to-br ${item.accent} p-7 group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 backdrop-blur-sm`}>
                            <div className={`w-11 h-11 ${item.iconBg} rounded-xl flex items-center justify-center mb-5 border border-white/5`}>
                                <item.icon className={item.iconColor} size={22} />
                            </div>
                            <h4 className="text-white font-bold text-base mb-2">{item.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mega Bonus Section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                <div className="relative rounded-[2.5rem] p-10 lg:p-14 overflow-hidden bg-gradient-to-br from-indigo-900/30 to-blue-900/10 border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.15)] group">
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all duration-700 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-all duration-700 pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                                <Award size={14} /> Ultimate Pack Advantage
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                                Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">20 Certificates</span>
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                Choose all 10 programs from the Tech Career Pack to accelerate your career. For every course you complete, you'll earn <strong className="text-white relative"><span className="relative z-10">two certificates</span><span className="absolute bottom-0 left-0 w-full h-2 bg-blue-500/30 -z-10"></span></strong>—one for Course Completion and one for your hands-on Internship Experience!
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <div className="flex items-start gap-3 bg-black/20 p-4 rounded-2xl border border-white/5">
                                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0">
                                        <Briefcase className="text-orange-400" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">10 Internship Certs</h4>
                                        <p className="text-slate-400 text-xs text-balance">Verifying your real-world project experience</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-black/20 p-4 rounded-2xl border border-white/5">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                                        <BadgeCheck className="text-emerald-400" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">10 Completion Certs</h4>
                                        <p className="text-slate-400 text-xs text-balance">Validating your domain knowledge & skills</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-md lg:max-w-none relative flex justify-center perspective-1000">
                            <div className="absolute inset-0 bg-primaryBlue/20 blur-2xl rounded-full" />
                            <img 
                                src="/certificate.png" 
                                alt="Internship and Completion Certificates" 
                                className="relative w-full h-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 z-10 transform rotate-y-12 rotate-x-6 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer"
                            />
                            {/* Reflection effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 mix-blend-overlay hover:opacity-30 transition-opacity rounded-xl z-20 pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQs Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Still have Doubts?</h2>
                    <p className="text-slate-400 text-lg">We have answered some of the frequent questions for you!</p>
                </div>
                
                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div 
                            key={index} 
                            className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
                        >
                            <button
                                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.05] transition-colors"
                            >
                                <span className="text-white font-bold text-lg pr-8">{faq.question}</span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${activeFaq === index ? 'bg-blue-500 text-white rotate-180' : 'bg-white/5 text-slate-400'}`}>
                                    <ChevronDown size={18} />
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeFaq === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            {/* Persistent Bottom Sticky Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-50">
                <div className="absolute inset-0 bg-[#0B1120]/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]" />
                <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex flex-1 items-center gap-8 w-full md:w-auto">
                            <div className="hidden sm:block">
                                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Total Price</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-bold text-white leading-none">₹{currentPrice.toLocaleString()}</span>
                                    {selectedCourses.length > 0 && <span className="text-xs text-slate-500 line-through ml-1">₹{totalValue.toLocaleString()}</span>}
                                </div>
                            </div>

                            <div className="flex-1 max-w-xs w-full">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Selected Courses</span>
                                    <span className={`text-xs font-bold ${isSelectionValid ? 'text-green-400' : 'text-blue-400'}`}>
                                        {selectedCourses.length} / {maxCourses}
                                    </span>
                                </div>
                                <div className="relative h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="absolute left-[20%] top-0 bottom-0 w-px bg-white/20 z-10" />
                                    <motion.div
                                        className={`h-full ${isSelectionValid ? 'bg-gradient-to-r from-blue-500 to-green-400' : 'bg-blue-500'}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(selectedCourses.length / maxCourses) * 100}%` }}
                                        transition={{ type: 'spring', stiffness: 100 }}
                                    />
                                </div>
                                <div className="flex justify-between text-[8px] text-slate-500 mt-1 uppercase font-bold tracking-tighter">
                                    <span>0</span>
                                    <span className="text-slate-400">Min {minCourses}</span>
                                    <span>Max {maxCourses}</span>
                                </div>
                            </div>

                            {selectedCourses.length > 0 && (
                                <div className="hidden lg:flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                                    <Sparkles size={12} /> Save ₹{savings.toLocaleString()}
                                </div>
                            )}
                        </div>

                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <div className="flex flex-col items-end sm:hidden">
                                <span className="text-xl font-bold text-white">₹{currentPrice.toLocaleString()}</span>
                                <span className="text-green-400 text-[10px] font-bold uppercase">Save {Math.round((savings / totalValue) * 100) || 0}%</span>
                            </div>

                            <button
                                disabled={!isSelectionValid || loadingPayment}
                                onClick={handlePayment}
                                className={`flex-1 md:flex-none px-12 py-4 rounded-2xl font-black flex items-center justify-center gap-3 transition-all duration-500 text-lg uppercase tracking-wider overflow-hidden relative group ${isSelectionValid
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] hover:-translate-y-1 active:scale-95 border border-white/10'
                                    : 'bg-white/5 text-slate-500 cursor-not-allowed border border-white/5'
                                    }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                <span className="relative z-10 flex items-center gap-3">
                                    {loadingPayment
                                        ? <Loader2 className="animate-spin" size={24} />
                                        : isSelectionValid
                                            ? 'Enroll Now'
                                            : `Select at least ${minCourses}`}
                                    {isSelectionValid && !loadingPayment && <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechCareerPackSelection;
