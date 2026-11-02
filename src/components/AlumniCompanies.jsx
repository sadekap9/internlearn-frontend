import React from 'react';
import { motion } from 'framer-motion';
import amazonLogo from '../assets/amazon-logo.png';
import hclLogo from '../assets/hcl-logo.png';
import unityLogo from '../assets/unity-logo.png';
import metaLogo from '../assets/meta-logo-new.png';
import microsoftLogo from '../assets/microsoft-logo-new.png';
import walmartLogo from '../assets/walmart-logo.png';

const AlumniCompanies = () => {
    // Company logos - using placeholder URLs for now
    const companies = [
        { name: 'Walmart', logo: walmartLogo },
        { name: 'Meta', logo: metaLogo },
        { name: 'Microsoft', logo: microsoftLogo },
        { name: 'Amazon', logo: amazonLogo },
        { name: 'Unity', logo: unityLogo },
        { name: 'HCLTech', logo: hclLogo },
    ];

    // Duplicate for infinite scroll effect
    const allCompanies = [...companies, ...companies];

    return (
        <section className="py-20 bg-darkMainBg relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primaryBlue/5 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accentGreen/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Our Alumni Works At
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-400 max-w-3xl mx-auto"
                    >
                        Explore the top companies and organizations where our alumni have built successful careers, showcasing their achievements and professional growth.
                    </motion.p>
                </div>

                {/* Logo Carousel - Row 1 */}
                <div className="relative mb-8 overflow-hidden">
                    <div className="flex animate-scroll-left">
                        {allCompanies.map((company, index) => (
                            <div
                                key={`row1-${index}`}
                                className="flex-shrink-0 mx-8 w-32 h-20 flex items-center justify-center"
                            >
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'block';
                                    }}
                                />
                                <div className="hidden text-white font-bold text-lg">{company.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logo Carousel - Row 2 (Reverse Direction) */}
                <div className="relative overflow-hidden">
                    <div className="flex animate-scroll-right">
                        {allCompanies.map((company, index) => (
                            <div
                                key={`row2-${index}`}
                                className="flex-shrink-0 mx-8 w-32 h-20 flex items-center justify-center"
                            >
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'block';
                                    }}
                                />
                                <div className="hidden text-white font-bold text-lg">{company.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @keyframes scroll-right {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .animate-scroll-left {
                    animation: scroll-left 30s linear infinite;
                }

                .animate-scroll-right {
                    animation: scroll-right 30s linear infinite;
                }

                .animate-scroll-left:hover,
                .animate-scroll-right:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default AlumniCompanies;
