import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu,
    CircuitBoard,
    Binary,
    Activity,
    Code,
    Briefcase,
    TrendingUp,
    Users,
    CheckCircle,
    ArrowRight,
    Award,
    Clock,
    Calendar,
    ChevronDown,
    Zap,
    Box,
    Layers,
    Loader2,
    X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProgramFees from '../components/ProgramFees';
import linuxLogo from '../assets/linux-logo.svg';
import cppLogo from '../assets/cpp-logo.svg';

const VLSI = () => {
    const navigate = useNavigate();
    const [openModule, setOpenModule] = useState(null);
    const programName = "VLSI Design";
    const programCode = "vlsi";

    // Form State
    const [submitStatus, setSubmitStatus] = useState('idle');
    const [onboardingStatus, setOnboardingStatus] = useState('idle');
    const [showOnboardingModal, setShowOnboardingModal] = useState(false);

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
            formPayload.append('course', programName);
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
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">VLSI Design</span>
                                <br />
                                <span className="text-3xl md:text-4xl text-white font-light">Career Starter Program</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-xl text-gray-300 font-light leading-relaxed max-w-xl">
                                Master IP Core Design, Verification, and FPGA Implementation. Build a high-growth career in the booming semiconductor industry.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => document.getElementById('fees')?.scrollIntoView({ behavior: 'smooth' })}
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
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
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
                            className="relative hidden lg:block"
                        >
                            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/20 group">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60"></div>
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.8 }}
                                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
                                    alt="VLSI Design"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-8 left-8 z-20 w-full pr-16">
                                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 grid grid-cols-3 gap-4">
                                        <div>
                                            <p className="text-xs text-gray-300 uppercase">Avg Salary</p>
                                            <p className="text-lg font-bold text-white">₹6-20 LPA</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-300 uppercase">Growth</p>
                                            <p className="text-lg font-bold text-green-400">45%</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-300 uppercase">Market</p>
                                            <p className="text-lg font-bold text-blue-300">Booming</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Program Overview */}
            <section className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
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
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
                            Dive deep into digital electronics and chip design. Learn to design, simulate, and verify complex integrated circuits.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Cpu, title: "RTL Design", desc: "Master Verilog/VHDL for describing digital logic circuits at the register-transfer level." },
                            { icon: CheckCircle, title: "Functional Verification", desc: "Learn advanced verification methodologies like UVM and SystemVerilog." },
                            { icon: CircuitBoard, title: "FPGA Prototyping", desc: "Implement your designs on Xilinx/Altera FPGA boards for hardware testing." },
                            { icon: Users, title: "Industry Mentors", desc: "Get guided by professionals working at Intel, AMD, and Qualcomm." },
                            { icon: Briefcase, title: "Core Jobs", desc: "Target high-paying roles in top semiconductor companies worldwide." },
                            { icon: TrendingUp, title: "Career Growth", desc: "VLSI engineers are among the highest paid professionals in tech." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, borderColor: "rgba(99, 102, 241, 0.5)" }}
                                className="bg-slate-950 border border-white/5 p-8 rounded-2xl transition-all group hover:shadow-xl hover:shadow-indigo-500/10"
                            >
                                <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
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
            <section className="py-24 bg-slate-950 relative overflow-hidden">
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
                            { name: "Verilog", color: "text-green-400", code: "V" },
                            { name: "SystemVerilog", color: "text-blue-500", code: "Sv" },
                            { name: "Xilinx Vivado", color: "text-red-500", code: "Xi" },
                            { name: "ModelSim", color: "text-purple-400", code: "Ms" },
                            { name: "Quartus", color: "text-blue-400", code: "Qa" },
                            { name: "FPGA", color: "text-yellow-400", code: "Fp" },
                            { name: "Linux", color: "text-yellow-300", code: "Lx", logo: linuxLogo },
                            { name: "Tcl Scripting", color: "text-orange-400", code: "Tc" },
                            { name: "CMOS", color: "text-blue-300", code: "Cm" },
                            { name: "UVM", color: "text-pink-500", code: "Uv" }
                        ].map((tool, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex flex-col items-center gap-3 group"
                            >
                                <div className="w-20 h-20 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg group-hover:-translate-y-2 transition-transform duration-300 group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/20 overflow-hidden p-3">
                                    {tool.logo ? (
                                        <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                                    ) : (
                                        <span className={tool.color}>{tool.code}</span>
                                    )}
                                </div>
                                <span className="text-sm text-gray-400 font-medium">{tool.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What You Will Build */}
            <section className="py-24 bg-slate-900 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">What You Will Build</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">Design complex digital systems from scratch. Gain hands-on experience with real silicon challenges.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950"
                        >
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?q=80&w=800&auto=format&fit=crop"
                                    alt="Traffic Light Controller"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 z-10">
                                    <Activity className="text-green-400 w-8 h-8 mb-2" />
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="text-xs font-bold text-green-400 uppercase tracking-wider mb-2">Mini Project</div>
                                <h3 className="text-xl font-bold mb-3 text-white">Traffic Light Controller</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Design a finite state machine (FSM) based traffic light controller and verify it using testbenches.</p>
                            </div>
                        </motion.div>

                        {/* Project 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -5 }}
                            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950"
                        >
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
                                    alt="MIPS Processor Design"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 z-10">
                                    <Binary className="text-indigo-400 w-8 h-8 mb-2" />
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">Major Project</div>
                                <h3 className="text-xl font-bold mb-3 text-white">MIPS Processor Design</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Design a 32-bit single-cycle MIPS processor capable of executing basic assembly instructions.</p>
                            </div>
                        </motion.div>

                        {/* Project 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ y: -5 }}
                            className="group relative rounded-2xl overflow-hidden border border-indigo-500/30 bg-slate-950 shadow-lg shadow-indigo-500/10"
                        >
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
                                    alt="High-Speed Memory Controller"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 z-10">
                                    <Cpu className="text-orange-400 w-8 h-8 mb-2" />
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">Capstone Project</div>
                                <h3 className="text-xl font-bold mb-3 text-white">High-Speed Memory Controller</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Design and verify a DDR memory controller interface focusing on timing and data integrity.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-24 bg-slate-950">
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
                                title: "Digital Electronics Fundamentals",
                                description: "Boolean Algebra, Logic Gates, Combinational & Sequential Circuits, FSM Design."
                            },
                            {
                                title: "Verilog HDL Programming",
                                description: "Data types, different modeling styles (Gate, Dataflow, Behavioral), and testbench writing."
                            },
                            {
                                title: "CMOS Technology Basics",
                                description: "Understanding MOSFETs, CMOS Inverter, Layout design rules, and fabrication process overview."
                            },
                            {
                                title: "Advanced FSM Design",
                                description: "Designing complex controllers using Mealy and Moore machines. Handling race conditions and hazards."
                            },
                            {
                                title: "FPGA Architecture & Flow",
                                description: "Understanding FPGA internals (CLBs, LUTs, BRAMs). Synthesis, Implementation, and Bitstream generation flow."
                            },
                            {
                                title: "SystemVerilog for Verification",
                                description: "Introduction to OOP in SV, Randomization, Assertions, and Coverage-driven verification."
                            },
                            {
                                title: "Static Timing Analysis (STA)",
                                description: "Concepts of Setup time, Hold time, Clock Skew, Jitter, and fixing timing violations."
                            },
                            {
                                title: "Computer Architecture",
                                description: "Instruction Set Architecture (ISA), Pipelining, Hazards, and Cache Memory concepts."
                            },
                            {
                                title: "ASIC Design Flow Overview",
                                description: "Introduction to the complete ASIC flow from RTL to GDSII (Synthesis, Floorplanning, Routing)."
                            },
                            {
                                title: "Low Power Design Techniques",
                                description: "Techniques like Clock Gating, Power Gating, and Multi-VDD to reduce power consumption in chips."
                            }
                        ].map((module, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`bg-slate-900 border ${openModule === index ? 'border-indigo-500' : 'border-white/5'} rounded-2xl overflow-hidden transition-all duration-300`}
                            >
                                <button
                                    onClick={() => setOpenModule(openModule === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-colors ${openModule === index ? 'bg-indigo-600 text-white' : 'bg-indigo-500/10 text-indigo-400'}`}>
                                            {index + 1}
                                        </div>
                                        <h3 className={`text-xl font-bold transition-colors ${openModule === index ? 'text-indigo-400' : 'text-white'}`}>
                                            {module.title}
                                        </h3>
                                    </div>
                                    <ChevronDown
                                        className={`transform transition-transform duration-300 ${openModule === index ? 'rotate-180 text-indigo-400' : 'text-gray-400'}`}
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
            <section className="py-24 bg-slate-900 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={scaleIn}
                        className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-8 md:p-12"
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
                                className="inline-block px-8 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                View Sample Certificate
                            </motion.a>
                        </div>
                        <div className="md:w-1/2 flex justify-center perspective-1000">
                            <motion.div
                                whileHover={{ rotateY: 10, rotateX: 5 }}
                                className="relative w-full max-w-xl cursor-pointer group"
                            >
                                <div className="absolute inset-0 bg-indigo-500/20 blur-3xl group-hover:bg-indigo-500/30 transition-all rounded-full pointer-events-none"></div>
                                <img
                                    src="/certificate.png"
                                    alt="Internship Certificate"
                                    className="relative w-full h-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 z-10"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Section */}
            <ProgramFees
                programName={programName}
                programCode={programCode}
                formData={formData}
            />

            {/* Application Form */}
            <section className="py-24 bg-slate-900 relative overflow-hidden" id="apply">
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
                        className="bg-slate-950 border border-white/10 rounded-2xl p-8 shadow-2xl"
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
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 text-white transition-colors"
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
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 text-white transition-colors"
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
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 text-white transition-colors"
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
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 text-white transition-colors"
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
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 text-white resize-none transition-colors"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitStatus === 'loading'}
                                    className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-transform hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
            <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-white"
                    >
                        Ready to Engineer the Future?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-indigo-200 mb-8"
                    >
                        Join our VLSI program and become a chip design expert.
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-10 py-4 bg-white text-indigo-900 font-bold rounded-full shadow-2xl hover:bg-gray-100 transition-all"
                    >
                        Apply Now & Get Started
                    </motion.button>
                </div>
            </section>


        </div>
    );
};

export default VLSI;
