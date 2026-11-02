import React, { useState } from 'react';
import {
    Search,
    CheckCircle2,
    X,
    Sparkles,
    Layers,
    BadgeCheck,
    Cpu,
    Zap,
    Briefcase,
    HeartPulse,
    Palette,
    ArrowRight,
    PlayCircle,
    Star,
    Info,
    Trash2,
    Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import startupHero from '../assets/startup-bg.png';
import { useCoupon } from '../hooks/useCoupon';
import CouponInput from '../components/CouponInput';

const COURSES = [
    { id: 'sp1', title: 'Entrepreneurship', duration: '12 weeks', level: 'Advanced', popular: true, rating: 4.8 },
    { id: 'sp2', title: 'Digital Marketing', duration: '10 weeks', level: 'Intermediate', popular: true, rating: 4.7 },
    { id: 'sp3', title: 'Branding & Advertising', duration: '8 weeks', level: 'Intermediate', popular: true, rating: 4.6 },
    { id: 'sp4', title: 'HR Management', duration: '8 weeks', level: 'Beginner', popular: false, rating: 4.5 },
    { id: 'sp5', title: 'Finance for Founders', duration: '6 weeks', level: 'Advanced', popular: true, rating: 4.9 },
    { id: 'sp6', title: 'AI for Startups', duration: '8 weeks', level: 'Intermediate', popular: true, rating: 4.8 },
    { id: 'sp7', title: 'Pitching to Investors', duration: '4 weeks', level: 'Advanced', popular: false, rating: 4.7 },
    { id: 'sp8', title: 'Lean Startup Methodology', duration: '6 weeks', level: 'Intermediate', popular: false, rating: 4.6 }
];

const StartupPackSelection = () => {
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    const [loadingPayment, setLoadingPayment] = useState(false);

    // Filter courses based on search
    const filteredCourses = COURSES.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const PRICE_LIVE = 6000;
    const PRICE_RECORDED = 4000;

    const selectCourse = (course, mode) => {
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

    const removeCourse = (courseId) => {
        setSelectedCourses(prev => prev.filter(c => c.id !== courseId));
    };

    const clearSelection = () => setSelectedCourses([]);

    // Pricing Logic
    const baseValuePerCourse = 10000;
    const selectedPrice = selectedCourses.reduce((sum, course) => sum + course.price, 0);
    const totalValue = selectedCourses.length * baseValuePerCourse;
    const coupon = useCoupon(selectedPrice);
    const currentPrice = coupon.discount > 0 ? coupon.discountedPrice : selectedPrice;
    const savings = totalValue - currentPrice;
    const minCourses = 2;
    const maxCourses = 8; // Total courses available is 8
    const isSelectionValid = selectedCourses.length >= minCourses;

    const handlePayment = () => {
        setLoadingPayment(true);
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onerror = () => {
            alert("Razorpay SDK failed to load. Are you online?");
            setLoadingPayment(false);
        };
        script.onload = () => {
            const options = {
                key: "rzp_live_SC3NdmLYHHNtCs",
                amount: currentPrice * 100, // Amount is in currency subunits
                currency: "INR",
                name: "InternzLearn",
                description: `Startup Pack (${selectedCourses.length} Courses)`,
                image: "https://internzlearn.com/logo.png",
                handler: function (response) {
                    setLoadingPayment(false);
                    alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
                },
                prefill: {
                    name: "",
                    email: "",
                    contact: ""
                },
                theme: {
                    color: "#00AEEF"
                },
                modal: {
                    ondismiss: () => setLoadingPayment(false)
                }
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        };
        document.body.appendChild(script);
    };

    return (
        <div className="min-h-screen bg-[#020617] text-white font-sans pt-20 relative overflow-x-hidden selection:bg-orange-500/30">

            {/* Ambient Background Glows */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[100px] mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
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
                                <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-[10px] font-bold uppercase tracking-widest text-black shadow-lg shadow-orange-500/20">
                                    Official Pack
                                </span>
                                <div className="h-px w-10 bg-white/20"></div>
                                <span className="text-xs font-medium text-orange-300 tracking-wider uppercase">Startup</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-6xl md:text-8xl font-black leading-tight mb-6 tracking-tighter"
                            >
                                Startup <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 animate-text drop-shadow-[0_0_30px_rgba(249,115,22,0.5)]">
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
                                            <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#0B0F14] flex items-center justify-center text-[10px] text-white font-bold ${i === 1 ? 'bg-orange-500' : i === 2 ? 'bg-amber-500' : 'bg-yellow-500'}`}>
                                                {i === 1 ? 'A' : i === 2 ? 'R' : 'S'}
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-white text-lg font-bold">10.3k Enrolled</span>
                                </div>
                                <div className="h-6 w-px bg-white/10"></div>
                                <div className="flex items-center gap-2">
                                    <Star size={20} className="text-yellow-400 fill-yellow-400" />
                                    <span className="text-white text-lg font-bold">4.5 Rating</span>
                                </div>
                            </motion.div>

                            <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-light">
                                Select your courses from the list below.
                                Mix and match <span className="text-yellow-300">Live</span> and <span className="text-purple-300">Recorded</span> classes to create your perfect Startup Pack.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="w-full lg:w-[450px] relative perspective-1000 mt-8 lg:mt-0"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0B0F14] transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700">
                                {/* Browser Header mockup */}
                                <div className="bg-[#1A1F26] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <div className="ml-4 flex-1 bg-[#0B0F14] rounded-md h-6 w-1/2"></div>
                                </div>
                                <img
                                    src={startupHero}
                                    alt="Startup Pack"
                                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                                />

                                {/* Float Element */}
                                <div className="absolute -bottom-6 -left-6 bg-[#1A1F26] border border-white/10 p-4 rounded-xl shadow-2xl z-20 hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-orange-500/20 p-2 rounded-lg">
                                            <Briefcase className="text-orange-400" size={24} />
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                        {[
                            { step: "01", title: "Select Courses", text: "Choose from high-demand startup skills" },
                            { step: "02", title: "Customize Mode", text: "Live or Recorded for each course" },
                            { step: "03", title: "Start Learning", text: "Get instant access & certificates" }
                        ].map((item, idx) => (
                            <div key={idx} className="relative overflow-hidden bg-white/[0.03] border border-white/5 rounded-2xl p-5 group hover:bg-white/[0.05] transition-colors">
                                <div className="text-4xl font-bold text-white/5 absolute -top-2 -right-2 group-hover:text-white/10 transition-colors pointer-events-none select-none">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-white mb-1 relative z-10">{item.title}</h3>
                                <p className="text-xs text-slate-400 relative z-10">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Search Bar & Stats */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                Available Courses
                                <span className="text-xs font-bold bg-white/10 text-slate-300 px-2.5 py-1 rounded-md border border-white/5">
                                    {filteredCourses.length}
                                </span>
                            </h2>
                        </div>
                        <div className="relative w-full md:w-72 group">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative bg-slate-900 border border-white/10 rounded-xl flex items-center overflow-hidden focus-within:border-orange-500/50 transition-colors">
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

                    {/* Course Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredCourses.map(course => {
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
                                        className={`relative group p-5 rounded-2xl border overflow-hidden transition-all duration-300 flex flex-col h-full ${isSelected
                                            ? 'bg-orange-600/10 border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.15)]'
                                            : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                                            }`}
                                    >
                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                        <div className="flex justify-between items-start mb-4 relative z-10">
                                            {course.popular ? (
                                                <div className="bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                                    <Sparkles size={10} /> BESTSELLER
                                                </div>
                                            ) : (
                                                <div className="bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                                    <Layers size={10} /> {course.level}
                                                </div>
                                            )}

                                            {isSelected && (
                                                <div className="bg-orange-500 text-white rounded-full p-0.5 shadow-lg shadow-orange-500/40">
                                                    <CheckCircle2 size={16} strokeWidth={3} />
                                                </div>
                                            )}
                                        </div>

                                        <h3 className="font-bold text-lg text-white mb-2 leading-snug group-hover:text-orange-400 transition-colors relative z-10">
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

                                        <div className="mt-auto relative z-10 space-y-2">
                                            {isSelected ? (
                                                <div className="space-y-2">
                                                    <div className={`p-2 rounded-lg border flex items-center justify-between gap-2 ${selectedCourse.mode === 'live'
                                                        ? 'bg-orange-500/20 border-orange-500/30 text-orange-300'
                                                        : 'bg-purple-500/20 border-purple-500/30 text-purple-300'}`}>
                                                        <div className="flex items-center gap-2 text-xs font-bold">
                                                            {selectedCourse.mode === 'live' ? <Zap size={12} className="text-yellow-300 fill-yellow-300" /> : <PlayCircle size={12} />}
                                                            {selectedCourse.mode === 'live' ? 'Live Selected' : 'Recorded Selected'}
                                                        </div>
                                                        <span className="text-xs font-bold">₹{selectedCourse.price.toLocaleString()}</span>
                                                    </div>
                                                    <button
                                                        onClick={() => removeCourse(course.id)}
                                                        className="w-full py-2 rounded-lg text-xs font-medium text-red-300 bg-red-500/10 hover:bg-red-500/20 border border-red-500/10 transition-colors flex items-center justify-center gap-1"
                                                    >
                                                        <Trash2 size={12} /> Remove
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-2 gap-2">
                                                    <button
                                                        onClick={() => selectCourse(course, 'recorded')}
                                                        className="py-2 px-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/30 transition-all text-left group/btn"
                                                    >
                                                        <div className="text-[10px] uppercase font-bold text-purple-300 mb-0.5 flex items-center gap-1">
                                                            <PlayCircle size={10} /> Recorded
                                                        </div>
                                                        <div className="text-sm font-bold text-white group-hover/btn:text-purple-200">
                                                            ₹{PRICE_RECORDED.toLocaleString()}
                                                        </div>
                                                    </button>

                                                    <button
                                                        onClick={() => selectCourse(course, 'live')}
                                                        className="py-2 px-2 rounded-lg bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 hover:border-orange-500/30 transition-all text-left group/btn"
                                                    >
                                                        <div className="text-[10px] uppercase font-bold text-yellow-300 mb-0.5 flex items-center gap-1">
                                                            <Zap size={10} className="fill-yellow-300" /> Live
                                                        </div>
                                                        <div className="text-sm font-bold text-white group-hover/btn:text-orange-200">
                                                            ₹{PRICE_LIVE.toLocaleString()}
                                                        </div>
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Sticky Sidebar (Desktop) */}
                <div className="hidden lg:block w-80 relative">
                    <div className="sticky top-28 space-y-4">
                        <div className="bg-[#0B1120] border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden relative">
                            {/* Decorative lighting */}
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        <BadgeCheck className="text-orange-500" size={20} />
                                        Your Pack
                                    </h3>
                                    {selectedCourses.length > 0 && (
                                        <button
                                            onClick={clearSelection}
                                            className="text-[10px] font-bold uppercase tracking-wider text-red-400 hover:text-red-300 bg-red-500/5 px-2 py-1 rounded border border-red-500/10 hover:bg-red-500/10 transition-colors"
                                        >
                                            Clear All
                                        </button>
                                    )}
                                </div>

                                <div className="space-y-3 mb-6 min-h-[150px]">
                                    {selectedCourses.length === 0 ? (
                                        <div className="flex flex-col items-center justify-center py-10 text-center border border-dashed border-white/10 rounded-xl bg-white/[0.02]">
                                            <Layers className="text-slate-600 mb-3" size={32} />
                                            <p className="text-slate-500 text-sm">Select courses to<br />build your custom pack</p>
                                        </div>
                                    ) : (
                                        <AnimatePresence mode="popLayout">
                                            {selectedCourses.map(course => (
                                                <motion.div
                                                    layout
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 10 }}
                                                    key={course.id}
                                                    className="flex justify-between items-start gap-3 bg-white/5 hover:bg-white/10 p-3 rounded-lg border border-white/5 group transition-colors"
                                                >
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-sm font-medium text-slate-200 truncate">{course.title}</div>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <div className={`text-[10px] px-1.5 py-0.5 rounded border ${course.mode === 'live'
                                                                ? 'bg-orange-500/10 border-orange-500/20 text-orange-300'
                                                                : 'bg-purple-500/10 border-purple-500/20 text-purple-300'}`}>
                                                                {course.mode === 'live' ? 'LIVE' : 'REC'}
                                                            </div>
                                                            <div className="text-xs text-slate-400">₹{course.price.toLocaleString()}</div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); removeCourse(course.id); }}
                                                        className="text-slate-500 hover:text-red-400 p-1 rounded-md hover:bg-white/5 transition-colors"
                                                    >
                                                        <X size={14} />
                                                    </button>
                                                </motion.div>
                                            ))}
                                        </AnimatePresence>
                                    )}
                                </div>

                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-white font-medium">Bundle Price</span>
                                    <span className="text-xl font-bold text-white">
                                        ₹{currentPrice.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-xs text-slate-500 mt-1">
                                    <span>Total Value</span>
                                    <span className="line-through">₹{totalValue.toLocaleString()}</span>
                                </div>
                                <CouponInput {...coupon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Persistent Bottom Sticky Bar (Universal) */}
            <div className="fixed bottom-0 left-0 right-0 z-50">
                <div className="absolute inset-0 bg-[#0B1120]/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"></div>
                <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Left Side: Summary & Progress */}
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
                                    <span className={`text-xs font-bold ${isSelectionValid ? 'text-green-400' : 'text-orange-400'}`}>
                                        {selectedCourses.length} / {maxCourses}
                                    </span>
                                </div>
                                <div className="relative h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="absolute left-[20%] top-0 bottom-0 w-px bg-white/20 z-10"></div>
                                    <motion.div
                                        className={`h-full ${isSelectionValid ? 'bg-gradient-to-r from-orange-500 to-green-400' : 'bg-orange-500'}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(selectedCourses.length / maxCourses) * 100}%` }}
                                        transition={{ type: "spring", stiffness: 100 }}
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

                        {/* Right Side: Primary Button */}
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <div className="flex flex-col items-end sm:hidden">
                                <span className="text-xl font-bold text-white">₹{currentPrice.toLocaleString()}</span>
                                <span className="text-green-400 text-[10px] font-bold uppercase">Save {Math.round((savings / totalValue) * 100) || 0}%</span>
                            </div>

                            <button
                                disabled={!isSelectionValid || loadingPayment}
                                onClick={handlePayment}
                                className={`flex-1 md:flex-none px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 ${isSelectionValid
                                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 active:scale-95'
                                    : 'bg-white/5 text-slate-500 cursor-not-allowed border border-white/5'
                                    }`}
                            >
                                {loadingPayment ? <Loader2 className="animate-spin" size={20} /> : (isSelectionValid ? 'Enroll Now' : selectedCourses.length < minCourses ? `Select at least ${minCourses}` : 'Enroll Now')}
                                {isSelectionValid && !loadingPayment && <ArrowRight size={18} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupPackSelection;
