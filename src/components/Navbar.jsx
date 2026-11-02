import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BookSessionPopup from './BookSessionPopup';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSessionPopupOpen, setIsSessionPopupOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    // State to track which dropdowns are open on mobile [name]: boolean
    const [openDropdowns, setOpenDropdowns] = useState({});

    // Get current location to highlight active links
    const location = useLocation();

    // State for mega menu tabs, default to first category
    const [activeTab, setActiveTab] = useState('Technology');

    // Handle scroll effect for navbar glassmorphism
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDropdown = (name) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    // Helper to check if a link is active
    const isActive = (path) => {
        if (path === '#' || path === '') return false;
        return location.pathname === path;
    };

    // Helper to check if a parent section is active (contains current path)
    const isParentActive = (item) => {
        if (!item.dropdown) return isActive(item.href);
        // Check deeply nested dropdowns
        return item.dropdown.some(sub => {
            if (sub.subDropdown) {
                return sub.subDropdown.some(deep => isActive(deep.href));
            }
            return isActive(sub.href);
        });
    };

    const navLinks = [
        {
            name: 'ProLaunch',
            href: '#prolaunch',
            badge: 'NEW',
            badgeColor: 'from-green-400 to-emerald-500',
            dropdown: [

                {
                    name: 'Career Packs',
                    href: '#',
                    subDropdown: [
                        { name: 'Tech Career Pack', href: '/career-pack/tech-career-pack' },
                        { name: 'Coders Pack', href: '/career-pack/coders-pack' },
                        { name: 'Financial Analyst Pack', href: '/career-pack/financial-analyst-pack' },
                        { name: 'Medical Pack', href: '/career-pack/medical-pack' },
                        { name: 'Startup Pack', href: '/career-pack/startup-pack' },
                        { name: 'New Age Technology', href: '/career-pack/new-age-technology' },
                        { name: 'New Age Marketing', href: '/career-pack/new-age-marketing' },
                        { name: 'Design Pack', href: '/career-pack/design-pack' },
                        { name: 'Make Your Own Pack', href: '/make-your-own-pack', badge: 'HOT', badgeColor: 'from-orange-500 to-red-500' },
                    ]
                },
                {
                    name: 'Offline Classes',
                    href: '#',
                    badge: 'COMING SOON',
                    badgeColor: 'from-pink-500 to-rose-500',
                    subDropdown: [
                        { name: 'Digital Marketing', href: '/offline/digital-marketing' }
                    ]
                }
            ]
        },
        {
            name: 'Career Starter',
            href: '#',
            badge: 'BEST SELLER',
            badgeColor: 'from-yellow-400 to-orange-500',
            dropdown: [
                {
                    name: 'Technology',
                    href: '#',
                    subDropdown: [
                        { name: 'Artificial Intelligence', href: '/program/artificial-intelligence' },
                        { name: 'Machine Learning', href: '/program/machine-learning' },
                        { name: 'Data Science', href: '/program/data-science' },
                        { name: 'Web Development', href: '/program/web-development' },
                        { name: 'Android Development', href: '/program/android-development' },
                        { name: 'Cyber Security', href: '/program/cyber-security' },
                        { name: 'Java Programming', href: '/program/java-programming' },
                        { name: 'Python Programming', href: '/program/python-programming' },
                        { name: 'Cloud Computing', href: '/program/cloud-computing' },
                    ]
                },
                {
                    name: 'Engineering',
                    href: '#',
                    subDropdown: [
                        { name: 'Embedded Systems', href: '/program/embedded-systems' },
                        { name: 'Internet of Things', href: '/program/internet-of-things' },
                        { name: 'Hybrid Electric Vehicle', href: '/program/hybrid-electric-vehicle' },
                        { name: 'Robotics', href: '/program/robotics' },
                        { name: 'Construction Planning', href: '/program/construction-planning' },
                        { name: 'IC Engine Design', href: '/program/ic-engine-design' },
                        { name: 'AutoCAD', href: '/program/autocad' },
                        { name: 'VLSI', href: '/program/vlsi' },
                    ]
                },
                {
                    name: 'Business & Finance',
                    href: '#',
                    subDropdown: [
                        { name: 'Human Resources', href: '/program/human-resources' },
                        { name: 'Finance', href: '/program/finance' },
                        { name: 'Sales & Marketing', href: '/program/sales-marketing' },
                        { name: 'Digital Marketing', href: '/program/digital-marketing' },
                        { name: 'Stock Market', href: '/program/stock-market' },
                        { name: 'Business Communication', href: '/program/business-communication' },
                        // { name: 'Product Management', href: '/program/product-management', badge: 'NEW', badgeColor: 'from-purple-500 to-indigo-500' },
                    ]
                },
                {
                    name: 'Life Sciences',
                    href: '#',
                    subDropdown: [
                        { name: 'Industrial Biotechnology', href: '/program/industrial-biotechnology' },
                        { name: 'Psychology', href: '/program/psychology' },
                        { name: 'Medical Coding', href: '/program/medical-coding' },
                        { name: 'Neurology', href: '/program/neurology' },
                        { name: 'Genetic Engineering', href: '/program/genetic-engineering' },
                        { name: 'Medical Writing', href: '/program/medical-writing' },
                        { name: 'Hospital Management', href: '/program/hospital-management' },
                    ]
                },
                {
                    name: 'Creative & Design',
                    href: '#',
                    subDropdown: [
                        { name: 'UI/UX Design', href: '/program/ui-ux-design' },
                        { name: 'Social Media Marketing', href: '/program/social-media-marketing' },
                        { name: 'Content Creation', href: '/program/content-creation' },
                        { name: 'Generative AI', href: '/program/generative-ai' },
                        { name: 'Graphic Design', href: '/program/graphic-design' },
                    ]
                }
            ]
        },
        {
            name: 'Explore',
            href: '#',
            dropdown: [
                {
                    name: 'Programs',
                    href: '/join/learner',
                    badge: 'POPULAR',
                    badgeColor: 'from-blue-500 to-cyan-500'
                },
                {
                    name: 'Opportunities',
                    href: '#',
                    subDropdown: [
                        { name: 'Become Instructor', href: '/join/instructor' },
                        { name: 'Become Campus Ambassador', href: '/join/campus-ambassador' },
                    ]
                },
                {
                    name: 'Tools',
                    href: '#',
                    subDropdown: [
                        { name: 'Build Resume (ATS Score)', href: '/resume-builder', badge: 'NEW', badgeColor: 'from-purple-500 to-indigo-500' },
                        { name: 'Placement Readiness Test', href: '/placement-readiness-test', badge: 'FREE', badgeColor: 'from-accentGreen to-primaryBlue' },
                        { name: 'Ask Inzy (AI Advisor)', href: '#', badge: 'AI', badgeColor: 'from-blue-500 to-cyan-500', onClick: () => window.dispatchEvent(new CustomEvent('open-chatbot')) },
                    ]
                }
            ]
        },
        { name: 'About Us', href: '/about-us' },
    ];

    const renderLink = (item, isMobile = false) => {
        const isInternal = item.href && item.href.startsWith('/') && !item.onClick;
        const commonClasses = isMobile
            ? "flex items-center justify-between px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-accentGreen hover:bg-white/5 transition-all"
            : "flex items-center justify-between px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 rounded-lg group/link";

        const activeClasses = isActive(item.href) ? "text-primaryBlue border-white/10 bg-white/5 font-medium" : "";

        const content = (
            <div className="flex items-center justify-between w-full">
                <span className="group-hover/link:text-primaryBlue group-hover/link:translate-x-1 inline-block transform transition-all duration-300">{item.name}</span>
                {item.badge && (
                    <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded text-white bg-gradient-to-r ${item.badgeColor || 'from-pink-500 to-rose-500'} shadow-sm ml-2`}>
                        {item.badge}
                    </span>
                )}
            </div>
        );

        if (item.onClick) {
            return (
                <a
                    href={item.href || '#'}
                    className={`${commonClasses} ${activeClasses} cursor-pointer`}
                    onClick={(e) => {
                        e.preventDefault();
                        item.onClick();
                        if (isMobile) setIsOpen(false);
                    }}
                >
                    {content}
                </a>
            );
        }

        if (isInternal) {
            return (
                <Link
                    to={item.href}
                    className={`${commonClasses} ${activeClasses}`}
                    onClick={() => isMobile && setIsOpen(false)}
                >
                    {content}
                </Link>
            );
        }
        return (
            <a
                href={item.href}
                className={`${commonClasses} ${activeClasses}`}
                onClick={() => isMobile && setIsOpen(false)}
            >
                {content}
            </a>
        );
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${scrolled
                ? 'pt-4 px-4 sm:px-6 lg:px-8'
                : 'pt-0 px-0'
                }`}
        >
            <div className={`mx-auto max-w-7xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${scrolled
                ? 'bg-[#0B0F14]/70 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_16px_40px_-12px_rgba(0,0,0,0.8)] px-6'
                : 'bg-transparent border-b border-white/5 px-4 sm:px-6 lg:px-8 backdrop-blur-md bg-[#0B0F14]/30'
                }`}>
                <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-16' : 'h-24'}`}>
                    {/* Logo - Natural on Dark Background */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer group">
                        <Link to="/">
                            <img
                                src="/logo.png"
                                alt="Internz Learn"
                                className="h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(0,174,239,0.5)]"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <div
                                    className={`relative flex items-center gap-1.5 font-medium transition-all duration-300 text-sm tracking-wide px-3 py-2 rounded-full cursor-pointer z-10 overflow-hidden ${isParentActive(link) ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                                >
                                    <div className={`absolute inset-0 transition-all duration-300 ease-in-out ${isParentActive(link) ? 'bg-white/10' : 'bg-white/0 group-hover:bg-white/10'} rounded-full`}></div>
                                    <span className="relative z-10 flex items-center gap-2">
                                        {link.href.startsWith('/') ? (
                                            <Link to={link.href}>{link.name}</Link>
                                        ) : (
                                            link.name
                                        )}

                                        {link.badge && (
                                            <span className={`relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-full border border-white/20 bg-gradient-to-r ${link.badgeColor} px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]`}>
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                                                {link.badge === 'NEW' && <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span></span>}
                                                {link.badge === 'BEST SELLER' && (
                                                    <svg className="relative z-10 w-2.5 h-2.5 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                )}
                                                <span className="relative z-10 drop-shadow-md">{link.badge}</span>
                                            </span>
                                        )}
                                    </span>

                                    {link.dropdown && (
                                        <ChevronDown size={14} className="relative z-10 opacity-70 group-hover:rotate-180 group-hover:opacity-100 transition-all duration-300" />
                                    )}
                                </div>
                                <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] bg-primaryBlue rounded-t-full transition-all duration-300 ease-out shadow-[0_-2px_12px_rgba(0,174,239,1)] ${isParentActive(link) ? 'w-3/4 opacity-100' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-100'}`}></span>

                                {/* Level 1 Dropdown */}
                                {link.dropdown && (
                                    <div className={`absolute top-full ${link.name === 'Career Starter' ? '-left-20 lg:-left-24 xl:-left-16' : 'left-0'} mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pt-2 ${link.name === 'Career Starter' ? '' : link.dropdown.some(i => i.subDropdown && i.subDropdown.length > 5) ? 'w-[520px]' : link.dropdown.some(i => i.subDropdown) ? 'w-72' : 'w-56'
                                        }`}>
                                        <div className={`bg-[#0B0F14]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl ${link.name === 'Career Starter' ? 'overflow-hidden' : 'overflow-visible max-h-[80vh] overflow-y-auto custom-scrollbar p-2'} `}>
                                            {link.name === 'Career Starter' ? (
                                                <div className="flex w-[700px] lg:w-[800px] xl:w-[900px] max-w-[95vw] h-[75vh] min-h-[400px] max-h-[550px]">
                                                    {/* Sidebar Categories */}
                                                    <div className="w-56 lg:w-64 bg-[#0B0F14] border-r border-white/10 flex-shrink-0 overflow-y-auto custom-scrollbar">
                                                        {link.dropdown.map((category) => (
                                                            <div
                                                                key={category.name}
                                                                className={`px-3 lg:px-5 py-3 lg:py-4 cursor-pointer flex items-center justify-between group/cat transition-all duration-200 ${activeTab === category.name ? 'bg-white/5 border-l-4 border-primaryBlue text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white border-l-4 border-transparent'}`}
                                                                onMouseEnter={() => setActiveTab(category.name)}
                                                            >
                                                                <div className="flex items-center gap-3">
                                                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${activeTab === category.name ? 'bg-primaryBlue text-white' : 'bg-white/10 text-gray-400 group-hover/cat:bg-white/20'}`}>
                                                                        {category.name.charAt(0)}
                                                                    </div>
                                                                    <span className="font-medium text-sm">{category.name}</span>
                                                                </div>
                                                                {activeTab === category.name && <ChevronDown className="transform -rotate-90 text-primaryBlue" size={14} />}
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Right Content Area */}
                                                    <div className="flex-1 p-4 lg:p-6 bg-[#0B0F14]/95 overflow-y-auto custom-scrollbar">
                                                        <div className="mb-4 lg:mb-6">
                                                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                                                <span className="text-primaryBlue">{activeTab}</span> Programs
                                                            </h3>
                                                            <p className="text-gray-400 text-sm mt-1">Industry-leading certification programs designed by experts.</p>
                                                        </div>

                                                        <div className="grid grid-cols-2 gap-4">
                                                            {link.dropdown.find(cat => cat.name === activeTab)?.subDropdown?.map((program) => (
                                                                <Link
                                                                    key={program.name}
                                                                    to={program.href}
                                                                    className="group/prog block p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primaryBlue/30 transition-all duration-300"
                                                                >
                                                                    <div className="flex justify-between items-start mb-2">
                                                                        <h4 className="font-bold text-white group-hover/prog:text-primaryBlue transition-colors text-sm">{program.name}</h4>
                                                                    </div>
                                                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                        <span className="px-2 py-0.5 bg-white/5 rounded text-gray-400">2-3 Months</span>
                                                                        <span className="px-2 py-0.5 bg-green-500/10 text-green-400 rounded flex items-center gap-1">
                                                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                                                            LIVE
                                                                        </span>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                // Standard single-column layout for other dropdowns
                                                <div className="flex flex-col gap-1">
                                                    {link.dropdown.map((item, index) => {
                                                        const isMegaMenu = link.dropdown.some(i => i.subDropdown);
                                                        const useGrid = item.subDropdown && item.subDropdown.length > 5;
                                                        return (
                                                            <div key={item.name} className={`${index !== 0 && isMegaMenu ? 'mt-2 border-t border-white/5 pt-3' : ''}`}>
                                                                {item.subDropdown ? (
                                                                    // Section Header + Items (Mega Menu)
                                                                    <div className="px-2">
                                                                        <div className="pb-3 text-[11px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                                                            <span className="flex-1">{item.name}</span>
                                                                            {item.badge && (
                                                                                <span className={`px-1.5 py-0.5 rounded text-[8px] font-black bg-gradient-to-r ${item.badgeColor || 'from-pink-500 to-rose-500'} text-white shadow-sm`}>
                                                                                    {item.badge}
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                        <div className={`grid ${useGrid ? 'grid-cols-2 gap-x-3 gap-y-1' : 'grid-cols-1 gap-1'}`}>
                                                                            {item.subDropdown.map((subItem) => (
                                                                                <div key={subItem.name}>
                                                                                    {renderLink(subItem)}
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    // Regular Item (Simple List)
                                                                    <div className={`${isMegaMenu ? 'px-2' : ''}`}>
                                                                        {renderLink(item)}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <button
                            onClick={() => setIsSessionPopupOpen(true)}
                            className="relative overflow-hidden group bg-[#0B0F14] text-white font-bold p-[1.5px] rounded-full transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(182,227,0,0.15)] hover:shadow-[0_0_30px_rgba(182,227,0,0.3)] ml-2"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-accentGreen via-primaryBlue to-accentGreen rounded-full opacity-80 group-hover:opacity-100 bg-[length:200%_auto] animate-[shimmer_2s_linear_infinite]"></span>
                            <div className="relative flex items-center gap-2 bg-[#0B0F14]/95 px-6 py-2.5 rounded-full transition-colors duration-500 group-hover:bg-[#0B0F14]/50 backdrop-blur-sm">
                                <span className="relative z-10 whitespace-nowrap text-gray-100 group-hover:text-white flex items-center gap-2">Book Free Session <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></span>
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-primaryBlue hover:drop-shadow-[0_0_5px_rgba(0,174,239,0.8)] transition-all duration-300 focus:outline-none p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div
                className={`md:hidden absolute w-full bg-[#0B0F14]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 origin-top ease-in-out ${isOpen
                    ? 'opacity-100 scale-y-100 translate-y-0'
                    : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'
                    }`}
            >
                <div className="px-5 pt-4 pb-8 space-y-2 shadow-2xl rounded-b-2xl max-h-[80vh] overflow-y-auto">
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            {link.dropdown ? (
                                <div className="space-y-1">
                                    <button
                                        onClick={() => toggleDropdown(link.name)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all border-l-4 ${isParentActive(link) ? 'text-primaryBlue border-primaryBlue bg-white/5' : 'text-gray-300 border-transparent hover:bg-white/5 hover:text-primaryBlue hover:border-accentGreen'}`}
                                    >
                                        <span className="flex items-center gap-2">
                                            {link.name}
                                            {link.badge && (
                                                <span className={`relative inline-flex items-center gap-1 bg-gradient-to-r ${link.badgeColor} text-white text-[7px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider shadow-md`}>
                                                    <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    {link.badge}
                                                </span>
                                            )}
                                        </span>
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-300 ${openDropdowns[link.name] ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openDropdowns[link.name] ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="pl-4 space-y-1 bg-white/5 rounded-lg mx-2 my-1 p-2">
                                            {link.dropdown.map((item) => (
                                                <div key={item.name}>
                                                    {item.subDropdown ? (
                                                        // Sub-dropdown for Mobile
                                                        <div className="space-y-1">
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    toggleDropdown(item.name);
                                                                }}
                                                                className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                                                            >
                                                                {item.name}
                                                                <ChevronDown
                                                                    size={14}
                                                                    className={`transition-transform duration-300 ${openDropdowns[item.name] ? 'rotate-180' : ''}`}
                                                                />
                                                            </button>
                                                            <div
                                                                className={`overflow-hidden transition-all duration-300 ${openDropdowns[item.name] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                                            >
                                                                <div className="pl-4 space-y-1 border-l border-white/10 ml-4">
                                                                    {item.subDropdown.map((subItem) => (
                                                                        <div key={subItem.name}>
                                                                            {renderLink(subItem, true)}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="block">
                                                            {renderLink(item, true)}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    {link.href.startsWith('/') ? (
                                        <Link
                                            to={link.href}
                                            className={`block px-4 py-3 rounded-xl text-base font-medium transition-all border-l-4 ${isActive(link.href) ? 'text-primaryBlue border-primaryBlue bg-white/5' : 'text-gray-300 border-transparent hover:bg-white/5 hover:text-primaryBlue hover:border-accentGreen'}`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="block px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:bg-white/5 hover:text-primaryBlue transition-all border-l-4 border-transparent hover:border-accentGreen"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="pt-6">
                        <button
                            onClick={() => setIsSessionPopupOpen(true)}
                            className="w-full bg-gradient-to-r from-accentGreen to-primaryBlue text-darkMainBg font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(182,227,0,0.3)] transition-all transform hover:scale-[1.02] active:scale-98"
                        >
                            Book Free Career Session
                        </button>
                    </div>
                </div>
            </div>

            <BookSessionPopup isOpen={isSessionPopupOpen} onClose={() => setIsSessionPopupOpen(false)} />
        </nav>
    );
};

export default Navbar;
