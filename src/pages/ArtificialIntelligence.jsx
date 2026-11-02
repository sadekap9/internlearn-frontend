import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    Brain,
    Cpu,
    Network,
    Code,
    Terminal,
    Database,
    Layers,
    Award,
    CheckCircle,
    ArrowRight,
    Users,
    Briefcase,
    TrendingUp,
    Globe,
    Zap,
    Clock,
    Calendar,
    BookOpen,
    Video,
    MessageSquare,
    Phone,
    Mail,
    MapPin,
    Shield,
    ChevronDown,
    X,
    Loader2
} from 'lucide-react';

import housePriceImg from '../assets/house-price-prediction.png';
import faceMaskImg from '../assets/face-mask-detection.png';
import chatbotImg from '../assets/intelligent-chatbot.png';
import pythonLogo from '../assets/python-logo.svg';
import tensorflowLogo from '../assets/tensorflow-logo.svg';
import pytorchLogo from '../assets/pytorch-logo.svg';
import scikitLearnLogo from '../assets/scikit-learn-logo.svg';
import pandasLogo from '../assets/pandas-logo.svg';
import numpyLogo from '../assets/numpy-logo.svg';
import jupyterLogo from '../assets/jupyter-logo.svg';
import opencvLogo from '../assets/opencv-logo.svg';
import kerasLogo from '../assets/keras-logo.svg';
import matplotlibLogo from '../assets/matplotlib-logo.svg';
import ProgramFees from '../components/ProgramFees';

