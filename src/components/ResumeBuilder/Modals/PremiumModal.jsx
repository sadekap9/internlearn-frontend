import React from 'react';
import { X, Sparkles, Zap, Infinity } from 'lucide-react';

const PremiumModal = ({ onClose, onConfirm }) => {
    return (
        <div className="fixed inset-0 bg-black/80 z-[10001] flex items-center justify-center backdrop-blur-sm px-4">
            <div className="bg-darkCardBg border border-darkBorder p-8 rounded-2xl w-full max-w-md shadow-2xl relative overflow-hidden">

                {/* Glow decoration */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-10"
                >
                    <X size={20} />
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-4 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                        <Sparkles size={28} className="text-white" />
                    </div>
                </div>

                {/* Title */}
                <div className="text-center mb-6 relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">Unlock Premium AI</h3>
                    <p className="text-gray-400 text-sm">
                        Get unlimited AI-generated summaries, experience bullets & project descriptions.
                    </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6 relative z-10">
                    {[
                        { icon: <Infinity size={14} />, text: 'Unlimited AI generations' },
                        { icon: <Zap size={14} />, text: 'Instant summaries & bullet points' },
                        { icon: <Sparkles size={14} />, text: 'ATS-optimised content' },
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                            <span className="text-purple-400">{item.icon}</span>
                            {item.text}
                        </li>
                    ))}
                </ul>

                {/* Pricing */}
                <div className="text-center mb-6 relative z-10">
                    <div className="inline-flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-white">₹99</span>
                        <span className="text-gray-500 text-sm">one-time</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 relative z-10">
                    <button
                        onClick={onConfirm}
                        className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                    >
                        Unlock Premium — ₹99
                    </button>
                    <button
                        onClick={onClose}
                        className="w-full py-3 text-gray-500 hover:text-gray-300 text-sm font-medium transition-colors"
                    >
                        Maybe later
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PremiumModal;
