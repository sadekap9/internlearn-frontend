import React, { useState } from 'react'; // Added useState import
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
    Tag
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Derived from Navbar Career Starter items
const CATEGORIES = [
    { id: 'tech', name: 'Technology', icon: Cpu, color: 'text-blue-400', gradient: 'from-blue-500 to-cyan-500', desc: 'Master coding, AI, and cloud computing.' },
    { id: 'eng', name: 'Engineering', icon: Zap, color: 'text-amber-400', gradient: 'from-amber-500 to-orange-500', desc: 'Core engineering, VLSI, and AutoCAD.' },
    { id: 'biz', name: 'Business & Finance', icon: Briefcase, color: 'text-emerald-400', gradient: 'from-emerald-500 to-green-500', desc: 'Finance, marketing, and management.' },
    { id: 'life', name: 'Life Sciences', icon: HeartPulse, color: 'text-rose-400', gradient: 'from-rose-500 to-pink-500', desc: 'Bio-tech, pharma, and healthcare.' },
    { id: 'design', name: 'Creative & Design', icon: Palette, color: 'text-purple-400', gradient: 'from-purple-500 to-indigo-500', desc: 'UI/UX, graphic design, and animation.' },
];

// Data from Navbar
const COURSES = {
    tech: [
        { id: 't1', title: 'Artificial Intelligence', duration: '12 weeks', level: 'Advanced', popular: true, rating: 4.9 },
        { id: 't2', title: 'Machine Learning', duration: '12 weeks', level: 'Advanced', popular: true, rating: 4.9 },
        { id: 't3', title: 'Data Science', duration: '10 weeks', level: 'Advanced', popular: true, rating: 4.8 },
        { id: 't4', title: 'Web Development', duration: '12 weeks', level: 'Intermediate', popular: true, rating: 4.7 },
        { id: 't5', title: 'Android Development', duration: '10 weeks', level: 'Intermediate', popular: false, rating: 4.6 },
        { id: 't6', title: 'Cyber Security', duration: '8 weeks', level: 'Intermediate', popular: true, rating: 4.8 },
        { id: 't7', title: 'Java Programming', duration: '8 weeks', level: 'Beginner', popular: false, rating: 4.5 },
        { id: 't8', title: 'Python Programming', duration: '8 weeks', level: 'Beginner', popular: false, rating: 4.6 },
        { id: 't9', title: 'Cloud Computing', duration: '8 weeks', level: 'Advanced', popular: true, rating: 4.7 },
    ],
    eng: [
        { id: 'e1', title: 'Embedded Systems', duration: '10 weeks', level: 'Intermediate', popular: false, rating: 4.5 },
        { id: 'e2', title: 'Internet of Things', duration: '8 weeks', level: 'Beginner', popular: true, rating: 4.6 },
        { id: 'e3', title: 'Hybrid Electric Vehicle', duration: '12 weeks', level: 'Advanced', popular: true, rating: 4.8 },
        { id: 'e4', title: 'Robotics', duration: '10 weeks', level: 'Advanced', popular: false, rating: 4.7 },
        { id: 'e5', title: 'Construction Planning', duration: '6 weeks', level: 'Intermediate', popular: false, rating: 4.4 },
        { id: 'e6', title: 'IC Engine Design', duration: '8 weeks', level: 'Intermediate', popular: false, rating: 4.5 },
        { id: 'e7', title: 'AutoCAD', duration: '6 weeks', level: 'Beginner', popular: true, rating: 4.6 },
        { id: 'e8', title: 'VLSI', duration: '12 weeks', level: 'Advanced', popular: true, rating: 4.9 },
    ],
    biz: [
        { id: 'b1', title: 'Human Resources', duration: '6 weeks', level: 'Beginner', popular: false, rating: 4.5 },
        { id: 'b2', title: 'Finance', duration: '8 weeks', level: 'Intermediate', popular: true, rating: 4.7 },
        { id: 'b3', title: 'Sales & Marketing', duration: '8 weeks', level: 'Intermediate', popular: true, rating: 4.6 },
        { id: 'b4', title: 'Digital Marketing', duration: '8 weeks', level: 'All Levels', popular: true, rating: 4.8 },
        { id: 'b5', title: 'Stock Market', duration: '4 weeks', level: 'Beginner', popular: true, rating: 4.7 },
    ],
    life: [
        { id: 'l1', title: 'Industrial Biotechnology', duration: '10 weeks', level: 'Advanced', popular: true, rating: 4.6 },
        { id: 'l2', title: 'Psychology', duration: '8 weeks', level: 'All Levels', popular: false, rating: 4.5 },
        { id: 'l3', title: 'Medical Coding', duration: '6 weeks', level: 'Beginner', popular: true, rating: 4.7 },
        { id: 'l4', title: 'Neurology', duration: '10 weeks', level: 'Intermediate', popular: false, rating: 4.8 },
    ],
    design: [
        { id: 'd1', title: 'UI/UX Design', duration: '10 weeks', level: 'All Levels', popular: true, rating: 4.9 },
        { id: 'd2', title: 'Social Media Marketing', duration: '6 weeks', level: 'Beginner', popular: true, rating: 4.7 },
        { id: 'd3', title: 'Content Creation', duration: '4 weeks', level: 'Beginner', popular: false, rating: 4.6 },
        { id: 'd4', title: 'Generative AI', duration: '8 weeks', level: 'Advanced', popular: true, rating: 4.8 },
        { id: 'd5', title: 'Graphic Design', duration: '8 weeks', level: 'Beginner', popular: true, rating: 4.7 },
    ]
};

