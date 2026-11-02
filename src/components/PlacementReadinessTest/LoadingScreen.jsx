import React, { useEffect, useState } from 'react';

const steps = [
    { label: 'Scanning your responses…', icon: '🔍' },
    { label: 'Benchmarking against industry standards…', icon: '📊' },
    { label: 'Identifying skill gaps…', icon: '🧠' },
    { label: 'Calculating placement readiness score…', icon: '⚡' },
    { label: 'Generating your personalized report…', icon: '📋' },
];

const LoadingScreen = ({ domain, onDone }) => {
    const [stepIndex, setStepIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [dots, setDots] = useState('');

    useEffect(() => {
        // Animate dots
        const dotTimer = setInterval(() => {
            setDots((d) => (d.length >= 3 ? '' : d + '.'));
        }, 400);
        return () => clearInterval(dotTimer);
    }, []);

    useEffect(() => {
        // Progress bar
        const duration = 3800;
        const interval = 40;
        const increment = (100 / duration) * interval;
        const progressTimer = setInterval(() => {
            setProgress((p) => {
                if (p >= 100) {
                    clearInterval(progressTimer);
                    return 100;
                }
                return Math.min(p + increment, 100);
            });
        }, interval);
        return () => clearInterval(progressTimer);
    }, []);

    useEffect(() => {
        // Step cycling
        const stepDuration = 3800 / steps.length;
        const stepTimer = setInterval(() => {
            setStepIndex((i) => Math.min(i + 1, steps.length - 1));
        }, stepDuration);
        return () => clearInterval(stepTimer);
    }, []);

    useEffect(() => {
        const done = setTimeout(() => onDone(), 4200);
        return () => clearTimeout(done);
    }, [onDone]);

    return (
        <div className="min-h-screen bg-[#0B0F14] flex flex-col items-center justify-center px-4 relative overflow-hidden">
            {/* Animated background orbs */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primaryBlue/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accentGreen/8 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '0.5s' }} />

            {/* Floating particles */}
            {[...Array(12)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-primaryBlue/40 animate-float pointer-events-none"
                    style={{
                        left: `${10 + (i * 7.5)}%`,
                        top: `${20 + (i % 4) * 20}%`,
                        animationDelay: `${i * 0.4}s`,
                        animationDuration: `${3 + (i % 3)}s`,
                    }}
                />
            ))}

            <div className="relative z-10 w-full max-w-md text-center">
                {/* Domain badge */}
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
                    <span className="text-lg">{domain.icon}</span>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{domain.name} Assessment</span>
                </div>

                {/* Central animated icon */}
                <div className="relative w-32 h-32 mx-auto mb-10">
                    {/* Outer rotating ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-transparent"
                        style={{
                            background: 'linear-gradient(#0B0F14, #0B0F14) padding-box, linear-gradient(90deg, #00AEEF, #B6E300, #00AEEF) border-box',
                            animation: 'spin 2s linear infinite',
                        }}
                    />
                    {/* Middle ring */}
                    <div className="absolute inset-3 rounded-full border border-white/10"
                        style={{ animation: 'spin 3s linear infinite reverse' }}
                    />
                    {/* Inner glow */}
                    <div className="absolute inset-6 rounded-full bg-gradient-to-br from-primaryBlue/30 to-accentGreen/20 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-3xl" style={{ animation: 'pulse 1.5s ease-in-out infinite' }}>
                            {steps[stepIndex]?.icon}
                        </span>
                    </div>
                </div>

                {/* Main text */}
                <h1 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
                    Analyzing Your{' '}
                    <span className="bg-gradient-to-r from-primaryBlue to-accentGreen bg-clip-text text-transparent">
                        Placement Profile
                    </span>
                    <span className="text-primaryBlue">{dots}</span>
                </h1>
                <p className="text-gray-500 text-sm mb-10">
                    Our AI engine is evaluating your responses against 50,000+ placement records
                </p>

                {/* Progress bar */}
                <div className="mb-6">
                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                        <span>Analyzing</span>
                        <span className="font-bold text-primaryBlue">{Math.round(progress)}%</span>
                    </div>
                    <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div
                            className="h-full rounded-full transition-all duration-100 relative overflow-hidden"
                            style={{
                                width: `${progress}%`,
                                background: 'linear-gradient(90deg, #00AEEF, #B6E300)',
                            }}
                        >
                            {/* Shimmer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                style={{ animation: 'shimmer 1.5s infinite' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Step indicators */}
                <div className="space-y-2.5">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-500 ${i < stepIndex ? 'bg-emerald-500/10 border border-emerald-500/20' :
                                i === stepIndex ? 'bg-white/8 border border-white/10' :
                                    'opacity-30'
                                }`}
                        >
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${i < stepIndex ? 'bg-emerald-500' :
                                i === stepIndex ? 'bg-primaryBlue/30 border border-primaryBlue' :
                                    'bg-white/5'
                                }`}>
                                {i < stepIndex ? (
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : i === stepIndex ? (
                                    <div className="w-2 h-2 rounded-full bg-primaryBlue animate-pulse" />
                                ) : (
                                    <div className="w-2 h-2 rounded-full bg-white/20" />
                                )}
                            </div>
                            <span className={`text-xs font-medium ${i < stepIndex ? 'text-emerald-400' :
                                i === stepIndex ? 'text-white' :
                                    'text-gray-600'
                                }`}>
                                {step.label}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="mt-8 text-xs text-gray-600">
                    🔒 Your data is private and never shared
                </p>
            </div>

            <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default LoadingScreen;
