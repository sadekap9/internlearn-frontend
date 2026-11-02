import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Star, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import startupBg from '../assets/startup-bg.png';
import designBg from '../assets/design-bg.png';
import codersBg from '../assets/coders-bg.png';

const CareerPacksSection = () => {
    const packs = [
        {
            title: "CAREER PACK",
            subtitle: "Tech Beginner",
            image: startupBg,
            price: "30,000",
            link: "/tech-career-pack",
            features: [
                "Over 10 Tech Domains",
                "Embark on an Engaging Tech Journey",
                "Lifetime Tech Expertise",
                "Build a Future-Ready Tech Skill Set",
                "Explore Boundless Tech Horizons",
                "Achieve Hands-On Mastery with Real-World Projects"
            ],
            color: "from-blue-500 to-cyan-400",
            accent: "cyan",
            icon: ShieldCheck
        },
        {
            title: "MAKE YOUR OWN PACK",
            subtitle: "Custom Pack",
            image: designBg,
            price: "30,000",
            link: "/make-your-own-pack",
            features: [
                "Select any 4 programs",
                "Option to choose any 4 random domains available on InternzLearn",
                "Bundle these into a package of 4 programs of your choice"
            ],
            color: "from-purple-500 via-fuchsia-500 to-pink-500",
            accent: "purple",
            popular: true,
            icon: Star
        },
        {
            title: "TECH PACK",
            subtitle: "Tech Professional",
            image: codersBg,
            price: "30,000",
            link: "/career-pack/coders-pack",
            features: [
                "Master Core Programming Skills",
                "Hands-on Coding Projects",
                "Industry Standard Tools",
                "Full Stack Development",
                "Data Structures & Algorithms",
                "Professional Certification"
            ],
            color: "from-emerald-500 to-green-400",
            accent: "emerald",
            icon: Zap
        }
    ];

    return (
        <section className="py-24 bg-[#0B0F14] relative overflow-hidden">
            {/* Advanced Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-primaryBlue mb-6 inline-block backdrop-blur-sm">
                            Unlock Your Potential
                        </span>
                        <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                            Discover InternzLearn <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue via-purple-400 to-pink-400 animate-gradient">
                                Career Packs
                            </span>
                        </h3>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                            Curated with top-quality courses and resources to provide comprehensive learning and great value.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {packs.map((pack, index) => {
                        const Icon = pack.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className={`group relative flex flex-col h-full ${pack.popular ? 'lg:-mt-8 lg:mb-8 z-20' : 'z-10'}`}
                            >
                                {/* Gradient Border Wrapper */}
                                <div className={`absolute -inset-[1px] bg-gradient-to-b ${pack.color} rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:blur-md`}></div>

                                <div className="relative bg-[#0F1621] rounded-3xl overflow-hidden h-full flex flex-col border border-white/10 shadow-2xl">

                                    {/* Popular Badge */}
                                    {pack.popular && (
                                        <div className="absolute top-0 inset-x-0 flex justify-center -mt-3 z-40">
                                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-purple-500/40 flex items-center gap-2">
                                                <Star size={12} fill="currentColor" /> Most Popular
                                            </div>
                                        </div>
                                    )}

                                    {/* Image Header with styled overlay */}
                                    <div className="relative h-60 overflow-hidden">
                                        <div className="absolute inset-0 bg-[#0F1621]/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <div className={`absolute inset-0 bg-gradient-to-t from-[#0F1621] via-[#0F1621]/40 to-transparent z-20`}></div>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${pack.color} opacity-20 mix-blend-overlay group-hover:opacity-40 transition-opacity z-20`}></div>

                                        <img
                                            src={pack.image}
                                            alt={pack.subtitle}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />

                                        <div className="absolute bottom-6 left-6 z-30">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className={`p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-white`}>
                                                    <Icon size={18} />
                                                </div>
                                                <span className="text-white/80 font-bold text-xs uppercase tracking-widest">{pack.title}</span>
                                            </div>
                                            <h4 className="text-3xl font-bold text-white leading-none drop-shadow-md">{pack.subtitle}</h4>
                                        </div>
                                    </div>

                                    {/* Content Body */}
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="mb-8 flex-1">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="h-px bg-white/10 flex-1"></div>
                                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Includes</p>
                                                <div className="h-px bg-white/10 flex-1"></div>
                                            </div>

                                            <ul className="space-y-4">
                                                {pack.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm group/item">
                                                        <div className={`mt-0.5 min-w-[18px] h-[18px] rounded-full flex items-center justify-center border border-white/10 bg-white/5 group-hover/item:bg-gradient-to-r ${pack.color} group-hover/item:border-transparent transition-all duration-300`}>
                                                            <Check size={10} className="text-white opacity-0 group-hover/item:opacity-100 transition-opacity" strokeWidth={3} />
                                                        </div>
                                                        <span className="group-hover:text-white transition-colors">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Pricing & CTA */}
                                        <div className="pt-6 border-t border-white/5">
                                            <div className="flex items-end justify-between mb-6">
                                                <div className="flex flex-col">
                                                    <span className="text-slate-500 text-xs line-through mb-1">₹60,000</span>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-lg text-slate-400 font-bold">₹</span>
                                                        <span className="text-4xl font-bold text-white">{pack.price}</span>
                                                        <span className="text-slate-500 text-sm font-medium">/-</span>
                                                    </div>
                                                </div>
                                                {pack.popular && (
                                                    <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold px-2 py-1 rounded">
                                                        50% OFF
                                                    </div>
                                                )}
                                            </div>

                                            <Link to={pack.link} className="block">
                                                <button className={`w-full py-4 rounded-xl bg-gradient-to-r ${pack.color} relative overflow-hidden group/btn font-bold text-white shadow-lg tracking-wider text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]`}>
                                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                                    <span className="relative z-10">Know More</span>
                                                    <ArrowRight size={18} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CareerPacksSection;