const MakeYourOwnPack = () => {
    const [activeCategory, setActiveCategory] = useState('tech');
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showNotification, setShowNotification] = useState(false);

    // Filter courses based on search
    const filteredCourses = COURSES[activeCategory].filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const PRICE_LIVE = 6000;
    const PRICE_RECORDED = 4000;

    const selectCourse = (course, mode) => {
        if (selectedCourses.length >= 7) {
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
            return;
        }

        const categoryName = CATEGORIES.find(c => c.id === activeCategory)?.name;
        const price = mode === 'live' ? PRICE_LIVE : PRICE_RECORDED;

        // Check if course is already selected, if so replace it (allows mode switching)
        // If strict unique ID is required (cannot have same course in both modes), find index
        const existingIndex = selectedCourses.findIndex(c => c.id === course.id);

        if (existingIndex >= 0) {
            // Update existing selection
            setSelectedCourses(prev => {
                const newArr = [...prev];
                newArr[existingIndex] = { ...course, category: categoryName, mode, price };
                return newArr;
            });
        } else {
            // Add new selection
            setSelectedCourses(prev => [...prev, { ...course, category: categoryName, mode, price }]);
        }
    };

    const removeCourse = (courseId) => {
        setSelectedCourses(prev => prev.filter(c => c.id !== courseId));
    };

    const clearSelection = () => setSelectedCourses([]);

    // Coupon Logic
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [couponMessage, setCouponMessage] = useState({ type: '', text: '' });
    const [isPercentCoupon, setIsPercentCoupon] = useState(false);

    const VALID_COUPONS = {
        'X7K2P9': 500,
        'M4Q8Z1': 1000,
        'T9A3R7': 1500,
        'L2B8D4': 2000,
        'P5E7H1': 2500,
        'S3J9K2': 3000,
        'U4N6W8': 3500,
        'F2G7Q1': 4000,
        'C9V3X5': 4500,
        'H1Y6R2': 5000,
        'Z8T4B9': 5500,
        'D5M7S2': 6000,
        'E4P8K3': 6500,
        'J6C1A9': 7000,
        'Q3L5W2': 7500,
        'N9V7X4': 8000,
        'R8B3F2': 8500,
        'T1Y4S7': 9000,
        'K5U8P2': 9500,
        'G7Z3C9': 10000
    };

    const handleApplyCoupon = () => {
        const code = couponCode.trim().toUpperCase();
        if (VALID_COUPONS[code]) {
            setIsPercentCoupon(false);
            setDiscount(VALID_COUPONS[code]);
            setCouponMessage({ type: 'success', text: `Coupon applied! ₹${VALID_COUPONS[code]} OFF` });
        } else {
            setDiscount(0);
            setIsPercentCoupon(false);
            setCouponMessage({ type: 'error', text: 'Invalid coupon code' });
        }
    };

    const removeCoupon = () => {
        setCouponCode('');
        setDiscount(0);
        setIsPercentCoupon(false);
        setCouponMessage({ type: '', text: '' });
    };

    // Pricing Logic
    const baseValuePerCourse = 10000;

    const selectedPrice = selectedCourses.reduce((sum, course) => sum + course.price, 0);
    const discountAmount = isPercentCoupon ? Math.round(selectedPrice * (discount / 100)) : discount;
    const currentPrice = Math.max(0, selectedPrice - discountAmount);
    const totalValue = selectedCourses.length * baseValuePerCourse;
    const savings = totalValue - currentPrice;

    // Validation
    const isValidSelection = selectedCourses.length >= 2 && selectedCourses.length <= 7;

    const handlePayment = () => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onerror = () => {
            alert("Razorpay SDK failed to load. Are you online?");
        };
        script.onload = () => {
            const options = {
                key: "rzp_live_SC3NdmLYHHNtCs",
                amount: currentPrice * 100, // Amount is in currency subunits
                currency: "INR",
                name: "InternzLearn",
                description: `Custom Course Pack (${selectedCourses.length} Courses)`,
                image: "/logo.png",
                handler: function (response) {
                    alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
                    // Here you can redirect the user or clear the selection
                },
                prefill: {
                    name: "",
                    email: "",
                    contact: ""
                },
                theme: {
                    color: "#3399cc"
                }
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        };
        document.body.appendChild(script);
    };

    return (
        <div className="min-h-screen bg-[#020617] text-white font-sans pt-20 relative overflow-x-hidden selection:bg-indigo-500/30">

            {/* Ambient Background Glows */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen" />
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
                        <span className="font-medium text-sm">Limit reached: You can select up to 7 courses only.</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
                        <div className="max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-3 mb-6"
                            >
                                <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-[10px] font-bold uppercase tracking-widest text-black shadow-lg shadow-orange-500/20">
                                    Flexible Bundle
                                </span>
                                <div className="h-px w-10 bg-white/20"></div>
                                <span className="text-xs font-medium text-blue-300 tracking-wider uppercase">Custom Fit</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight"
                            >
                                Build Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-text">
                                    Dream Pack
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-slate-400 max-w-xl leading-relaxed font-light mb-8"
                            >
                                Select between <span className="text-white font-medium">2 to 7 courses</span>.
                                Mix and match <span className="text-yellow-300">Live</span> and <span className="text-purple-300">Recorded</span> classes to create your perfect bundle.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Interface */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 flex flex-col lg:flex-row gap-10 relative z-10">

                <div className="flex-1">
                    {/* Visual Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                        {[
                            { step: "01", title: "Mix Modes", text: "Select Live or Recorded per course" },
                            { step: "02", title: "Pick 2-7 Courses", text: "Build your custom syllabus" },
                            { step: "03", title: "Get Certified", text: "Master skills & boost your career" }
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

                    {/* Category Navigation */}
                    <div className="sticky top-20 z-40 bg-[#020617]/80 backdrop-blur-xl py-4 -mx-4 px-4 md:mx-0 md:px-0 mb-8 border-y border-white/5 md:border-none md:bg-transparent">
                        <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
                            {CATEGORIES.map(cat => {
                                const isActive = activeCategory === cat.id;
                                const Icon = cat.icon;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`relative flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 isolate ${isActive
                                            ? 'text-white'
                                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className={`absolute inset-0 bg-gradient-to-r ${cat.gradient} rounded-full -z-10`}
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <Icon size={18} className={isActive ? 'text-white' : cat.color} />
                                        <span className="font-medium whitespace-nowrap text-sm">{cat.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Search Bar & Stats */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                {CATEGORIES.find(c => c.id === activeCategory).name}
                                <span className="text-xs font-bold bg-white/10 text-slate-300 px-2.5 py-1 rounded-md border border-white/5">
                                    {filteredCourses.length}
                                </span>
                            </h2>
                            <p className="text-sm text-slate-400 mt-1 max-w-md">
                                {CATEGORIES.find(c => c.id === activeCategory).desc}
                            </p>
                        </div>
                        <div className="relative w-full md:w-72 group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
                                            ? 'bg-blue-600/10 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]'
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
                                                <div className="bg-blue-500 text-white rounded-full p-0.5 shadow-lg shadow-blue-500/40">
                                                    <CheckCircle2 size={16} strokeWidth={3} />
                                                </div>
                                            )}
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
                                                        className="py-2 px-2 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all text-left group/btn"
                                                    >
                                                        <div className="text-[10px] uppercase font-bold text-yellow-300 mb-0.5 flex items-center gap-1">
                                                            <Zap size={10} className="fill-yellow-300" /> Live
                                                        </div>
                                                        <div className="text-sm font-bold text-white group-hover/btn:text-blue-200">
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
                    {/* Mobile Coupon Section */}
                    <div className="lg:hidden mt-6 mb-6 bg-[#0B1120] border border-white/10 rounded-2xl p-5 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 relative z-10">
                            <Tag size={18} className="text-blue-500" />
                            Apply Coupon
                        </h3>
                        <div className="flex gap-2 relative z-10">
                            <input
                                type="text"
                                placeholder="Enter Code (e.g. MYOP500)"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                            />
                            <button
                                onClick={discount > 0 ? removeCoupon : handleApplyCoupon}
                                className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg ${discount > 0
                                    ? 'bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20'
                                    : 'bg-blue-500 text-white shadow-blue-500/20 hover:bg-blue-600'
                                    }`}
                            >
                                {discount > 0 ? 'Remove' : 'Apply'}
                            </button>
                        </div>
                        {couponMessage.text && (
                            <div className={`text-xs mt-3 font-medium flex items-center gap-1.5 ${couponMessage.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                                {couponMessage.type === 'success' ? <CheckCircle2 size={12} /> : <Info size={12} />}
                                {couponMessage.text}
                            </div>
                        )}
                    </div>

                </div>

                {/* Sticky Sidebar (Desktop) */}
                <div className="hidden lg:block w-80 relative">
                    <div className="sticky top-28 space-y-4">
                        <div className="bg-[#0B1120] border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden relative">
                            {/* Decorative lighting */}
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        <BadgeCheck className="text-blue-500" size={20} />
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
                                            <p className="text-slate-500 text-sm">Select 2-7 courses to<br />build your custom pack</p>
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
                                                                ? 'bg-blue-500/10 border-blue-500/20 text-blue-300'
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
                                    <span className="text-white font-medium">Bundle Status</span>
                                    <span className={`text-xs font-bold ${selectedCourses.length > 0 ? 'text-green-400' : 'text-slate-500'}`}>
                                        {selectedCourses.length === 0 ? 'Empty' : `${selectedCourses.length} Selected`}
                                    </span>
                                </div>

                                {/* Desktop Coupon Section */}
                                <div className="mt-4 pt-4 border-t border-white/5">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Coupon Code</h4>
                                        {discount > 0 && <span className="text-xs text-green-400 font-bold">-₹{discountAmount.toLocaleString()}</span>}
                                    </div>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Code..."
                                            value={couponCode}
                                            onChange={(e) => setCouponCode(e.target.value)}
                                            disabled={discount > 0}
                                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 disabled:opacity-50"
                                        />
                                        <button
                                            onClick={discount > 0 ? removeCoupon : handleApplyCoupon}
                                            className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${discount > 0
                                                ? 'bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20'
                                                : 'bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20'
                                                }`}
                                        >
                                            {discount > 0 ? '×' : 'Apply'}
                                        </button>
                                    </div>
                                    {couponMessage.text && (
                                        <div className={`text-[10px] mt-2 font-medium ${couponMessage.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                                            {couponMessage.text}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Snippet */}
                    <div className="bg-blue-900/10 border border-blue-500/10 rounded-xl p-4 flex gap-3 text-xs text-blue-300/80 leading-relaxed">
                        <Info size={16} className="shrink-0 text-blue-400 mt-0.5" />
                        Once purchased, you get immediate access to all selected courses.
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
                                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Bundle Price</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-bold text-white leading-none">₹{currentPrice.toLocaleString()}</span>
                                    {selectedCourses.length > 0 && <span className="text-xs text-slate-500 line-through ml-1">₹{totalValue.toLocaleString()}</span>}
                                </div>
                            </div>

                            <div className="flex-1 max-w-xs w-full">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Selected Courses</span>
                                    <span className={`text-xs font-bold ${isValidSelection ? 'text-green-400' : 'text-blue-400'}`}>
                                        {selectedCourses.length} / 7
                                    </span>
                                </div>
                                <div className="relative h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="absolute left-[28.5%] top-0 bottom-0 w-px bg-white/20 z-10"></div>
                                    <motion.div
                                        className={`h-full ${isValidSelection ? 'bg-gradient-to-r from-blue-500 to-green-400' : 'bg-blue-500'}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(selectedCourses.length / 7) * 100}%` }}
                                        transition={{ type: "spring", stiffness: 100 }}
                                    />
                                </div>
                                <div className="flex justify-between text-[8px] text-slate-500 mt-1 uppercase font-bold tracking-tighter">
                                    <span>0</span>
                                    <span className="text-slate-400">Min 2</span>
                                    <span>Max 7</span>
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
                                disabled={!isValidSelection}
                                onClick={handlePayment}
                                className={`flex-1 md:flex-none px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 ${isValidSelection
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 active:scale-95'
                                    : 'bg-white/5 text-slate-500 cursor-not-allowed border border-white/5'
                                    }`}
                            >
                                {isValidSelection ? 'Proceed to Checkout' : selectedCourses.length < 2 ? 'Select at least 2' : 'Proceed'}
                                {isValidSelection && <ArrowRight size={18} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeYourOwnPack;
