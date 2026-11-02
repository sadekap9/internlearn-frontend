import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { questions } from './data';
import {
    Camera,
    CameraOff,
    Monitor,
    Clock,
    AlertTriangle,
    CheckCircle,
    XCircle,
    Shield,
    Lock,
    Maximize,
    Minimize,
    Play,
    RefreshCw,
    AlertOctagon,
    BarChart,
    Megaphone,
    Users,
    CircleDollarSign,
    Rocket,
    Check,
    X,
    HelpCircle,
    BrainCircuit,
    Binary,
    Globe,
    Smartphone,
    Coffee,
    Code2,
    Cloud,
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
    'Cpu': Cpu,
    'Wifi': Wifi,
    'Zap': Zap,
    'Bot': Bot,
    'HardHat': HardHat,
    'Settings': Settings,
    'PenTool': PenTool,
    'CircuitBoard': CircuitBoard,
    'Rocket': Rocket
};

const QUESTION_TIME = 45;

// ── Proctoring Camera Feed ──────────────────────────────────────────────────
const CameraFeed = ({ active, onStatusChange }) => {
    const videoRef = useRef(null);
    const [camStatus, setCamStatus] = useState('requesting'); // requesting | active | denied

    const updateStatus = (s) => {
        setCamStatus(s);
        if (onStatusChange) onStatusChange(s);
    };

    useEffect(() => {
        if (!active) return;
        let stream = null;
        navigator.mediaDevices
            .getUserMedia({ video: { width: 320, height: 240, facingMode: 'user' }, audio: false })
            .then((s) => {
                stream = s;
                if (videoRef.current) {
                    videoRef.current.srcObject = s;
                    videoRef.current.play();
                }
                updateStatus('active');
            })
            .catch(() => updateStatus('denied'));

        return () => {
            if (stream) stream.getTracks().forEach((t) => t.stop());
        };
    }, [active]);

    return (
        <div className={`relative w-36 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-xl transition-all duration-300
            ${camStatus === 'denied' ? 'border-2 border-red-500/60 bg-red-950/40' :
                camStatus === 'active' ? 'border-2 border-emerald-500/40 bg-[#0a0a0a]' :
                    'border-2 border-white/20 bg-[#0a0a0a]'}`}>
            {camStatus === 'active' ? (
                <>
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover scale-x-[-1]"
                        muted
                        playsInline
                    />
                    {/* Recording indicator */}
                    <div className="absolute top-1.5 left-1.5 flex items-center gap-1 bg-black/60 rounded-full px-1.5 py-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[9px] font-bold text-white">REC</span>
                    </div>
                    {/* Face detection box (decorative) */}
                    <div className="absolute inset-4 border border-accentGreen/40 rounded-sm pointer-events-none" />
                </>
            ) : camStatus === 'denied' ? (
                <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 p-2">
                    <CameraOff className="text-red-500 mb-1" size={24} />
                    <span className="text-[9px] text-red-400 font-bold text-center leading-tight">Camera Blocked</span>
                    <span className="text-[8px] text-red-500/70 text-center">Enable in browser</span>
                </div>
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-1">
                    <div className="w-4 h-4 border-2 border-primaryBlue border-t-transparent rounded-full animate-spin" />
                    <span className="text-[9px] text-gray-500">Connecting…</span>
                </div>
            )}
        </div>
    );
};

// ── Circular Timer ──────────────────────────────────────────────────────────
const CircularTimer = ({ timeLeft, total }) => {
    const radius = 26;
    const circ = 2 * Math.PI * radius;
    const pct = timeLeft / total;
    const color = timeLeft > 20 ? '#00AEEF' : timeLeft > 10 ? '#F59E0B' : '#EF4444';
    return (
        <div className="relative w-16 h-16 flex-shrink-0">
            <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r={radius} fill="none" stroke="#1F2937" strokeWidth="5" />
                <circle
                    cx="32" cy="32" r={radius}
                    fill="none"
                    stroke={color}
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray={circ}
                    strokeDashoffset={circ * (1 - pct)}
                    style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.3s' }}
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-sm font-black leading-none" style={{ color }}>{timeLeft}</span>
                <span className="text-[8px] text-gray-600 font-medium">sec</span>
            </div>
        </div>
    );
};

