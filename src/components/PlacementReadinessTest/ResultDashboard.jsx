import React, { useMemo } from 'react';
import {
    RotateCcw,
    CheckCircle2,
    XCircle,
    TrendingUp,
    Award,
    AlertTriangle,
    BookOpen,
    ArrowRight,
    Star,
    Target,
    Zap,
} from 'lucide-react';

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getScoreColor = (pct) => {
    if (pct >= 80) return { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', ring: '#10b981' };
    if (pct >= 60) return { text: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', ring: '#facc15' };
    return { text: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30', ring: '#f87171' };
};

const getVerdict = (pct) => {
    if (pct >= 80) return { label: 'Placement Ready', icon: Award, color: 'text-emerald-400' };
    if (pct >= 60) return { label: 'Almost There', icon: TrendingUp, color: 'text-yellow-400' };
    return { label: 'Needs Improvement', icon: AlertTriangle, color: 'text-red-400' };
};

// Category breakdown from question indices (groups of 5)
const CATEGORY_LABELS = [
    'Technical Fundamentals',
    'Problem Solving',
    'Communication & Soft Skills',
    'Industry Awareness',
];

// ─── Score Ring ───────────────────────────────────────────────────────────────

const ScoreRing = ({ pct, color }) => {
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (pct / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center w-48 h-48">
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 180 180">
                <circle cx="90" cy="90" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
                <circle
                    cx="90" cy="90" r={radius} fill="none"
                    stroke={color.ring}
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: 'stroke-dashoffset 1s ease' }}
                />
            </svg>
            <div className="relative z-10 text-center">
                <div className={`text-5xl font-black ${color.text}`}>{pct}%</div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest mt-1">Score</div>
            </div>
        </div>
    );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const ResultDashboard = ({ domain, answers = {}, questionsUsed = [], userName = '', onRetake }) => {
    const { score, total, pct, categoryResults } = useMemo(() => {
        let correct = 0;
        const total = questionsUsed.length;

        // Category breakdown
        const catSize = Math.ceil(total / CATEGORY_LABELS.length);
        const cats = CATEGORY_LABELS.map((label, ci) => {
            const start = ci * catSize;
            const end = Math.min(start + catSize, total);
            let catCorrect = 0;
            let catTotal = 0;
            for (let i = start; i < end; i++) {
                const q = questionsUsed[i];
                if (!q) continue;
                catTotal++;
                if (answers[q.id] === q.answer) catCorrect++;
            }
            if (catTotal > 0) correct += catCorrect;
            return { label, correct: catCorrect, total: catTotal, pct: catTotal > 0 ? Math.round((catCorrect / catTotal) * 100) : 0 };
        });

        // Recount total correct properly
        let totalCorrect = 0;
        questionsUsed.forEach((q) => { if (q && answers[q.id] === q.answer) totalCorrect++; });

        return {
            score: totalCorrect,
            total,
            pct: total > 0 ? Math.round((totalCorrect / total) * 100) : 0,
            categoryResults: cats,
        };
    }, [answers, questionsUsed]);

    const color = getScoreColor(pct);
    const verdict = getVerdict(pct);
    const VerdictIcon = verdict.icon;

    // Areas needing work = categories under 60%
    const weakAreas = categoryResults.filter((c) => c.pct < 60);
    const strongAreas = categoryResults.filter((c) => c.pct >= 75);

    const recommendations = [
        pct < 60 && 'Focus on your technical fundamentals with structured practice daily.',
        weakAreas.length > 0 && `Prioritise improving: ${weakAreas.map((c) => c.label).join(', ')}.`,
        pct < 80 && 'Solve 3-5 domain-specific questions every day for 2 weeks.',
        'Join our Tech Career Pack to get mentored mock interviews.',
        'Build at least 2 portfolio projects relevant to your domain.',
    ].filter(Boolean);

    return (
        <div className="min-h-screen bg-[#0B0F14] text-white pt-24 pb-16 px-4">
            {/* Background glow */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primaryBlue/8 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accentGreen/8 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">

                {/* ── Header ── */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                        <Star size={12} className="text-yellow-400" /> Assessment Complete
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
                        {userName ? `Great job, ${userName}!` : 'Your Results Are In!'}
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Here's your <span className="text-white font-semibold">{domain?.name || 'placement'}</span> readiness breakdown
                    </p>
                </div>

                {/* ── Score Card ── */}
                <div className={`rounded-3xl border ${color.border} bg-gradient-to-br from-white/[0.04] to-transparent p-8 flex flex-col md:flex-row items-center gap-8 backdrop-blur-sm shadow-2xl`}>
                    <ScoreRing pct={pct} color={color} />

                    <div className="flex-1 text-center md:text-left">
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${color.bg} border ${color.border} mb-3`}>
                            <VerdictIcon size={14} className={verdict.color} />
                            <span className={`text-sm font-bold ${verdict.color}`}>{verdict.label}</span>
                        </div>
                        <h2 className="text-3xl font-black text-white mb-2">
                            {score} / {total} Correct
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            {pct >= 80
                                ? 'Excellent! You have a strong foundation. Focus on refining interview skills and building your portfolio.'
                                : pct >= 60
                                ? 'Good progress! A few targeted improvements will get you placement-ready very soon.'
                                : 'Keep going! Consistent practice over the next few weeks will make a big difference.'}
                        </p>
                    </div>
                </div>

                {/* ── Category Breakdown ── */}
                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Target size={20} className="text-primaryBlue" /> Category Breakdown
                    </h3>
                    <div className="space-y-5">
                        {categoryResults.map((cat, i) => {
                            const c = getScoreColor(cat.pct);
                            return (
                                <div key={i}>
                                    <div className="flex justify-between items-center mb-1.5">
                                        <span className="text-sm font-semibold text-gray-300">{cat.label}</span>
                                        <span className={`text-sm font-bold ${c.text}`}>{cat.correct}/{cat.total}</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-700"
                                            style={{ width: `${cat.pct}%`, backgroundColor: c.ring }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ── Question Review ── */}
                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <BookOpen size={20} className="text-purple-400" /> Answer Review
                    </h3>
                    <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                        {questionsUsed.map((q, i) => {
                            const userAns = answers[q.id];
                            const isCorrect = userAns === q.answer;
                            return (
                                <div
                                    key={q.id}
                                    className={`p-4 rounded-2xl border ${isCorrect ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-red-500/20 bg-red-500/5'}`}
                                >
                                    <div className="flex items-start gap-3">
                                        {isCorrect
                                            ? <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                                            : <XCircle size={18} className="text-red-400 mt-0.5 shrink-0" />}
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-semibold text-white mb-2">
                                                Q{i + 1}. {q.question}
                                            </p>
                                            {!isCorrect && (
                                                <div className="space-y-1 text-xs">
                                                    <p className="text-red-300">
                                                        Your answer: <span className="font-bold">{userAns ?? 'Not answered'}</span>
                                                    </p>
                                                    <p className="text-emerald-300">
                                                        Correct answer: <span className="font-bold">{q.answer}</span>
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ── Recommendations ── */}
                <div className="bg-gradient-to-br from-primaryBlue/10 to-accentGreen/5 border border-primaryBlue/20 rounded-3xl p-8 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Zap size={20} className="text-yellow-400" /> Your Improvement Roadmap
                    </h3>
                    <ul className="space-y-3">
                        {recommendations.map((rec, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-primaryBlue/20 border border-primaryBlue/30 flex items-center justify-center shrink-0 mt-0.5">
                                    <span className="text-[10px] font-bold text-primaryBlue">{i + 1}</span>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">{rec}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ── CTA ── */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={onRetake}
                        className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold transition-all"
                    >
                        <RotateCcw size={18} /> Retake Test
                    </button>
                    <a
                        href="/career-pack/tech-career-pack"
                        className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primaryBlue to-accentGreen text-white font-bold hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-primaryBlue/20"
                    >
                        Explore Career Packs <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ResultDashboard;