import React, { useState } from 'react';
import { domains } from './data';
import {
    BarChart,
    Rocket,
    Check,
    BrainCircuit,
    Binary,
    Globe,
    Smartphone,
    Shield,
    Coffee,
    Code2,
    Cloud,
    CircleDollarSign,
    Cpu,
    Wifi,
    Zap,
    Bot,
    HardHat,
    Settings,
    PenTool,
    CircuitBoard
} from 'lucide-react';

const ICON_MAP = {
    'BarChart': BarChart,
    'BrainCircuit': BrainCircuit,
    'Binary': Binary,
    'Globe': Globe,
    'Smartphone': Smartphone,
    'Shield': Shield,
    'Coffee': Coffee,
    'Code2': Code2,
    'Cloud': Cloud,
    'Rocket': Rocket,
    'Cpu': Cpu,
    'Wifi': Wifi,
    'Zap': Zap,
    'Bot': Bot,
    'HardHat': HardHat,
    'Settings': Settings,
    'PenTool': PenTool,
    'CircuitBoard': CircuitBoard
};

const DomainSelection = ({ onSelect }) => {
    const [hovered, setHovered] = useState(null);
    const [selected, setSelected] = useState(null);

    const handleSelect = (domain) => {
        setSelected(domain.id);
        setTimeout(() => onSelect(domain), 600);
    };

    return (
        <div className="min-h-screen bg-[#0B0F14] flex flex-col items-center justify-center px-4 pt-28 pb-16 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primaryBlue/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accentGreen/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="text-center mb-12 relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentGreen opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accentGreen"></span>
                    </span>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Step 1 of 3</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                    Choose Your{' '}
                    <span className="bg-gradient-to-r from-primaryBlue to-accentGreen bg-clip-text text-transparent">
                        Target Career
                    </span>
                </h1>
                <p className="text-gray-400 text-lg max-w-xl mx-auto font-light">
                    Select your domain to get a personalized placement readiness assessment with 20 targeted questions.
                </p>
            </div>

            {/* Domain Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl w-full relative z-10">
                {domains.map((domain, index) => {
                    const IconComp = ICON_MAP[domain.iconName] || BarChart;
                    return (
                        <button
                            key={domain.id}
                            onClick={() => handleSelect(domain)}
                            onMouseEnter={() => setHovered(domain.id)}
                            onMouseLeave={() => setHovered(null)}
                            style={{ animationDelay: `${index * 80}ms` }}
                            className={`group relative text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden
              ${selected === domain.id
                                    ? `bg-gradient-to-br ${domain.color} border-transparent scale-95 opacity-70`
                                    : `bg-white/5 ${domain.borderColor} hover:bg-white/10 hover:scale-[1.02] hover:shadow-2xl ${domain.glowColor}`
                                }
              animate-fade-in-up
            `}
                        >
                            {/* Glow on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

                            {/* Top row */}
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${domain.color} bg-opacity-20 shadow-lg ring-1 ring-white/10`}>
                                    <IconComp size={28} className="text-white" />
                                </div>
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300
                ${selected === domain.id ? 'bg-white border-white' : 'border-white/20 group-hover:border-white/60'}`}>
                                    {selected === domain.id && (
                                        <Check className="w-3.5 h-3.5 text-gray-900" strokeWidth={3} />
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primaryBlue transition-colors">
                                {domain.name}
                            </h3>
                            <p className={`text-sm font-medium mb-4 bg-gradient-to-r ${domain.color} bg-clip-text text-transparent`}>
                                {domain.description}
                            </p>

                            {/* Roles */}
                            <div className="flex flex-wrap gap-1.5">
                                {domain.roles.map((role) => (
                                    <span key={role} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5 group-hover:border-white/10 transition-colors">
                                        {role}
                                    </span>
                                ))}
                            </div>

                            {/* Bottom CTA */}
                            {selected !== domain.id && (
                                <div className={`mt-5 flex items-center gap-2 text-sm font-semibold transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white`}>
                                    <span>Start Assessment</span>
                                    <Rocket className="w-4 h-4" />
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Bottom note */}
            <p className="mt-10 text-gray-500 text-xs font-medium text-center relative z-10 flex items-center justify-center gap-2">
                <span className="flex items-center gap-1"><CircleDollarSign size={12} /> Free assessment</span>
                <span>·</span>
                <span>Takes ~5 minutes</span>
                <span>·</span>
                <span>Instant results</span>
            </p>
        </div>
    );
};

export default DomainSelection;
