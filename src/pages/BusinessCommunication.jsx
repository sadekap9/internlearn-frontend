import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    CheckCircle,
    ArrowRight,
    Award,
    Calendar,
    Clock,
    ChevronDown,
    X,
    MessageCircle, // Replaced Cpu
    Users,
    Globe,
    Loader2,
    Mic, // For Verbal
    Mail, // For Written
    Video, // For Presentation
    Briefcase,
    TrendingUp
} from 'lucide-react';
import ProgramFees from '../components/ProgramFees';
import zoomLogo from '../assets/zoom-logo.svg';
import linkedinLogo from '../assets/linkedin-logo.svg';

// Use meaningful images for Business Communication
const heroImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"; // Meeting/Discussion
const emailProjectImg = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; // Professional typing/email
const presentationImg = "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop"; // Presentation
const negotiationImg = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"; // Negotiation/Handshake

const BusinessCommunication = () => {
    const navigate = useNavigate();
    const [openModule, setOpenModule] = useState(null);
    const programName = "Business Communication";
    const programCode = "business-communication";

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

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

    return (
        <div className="min-h-screen bg-darkMainBg text-white font-sans selection:bg-primaryBlue selection:text-white pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-0 pb-16 lg:pt-6 lg:pb-24">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20 z-0 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primaryBlue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 space-y-6">

                            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-2">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-indigo-200 drop-shadow-sm">
                                    Business Communication
                                </span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue to-cyan-400">Career Starter Program</span>
                            </h1>

                            <p className="text-lg text-gray-300 leading-relaxed max-w-xl font-light">
                                Elevate your professional presence. Master verbal and written communication, public speaking, and corporate etiquette to fast-track your career growth.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button onClick={() => document.getElementById('fees')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-gradient-to-r from-primaryBlue to-blue-600 rounded-xl font-bold text-white shadow-[0_0_20px_rgba(0,174,239,0.3)] hover:shadow-[0_0_30px_rgba(0,174,239,0.5)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 border border-white/10">
                                    Apply Now
                                    <ArrowRight size={20} />
                                </button>
                                <a href="/Internz%20learn%20brochure.pdf" download="Internz_Learn_Brochure.pdf" className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                                    <Award size={20} className="text-accentGreen" />
                                    Download Brochure
                                </a>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 pt-2">
                                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg flex items-center gap-3 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-primaryBlue/20 flex items-center justify-center">
                                        <Calendar size={14} className="text-primaryBlue" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Next Batch</span>
                                        <span className="text-sm font-bold text-white">October 5th</span>
                                    </div>
                                </div>
                                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg flex items-center gap-3 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                                        <Clock size={14} className="text-purple-400" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Duration</span>
                                        <span className="text-sm font-bold text-white">8 weeks</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-darkCardBg/50 backdrop-blur-md p-2">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primaryBlue/20 to-purple-500/20 opacity-30 mix-blend-overlay"></div>
                                <img
                                    src={heroImage}
                                    alt="Business Communication"
                                    className="rounded-xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 aspect-video"
                                />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/70 backdrop-blur-md rounded-xl p-4 border border-white/10 flex justify-between items-center">
                                        <div>
                                            <p className="text-xs text-gray-400">Avg. Salary Hike</p>
                                            <p className="text-xl font-bold text-white">35%</p>
                                        </div>
                                        <div className="h-8 w-[1px] bg-white/20"></div>
                                        <div>
                                            <p className="text-xs text-gray-400">Career Growth</p>
                                            <p className="text-xl font-bold text-accentGreen">High</p>
                                        </div>
                                        <div className="h-8 w-[1px] bg-white/20"></div>
                                        <div>
                                            <p className="text-xs text-gray-400">Opportunities</p>
                                            <p className="text-xl font-bold text-white">Global</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Overview */}
            <section className="py-20 bg-darkMainBg border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primaryBlue font-semibold tracking-wider uppercase text-sm">Why Choose This Program</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">Program Overview</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Effective communication is the #1 soft skill sought by employers. This program transforms you into an articulate, confident, and persuasive professional.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <Mic />, title: "Verbal Mastery", desc: "Speak with clarity, confidence, and authority in meetings and presentations." },
                            { icon: <Mail />, title: "Written Excellence", desc: "Craft compelling emails, reports, and proposals that get results." },
                            { icon: <Briefcase />, title: "Corporate Etiquette", desc: "Navigate professional environments with grace and professionalism." },
                            { icon: <Users />, title: "Leadership Comms", desc: "Learn to lead discussions, provide feedback, and influence others." },
                            { icon: <TrendingUp />, title: "Career Acceleration", desc: "Stand out in interviews and appraisals with superior communication skills." },
                            { icon: <Globe />, title: "Networking Skills", desc: "Build meaningful professional relationships on LinkedIn and offline." }
                        ].map((item, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-primaryBlue/30 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-primaryBlue/20 rounded-lg flex items-center justify-center text-primaryBlue mb-6 group-hover:scale-110 transition-transform">
                                    {React.cloneElement(item.icon, { size: 24 })}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools & Technologies */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primaryBlue/5 skew-y-3 transform origin-top-left scale-110"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Tools You'll Master</h2>
                        <p className="text-gray-400">We leverage modern digital tools to enhance communication.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { name: "PowerPoint", color: "text-orange-500", code: "Pp" },
                            { name: "Outlook", color: "text-blue-500", code: "Ol" },
                            { name: "Zoom", color: "text-blue-400", code: "Zm", logo: zoomLogo },
                            { name: "LinkedIn", color: "text-blue-700", code: "In", logo: linkedinLogo },
                            { name: "Slack", color: "text-purple-400", code: "Sl" },
                            { name: "Canva", color: "text-cyan-400", code: "Cn" },
                            { name: "Google Workspace", color: "text-green-500", code: "Gw" },
                            { name: "Trello", color: "text-blue-300", code: "Tr" },
                        ].map((tool, index) => (
                            <div key={index} className="flex flex-col items-center gap-3 group">
                                <div className="w-20 h-20 bg-darkCardBg border border-white/10 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg group-hover:-translate-y-2 transition-transform duration-300 overflow-hidden p-3">
                                    {tool.logo ? (
                                        <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                                    ) : (
                                        <span className={tool.color}>{tool.code}</span>
                                    )}
                                </div>
                                <span className="text-sm text-gray-400 font-medium">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What You Will Build/Practice */}
            <section className="py-20 bg-darkMainBg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Practical Learning</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Theory is minimal. You will practice real-world scenarios to build muscle memory.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-darkCardBg">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-darkCardBg to-transparent z-10 opacity-60" />
                                <img
                                    src={emailProjectImg}
                                    alt="Professional Email Drafting"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-xs font-bold text-accentGreen uppercase tracking-wider mb-2">Assignment</div>
                                <h3 className="text-xl font-bold mb-3">Corporate Email Suite</h3>
                                <p className="text-gray-400 text-sm mb-4">Drafting a series of emails: introductions, cold outreach, project updates, and handling difficult client situations.</p>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-darkCardBg">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-darkCardBg to-transparent z-10 opacity-60" />
                                <img
                                    src={presentationImg}
                                    alt="Presentation Skills"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-xs font-bold text-primaryBlue uppercase tracking-wider mb-2">Live Session</div>
                                <h3 className="text-xl font-bold mb-3">The Perfect Pitch</h3>
                                <p className="text-gray-400 text-sm mb-4">A live 5-minute presentation delivery on a chosen topic, followed by real-time feedback on body language and tone.</p>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="group relative rounded-2xl overflow-hidden border border-primaryBlue/30 bg-darkCardBg shadow-[0_0_30px_rgba(0,174,239,0.1)]">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-darkCardBg to-transparent z-10 opacity-60" />
                                <img
                                    src={negotiationImg}
                                    alt="Negotiation Roleplay"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    style={{ objectPosition: '50% 35%' }}
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">Capstone Simulation</div>
                                <h3 className="text-xl font-bold mb-3">Strategic Negotiation</h3>
                                <p className="text-gray-400 text-sm mb-4">A role-play scenario involving a salary negotiation or client contract discussion to test conflict resolution skills.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-20 bg-darkSectionBg/50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Detailed Curriculum</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                title: "Fundamentals of Business Comm.",
                                description: "Understanding communication barriers, the 7 Cs of communication, and tailoring your message to your audience."
                            },
                            {
                                title: "Verbal Excellence",
                                description: "Improving articulation, tone, pitch, and speed. Mastering active listening techniques to engage effectively."
                            },
                            {
                                title: "Non-Verbal Communication",
                                description: "The power of body language, eye contact, gestures, and posture in establishing presence and authority."
                            },
                            {
                                title: "Written Communication Mastery",
                                description: "Structuring professional documents, email etiquette, and writing with clarity and conciseness."
                            },
                            {
                                title: "Presentation Skills",
                                description: "Designing impactful slides, storytelling techniques, and overcoming public speaking anxiety."
                            },
                            {
                                title: "Interpersonal Skills at Work",
                                description: "Building rapport, empathy, emotional intelligence (EQ), and handling office dynamics."
                            },
                            {
                                title: "Cross-Cultural Communication",
                                description: "Navigating global business environments, understanding cultural nuances, and inclusive communication."
                            },
                            {
                                title: "Negotiation & Conflict Resolution",
                                description: "Strategies for win-win negotiations, handling difficult conversations, and resolving conflicts constructively."
                            },
                            {
                                title: "Professional Networking",
                                description: "Optimizing your LinkedIn profile, networking strategies, and the art of the elevator pitch."
                            },
                            {
                                title: "Interview & Career Prep",
                                description: "Acing behavioral interviews, answering 'Tell me about yourself', and salary negotiation tactics."
                            }
                        ].map((module, index) => (
                            <div
                                key={index}
                                className={`bg-darkCardBg border ${openModule === index ? 'border-primaryBlue' : 'border-white/5'} rounded-2xl overflow-hidden transition-all duration-300`}
                            >
                                <button
                                    onClick={() => setOpenModule(openModule === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-colors ${openModule === index ? 'bg-primaryBlue text-white' : 'bg-primaryBlue/10 text-primaryBlue'}`}>
                                            {index + 1}
                                        </div>
                                        <h3 className={`text-xl font-bold transition-colors ${openModule === index ? 'text-primaryBlue' : 'text-white'}`}>
                                            {module.title}
                                        </h3>
                                    </div>
                                    <ChevronDown
                                        className={`transform transition-transform duration-300 ${openModule === index ? 'rotate-180 text-primaryBlue' : 'text-gray-400'}`}
                                        size={24}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openModule === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-6 pt-0 pl-[5.5rem] pr-6 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                                        {module.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certification */}
            <section className="py-20 bg-darkMainBg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-8 md:p-12">
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold">Industry Recognized Certificate</h2>
                            <p className="text-gray-400">
                                Validate your soft skills with a professional certificate from Global Interns. Essential for management and client-facing roles.
                            </p>
                            <a href="/All%20Sample%20Certificate.pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-white text-darkMainBg font-bold rounded-lg hover:bg-gray-200 transition-colors">
                                View Sample Certificate
                            </a>
                        </div>
                        <div className="md:w-1/2 flex justify-center perspective-1000">
                            <div className="relative w-full max-w-xl duration-500 transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-all cursor-pointer group">
                                <div className="absolute inset-0 bg-primaryBlue/20 blur-2xl group-hover:bg-primaryBlue/30 transition-all rounded-full"></div>
                                <img
                                    src="/certificate.png"
                                    alt="Internship Certificate"
                                    className="relative w-full h-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 z-10"
                                />
                                {/* Reflection effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-30 transition-opacity rounded-xl z-20 pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <ProgramFees
                programName={programName}
                programCode={programCode}
                formData={formData}
            />

            {/* Application Form */}
            <section className="py-20 bg-darkSectionBg relative overflow-hidden" id="apply">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accentGreen/5 rounded-full blur-[100px]"></div>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-4">Secure Your Spot</h2>
                        <p className="text-gray-400">Applications closing soon for next batch.</p>
                    </div>

                    <div className="bg-darkCardBg border border-white/10 rounded-2xl p-8 shadow-2xl">
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
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primaryBlue text-white"
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
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primaryBlue text-white"
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
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primaryBlue text-white"
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
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primaryBlue text-white"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Reason for joining</label>
                                    <textarea
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleInputChange}
                                        placeholder="I want to join to improve my communication skills..."
                                        rows="4"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primaryBlue text-white resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitStatus === 'loading'}
                                    className="w-full py-4 bg-gradient-to-r from-primaryBlue to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-transform hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {submitStatus === 'loading' ? 'Submitting...' : 'Submit Application'}
                                </button>
                                <p className="text-xs text-center text-gray-500">By submitting, you agree to our Terms & Privacy Policy.</p>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Speak with Confidence?</h2>
                    <p className="text-xl text-blue-200 mb-8">Join the Business Communication program and transform your professional impact.</p>
                    <button className="px-10 py-4 bg-white text-blue-900 font-bold rounded-full shadow-2xl hover:bg-gray-100 transition-all transform hover:-translate-y-1">
                        Apply Now & Get Started
                    </button>
                </div>
            </section>

        </div>
    );
};

export default BusinessCommunication;
