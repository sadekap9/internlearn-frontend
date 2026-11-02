import React from 'react';
import { X, Download, FileText, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';

const PaymentModal = ({ onClose, onConfirm, onConsult }) => {
    return (
        <div className="fixed inset-0 bg-black/80 z-[10001] flex items-center justify-center backdrop-blur-sm px-4">
            <div className="bg-darkCardBg border border-darkBorder p-6 md:p-8 rounded-3xl w-full max-w-4xl shadow-2xl relative overflow-hidden">
                {/* Glow decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-gray-500 hover:text-white transition-colors z-20 bg-black/20 p-2 rounded-full backdrop-blur-md"
                >
                    <X size={20} />
                </button>

                <div className="text-center mb-10 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Upgrade Your Career Journey</h2>
                    <p className="text-gray-400">Choose the plan that perfectly fits your goals.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 relative z-10">
                    {/* Basic Download Plan (₹9) */}
                    <div className="bg-white/[0.03] border border-white/10 p-8 rounded-2xl flex flex-col hover:border-white/20 transition-all">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <Download size={28} className="text-blue-400" />
                            </div>
                        </div>
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-white mb-1">Instant Download</h3>
                            <div className="inline-flex items-baseline gap-1 mt-2">
                                <span className="text-4xl font-black text-white">₹9</span>
                                <span className="text-gray-500 text-sm">one-time</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                { icon: <FileText size={16} />, text: 'ATS-friendly PDF format' },
                                { icon: <ShieldCheck size={16} />, text: 'Secure one-time payment' },
                                { icon: <Download size={16} />, text: 'Instant download after payment' },
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                    <span className="text-blue-400">{item.icon}</span>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={onConfirm}
                            className="w-full py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 border border-white/10"
                        >
                            <Download size={18} /> Pay ₹9 & Download
                        </button>
                    </div>

                    {/* Consultation Premium Plan (₹49) */}
                    <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/30 p-8 rounded-2xl flex flex-col relative overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                        <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                            RECOMMENDED
                        </div>
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                                <PhoneCall size={28} className="text-white" />
                            </div>
                        </div>
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-white mb-1">Expert Consultation</h3>
                            <div className="inline-flex items-baseline gap-1 mt-2">
                                <span className="text-4xl font-black text-white">₹49</span>
                                <span className="text-gray-500 text-sm">one-time</span>
                            </div>
                        </div>
                        <ul className="space-y-3 mb-8 flex-1">
                            {[
                                { text: 'ATS-Optimized Resume Format' },
                                { text: 'Strategic Keyword Alignment' },
                                { text: 'Powerful Summary Rewrite' },
                                { text: 'Personalized Cover Letter' },
                                { text: 'Detailed Resume Audit' },
                                { text: '3 Structured Revisions' },
                                { text: '1:1 Resume Consultation Call' }
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-200 text-sm font-medium">
                                    <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0" />
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={onConsult}
                            className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center gap-2"
                        >
                            <PhoneCall size={18} /> Book Consultation @ ₹49
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
