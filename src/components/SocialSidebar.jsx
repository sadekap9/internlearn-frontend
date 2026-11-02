import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Phone, FileText } from 'lucide-react';

const SocialSidebar = () => {
    const [resumeHovered, setResumeHovered] = useState(false);

    const socialLinks = [
        {
            name: 'WhatsApp',
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.231-.298.347-.497.116-.198.058-.372-.03-.52-.088-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            ),
            url: 'https://wa.me/919663415279'
        },
        {
            name: 'Phone',
            icon: <Phone className="w-5 h-5" />,
            url: 'tel:+919663415279'
        },
        {
            name: 'Facebook',
            icon: <Facebook className="w-5 h-5" />,
            url: 'https://www.facebook.com/people/Internz-Learn/61550766895392'
        },
        {
            name: 'Instagram',
            icon: <Instagram className="w-5 h-5" />,
            url: 'https://www.instagram.com/internz_learn/'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-5 h-5" />,
            url: 'https://www.linkedin.com/company/internzlearn01/?originalSubdomain=in'
        },
        {
            name: 'YouTube',
            icon: <Youtube className="w-5 h-5" />,
            url: 'https://www.youtube.com/channel/UC6NymEx4jcAEyIlJLPMYYcw'
        }
    ];

    return (
        <div className="social-sidebar-print-hide fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 items-end">

            {/* ⭐ Resume Builder — Unique Featured Card */}
            <a
                href="/resume-builder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume Builder"
                onMouseEnter={() => setResumeHovered(true)}
                onMouseLeave={() => setResumeHovered(false)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'linear-gradient(135deg, #f59e0b, #fbbf24, #f97316)',
                    color: '#1a1a1a',
                    padding: resumeHovered ? '10px 18px 10px 14px' : '10px 14px',
                    borderRadius: '12px 0 0 12px',
                    boxShadow: '0 0 18px rgba(251,191,36,0.6), 0 4px 15px rgba(0,0,0,0.4)',
                    textDecoration: 'none',
                    fontWeight: '800',
                    fontSize: '12px',
                    letterSpacing: '0.04em',
                    transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                    transform: resumeHovered ? 'scale(1.08) translateX(-4px)' : 'scale(1)',
                    position: 'relative',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    border: '1.5px solid rgba(255,255,255,0.35)',
                    borderRight: 'none',
                    textTransform: 'uppercase',
                    minWidth: resumeHovered ? '160px' : 'auto',
                    maxWidth: resumeHovered ? '200px' : '46px',
                    justifyContent: resumeHovered ? 'flex-start' : 'center',
                }}
            >
                {/* Shimmer overlay */}
                <span style={{
                    position: 'absolute',
                    top: 0, left: '-100%',
                    width: '60%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)',
                    animation: 'shimmer 2.5s infinite',
                    pointerEvents: 'none',
                }} />

                {/* Icon */}
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 1,
                    flexShrink: 0,
                }}>
                    <FileText className="w-5 h-5" />
                </span>

                {/* Label — visible on hover */}
                <span style={{
                    position: 'relative',
                    zIndex: 1,
                    opacity: resumeHovered ? 1 : 0,
                    maxWidth: resumeHovered ? '120px' : '0px',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap',
                    fontSize: '11px',
                    fontWeight: '900',
                    letterSpacing: '0.06em',
                }}>
                    Resume Builder
                </span>
            </a>

            {/* Keyframe injection */}
            <style>{`
                @keyframes shimmer {
                    0% { left: -100%; }
                    100% { left: 200%; }
                }
            `}</style>

            {/* Regular social icons */}
            <div className="flex flex-col gap-5 bg-black py-5 px-3 rounded-l-2xl shadow-lg border-l border-t border-b border-gray-800/50 backdrop-blur-sm">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primaryBlue hover:scale-110 transition-all duration-300 flex items-center justify-center transform"
                        aria-label={social.name}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialSidebar;
