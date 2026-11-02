import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, FileText, Briefcase, CheckCircle, ChevronRight, X, Loader2, Target, BarChart2, Map } from 'lucide-react';
import { openRazorpayCheckout } from '../../../utils/razorpay';
import '../ResumeBuilder.css';

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx9YStCSXPnmckNzkY_dGXSM3i4eOInyPYYlq8_HVNFz4mXO2oz-EKQTzLRUPKsT2IBzA/exec";




const ResumeLandingPage = ({ onUnlockPlan, onSelectPlan }) => {
    const [leadModal, setLeadModal] = useState(null); // null | plan object
    const [form, setForm] = useState({ name: '', email: '', phone: '', college: '', course: '', yearOfStudy: '', jobInterest: '' });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const plans = [
        {
            id: 'basic', price: 9, originalPrice: 199,
            name: 'Basic Resume',
            icon: <FileText size={28} className="text-blue-500 mb-4" />,
            tagline: 'Perfect for manual formatting',
            features: ['Premium ATS-Friendly Templates', 'Custom Fields & Formatting', 'Clean PDF Download', 'No Watermark'],
            description: 'A standard resume download. Manually enter your details into our beautiful, highly-optimized ATS templates and download your clean PDF.'
        },
        {
            id: 'premium', price: 99, originalPrice: 499,
            name: 'AI Resume Assistant',
            icon: <Sparkles size={28} className="text-purple-500 mb-4" />,
            tagline: 'Most Popular', popular: true,
            features: ['Everything in Basic', 'Unlimited AI Content Generation', 'Auto-write Metric-Driven Bullets', 'AI Summary & Project Writer'],
            description: 'Let our trained AI do the heavy lifting. Automatically craft powerful, impactful bullet points starting with strong action verbs to beat any ATS.'
        },
        {
            id: 'placement', price: 999, originalPrice: 1999,
            name: 'Placement Mastery Pack',
            icon: <Briefcase size={28} className="text-amber-500 mb-4" />,
            tagline: 'Guaranteed Advantage',
            features: ['Everything in AI Assistant (₹99)', 'Self-Paced Placement Mastery Video Course', 'How to Decode ATS Systems & HR Algorithms', 'Proven Interview & Resume Secrets', '1-on-1 Profile Assessment & Support'],
            description: 'Our ultimate advantage. Uncover the secrets to how placements actually work, how HR scans resumes, and receive a dedicated self-paced session on cracking placements.'
        }
    ];

    const navigate = useNavigate();

    // ── Validation ──────────────────────────────────────────────────────────────
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

    // ── Save lead to Google Sheet ────────────────────────────────────────────────
    const saveLead = async (plan) => {
        const payload = {
            formType: 'resume_lead',
            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            college: form.college.trim(),
            course: form.course.trim(),
            yearOfStudy: form.yearOfStudy.trim(),
            jobInterest: form.jobInterest.trim(),
            plan: plan.name,
            timestamp: new Date().toISOString(),
        };
        try {
            await fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(payload),
            });
        } catch (err) {
            // Fire-and-forget — don't block the user if network fails
            console.warn('Lead save failed (non-critical):', err);
        }
    };

    // ── Handle Get Started click ─────────────────────────────────────────────────
    const handleGetStarted = (plan) => {
        setForm({ name: '', email: '', phone: '', college: '', course: '', yearOfStudy: '', jobInterest: '' });
        setErrors({});
        setSubmitted(false);
        setLeadModal(plan);
    };

    // ── Handle form submit ───────────────────────────────────────────────────────
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setSubmitting(true);

        // Save lead first (non-blocking)
        await saveLead(leadModal);

        setSubmitting(false);
        setSubmitted(true);

        // Brief success flash then close modal & proceed to builder
        setTimeout(() => {
            setLeadModal(null);
            if (onSelectPlan) {
                onSelectPlan(leadModal);
            } else {
                if (onUnlockPlan) onUnlockPlan(leadModal.id);
            }
        }, 1200);
    };

    const accent = leadModal?.popular ? 'purple' : leadModal?.id === 'placement' ? 'amber' : 'blue';
    const accentClasses = {
        blue: { ring: 'focus:ring-blue-500/40 border-blue-500/30', btn: 'bg-blue-600 hover:bg-blue-500', label: 'text-blue-400' },
        purple: { ring: 'focus:ring-purple-500/40 border-purple-500/30', btn: 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400', label: 'text-purple-400' },
        amber: { ring: 'focus:ring-amber-500/40 border-amber-500/30', btn: 'bg-amber-500 hover:bg-amber-400', label: 'text-amber-400' },
    };
    const ac = accentClasses[accent] || accentClasses.blue;

    const inputClass = `w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 transition-all`;

    return (
        <div className="min-h-screen bg-[#06080F] text-white selection:bg-blue-500/30 overflow-hidden relative">

            {/* Background Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center top-0 relative z-10">

                {/* Header Ribbon */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-8 animate-fade-in-up">
                    <Sparkles size={16} /> Welcome to the ultimate ATS Resume Tool
                </div>

                {/* Hero Copy */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-center px-4 animate-fade-in-up delay-100">
                    Build a resume that <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-sm">gets you hired.</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-16 text-center animate-fade-in-up delay-200">
                    Start by choosing your path below. Whether you want a clean basic format, a magical AI-powered writer, or the complete placement mastery pack – we've got you covered.
                </p>

                {/* How It Works */}
                <h2 className="text-3xl font-bold mb-12 text-center w-full relative z-20">How Our ATS Builder Works</h2>

                <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl mb-20">
                    {[
                        { num: '1', color: 'blue', title: 'Pick Your Plan', desc: 'Select the tier that fits your needs. Get basic formatting or let AI write your bullet points.' },
                        { num: '2', color: 'purple', title: 'Build Your Profile', desc: 'Add your skills, experiences, and projects. Let the AI optimize every single word for ATS systems.' },
                        { num: '3', color: 'emerald', title: 'Export & Apply', desc: 'Download a perfectly formatted PDF that slides right past HR filters and lands on the recruiter\'s desk.' },
                    ].map(step => (
                        <div key={step.num} className="flex flex-col items-center text-center p-6 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-sm relative group overflow-hidden">
                            <div className={`absolute inset-0 bg-${step.color}-500/5 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${step.color}-500/20 to-${step.color}-600/10 border border-${step.color}-500/30 flex items-center justify-center mb-6 shadow-inner`}>
                                <span className={`text-2xl font-bold text-${step.color}-400`}>{step.num}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white/90">{step.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Pricing Section */}
                <h2 className="text-3xl font-bold mb-10 text-center w-full">Unlock Your Career Journey</h2>

                <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl pb-20 items-stretch">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`flex flex-col p-8 rounded-[2rem] border transition-all duration-300 hover:-translate-y-2 ${plan.popular
                                ? 'bg-gradient-to-b from-[#1E1B46] to-[#0A0C16] border-purple-500/40 shadow-[0_0_50px_-15px_rgba(168,85,247,0.4)] transform md:scale-105 z-10'
                                : 'bg-[#0A0C16] border-gray-800 hover:border-gray-600'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6 flex space-x-4 items-center">
                                <div className={`p-3 rounded-2xl ${plan.popular ? 'bg-purple-500/10' : 'bg-gray-800/50'}`}>
                                    {plan.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                                    <p className="text-sm text-gray-400 mt-0.5">{plan.tagline}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                {plan.originalPrice && (
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-3xl text-white/70 line-through decoration-[3px] font-bold tracking-tight">₹{plan.originalPrice}</span>
                                        <span className="bg-white/10 border border-white/30 text-white text-sm font-bold px-3 py-1 rounded-full inline-block shadow-sm">
                                            Save {Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100)}%
                                        </span>
                                    </div>
                                )}
                                <div className="flex items-end gap-1 mt-1">
                                    <span className="text-5xl font-extrabold text-white tracking-tight">₹{plan.price}</span>
                                    <span className="text-gray-400 font-medium pb-1 ml-1">/ one-time</span>
                                </div>
                            </div>

                            <p className="text-sm text-gray-400 mb-8 leading-relaxed h-[60px]">{plan.description}</p>
                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

                            <div className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle size={18} strokeWidth={2.5} className={`mt-0.5 shrink-0 ${plan.popular ? 'text-purple-400' : plan.id === 'placement' ? 'text-amber-400' : 'text-blue-400'}`} />
                                        <span className="text-[15px] text-gray-300 font-medium leading-snug">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => handleGetStarted(plan)}
                                className={`w-full py-4 px-4 rounded-xl flex items-center justify-center gap-2 font-bold text-base transition-all mt-auto ${plan.popular
                                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white shadow-xl shadow-purple-500/20'
                                    : plan.id === 'placement'
                                        ? 'bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border border-amber-500/30'
                                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                                    }`}
                            >
                                Get Started Now <ChevronRight size={18} />
                            </button>
                        </div>
                    ))}
                </div>

            </div>

            {/* ── Placement Readiness Test Promo ─────────────────────────────────────── */}
            <div className="w-full max-w-5xl mx-auto px-4 pb-20">
                <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/60 via-[#0A0C16] to-teal-950/40 p-8 md:p-12 shadow-2xl shadow-emerald-900/20">

                    {/* Glow blobs */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full blur-[60px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">

                        {/* Left — copy */}
                        <div className="flex-1 text-center md:text-left">
                            <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                                100% Free &amp; Instant
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3">
                                Are You <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Placement Ready?</span>
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg mb-6 max-w-lg">
                                Take our free 5-minute AI assessment and get your exact Placement Readiness Score — plus a personalised roadmap to land your dream job.
                            </p>

                            {/* Stats row */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8">
                                {[
                                    { val: '50,000+', label: 'Students Assessed' },
                                    { val: '20', label: 'Industry Questions' },
                                    { val: 'Instant', label: 'AI Analysis' },
                                ].map(s => (
                                    <div key={s.label} className="text-center md:text-left">
                                        <p className="text-2xl font-extrabold text-white">{s.val}</p>
                                        <p className="text-xs text-gray-500 font-medium">{s.label}</p>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => navigate('/placement-readiness-test')}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
                            >
                                Start Free Assessment <ChevronRight size={18} />
                            </button>
                        </div>

                        {/* Right — feature cards */}
                        <div className="flex flex-col gap-4 w-full md:w-64 shrink-0">
                            {[
                                { icon: <Target size={18} className="text-emerald-400" />, title: 'Placement Score', desc: 'Get your exact readiness % benchmarked against industry standards.' },
                                { icon: <BarChart2 size={18} className="text-teal-400" />, title: 'Gap Analysis', desc: 'Identify exactly which skills are holding you back.' },
                                { icon: <Map size={18} className="text-cyan-400" />, title: 'Improvement Roadmap', desc: 'Step-by-step plan to reach 85%+ readiness.' },
                            ].map(f => (
                                <div key={f.title} className="flex items-start gap-3 bg-white/[0.03] border border-white/5 rounded-2xl p-4">
                                    <div className="mt-0.5 shrink-0">{f.icon}</div>
                                    <div>
                                        <p className="text-white font-semibold text-sm">{f.title}</p>
                                        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {leadModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    style={{ background: 'rgba(6,8,15,0.85)', backdropFilter: 'blur(12px)' }}
                    onClick={(e) => { if (e.target === e.currentTarget) setLeadModal(null); }}
                >
                    <div className="relative w-full max-w-lg bg-[#0D0F1C] border border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[95vh] flex flex-col">

                        {/* Top accent bar */}
                        <div className={`h-1 w-full flex-shrink-0 ${leadModal.popular ? 'bg-gradient-to-r from-purple-500 to-blue-500' : leadModal.id === 'placement' ? 'bg-amber-500' : 'bg-blue-500'}`} />

                        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
                            {/* Close */}
                            <button onClick={() => setLeadModal(null)} className="absolute top-5 right-5 text-gray-500 hover:text-white transition-colors">
                                <X size={20} />
                            </button>

                            {/* Header */}
                            <div className="mb-5">
                                <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${ac.label}`}>{leadModal.name}</p>
                                <h2 className="text-xl sm:text-2xl font-extrabold text-white">Just one quick step</h2>
                                <p className="text-gray-400 text-sm mt-1">Tell us a little about yourself so we can personalise your experience.</p>
                            </div>

                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-10 gap-4">
                                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                                        <CheckCircle size={32} className="text-green-400" />
                                    </div>
                                    <p className="text-white font-bold text-lg">You're all set!</p>
                                    <p className="text-gray-400 text-sm text-center">Taking you to the builder...</p>
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

                                    {/* Email + Phone - responsive: side-by-side on sm+, stacked on xs */}
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

                                    {/* Course + Year — side by side */}
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
                                        className={`w-full py-4 rounded-xl text-white font-bold text-base flex items-center justify-center gap-2 transition-all mt-2 ${ac.btn} disabled:opacity-60 disabled:cursor-not-allowed shadow-lg`}
                                    >
                                        {submitting ? (
                                            <><Loader2 size={18} className="animate-spin" /> Saving...</>
                                        ) : (
                                            <>Continue to Builder <ChevronRight size={18} /></>
                                        )}
                                    </button>

                                    <p className="text-center text-xs text-gray-600 mt-2">No spam. Your info is only used to personalise your experience.</p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResumeLandingPage;
