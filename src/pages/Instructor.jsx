import React, { useState } from 'react';
import {
    Mic,
    Video,
    Users,
    DollarSign,
    Globe,
    Clock,
    CheckCircle,
    ArrowRight,
    Briefcase,
    Linkedin,
    Award,
    PlayCircle
} from 'lucide-react';

const Instructor = () => {
    return (
        <div className="min-h-screen bg-darkMainBg text-white font-sans selection:bg-primaryBlue selection:text-white pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 lg:py-32">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-darkMainBg to-darkMainBg z-0 pointer-events-none"></div>
                {/* Background Blobs */}
                <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-primaryBlue/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-sm font-medium text-gray-300">Join our Elite Faculty</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
                        Inspire the Next <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Generation</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Share your expertise, build your personal brand, and earn by mentoring ambitious students from around the globe.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#apply" className="px-8 py-4 bg-primaryBlue hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-1 flex items-center gap-2">
                            Become an Instructor
                            <ArrowRight size={20} />
                        </a>
                        <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl transition-all backdrop-blur-sm flex items-center gap-2">
                            <PlayCircle size={20} className="text-gray-300" />
                            How it works
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
                        {[
                            { label: "Active Mentors", value: "500+" },
                            { label: "Students Taught", value: "50,000+" },
                            { label: "Countries Reached", value: "25+" },
                            { label: "Average Rating", value: "4.9/5" },
                        ].map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Teach with Us */}
            <section className="py-24 bg-darkSectionBg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Teach with InternzLearn?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">We handle the marketing, platform, and students. You focus on what you do best: Teaching.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: DollarSign, title: "Earn Great Income", desc: "Competitive hourly rates and royalty options for your courses.", color: "green" },
                            { icon: Clock, title: "Flexible Schedule", desc: "Take live classes or record sessions at your own convenience.", color: "blue" },
                            { icon: Users, title: "Global Impact", desc: "Reach students from diverse backgrounds and help them succeed.", color: "purple" },
                            { icon: Globe, title: "Work from Anywhere", desc: "100% remote. All you need is a laptop and good internet.", color: "cyan" },
                            { icon: Briefcase, title: "Build Personal Brand", desc: "Establish yourself as a thought leader in your industry.", color: "orange" },
                            { icon: Award, title: "Exclusive Perks", desc: "Access to premium tools, events, and networking opportunities.", color: "yellow" }
                        ].map((item, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-darkCardBg border border-white/5 hover:border-primaryBlue/30 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1">
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-${item.color}-500/10 text-${item.color}-400`}>
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who Can Apply */}
            <section className="py-24 bg-darkMainBg relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Who Are We Looking For?</h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                We are looking for passionate industry professionals who want to give back to the community. You don't need to be a professional teacher, just an expert in your field.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Industry Experts", desc: "Working professionals with 2+ years of experience in their domain." },
                                    { title: "Passionate Educators", desc: "Individuals who love simplifying complex concepts." },
                                    { title: "Good Communicators", desc: "Ability to deliver engaging and interactive sessions." },
                                    { title: "Commitment", desc: "Willingness to dedicate at least 4-6 hours per week." }
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <CheckCircle className="text-accentGreen" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                            <p className="text-gray-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <div className="space-y-4 mt-12">
                                    <div className="bg-darkCardBg p-6 rounded-2xl border border-white/10 shadow-xl opacity-70">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">JD</div>
                                            <div>
                                                <h4 className="font-bold text-white">John Doe</h4>
                                                <p className="text-xs text-gray-500">Sr. Data Scientist</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-darkCardBg p-6 rounded-2xl border border-white/10 shadow-xl">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white"><Mic size={20} /></div>
                                            <div className="font-bold text-white">Live Session</div>
                                        </div>
                                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full w-2/3 bg-green-500"></div>
                                        </div>
                                        <p className="text-xs text-right text-gray-400 mt-2">45 mins remaining</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-darkCardBg p-6 rounded-2xl border border-white/10 shadow-xl">
                                        <h4 className="font-bold text-white mb-2">Earnings</h4>
                                        <div className="text-3xl font-bold text-accentGreen">₹45k<span className="text-sm text-gray-500 font-normal">/mo</span></div>
                                        <div className="text-xs text-gray-500 mt-1">For 8 hours/week</div>
                                    </div>
                                    <div className="bg-darkCardBg p-6 rounded-2xl border border-white/10 shadow-xl opacity-80">
                                        <h4 className="font-bold text-white mb-2">Rating</h4>
                                        <div className="flex text-yellow-500 gap-1">
                                            {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-4 h-4 bg-yellow-500 rounded-full"></div>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section id="apply" className="py-24 bg-darkSectionBg">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-darkCardBg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-2">Start Your Journey</h2>
                            <p className="text-gray-400">Apply now to join our mentor network.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue text-white" placeholder="Jane Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">LinkedIn URL</label>
                                    <input type="url" className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue text-white" placeholder="linkedin.com/in/jane" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue text-white" placeholder="jane@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Expertise Area</label>
                                    <input type="text" className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue text-white" placeholder="e.g., Data Science, Digital Marketing" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Bio / Notes</label>
                                <textarea className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue text-white h-32" placeholder="Tell us briefly about your experience..."></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-gradient-to-r from-primaryBlue to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg transition-all transform hover:scale-[1.01]">
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Instructor;
