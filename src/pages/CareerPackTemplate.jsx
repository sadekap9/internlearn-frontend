import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Star, Briefcase, Award, ChevronDown, ChevronUp, Monitor, Code, Cpu, Globe, Lock, Cloud, Terminal, Brain, BarChart, Smartphone, Coffee, Layout, Megaphone, Activity, DollarSign, PenTool, TrendingUp, Users, Settings, Pen } from 'lucide-react';
import { packDetails } from '../data/packDetails';
import PackEnrollmentSection from '../components/PackEnrollmentSection';

const CareerPackTemplate = () => {
    const { packId } = useParams();
    const [packData, setPackData] = useState(null);
    const [faqOpen, setFaqOpen] = useState(null);

    useEffect(() => {
        if (packId && packDetails[packId]) {
            setPackData(packDetails[packId]);
        }
    }, [packId]);

    const toggleFaq = (index) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    if (!packData) {
        return <div className="min-h-screen bg-darkMainBg text-white flex items-center justify-center">Loading or Pack Not Found...</div>;
    }

    const { title, headline, description, newLaunch, stats, courses } = packData;

    return (
        <div className="min-h-screen bg-darkMainBg text-white font-sans pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-0 pb-16 lg:pt-6 lg:pb-24">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20 z-0 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primaryBlue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 space-y-5">
                            {newLaunch && (
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-accentGreen uppercase tracking-wider mb-2">
                                    <span className="w-2 h-2 rounded-full bg-accentGreen animate-pulse"></span>
                                    New Launch
                                </div>
                            )}

                            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-accentGreen">{title}</span>
                                <br />
                                <span className="text-white text-3xl md:text-5xl">{headline}</span>
                            </h1>

                            <p className="text-lg text-gray-300 leading-relaxed max-w-xl font-light">
                                {description}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-2">
                                {["Internship Assistance", "Practical Projects", "Industry Certified Courses"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                                        <Check size={14} className="text-primaryBlue" />
                                        <span className="text-gray-300 text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-gradient-to-r from-primaryBlue to-blue-600 rounded-xl font-bold text-white shadow-[0_0_20px_rgba(0,174,239,0.3)] hover:shadow-[0_0_30px_rgba(0,174,239,0.5)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 border border-white/10">
                                    Apply Now
                                </button>
                                <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                                    Download Brochure
                                </button>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative perspective-1000">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0B0F14] transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700">
                                {/* Browser Header mockup */}
                                <div className="bg-[#1A1F26] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <div className="ml-4 bg-black/30 px-3 py-1 rounded text-[10px] text-gray-500 font-mono flex-1 text-center">
                                        internzlearn.com/career-pack
                                    </div>
                                </div>

                                {/* Main Visual Content - Using a generic tech/professional image for now */}
                                <div className="aspect-video relative">
                                    <img
                                        src={packData.heroImage || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"}
                                        alt="Career Pack Visual"
                                        className="w-full h-full object-cover opacity-90"
                                    />

                                    {/* Floating Stats Card - Generic */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="absolute bottom-6 left-6 bg-[#0B0F14]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl hidden sm:block"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                                                <Award size={20} />
                                            </div>
                                            <div>
                                                <h4 className="text-white text-sm font-bold">Industry Ready</h4>
                                                <p className="text-xs text-gray-400">Certified Curriculum</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Floating Growth Card */}
                                    <motion.div
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.8 }}
                                        className="absolute top-6 right-6 bg-[#0B0F14]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl hidden sm:block"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="text-center">
                                                <p className="text-xs text-gray-400 uppercase">Growth</p>
                                                <p className="text-xl font-bold text-accentGreen">120%</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Key Highlights */}
            <div className="py-16 bg-[#0B0F14]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                        {stats.map((stat, i) => (
                            <div key={i} className={`p-4 ${i === 0 ? 'border-l-0' : ''}`}>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h3>
                                <p className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Courses Grid */}
            <div className="py-20 bg-[#0D1117] relative">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primaryBlue/10 rounded-full blur-[120px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">All you need to learn about <span className="text-primaryBlue">{title}</span></h2>
                        <p className="text-gray-400">This pack includes {courses.length} courses that will help you kickstart your career.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((course, index) => {
                            const Icon = course.icon; // This needs to be a component ref, handled by importing all Lucide icons and mapping or passing logical names.
                            // In packDetails.js, I imported icons and assigned them directly. This works if packDetails is in same bundle context.
                            return (
                                <Link
                                    to={course.path}
                                    key={index}
                                    className="block h-full group"
                                >
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="h-full bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primaryBlue/30 transition-all duration-300 flex flex-col"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`p-3 rounded-xl bg-white/5 ${course.color} group-hover:scale-110 transition-transform duration-300`}>
                                                {/* Render Icon component */}
                                                <Icon size={24} />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primaryBlue transition-colors">{course.title}</h3>
                                        <p className="text-gray-400 text-sm mb-6 line-clamp-2 flex-grow">{course.description}</p>
                                        <div className="w-full py-2.5 rounded-lg border border-white/10 text-sm font-medium text-center text-white group-hover:bg-primaryBlue group-hover:text-[#0B0F14] group-hover:border-transparent transition-all">
                                            Explore Course
                                        </div>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>


                </div>
            </div>

            {/* How Your Skill Up */}
            <div className="py-20 bg-darkMainBg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">This is how you <span className="text-accentGreen">Skill Up</span></h2>
                        <p className="text-gray-400">Our beginner-friendly courses will level up your skills and make you industry-ready.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Choose courses",
                                desc: `Learn from ${courses.length}+ in-demand courses; pick the one that interests you.`,
                                icon: Briefcase
                            },
                            {
                                title: "Learn LIVE",
                                desc: "Our Instructors work with top brands and are here to train and guide you.",
                                icon: Monitor
                            },
                            {
                                title: "Industry Projects",
                                desc: "Learn Live, complete milestones, and get real-world practical experience.",
                                icon: Code
                            },
                            {
                                title: "Unlock Certificates",
                                desc: "Boost your chances for internships by adding certificates to your resume.",
                                icon: Award
                            },
                        ].map((step, index) => (
                            <div key={index} className="relative text-center group">
                                <div className="w-20 h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primaryBlue/20 transition-colors duration-300 relative z-10 border border-white/10">
                                    <step.icon className="text-primaryBlue" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400 text-sm">{step.desc}</p>
                                {index !== 3 && (
                                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Certificates Section */}
            <div className="py-20 bg-white/2 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Unlock 30+ Certificates and LoRs</h2>
                                <p className="text-gray-400 text-lg">This pack is tailored to make your resume stronger and job-worthy</p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                            <Award size={20} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">Industry Ratified Certificates and Masterclass</h4>
                                        <p className="text-gray-400 text-sm mt-1">Courses that won't let your resume be empty and gives you an edge.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400">
                                            <Star size={20} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">Earn Letter of Recommendation</h4>
                                        <p className="text-gray-400 text-sm mt-1">Upon the completion of the courses, get LORs signed by the mentors.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                                            <Briefcase size={20} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">Internship Opportunities</h4>
                                        <p className="text-gray-400 text-sm mt-1">With every course, we make you not only industry-ready but also help you crack your first internship.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primaryBlue to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative bg-[#1A1F26] rounded-2xl p-2 border border-white/10 transform rotate-2 hover:rotate-0 transition-all duration-500">
                                <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-white/10 rounded-xl flex items-center justify-center border border-white/5 overflow-hidden">
                                    <img
                                        src="/certificate.png"
                                        alt="Certificate of Completion"
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="py-20 bg-[#0B0F14]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Love from our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Mentees</span></h2>
                        <p className="text-gray-400">Hear what they have to say about the program, their experience & key takeaways</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Tushar Pandey",
                                // college: "Student",
                                quote: "This is my third course and I really enjoyed it. I've done this to frame my CV in a better shape and it helped me. The instructor was on point, one extra star for his extra effort.",
                                initial: "T",
                                color: "bg-blue-500"
                            },
                            {
                                name: "Tunisha Sharma",
                                // college: "Student",
                                quote: "The course has helped me in getting confident about a subject that I had only a vague idea about. Discussions are not only theory-oriented but also practical which make me see everything in a different light.",
                                initial: "T",
                                color: "bg-pink-500"
                            },
                            {
                                name: "Yashika Goyal",
                                // college: "Student",
                                quote: "My time with Internz Learn was the most enlightening for me. I spent a great deal of time with them and I felt that I bonded with them in many aspects. They are a great gift for us.",
                                initial: "Y",
                                color: "bg-purple-500"
                            }
                        ].map((testimonial, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold`}>
                                        {testimonial.initial}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                                        <p className="text-xs text-gray-400">Mentee</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed italic">"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-20 bg-darkMainBg border-t border-white/5">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-2">Still have <span className="text-primaryBlue">Doubts?</span></h2>
                        <p className="text-gray-400">We have answered some of the frequent questions for you!</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            "Are there any prerequisites before starting a course?",
                            "Are the study hours flexible?",
                            "Do I get lifetime access for the course?",
                            "Can I opt for one course again and again?",
                            "Are there any scholarships or discount options?",
                            "How can I schedule my course?",
                            "How do I activate my course?",
                            "How will I get certificates for my course?",
                            "How will I be taught concepts in the class?"
                        ].map((question, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-4 text-left font-medium text-gray-200 hover:bg-white/5 transition-colors"
                                >
                                    {question}
                                    {faqOpen === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                                {faqOpen === index && (
                                    <div className="p-4 pt-0 text-gray-400 text-sm border-t border-white/5 mt-2">
                                        Yes, our courses are designed to be flexible and beginner-friendly. You will receive lifetime access to the course content and can revisit the modules anytime.
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Final Application Section - Replaced by PackEnrollmentSection */}
            <PackEnrollmentSection
                title={title}
                currentPrice={packData.price || "24,999"}
                originalPrice={packData.originalPrice || "50,000"}
                discountPercentage={packData.discount || "50%"}
                packId={packId}
            />

            {/* Sticky CTA for Mobile (Optional, or just bottom regular CTA) */}
            <div className="fixed bottom-0 w-full bg-[#0B0F14]/90 backdrop-blur-lg border-t border-white/10 p-4 md:hidden z-50 flex items-center justify-between">
                <div>
                    <span className="text-xs text-gray-400 block line-through">₹50,000</span>
                    <span className="text-lg font-bold text-white">₹24,999</span>
                </div>
                <button className="px-6 py-2 bg-primaryBlue text-[#0B0F14] font-bold rounded-lg text-sm">
                    Enroll Now
                </button>
            </div>
        </div>
    );
};

export default CareerPackTemplate;
