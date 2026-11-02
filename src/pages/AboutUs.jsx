import React from 'react';
import {
    Users,
    Award,
    Briefcase,
    Lightbulb,
    Heart,
    Target,
    Rocket,
    Globe,
    BookOpen,
    Mail,
    Phone,
    MapPin,
    Send
} from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-darkMainBg text-white font-sans selection:bg-primaryBlue selection:text-white pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 lg:py-32">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-darkMainBg to-darkMainBg z-0 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-primaryBlue animate-pulse"></span>
                        <span className="text-sm font-medium text-gray-300">Reshaping the Future of Education</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                        Welcome to InternzLearn <br />
                        Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue via-cyan-400 to-purple-400">Learning Meets Innovation!</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                        InternzLearn was born out of a simple yet powerful idea: to redefine education by empowering individuals with industry-aligned skills and real-world experiences. With a heartbeat for learning and an eye for innovation, we strive to reimagine the educational landscape.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto border-t border-b border-white/5 py-10">
                        {[
                            { label: "Fresh Graduates", value: "35,000+" },
                            { label: "Brand Partners", value: "100+" },
                            { label: "Years of Experience", value: "10+" },
                            { label: "Happy Clients", value: "15,000+" },
                        ].map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <span className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</span>
                                <span className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="py-24 bg-darkSectionBg relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Lightbulb, title: "Visionary Education", desc: "We pioneer innovative learning, weaving advanced technology and practical experience into our programs.", color: "yellow" },
                            { icon: Users, title: "Expert-Led Learning", desc: "Our faculty comprises industry veterans and seasoned mentors who bring their real-world experience into the classroom.", color: "blue" },
                            { icon: Target, title: "Personalized Growth", desc: "Tailored educational journeys enable each student to grow personally and professionally.", color: "red" },
                            { icon: Briefcase, title: "Career Empowerment", desc: "We go beyond education by nurturing career prospects, equipping our students with tools to thrive.", color: "green" }
                        ].map((item, index) => (
                            <div key={index} className="bg-darkCardBg border border-white/5 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                                <div className={`w-12 h-12 rounded-lg bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-400 mb-6`}>
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-24 bg-darkMainBg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">Mission and Values</h2>
                            <div className="space-y-6 text-gray-300 leading-relaxed">
                                <p>
                                    At InternzLearn, we're driven by a profound mission: to redefine the landscape of education. Our journey pivots around the fundamental belief that learning isn't confined to classrooms but extends as a lifelong quest. Our commitment is firm—we aim to cultivate an ecosystem that thrives on curiosity, innovation, and immersive hands-on learning experiences.
                                </p>
                                <p>
                                    Within our core, inclusivity, adaptability, and an unwavering dedication to continuous growth form the cornerstone of our values. We tirelessly champion a future where learning transcends boundaries and evolves as an engaging, diverse, and adaptive process.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-[100px] opacity-20 rounded-full"></div>
                            <div className="relative z-10 grid grid-cols-2 gap-6">
                                <div className="space-y-6 mt-12">
                                    <div className="bg-darkCardBg p-6 rounded-2xl border border-white/10 shadow-xl">
                                        <Heart className="text-red-500 mb-4" size={32} />
                                        <h4 className="font-bold text-lg mb-2">Inclusivity</h4>
                                        <p className="text-sm text-gray-400">Education for everyone, everywhere.</p>
                                    </div>
                                    <div className="bg-darkCardBg p-6 rounded-2xl border border-white/10 shadow-xl">
                                        <Rocket className="text-orange-500 mb-4" size={32} />
                                        <h4 className="font-bold text-lg mb-2">Innovation</h4>
                                        <p className="text-sm text-gray-400">Constantly evolving pedagogies.</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-darkCardBg p-6 rounded-2xl border border-white/10 shadow-xl">
                                        <BookOpen className="text-blue-500 mb-4" size={32} />
                                        <h4 className="font-bold text-lg mb-2">Curiosity</h4>
                                        <p className="text-sm text-gray-400">Fueling the desire to learn.</p>
                                    </div>
                                    <div className="bg-darkCardBg p-6 rounded-2xl border border-white/10 shadow-xl">
                                        <Globe className="text-green-500 mb-4" size={32} />
                                        <h4 className="font-bold text-lg mb-2">Impact</h4>
                                        <p className="text-sm text-gray-400">Transforming careers globally.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Journey */}
            <section className="py-24 bg-darkSectionBg overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-4">Embarking on Excellence</div>
                        <h2 className="text-3xl md:text-5xl font-bold">Our Evolutionary Journey</h2>
                    </div>

                    <div className="space-y-12">
                        {[
                            { title: "Our Story", desc: "Our journey began as a collective dream of a small group of passionate educators and tech enthusiasts. What started as a shared vision has blossomed into a hub of transformative learning experiences that bridge the gap between theoretical knowledge and practical application in the professional realm." },
                            { title: "Team and Culture", desc: "Our team is a vibrant mix of educators, industry veterans, and enthusiastic innovators. Fuelled by a common passion for empowering learners, we've created a culture that thrives on collaboration, open communication, and a relentless pursuit of excellence." },
                            { title: "Milestones", desc: "We're immensely proud of our numerous achievements, not just in the realm of educational innovation, but in the transformative experiences we've provided to countless learners. The positive impact and success stories of our students remain the cornerstone of our achievements." },
                            { title: "Our Impact", desc: "Our impact extends far beyond the walls of our virtual classrooms. Our programs have nurtured the careers of individuals, transforming them into industry-ready professionals who are equipped to tackle real-world challenges." },
                            { title: "Innovation and Future Vision", desc: "Innovation is not just a buzzword for us; it's our guiding principle. We're committed to constantly seeking newer, more effective pedagogies, and pioneering technologies to ensure our learners are well-prepared for the evolving professional landscape." }
                        ].map((item, index) => (
                            <div key={index} className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="md:w-1/3">
                                    <h3 className="text-2xl font-bold text-white border-l-4 border-primaryBlue pl-4">{item.title}</h3>
                                </div>
                                <div className="md:w-2/3 bg-darkCardBg p-8 rounded-2xl border border-white/5 shadow-lg hover:bg-white/5 transition-colors">
                                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-darkMainBg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-12 text-center">They Tried It. They Loved It.</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "Mansi", role: "Web Development", text: "InternzLearn has been a game-changer for my career. The mentorship and guidance I received were instrumental in shaping my skills and making me industry-ready." },
                            { name: "Harshit Singh", role: "Cyber Security", text: "InternzLearn exceeded my expectations with their outstanding mentorship. The commitment to making students industry-ready is truly remarkable." },
                            { name: "Rahul Kumar", role: "Artificial Intelligence", text: "I can't express my gratitude enough. Their commitment to student success is evident. Thank you for the invaluable experience." },
                            { name: "Suraj Sharma", role: "Data Science", text: "InternzLearn exceeded my expectations with their outstanding mentorship and guidance. Thank you for helping me pave the way for a successful career." },
                            { name: "Rohit", role: "VLSI", text: "InternzLearn has been my guiding light. The mentorship and guidance received were beyond valuable. A heartfelt thank you." },
                            { name: "Harendra", role: "Sales & Marketing", text: "The mentorship and guidance received were beyond valuable. A heartfelt thank you for your commitment to shaping future industry leaders." },
                            { name: "Yash", role: "Cloud Computing", text: "My sincere gratitude to InternzLearn. Their commitment to making students industry-ready is evident in every aspect of their program." },
                            { name: "Apurv", role: "Python", text: "Mentorship and guidance have been a cornerstone in my career growth. The commitment to student success is unwavering." },
                            { name: "Yashpal", role: "Digital Marketing", text: "Thank you for the transformative mentorship. Your commitment to making students industry-ready sets you apart." }
                        ].map((t, index) => (
                            <div key={index} className="bg-darkCardBg border border-white/5 p-8 rounded-2xl relative">
                                <span className="absolute top-4 left-4 text-4xl text-primaryBlue opacity-30">"</span>
                                <p className="text-gray-300 mb-6 italic pt-4 relative z-10">{t.text}</p>
                                <div>
                                    <h4 className="font-bold text-white text-lg">{t.name}</h4>
                                    <p className="text-sm text-primaryBlue">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-darkSectionBg relative" id="contact">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Chat With our friendly team</h2>
                            <p className="text-gray-400 mb-12 text-lg">We’d love to hear from you. Please fill out this form or shoot us an email.</p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                                        <p className="text-gray-400 mb-2">Our friendly team is here to help.</p>
                                        <a href="mailto:support@internzlearn.com" className="text-primaryBlue hover:text-white transition-colors">support@internzlearn.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                                        <p className="text-gray-400 mb-2">Mon-Sat from 9am to 6pm.</p>
                                        <div className="space-y-1 text-primaryBlue">
                                            <p>+91 9663415279</p>
                                            <p>+91 9187476253</p>
                                            <p>+91 9187369092</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Office</h4>
                                        <p className="text-gray-400">
                                            46/4, Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area,<br />
                                            Hosapalaya, Muneshwara Nagar,<br />
                                            Bengaluru, Karnataka 560068
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-darkCardBg p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Full Name</label>
                                            <input type="text" className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue text-white placeholder-gray-600" placeholder="Type in your full name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Email id</label>
                                            <input type="email" className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue text-white placeholder-gray-600" placeholder="Type in your email" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Reason</label>
                                        <select className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue text-white text-gray-400">
                                            <option>General Inquiry</option>
                                            <option>Course Support</option>
                                            <option>Partnership</option>
                                            <option>Careers</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Message</label>
                                        <textarea className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-primaryBlue text-white placeholder-gray-600 h-32" placeholder="Tell us what we can help you with"></textarea>
                                    </div>
                                    <button type="submit" className="w-full py-4 bg-primaryBlue hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                                        <Send size={20} />
                                        Send a message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Copyright */}
            <div className="bg-darkSectionBg border-t border-white/10 py-6 text-center text-sm text-gray-400">
                <p>© 2026 INTERNZ LEARN PRIVATE LIMITED. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default AboutUs;
//Sankirth koparde//