const ArtificialIntelligence = () => {
    const navigate = useNavigate();
    const [openModule, setOpenModule] = useState(null);
    const [submitStatus, setSubmitStatus] = useState('idle');
    const [onboardingStatus, setOnboardingStatus] = useState('idle');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        reason: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('loading');
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx9YStCSXPnmckNzkY_dGXSM3i4eOInyPYYlq8_HVNFz4mXO2oz-EKQTzLRUPKsT2IBzA/exec';
        try {
            const formPayload = new FormData();
            formPayload.append('name', formData.name);
            formPayload.append('email', formData.email);
            formPayload.append('phone', formData.phone);
            formPayload.append('college', formData.college);
            formPayload.append('course', 'Artificial Intelligence');
            formPayload.append('reason', formData.reason);
            formPayload.append('timestamp', new Date().toISOString());

            await fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: formPayload });
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', college: '', reason: '' });
        } catch (error) {
            console.error("Error submitting form", error);
            setSubmitStatus('idle');
            alert("Something went wrong. Please try again.");
        }
    };

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

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white pt-20 overflow-x-hidden">

            {/* HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900 via-purple-900/40 to-black z-0"></div>

                {/* Animated Gradient Orbs - Darker, Deeper Colors */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-20 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-[150px]"
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                    className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[180px]"
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
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                                    Artificial Intelligence
                                </span>
                                <br />
                                <span className="text-3xl md:text-4xl text-gray-200 font-light">Career Starter Program</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                                Master the future of technology by learning Machine Learning, Deep Learning, and Neural Networks. Build intelligent systems that solve real-world problems.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => document.getElementById('fees')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all flex items-center justify-center gap-2 text-lg"
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
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                                            <Calendar size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 uppercase tracking-wider">Next Batch</p>
                                            <p className="text-lg font-bold text-white">October 5th</p>
                                        </div>
                                    </div>
                                    <div className="w-px h-10 bg-white/10 hidden md:block"></div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                                            <Clock size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 uppercase tracking-wider">Duration</p>
                                            <p className="text-lg font-bold text-white">10 Weeks</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative hidden lg:block perspective-1000"
                        >
                            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.25)] group transform hover:rotate-y-2 transition-transform duration-700">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80"></div>
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.8 }}
                                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2600&auto=format&fit=crop"
                                    alt="Artificial Intelligence"
                                    className="w-full h-full object-cover opacity-90"
                                />
                                <div className="absolute bottom-8 left-8 z-20 w-full pr-16">
                                    <div className="bg-black/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10 grid grid-cols-3 gap-4 shadow-xl">
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase font-medium">Avg Salary</p>
                                            <p className="text-lg font-bold text-white">₹6-12 LPA</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase font-medium">Growth</p>
                                            <p className="text-lg font-bold text-green-400">35%</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase font-medium">Market</p>
                                            <p className="text-lg font-bold text-indigo-300">$196B+</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Program Overview */}
            <section className="py-24 bg-[#050505] border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-2 block">Why Choose This Program</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">Program Overview</h2>
                        <motion.p
                            variants={fadeInUp}
                            className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg"
                        >
                            This comprehensive program is designed to take you from the basics of Python programming to advanced Deep Learning concepts. You will work with real datasets, train machine learning models, and deploy AI applications.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Cpu, title: "Industry-aligned Curriculum", desc: "Master the latest AI/ML technologies demanded by top tech companies." },
                            { icon: Database, title: "Real-world Datasets", desc: "Work with complex datasets to build robust machine learning models." },
                            { icon: Briefcase, title: "Internship & Certificate", desc: "Gain practical experience and earn a recognized industry certificate." },
                            { icon: Users, title: "1-on-1 Mentorship", desc: "Learn directly from AI experts and gets personalized guidance." },
                            { icon: TrendingUp, title: "Placement Assistance", desc: "Resume building, mock interviews, and job referrals to top firms." },
                            { icon: Globe, title: "Lifetime Access", desc: "Get lifetime access to course content, recorded lectures, and updates." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                                className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl transition-all group hover:border-indigo-500/40 hover:shadow-[0_10px_40px_-10px_rgba(79,70,229,0.2)]"
                            >
                                <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools & Technologies */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Tools & Technologies</h2>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { name: "Python", color: "text-yellow-400", code: "Py", logo: pythonLogo },
                            { name: "TensorFlow", color: "text-orange-500", code: "Tf", logo: tensorflowLogo },
                            { name: "PyTorch", color: "text-red-500", code: "Pt", logo: pytorchLogo },
                            { name: "Scikit-Learn", color: "text-blue-400", code: "Sk", logo: scikitLearnLogo },
                            { name: "Pandas", color: "text-purple-400", code: "Pd", logo: pandasLogo },
                            { name: "NumPy", color: "text-blue-300", code: "Np", logo: numpyLogo },
                            { name: "Jupyter", color: "text-orange-600", code: "Jp", logo: jupyterLogo },
                            { name: "OpenCV", color: "text-green-500", code: "Cv", logo: opencvLogo },
                            { name: "Keras", color: "text-red-400", code: "Ks", logo: kerasLogo },
                            { name: "Matplotlib", color: "text-blue-500", code: "Mp", logo: matplotlibLogo }
                        ].map((tool, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex flex-col items-center gap-3 group"
                            >
                                <div className="w-20 h-20 bg-[#0F0F0F] border border-white/5 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg group-hover:-translate-y-2 transition-transform duration-300 group-hover:border-indigo-500/40 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] overflow-hidden p-3">
                                    {tool.logo ? (
                                        <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                                    ) : (
                                        <span className={tool.color}>{tool.code}</span>
                                    )}
                                </div>
                                <span className="text-sm text-gray-500 font-medium group-hover:text-gray-300 transition-colors">{tool.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What You Will Build */}
            <section className="py-24 bg-[#050505] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">What You Will Build</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">Apply your skills to build real-world AI applications. Practical projects that boost your portfolio.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a] hover:border-white/10"
                        >
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={housePriceImg}
                                    alt="House Price Prediction"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 z-10">
                                    <div className="inline-block px-3 py-1 bg-green-500/20 rounded-full border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wider mb-2 backdrop-blur-md">Mini Project</div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-3 text-white">House Price Predictor</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">A regression model to predict housing prices based on various features like area, location, and amenities.</p>
                            </div>
                        </motion.div>

                        {/* Project 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -5 }}
                            className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a] hover:border-white/10"
                        >
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={faceMaskImg}
                                    alt="Face Mask Detection"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 z-10">
                                    <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2 backdrop-blur-md">Major Project</div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-3 text-white">Face Mask Detection</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">A Computer Vision application using OpenCV and Deep Learning to detect face masks in real-time video.</p>
                            </div>
                        </motion.div>

                        {/* Project 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ y: -5 }}
                            className="group relative rounded-2xl overflow-hidden border border-purple-500/30 bg-[#0a0a0a] shadow-[0_0_30px_-10px_rgba(168,85,247,0.2)] hover:border-purple-500/50"
                        >
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={chatbotImg}
                                    alt="Intelligent Chatbot"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 z-10">
                                    <div className="inline-block px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider mb-2 backdrop-blur-md">Capstone Project</div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-3 text-white">Intelligent Chatbot</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">An NLP-based chatbot capable of understanding context and answering user queries effectively.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-24 bg-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Detailed Curriculum</h2>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            {
                                title: "Python Programming Fundamentals",
                                description: "Topics covered include deep dive into python programming fundamentals concepts, practical exercises, and code reviews."
                            },
                            {
                                title: "Data Analysis with Pandas & NumPy",
                                description: "Master data manipulation, cleaning, and analysis using powerful Python libraries. Work with complex datasets efficiently."
                            },
                            {
                                title: "Data Visualization with Matplotlib & Seaborn",
                                description: "Learn to create impactful visualizations to communicate insights effectively. Build interactive charts and graphs."
                            },
                            {
                                title: "Mathematics for Machine Learning",
                                description: "Understand the core concepts of Linear Algebra, Calculus, Probability, and Statistics essential for building AI algorithms."
                            },
                            {
                                title: "Supervised Learning (Regression & Classification)",
                                description: "Build predictive models using algorithms like Linear Regression, Decision Trees, Random Forests, and SVMs."
                            },
                            {
                                title: "Unsupervised Learning",
                                description: "Discover hidden patterns in data with clustering algorithms (K-Means) and dimensionality reduction techniques (PCA)."
                            },
                            {
                                title: "Neural Networks & Deep Learning Basics",
                                description: "Understand the architecture of artificial neural networks, activation functions, and backpropagation."
                            },
                            {
                                title: "Computer Vision with CNNs",
                                description: "Process and analyze visual data using Convolutional Neural Networks (CNNs) for image classification and object detection."
                            },
                            {
                                title: "Natural Language Processing (NLP) Basics",
                                description: "Teach machines to understand and generate human language using techniques like tokenization, RNNs, and Transformers."
                            },
                            {
                                title: "Model Deployment & AI Ethics",
                                description: "Deploy your AI models to production using Flask/FastAPI and understand the ethical responsibilities of AI development."
                            }
                        ].map((module, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`bg-[#0F0F0F] border ${openModule === index ? 'border-indigo-500' : 'border-white/5'} rounded-2xl overflow-hidden transition-all duration-300`}
                            >
                                <button
                                    onClick={() => setOpenModule(openModule === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-colors ${openModule === index ? 'bg-indigo-600 text-white' : 'bg-indigo-500/10 text-indigo-400'}`}>
                                            {index + 1}
                                        </div>
                                        <h3 className={`text-xl font-bold transition-colors ${openModule === index ? 'text-indigo-400' : 'text-gray-200'}`}>
                                            {module.title}
                                        </h3>
                                    </div>
                                    <ChevronDown
                                        className={`transform transition-transform duration-300 ${openModule === index ? 'rotate-180 text-indigo-400' : 'text-gray-500'}`}
                                        size={24}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openModule === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 pl-[5.5rem] pr-6 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                                                {module.description}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certification */}
            <section className="py-24 bg-black border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={scaleIn}
                        className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-8 md:p-12"
                    >
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold text-white">Industry Recognized Certificate</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Validate your skills with a professional certificate from Global Interns. Add it to your LinkedIn profile and resume to stand out to recruiters.
                            </p>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/All%20Sample%20Certificate.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-[0_4px_20px_rgba(255,255,255,0.2)]"
                            >
                                View Sample Certificate
                            </motion.a>
                        </div>
                        <div className="md:w-1/2 flex justify-center perspective-1000">
                            <motion.div
                                whileHover={{ rotateY: 5, rotateX: 5 }}
                                className="relative w-full max-w-xl cursor-pointer group"
                            >
                                <div className="absolute inset-0 bg-indigo-500/20 blur-3xl group-hover:bg-indigo-500/30 transition-all rounded-full pointer-events-none"></div>
                                <img
                                    src="/certificate.png"
                                    alt="Internship Certificate"
                                    className="relative w-full h-auto rounded-xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border border-white/10 z-10"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Section */}
            <ProgramFees
                programName="AI Program"
                programCode="ai"
                formData={formData}
            />

            {/* Application Form */}
            <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="apply">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl font-bold mb-4 text-white">Secure Your Spot</h2>
                        <p className="text-gray-400">Applications closing soon for next batch.</p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="bg-black border border-white/10 rounded-2xl p-8 shadow-2xl"
                    >
                        {submitStatus === 'success' ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Application Received!</h3>
                                <p className="text-gray-400">We will contact you shortly.</p>
                                <button
                                    onClick={() => setSubmitStatus('idle')}
                                    className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                                >
                                    Submit Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            required
                                            className="w-full px-4 py-3 bg-[#0F0F0F] border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 text-white transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="john@example.com"
                                            required
                                            className="w-full px-4 py-3 bg-[#0F0F0F] border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 text-white transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="+91 98765 43210"
                                            required
                                            className="w-full px-4 py-3 bg-[#0F0F0F] border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 text-white transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">College / University</label>
                                        <input
                                            type="text"
                                            name="college"
                                            value={formData.college}
                                            onChange={handleInputChange}
                                            placeholder="University Name"
                                            required
                                            className="w-full px-4 py-3 bg-[#0F0F0F] border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 text-white transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Reason for joining</label>
                                    <textarea
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleInputChange}
                                        placeholder="I want to join because..."
                                        rows="4"
                                        required
                                        className="w-full px-4 py-3 bg-[#0F0F0F] border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 text-white resize-none transition-colors"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitStatus === 'loading'}
                                    className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-transform hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {submitStatus === 'loading' ? 'Submitting...' : 'Submit Application'}
                                </button>
                                <p className="text-xs text-center text-gray-500">By submitting, you agree to our Terms & Privacy Policy.</p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-black to-[#050505] text-center relative overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-white"
                    >
                        Ready to Build the Future?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 mb-8"
                    >
                        Join our AI program and become a Machine Learning expert.
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-10 py-4 bg-white text-black font-bold rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:bg-gray-200 transition-all"
                    >
                        Apply Now & Get Started
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default ArtificialIntelligence;
