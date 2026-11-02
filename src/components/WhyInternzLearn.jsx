import React from 'react';
import googleEducationLogo from '../assets/google-education.png';
import apscheLogo from '../assets/apsche-logo.jpg';
import vtuLogo from '../assets/vtu-logo.png';
import isoLogo from '../assets/iso-logo.png';
import msmeLogo from '../assets/msme-logo.jpeg';

const tnskLogo = '/cGwUW-1D_400x400-removebg-preview.png';

import googleLogo from '../assets/google-logo.png';
import microsoftLogo from '../assets/microsoft-logo.png';
import adobeLogo from '../assets/adobe-logo.png';
import autodeskLogo from '../assets/autodesk-logo.png';
import unityLogo from '../assets/unity-white-logo.png';
import pmiLogo from '../assets/pmi-logo.png';
import ciscoLogo from '../assets/cisco-logo.png';
import agriscienceLogo from '../assets/agriscience-logo.png';
import hospitalityLogo from '../assets/hospitality-logo.png';
import intuitLogo from '../assets/intuit-logo.png';
import swiftLogo from '../assets/swift-logo.png';
import careerSkillsLogo from '../assets/career-skills-logo.png';
import itSpecialistLogo from '../assets/it-specialist-logo.png';
import metaLogo from '../assets/meta-logo.png';
import healthScienceLogo from '../assets/health-science-logo.jpg';

const WhyInternzLearn = () => {
    const accreditations = [
        {
            name: "Google for Education",
            subtitle: "Officially Authorised Partner",
            logo: googleEducationLogo
        },
        {
            name: "VTU Karnataka",
            subtitle: "Government Listed",
            logo: vtuLogo
        },
        {
            name: "APSCHE",
            subtitle: "Official Training Partner",
            logo: apscheLogo
        },
        {
            name: "ISO Certified",
            subtitle: "Quality Standards",
            logo: isoLogo
        },
        {
            name: "MSME",
            subtitle: "Government Registered",
            logo: msmeLogo
        },
        {
            name: "TNSK",
            subtitle: "Government Approved",
            logo: tnskLogo
        }
    ];

    return (
        <section className="py-20 bg-darkMainBg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        We are{" "}
                        <span className="text-primaryBlue">Accredited</span>{" "}
                        By
                    </h2>
                    <p className="mt-3 text-darkTextSecondary max-w-xl mx-auto">
                        Official recognitions that reflect our quality and credibility
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {accreditations.map((item, index) => (
                        <div
                            key={index}
                            className="bg-darkCardBg border border-darkBorder rounded-xl p-6
                                       flex flex-col items-center justify-center text-center
                                       transition-all duration-300
                                       hover:-translate-y-1 hover:shadow-lg
                                       hover:border-primaryBlue/40"
                        >
                            {/* Logo */}
                            <div className="w-full h-24 flex items-center justify-center mb-4">
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>

                            {/* Subtitle */}
                            <p className="text-sm font-medium text-darkTextSecondary">
                                {item.subtitle}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Certification Partners Section */}
                <div className="mt-24">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            Our Official <span className="text-primaryBlue">Certification Partners</span>
                        </h3>
                        <div className="h-1 w-20 bg-primaryBlue mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {[
                            { name: "Google", logo: googleLogo },
                            { name: "Microsoft", logo: microsoftLogo },
                            { name: "Adobe", logo: adobeLogo },
                            { name: "Autodesk", logo: autodeskLogo },
                            { name: "Unity", logo: unityLogo },
                            { name: "Project Management Institute", logo: pmiLogo },
                            { name: "Cisco", logo: ciscoLogo },
                            { name: "Agriscience & Technology", logo: agriscienceLogo },
                            { name: "Hospitality & Culinary Arts", logo: hospitalityLogo },
                            { name: "Intuit Certifications", logo: intuitLogo },
                            { name: "App Development with Swift", logo: swiftLogo },
                            { name: "Critical Career Skills", logo: careerSkillsLogo },
                            { name: "IT Specialist", logo: itSpecialistLogo },
                            { name: "Meta", logo: metaLogo },
                            { name: "Health Sciences Careers", logo: healthScienceLogo }
                        ].map((partner, index) => (
                            <div
                                key={index}
                                className="bg-darkCardBg border border-darkBorder rounded-xl p-4
                                           flex items-center justify-center
                                           transition-all duration-300
                                           hover:border-primaryBlue/40 hover:bg-darkCardBg/80 group"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-h-12 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyInternzLearn;
