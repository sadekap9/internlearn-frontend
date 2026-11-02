import React, { useState } from 'react';
import {
    Users,
    Target,
    Zap,
    Lock,
    ArrowRight,
    BarChart,
    Search,
    Map,
    X,
    Loader2,
    CheckCircle,
    ChevronRight,
} from 'lucide-react';
import DomainSelection from './DomainSelection';
import TestInterface from './TestInterface';
import LoadingScreen from './LoadingScreen';
import ResultDashboard from './ResultDashboard';

// ─── Constants (same as Resume Builder lead form) ─────────────────────────────
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx9YStCSXPnmckNzkY_dGXSM3i4eOInyPYYlq8_HVNFz4mXO2oz-EKQTzLRUPKsT2IBzA/exec";



// ─── Lead Capture Modal ───────────────────────────────────────────────────────
const LeadModal = ({ onClose, onSuccess }) => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', college: '', course: '', yearOfStudy: '', jobInterest: '' });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const inputClass = `w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-500/40 transition-all`;

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Name is required';
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
        if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = '10-digit phone required';
        if (!form.college.trim()) e.college = 'College name is required';
        if (!form.course.trim()) e.course = 'Course is required';
        if (!form.yearOfStudy.trim()) e.yearOfStudy = 'Year of study is required';
        if (!form.jobInterest.trim()) e.jobInterest = 'Job interest is required';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const saveLead = async () => {
        try {
            await fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify({
                    formType: 'resume_lead',
                    name: form.name.trim(),
                    email: form.email.trim(),
                    phone: form.phone.trim(),
                    college: form.college.trim(),
                    course: form.course.trim(),
                    yearOfStudy: form.yearOfStudy.trim(),
                    jobInterest: form.jobInterest.trim(),
                    plan: 'Placement Readiness Test (Free)',
                    timestamp: new Date().toISOString(),
                }),
            });
        } catch (err) {
            console.warn('Lead save failed (non-critical):', err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setSubmitting(true);
        await saveLead();
        setSubmitting(false);
        setSubmitted(true);
        setTimeout(() => {
            onSuccess(form.name.trim());
        }, 1000);
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(6,8,15,0.88)', backdropFilter: 'blur(14px)' }}
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div className="relative w-full max-w-lg bg-[#0D0F1C] border border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[95vh] flex flex-col">

                {/* Top accent bar — cyan/green gradient for placement test */}
                <div className="h-1 w-full flex-shrink-0 bg-gradient-to-r from-cyan-400 via-primaryBlue to-accentGreen" />

                <div className="p-6 sm:p-8 overflow-y-auto flex-1">
                    {/* Close */}
                    <button onClick={onClose} className="absolute top-5 right-5 text-gray-500 hover:text-white transition-colors">
                        <X size={20} />
                    </button>

                    {/* Header */}
                    <div className="mb-5">
                        <p className="text-xs font-bold uppercase tracking-widest mb-1 text-cyan-400">Placement Readiness Test</p>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-white">Just one quick step</h2>
                        <p className="text-gray-400 text-sm mt-1">Tell us a little about yourself so we can personalise your assessment results.</p>
                    </div>

                    {submitted ? (
                        <div className="flex flex-col items-center justify-center py-10 gap-4">
                            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                                <CheckCircle size={32} className="text-green-400" />
                            </div>
                            <p className="text-white font-bold text-lg">You're all set!</p>
                            <p className="text-gray-400 text-sm text-center">Starting your assessment...</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                            {/* Name */}
                            <div>
                                <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1 block">Full Name *</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Rahul Sharma"
                                    value={form.name}
                                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                                    className={`${inputClass} ${errors.name ? 'border-red-500/60' : ''}`}
                                />
                                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                            </div>

                            {/* Email + Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1 block">Email *</label>
                                    <input
                                        type="email"
                                        placeholder="you@email.com"
                                        value={form.email}
                                        onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                                        className={`${inputClass} ${errors.email ? 'border-red-500/60' : ''}`}
                                    />
                                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1 block">Phone *</label>
                                    <input
                                        type="tel"
                                        placeholder="10-digit number"
                                        value={form.phone}
                                        onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                                        className={`${inputClass} ${errors.phone ? 'border-red-500/60' : ''}`}
                                    />
                                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                                </div>
                            </div>

                            {/* College */}
                            <div>
                                <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1 block">College / University *</label>
                                <input
                                    type="text"
                                    placeholder="e.g. VTU, Anna University, Mumbai University"
                                    value={form.college}
                                    onChange={e => setForm(p => ({ ...p, college: e.target.value }))}
                                    className={`${inputClass} ${errors.college ? 'border-red-500/60' : ''}`}
                                />
                                {errors.college && <p className="text-red-400 text-xs mt-1">{errors.college}</p>}
                            </div>

                            {/* Course + Year */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1 block">Degree / Course *</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. B.Tech Computer Science"
                                        value={form.course}
                                        onChange={e => setForm(p => ({ ...p, course: e.target.value }))}
                                        className={`${inputClass} ${errors.course ? 'border-red-500/60' : ''}`}
                                    />
                                    {errors.course && <p className="text-red-400 text-xs mt-1">{errors.course}</p>}
                                </div>
                                <div>
                                    <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1 block">Year of Study *</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. 3rd Year"
                                        value={form.yearOfStudy}
                                        onChange={e => setForm(p => ({ ...p, yearOfStudy: e.target.value }))}
                                        className={`${inputClass} ${errors.yearOfStudy ? 'border-red-500/60' : ''}`}
                                    />
                                    {errors.yearOfStudy && <p className="text-red-400 text-xs mt-1">{errors.yearOfStudy}</p>}
                                </div>
                            </div>

                            {/* Job Interest — full width */}
                            <div>
                                <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1 block">Job / Career Interest *</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Software Development, Marketing, etc."
                                    value={form.jobInterest}
                                    onChange={e => setForm(p => ({ ...p, jobInterest: e.target.value }))}
                                    className={`${inputClass} ${errors.jobInterest ? 'border-red-500/60' : ''}`}
                                />
                                {errors.jobInterest && <p className="text-red-400 text-xs mt-1">{errors.jobInterest}</p>}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full py-4 rounded-xl text-white font-bold text-base flex items-center justify-center gap-2 transition-all mt-2 bg-gradient-to-r from-cyan-500 to-accentGreen hover:from-cyan-400 hover:to-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/20"
                            >
                                {submitting ? (
                                    <><Loader2 size={18} className="animate-spin" /> Saving...</>
                                ) : (
                                    <>Start My Assessment <ChevronRight size={18} /></>
                                )}
                            </button>

                            <p className="text-center text-xs text-gray-600 mt-2">No spam. Your info is only used to personalise your assessment.</p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

// ─── Screen 1 – Intro/Hero ────────────────────────────────────────────────────
const IntroScreen = ({ onStart }) => (
    <div className="min-h-screen bg-[#0B0F14] flex flex-col items-center justify-center px-4 relative overflow-hidden pt-28 pb-12">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primaryBlue/10 rounded-full blur-[100px] opacity-60" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accentGreen/10 rounded-full blur-[100px] opacity-60" />
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0F14]/50 to-[#0B0F14]" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                Are You{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue via-cyan-400 to-accentGreen drop-shadow-[0_0_15px_rgba(0,174,239,0.3)]">
                    Placement Ready?
                </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                Take our <span className="text-white font-semibold">5-minute AI-powered assessment</span> and discover your exact placement readiness score with a personalized improvement roadmap.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
                {[
                    { icon: Users, label: '50,000+ Students Assessed' },
                    { icon: Target, label: '20 Industry Questions' },
                    { icon: Zap, label: 'Instant AI Analysis' },
                    { icon: Lock, label: '100% Free & Private' },
                ].map((s) => (
                    <div key={s.label} className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                        <s.icon size={16} className="text-primaryBlue" />
                        <span className="text-sm font-medium text-gray-300">{s.label}</span>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-4 mb-16">
                <button
                    onClick={onStart}
                    className="relative group bg-gradient-to-r from-primaryBlue to-accentGreen p-[1px] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,174,239,0.4)] hover:scale-105"
                >
                    <div className="relative px-12 py-5 bg-[#0B0F14] rounded-2xl group-hover:bg-opacity-90 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-primaryBlue to-accentGreen opacity-20 group-hover:opacity-30 transition-opacity" />
                        <span className="relative z-10 flex items-center gap-3 text-lg font-bold text-white tracking-wide">
                            Start Free Assessment
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </div>
                </button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
                {[
                    { icon: BarChart, title: 'Placement Score', desc: 'Get your exact readiness percentage benchmarked against industry standards.', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
                    { icon: Search, title: 'Gap Analysis', desc: 'Identify exactly which skills are holding you back from getting placed.', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
                    { icon: Map, title: 'Improvement Roadmap', desc: 'Receive a step-by-step personalized plan to reach 85%+ readiness.', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
                ].map((card) => (
                    <div key={card.title} className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1">
                        <div className={`w-12 h-12 rounded-xl ${card.bg} ${card.color} flex items-center justify-center mb-4 ring-1 ring-inset ${card.border}`}>
                            <card.icon size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primaryBlue transition-colors">{card.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// ─── Main component ───────────────────────────────────────────────────────────
const SCREENS = { INTRO: 'intro', DOMAIN: 'domain', TEST: 'test', LOADING: 'loading', RESULT: 'result' };

const PlacementReadinessTest = () => {
    const [screen, setScreen] = useState(SCREENS.INTRO);
    const [showLeadModal, setShowLeadModal] = useState(false);
    const [selectedDomain, setSelectedDomain] = useState(null);
    const [testAnswers, setTestAnswers] = useState({});
    const [testQuestions, setTestQuestions] = useState([]);
    const [userName, setUserName] = useState('');

    // "Start Free Assessment" → show lead form first
    const handleStartClick = () => setShowLeadModal(true);

    // Lead submitted → close modal and go to domain selection
    const handleLeadSuccess = (name) => {
        setUserName(name || 'Future Professional');
        setShowLeadModal(false);
        setScreen(SCREENS.DOMAIN);
    };

    const handleDomainSelect = (domain) => {
        setSelectedDomain(domain);
        setScreen(SCREENS.TEST);
    };

    const handleTestComplete = (answers, questionsUsed) => {
        setTestAnswers(answers);
        setTestQuestions(questionsUsed);
        setScreen(SCREENS.LOADING);
    };

    const handleLoadingDone = () => setScreen(SCREENS.RESULT);

    const handleRetake = () => {
        setSelectedDomain(null);
        setTestAnswers({});
        setTestQuestions([]);
        setScreen(SCREENS.INTRO);
    };

    return (
        <>
            {/* Lead capture modal — shown before domain selection */}
            {showLeadModal && (
                <LeadModal
                    onClose={() => setShowLeadModal(false)}
                    onSuccess={handleLeadSuccess}
                />
            )}

            {screen === SCREENS.INTRO && <IntroScreen onStart={handleStartClick} />}
            {screen === SCREENS.DOMAIN && <DomainSelection onSelect={handleDomainSelect} />}
            {screen === SCREENS.TEST && selectedDomain && (
                <TestInterface domain={selectedDomain} onComplete={handleTestComplete} />
            )}
            {screen === SCREENS.LOADING && selectedDomain && (
                <LoadingScreen domain={selectedDomain} onDone={handleLoadingDone} />
            )}
            {screen === SCREENS.RESULT && selectedDomain && (
                <ResultDashboard domain={selectedDomain} answers={testAnswers} questionsUsed={testQuestions} userName={userName} onRetake={handleRetake} />
            )}
        </>
    );
};

export default PlacementReadinessTest;
