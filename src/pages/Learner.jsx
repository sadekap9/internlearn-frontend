import React from 'react';
import {
    BookOpen,
    Award,
    Users,
    Rocket,
    Briefcase,
    CheckCircle,
    ArrowRight,
    Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Learner = () => {
    return (
        <div className="min-h-screen bg-darkMainBg text-white font-sans selection:bg-primaryBlue selection:text-white pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 lg:py-32">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-darkMainBg to-darkMainBg z-0 pointer-events-none"></div>

                {/* Animated blobs */}
                <div className="absolute top-20 right-0 w-96 h-96 bg-primaryBlue/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors cursor-default">
                        <span className="flex h-2 w-2 rounded-full bg-accentGreen animate-pulse"></span>
                        <span className="text-sm font-medium text-gray-300">Join 50,000+ Learners Worldwide</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
                        Unlock Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue via-cyan-400 to-purple-400">True Potential</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Don't just learn. Experience, build, and grow. Join the most advanced ecosystem for students and professionals to fast-track your career.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#register" className="px-8 py-4 bg-primaryBlue hover:bg-blue-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(0,174,239,0.3)] hover:shadow-[0_0_30px_rgba(0,174,239,0.5)] transition-all transform hover:-translate-y-1 flex items-center gap-2">
                            Start Learning Now
                            <ArrowRight size={20} />
                        </a>
                        <Link to="/program/artificial-intelligence" className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl transition-all backdrop-blur-sm">
                            Explore Programs
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
                        {[
                            { label: "Active Learners", value: "50K+" },
                            { label: "Mentors", value: "500+" },
                            { label: "Hiring Partners", value: "100+" },
                            { label: "Avg Salary Hike", value: "150%" },
                        ].map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-24 bg-darkSectionBg relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Become a Learner?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">We provide more than just courses. We provide a complete career transformation ecosystem.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: BookOpen, title: "Project-Based Learning", desc: "Forget boring theory. Build real-world apps, analyze real data sets, and create a portfolio that speaks for itself.", color: "blue" },
                            { icon: Users, title: "1-on-1 Mentorship", desc: "Get personalized guidance from industry experts working at top companies like Google, Microsoft, and Amazon.", color: "purple" },
                            { icon: Briefcase, title: "Job Assistance", desc: "From resume building to mock interviews and referrals, we are with you until you get hired.", color: "green" },
                            { icon: Award, title: "Recognized Certification", desc: "Earn certificates that are valued by recruiters and valid across the globe.", color: "orange" },
                            { icon: Rocket, title: "Hackathons & Events", desc: "Participate in exclusive coding battles and networking events to showcase your skills.", color: "red" },
                            { icon: Star, title: "Lifetime Access", desc: "Learning never stops. Get lifetime access to all course materials and future updates.", color: "yellow" }
                        ].map((item, index) => (
                            <div key={index} className="group p-8 rounded-2xl bg-darkCardBg border border-white/5 hover:border-primaryBlue/30 hover:bg-white/5 transition-all duration-300">
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-${item.color}-500/10 text-${item.color}-400 group-hover:scale-110 transition-transform`}>
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primaryBlue transition-colors">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Path */}
            <section className="py-24 bg-darkMainBg overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                Your Journey to <br />
                                <span className="text-primaryBlue">Success</span> Starts Here
                            </h2>
                            <p className="text-gray-400 text-lg">
                                We've streamlined the process to make it as simple as possible for you to get started and achieve your goals.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { step: "01", title: "Register & Explore", desc: "Create your free account and browse through our wide range of industry-aligned programs." },
                                    { step: "02", title: "Choose Your Path", desc: "Select a domain that interests you - be it AI, Web Dev, or Data Science." },
                                    { step: "03", title: "Learn & Build", desc: "Attend live classes, watch recorded lectures, and build capstone projects." },
                                    { step: "04", title: "Get Hired", desc: "Complete the program, get certified, and land your dream job with our placement support." }
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-primaryBlue">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                                            <p className="text-gray-400 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            {/* Decorative blurred circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primaryBlue/20 rounded-full blur-[100px] pointer-events-none"></div>

                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <div className="space-y-4 mt-8">
                                    <div className="bg-darkCardBg p-6 rounded-2xl border border-white/10 shadow-xl opacity-60 scale-95">
                                        <div className="h-2 w-12 bg-white/20 rounded mb-4"></div>
                                        <div className="h-20 bg-white/5 rounded-lg"></div>
                                    </div>
                                    <div className="bg-darkCardBg p-6 rounded-2xl border border-white/10 shadow-xl">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400"><CheckCircle size={20} /></div>
                                            <div>
                                                <div className="text-sm font-bold">Placed at Google</div>
                                                <div className="text-xs text-gray-500">2 days ago</div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-300">"The mentorship was a game changer. I went from zero to hero in 6 months!"</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-darkCardBg p-6 rounded-2xl border border-white/10 shadow-xl mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-bold text-primaryBlue">Progress</span>
                                            <span className="text-xs text-gray-400">85%</span>
                                        </div>
                                        <div className="w-full bg-white/10 rounded-full h-2">
                                            <div className="bg-primaryBlue h-2 rounded-full w-[85%]"></div>
                                        </div>
                                        <p className="text-xs text-gray-400 mt-2">Full Stack Development</p>
                                    </div>
                                    <div className="bg-darkCardBg p-6 rounded-2xl border border-white/10 shadow-xl opacity-80">
                                        <div className="h-2 w-20 bg-white/20 rounded mb-4"></div>
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-darkCardBg"></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Form */}
            <section id="register" className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-darkSectionBg to-blue-900/10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-darkCardBg/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold mb-4">Start Your Transformation</h2>
                            <p className="text-gray-400">Fill out this form to join our community of learners. Our team will get in touch with you shortly.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue text-white transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue text-white transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue text-white transition-colors" placeholder="+91 98765 43210" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Domain of Interest</label>
                                    <select className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue text-white transition-colors">
                                        <option value="" className="bg-darkCardBg text-gray-400">Select Distinction</option>
                                        <option value="tech" className="bg-darkCardBg">Technology (AI/ML/Web)</option>
                                        <option value="marketing" className="bg-darkCardBg">Business (Marketing/Finance)</option>
                                        <option value="design" className="bg-darkCardBg">Design (UI/UX)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button type="submit" className="w-full py-4 bg-gradient-to-r from-primaryBlue to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all transform hover:scale-[1.01]">
                                    Join Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Learner;