// ── Main TestInterface ──────────────────────────────────────────────────────
const TestInterface = ({ domain, onComplete }) => {
    const domainQuestions = useMemo(() => {
        const qs = [...(questions[domain.id] || [])];
        // Fisher-Yates shuffle
        for (let i = qs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [qs[i], qs[j]] = [qs[j], qs[i]];
        }
        return qs;
    }, [domain.id]);
    const totalQuestions = domainQuestions.length;

    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState({});
    const [selected, setSelected] = useState(null);
    const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [fsWarnings, setFsWarnings] = useState(0);
    const [showFsPrompt, setShowFsPrompt] = useState(true);
    const [tabWarning, setTabWarning] = useState(false);
    const containerRef = useRef(null);

    // ── Camera state (lifted from CameraFeed) ──
    const [camStatus, setCamStatus] = useState('requesting'); // requesting | active | denied
    const [camCheckDone, setCamCheckDone] = useState(false);  // true once we've attempted camera
    const [camWarningCount, setCamWarningCount] = useState(0);

    // When camera goes denied during exam, increment warning
    const handleCamStatusChange = useCallback((status) => {
        setCamStatus(status);
        setCamCheckDone(true);
        if (status === 'denied') {
            setCamWarningCount((c) => c + 1);
        }
    }, []);

    const progress = (current / totalQuestions) * 100;
    const q = domainQuestions[current];
    const optionLabels = ['A', 'B', 'C', 'D'];

    // ── Fullscreen API ──
    const enterFullscreen = useCallback(() => {
        const el = containerRef.current || document.documentElement;
        if (el.requestFullscreen) el.requestFullscreen();
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
        setShowFsPrompt(false);
    }, []);

    // ── Pre-exam camera check: request permission before entering ──
    const [preCheckState, setPreCheckState] = useState('idle'); // idle | checking | granted | denied

    const handleEnterExam = useCallback(() => {
        setPreCheckState('checking');
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then((stream) => {
                // Stop the test stream immediately — CameraFeed will re-request
                stream.getTracks().forEach((t) => t.stop());
                setPreCheckState('granted');
                enterFullscreen();
            })
            .catch(() => {
                setPreCheckState('denied');
            });
    }, [enterFullscreen]);

    useEffect(() => {
        const onFsChange = () => {
            const inFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
            setIsFullscreen(inFs);
            if (!inFs && !showFsPrompt) {
                setFsWarnings((w) => w + 1);
            }
        };
        document.addEventListener('fullscreenchange', onFsChange);
        document.addEventListener('webkitfullscreenchange', onFsChange);
        return () => {
            document.removeEventListener('fullscreenchange', onFsChange);
            document.removeEventListener('webkitfullscreenchange', onFsChange);
        };
    }, [showFsPrompt]);

    // ── Tab visibility warning ──
    useEffect(() => {
        const onVisibility = () => {
            if (document.hidden && !showFsPrompt) {
                setTabWarning(true);
                setFsWarnings((w) => w + 1);
                setTimeout(() => setTabWarning(false), 3000);
            }
        };
        document.addEventListener('visibilitychange', onVisibility);
        return () => document.removeEventListener('visibilitychange', onVisibility);
    }, [showFsPrompt]);

    // ── Right-click / copy prevention ──
    useEffect(() => {
        const prevent = (e) => e.preventDefault();
        document.addEventListener('contextmenu', prevent);
        return () => document.removeEventListener('contextmenu', prevent);
    }, []);

    // ── Advance to next question ──
    const goNext = useCallback(() => {
        if (current < totalQuestions - 1) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrent((c) => c + 1);
                setSelected(null);
                setShowFeedback(false);
                setTimeLeft(QUESTION_TIME);
                setIsAnimating(false);
            }, 380);
        } else {
            // Exit fullscreen then complete
            if (document.fullscreenElement) document.exitFullscreen().catch(() => { });
            onComplete(answers, domainQuestions);
        }
    }, [current, totalQuestions, answers, onComplete, domainQuestions]);

    // ── Timer ──
    useEffect(() => {
        if (showFeedback || showFsPrompt) return;
        if (timeLeft <= 0) {
            const newAnswers = { ...answers, [current]: -1 };
            setAnswers(newAnswers);
            setShowFeedback(true);
            setTimeout(() => goNext(), 1200);
            return;
        }
        const t = setInterval(() => setTimeLeft((v) => v - 1), 1000);
        return () => clearInterval(t);
    }, [timeLeft, showFeedback, showFsPrompt, goNext, current, answers]);

    const handleSelect = (idx) => {
        if (showFeedback) return;
        setSelected(idx);
        const newAnswers = { ...answers, [current]: idx };
        setAnswers(newAnswers);
        setShowFeedback(true);
        setTimeout(() => goNext(), 1500);
    };

    const handleSkip = () => {
        if (showFeedback) return;
        const newAnswers = { ...answers, [current]: -1 };
        setAnswers(newAnswers);
        setShowFeedback(true);
        setTimeout(() => goNext(), 800);
    };

    // ── Fullscreen prompt overlay ──
    // ── Fullscreen prompt overlay ──
    if (showFsPrompt) {
        return (
            <div className="min-h-screen bg-[#0B0F14] flex items-center justify-center px-4">
                <div className="max-w-md w-full text-center">

                    {/* Camera denied error state */}
                    {preCheckState === 'denied' ? (
                        <>
                            <div className="w-20 h-20 rounded-2xl bg-red-500/10 border-2 border-red-500/40 flex items-center justify-center mx-auto mb-6 animate-pulse">
                                <CameraOff size={40} className="text-red-500" />
                            </div>
                            <h2 className="text-2xl font-black text-red-400 mb-3">Camera Access Required</h2>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                This is a <span className="text-white font-semibold">proctored exam</span>. Camera access is <span className="text-red-400 font-bold">mandatory</span> to proceed. You cannot start the test without enabling your camera.
                            </p>

                            {/* Step-by-step fix instructions */}
                            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5 mb-6 text-left">
                                <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-3">How to enable camera:</p>
                                <ol className="space-y-2.5">
                                    {[
                                        'Click the 🔒 lock icon in your browser address bar',
                                        'Find "Camera" in the permissions list',
                                        'Change it from "Blocked" to "Allow"',
                                        'Refresh the page and try again',
                                    ].map((step, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <span className="w-5 h-5 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            <button
                                onClick={() => setPreCheckState('idle')}
                                className="w-full bg-red-500/10 border border-red-500/30 text-red-400 font-bold py-3 rounded-xl text-sm hover:bg-red-500/20 transition-all mb-3"
                            >
                                <RefreshCw className="inline-block mr-2" size={16} /> Try Again
                            </button>
                            <p className="text-xs text-gray-600">Camera permission is required to maintain exam integrity</p>
                        </>
                    ) : (
                        <>
                            <div className="w-20 h-20 rounded-2xl bg-primaryBlue/10 border border-primaryBlue/30 flex items-center justify-center mx-auto mb-6">
                                <Monitor size={40} className="text-primaryBlue" />
                            </div>
                            <h2 className="text-2xl font-black text-white mb-3">Exam Mode</h2>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                This is a <span className="text-white font-semibold">proctored assessment</span>. The test will run in fullscreen mode with your camera active to ensure integrity.
                            </p>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 text-left space-y-2.5">
                                {[
                                    { icon: Camera, text: 'Camera will be enabled for proctoring', required: true },
                                    { icon: Maximize, text: 'Test runs in fullscreen — do not exit', required: false },
                                    { icon: Clock, text: '45 seconds per question', required: false },
                                    { icon: AlertTriangle, text: 'Tab switching is monitored', required: false },
                                    { icon: HelpCircle, text: '20 questions · Auto-submit on timeout', required: false },
                                ].map((r) => (
                                    <div key={r.text} className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className="text-primaryBlue flex-shrink-0"><r.icon size={18} /></div>
                                        <span className="flex-1">{r.text}</span>
                                        {r.required && (
                                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30 flex-shrink-0">REQUIRED</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={handleEnterExam}
                                disabled={preCheckState === 'checking'}
                                className="w-full bg-gradient-to-r from-primaryBlue to-accentGreen text-darkMainBg font-black py-4 rounded-xl text-base hover:shadow-xl hover:shadow-primaryBlue/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-3"
                            >
                                {preCheckState === 'checking' ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-darkMainBg border-t-transparent rounded-full animate-spin" />
                                        Checking Camera Access…
                                    </>
                                ) : (
                                    <span className="flex items-center gap-2"><Rocket size={20} /> Enter Exam Mode</span>
                                )}
                            </button>
                            <p className="text-xs text-gray-600 mt-3">Camera permission will be requested · By proceeding, you agree to proctoring terms</p>
                        </>
                    )}
                </div>
            </div>
        );
    }

    // ── Main exam UI ──
    return (
        <div
            ref={containerRef}
            className="fixed inset-0 bg-[#060A0F] flex flex-col overflow-hidden select-none"
            style={{ zIndex: 9999 }}
        >
            {/* ── Camera denied blocking overlay (during exam) ── */}
            {camStatus === 'denied' && (
                <div className="absolute inset-0 z-50 bg-[#060A0F]/97 backdrop-blur-md flex items-center justify-center">
                    <div className="text-center max-w-sm px-6">
                        <div className="w-20 h-20 rounded-2xl bg-red-500/10 border-2 border-red-500/50 flex items-center justify-center mx-auto mb-5 animate-pulse">
                            <CameraOff size={40} className="text-red-500" />
                        </div>
                        <h3 className="text-2xl font-black text-red-400 mb-2">Camera Disconnected!</h3>
                        <p className="text-gray-400 text-sm mb-2">Your camera has been turned off or blocked.</p>
                        <p className="text-red-500/80 text-xs mb-1 font-semibold">⚠️ Violation #{camWarningCount} recorded</p>
                        <p className="text-gray-600 text-xs mb-6">The exam is paused. Re-enable your camera to continue.</p>

                        <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4 mb-6 text-left">
                            <p className="text-xs font-bold text-red-400 mb-2 uppercase tracking-wider">To re-enable camera:</p>
                            <ol className="space-y-1.5">
                                {[
                                    'Click the 🔒 lock icon in your address bar',
                                    'Set Camera permission to "Allow"',
                                    'Click the button below to reconnect',
                                ].map((s, i) => (
                                    <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                                        <span className="text-red-400 font-bold flex-shrink-0">{i + 1}.</span> {s}
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <button
                            onClick={() => { setCamStatus('requesting'); setCamCheckDone(false); }}
                            className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-3 rounded-xl hover:scale-105 transition-all shadow-lg shadow-red-500/20"
                        >
                            🔄 Reconnect Camera
                        </button>
                    </div>
                </div>
            )}

            {/* ── Tab-switch warning toast ── */}
            {tabWarning && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 bg-red-600 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-bounce">
                    <AlertTriangle size={20} /> Tab switching detected! This has been recorded.
                </div>
            )}

            {/* ── Camera off persistent top banner (non-blocking, if cam was active then went off) ── */}
            {camCheckDone && camStatus !== 'active' && camStatus !== 'denied' && (
                <div className="absolute top-14 left-0 right-0 z-30 mx-4">
                    <div className="bg-amber-500/10 border border-amber-500/40 rounded-xl px-4 py-2.5 flex items-center gap-3">
                        <AlertTriangle className="text-amber-400 flex-shrink-0" size={20} />
                        <p className="text-amber-300 text-xs font-semibold flex-1">Camera is not active. Please enable your camera to maintain exam integrity.</p>
                    </div>
                </div>
            )}

            {/* ── Fullscreen exit warning ── */}
            {!isFullscreen && (
                <div className="absolute inset-0 z-50 bg-[#060A0F]/95 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center max-w-sm px-6">
                        <div className="mb-4 flex justify-center"><AlertOctagon size={48} className="text-red-500" /></div>
                        <h3 className="text-xl font-black text-red-400 mb-2">Fullscreen Exited!</h3>
                        <p className="text-gray-400 text-sm mb-1">Warning {fsWarnings}/3 recorded.</p>
                        <p className="text-gray-500 text-xs mb-6">Exiting fullscreen during the exam is a violation.</p>
                        <button
                            onClick={enterFullscreen}
                            className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:scale-105 transition-all"
                        >
                            Return to Fullscreen
                        </button>
                    </div>
                </div>
            )}

            {/* ── TOP BAR ── */}
            <div className="flex items-center justify-between px-6 py-3 bg-[#0B0F14] border-b border-white/5 flex-shrink-0">
                {/* Left: Logo + domain */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primaryBlue to-accentGreen flex items-center justify-center text-darkMainBg font-black text-xs">IL</div>
                        <span className="text-xs font-bold text-gray-400 hidden sm:block">InternzLearn</span>
                    </div>
                    <div className="w-px h-5 bg-white/10" />
                    <span className="text-xs font-semibold text-gray-500 flex items-center gap-2">
                        {(() => {
                            const Icon = ICON_MAP[domain.iconName] || BarChart;
                            return <Icon size={14} />;
                        })()}
                        {domain.name} Assessment
                    </span>
                </div>

                {/* Center: Question counter */}
                <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-white">Question</span>
                    <span className="text-sm font-black text-primaryBlue">{current + 1}</span>
                    <span className="text-sm text-gray-600">/ {totalQuestions}</span>
                </div>

                {/* Right: Warnings + camera status */}
                <div className="flex items-center gap-3">
                    {fsWarnings > 0 && (
                        <div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/30 rounded-full px-3 py-1">
                            <AlertTriangle size={12} className="text-red-400" />
                            <span className="text-red-400 text-xs font-bold">{fsWarnings} warning{fsWarnings > 1 ? 's' : ''}</span>
                        </div>
                    )}
                    {/* Camera status pill */}
                    {camStatus === 'active' ? (
                        <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-emerald-400 text-xs font-bold">CAM ON</span>
                        </div>
                    ) : camStatus === 'denied' ? (
                        <div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/40 rounded-full px-3 py-1 animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            <span className="text-red-400 text-xs font-bold">CAM OFF</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full px-3 py-1">
                            <div className="w-2.5 h-2.5 border border-amber-400 border-t-transparent rounded-full animate-spin" />
                            <span className="text-amber-400 text-xs font-bold">CAM…</span>
                        </div>
                    )}
                    <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-400 text-xs font-bold">LIVE</span>
                    </div>
                </div>
            </div>

            {/* ── PROGRESS BAR ── */}
            <div className="h-1.5 bg-white/5 flex-shrink-0">
                <div
                    className="h-full transition-all duration-500"
                    style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #00AEEF, #B6E300)' }}
                />
            </div>

            {/* ── MAIN CONTENT ── */}
            <div className="flex flex-1 overflow-hidden">

                {/* ── LEFT SIDEBAR: Camera + info ── */}
                <div className="w-52 bg-[#0B0F14] border-r border-white/5 flex-shrink-0 flex flex-col p-4 gap-4 hidden md:flex">
                    {/* Camera */}
                    <div>
                        <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-2">Proctoring</p>
                        <CameraFeed active={true} onStatusChange={handleCamStatusChange} />
                        {camStatus === 'denied' && (
                            <div className="mt-2 bg-red-500/10 border border-red-500/30 rounded-lg p-2">
                                <p className="text-[9px] text-red-400 font-bold leading-tight">📷 Camera blocked — exam paused</p>
                            </div>
                        )}
                        {camStatus === 'active' && (
                            <div className="mt-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-2">
                                <p className="text-[9px] text-emerald-400 font-bold leading-tight">✅ Camera active & recording</p>
                            </div>
                        )}
                    </div>

                    {/* Question map */}
                    <div>
                        <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-2">Progress Map</p>
                        <div className="grid grid-cols-5 gap-1">
                            {domainQuestions.map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-6 h-6 rounded flex items-center justify-center text-[9px] font-bold transition-all duration-300
                    ${i === current ? 'bg-primaryBlue text-white scale-110' :
                                            i in answers ? (answers[i] === domainQuestions[i].correct ? 'bg-emerald-500/30 text-emerald-400 border border-emerald-500/40' : 'bg-red-500/30 text-red-400 border border-red-500/40') :
                                                'bg-white/5 text-gray-600 border border-white/5'
                                        }`}
                                >
                                    {i + 1}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Rules reminder */}
                    <div className="mt-auto bg-amber-500/5 border border-amber-500/20 rounded-xl p-3">
                        <p className="text-[10px] font-bold text-amber-400 mb-2 uppercase tracking-wider">⚠️ Rules</p>
                        <ul className="space-y-1">
                            {['Do not switch tabs', 'Stay in fullscreen', 'No external help', 'Camera must be on'].map((r) => (
                                <li key={r} className="text-[10px] text-gray-500 flex items-start gap-1">
                                    <span className="text-amber-500 mt-0.5">•</span> {r}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ── CENTER: Question ── */}
                <div className="flex-1 flex flex-col overflow-y-auto">
                    <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-6 py-8">

                        {/* Category + Timer row */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 uppercase tracking-wider">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accentGreen" />
                                    {q.category}
                                </span>
                            </div>
                            <CircularTimer timeLeft={timeLeft} total={QUESTION_TIME} />
                        </div>

                        {/* Question */}
                        <div
                            className={`bg-[#0F172A] border border-white/10 rounded-2xl p-7 mb-6 transition-all duration-380 shadow-xl ${isAnimating ? 'opacity-0 translate-x-6' : 'opacity-100 translate-x-0'}`}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primaryBlue/10 border border-primaryBlue/20 flex items-center justify-center text-primaryBlue font-black text-sm flex-shrink-0 mt-0.5">
                                    Q{current + 1}
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug">
                                    {q.question}
                                </h2>
                            </div>
                        </div>

                        {/* Options */}
                        <div className={`space-y-3 transition-all duration-380 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                            {q.options.map((option, idx) => {
                                let cls = 'bg-[#0F172A] border-white/10 text-gray-300 hover:bg-white/8 hover:border-primaryBlue/50 hover:text-white cursor-pointer hover:shadow-lg hover:shadow-primaryBlue/5';
                                if (showFeedback) {
                                    if (idx === q.correct) cls = 'bg-emerald-500/15 border-emerald-500/50 text-emerald-200 cursor-default shadow-lg shadow-emerald-500/10';
                                    else if (idx === selected && selected !== q.correct) cls = 'bg-red-500/15 border-red-500/50 text-red-200 cursor-default';
                                    else cls = 'bg-white/2 border-white/5 text-gray-700 cursor-default opacity-50';
                                }

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleSelect(idx)}
                                        disabled={showFeedback}
                                        className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left group ${cls}`}
                                    >
                                        <span className={`w-9 h-9 flex-shrink-0 rounded-lg flex items-center justify-center text-xs font-black border-2 transition-all duration-200
                      ${showFeedback && idx === q.correct ? 'bg-emerald-500 border-emerald-500 text-white' :
                                                showFeedback && idx === selected && selected !== q.correct ? 'bg-red-500 border-red-500 text-white' :
                                                    'bg-white/5 border-white/10 text-gray-400 group-hover:bg-primaryBlue/20 group-hover:border-primaryBlue/50 group-hover:text-primaryBlue'
                                            }`}>
                                            {optionLabels[idx]}
                                        </span>
                                        <span className="font-medium text-sm md:text-base flex-1">{option}</span>
                                        {showFeedback && idx === q.correct && (
                                            <div className="flex items-center gap-1.5 flex-shrink-0">
                                                <span className="text-xs font-bold text-emerald-400">Correct</span>
                                                <CheckCircle className="w-5 h-5 text-emerald-400" />
                                            </div>
                                        )}
                                        {showFeedback && idx === selected && selected !== q.correct && (
                                            <div className="flex items-center gap-1.5 flex-shrink-0">
                                                <span className="text-xs font-bold text-red-400">Wrong</span>
                                                <XCircle className="w-5 h-5 text-red-400" />
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Skip */}
                        {!showFeedback && (
                            <div className="mt-6 text-center">
                                <button
                                    onClick={handleSkip}
                                    className="text-xs text-gray-700 hover:text-gray-500 transition-colors underline underline-offset-2"
                                >
                                    Skip this question →
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* ── RIGHT SIDEBAR: Stats ── */}
                <div className="w-48 bg-[#0B0F14] border-l border-white/5 flex-shrink-0 flex-col p-4 gap-4 hidden lg:flex">
                    <div>
                        <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-3">Live Stats</p>
                        <div className="space-y-3">
                            {[
                                {
                                    label: 'Answered',
                                    value: Object.keys(answers).length,
                                    total: totalQuestions,
                                    color: 'text-primaryBlue',
                                },
                                {
                                    label: 'Correct',
                                    value: Object.keys(answers).filter((k) => answers[k] === domainQuestions[k].correct).length,
                                    total: Object.keys(answers).length || 1,
                                    color: 'text-emerald-400',
                                },
                                {
                                    label: 'Skipped',
                                    value: Object.values(answers).filter((v) => v === -1).length,
                                    total: totalQuestions,
                                    color: 'text-amber-400',
                                },
                            ].map((s) => (
                                <div key={s.label} className="bg-white/5 border border-white/5 rounded-xl p-3">
                                    <div className="flex justify-between items-center mb-1.5">
                                        <span className="text-[10px] text-gray-500">{s.label}</span>
                                        <span className={`text-sm font-black ${s.color}`}>{s.value}</span>
                                    </div>
                                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-500"
                                            style={{ width: `${(s.value / s.total) * 100}%`, background: 'currentColor' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Accuracy */}
                    <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                        <p className="text-[10px] text-gray-500 mb-1">Accuracy</p>
                        <p className="text-2xl font-black text-white">
                            {Object.keys(answers).length === 0 ? '—' :
                                `${Math.round((Object.keys(answers).filter((k) => answers[k] === domainQuestions[k].correct).length / Object.keys(answers).length) * 100)}%`
                            }
                        </p>
                    </div>

                    {/* Time remaining for exam */}
                    <div className="mt-auto bg-white/5 border border-white/5 rounded-xl p-3">
                        <p className="text-[10px] text-gray-500 mb-1">Questions Left</p>
                        <p className="text-2xl font-black text-white">{totalQuestions - current - 1}</p>
                    </div>
                </div>
            </div>

            {/* ── BOTTOM BAR ── */}
            <div className="flex items-center justify-between px-6 py-2.5 bg-[#0B0F14] border-t border-white/5 flex-shrink-0">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-gray-600">Proctored · Secure · Encrypted</span>
                </div>
                <div className="text-xs text-gray-700">
                    {Object.keys(answers).length} / {totalQuestions} answered
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                    <Lock size={12} />
                    <span>InternzLearn Assessment Platform</span>
                </div>
            </div>
        </div>
    );
};

export default TestInterface;
