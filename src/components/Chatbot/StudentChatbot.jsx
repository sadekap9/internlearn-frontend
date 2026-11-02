import React, { useState, useRef, useEffect, useCallback } from 'react';
import { X, Send, User, Loader2, Volume2, VolumeX, Mic, MicOff, Sparkles, Headphones, MessageCircle, Zap, Award, TrendingUp, Maximize2, Minimize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './StudentChatbot.css';

// Groq API — 100% free (14,400 req/day). Get key from https://console.groq.com
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || '';
const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = 'llama-3.3-70b-versatile';


// ─── System Prompt ────────────────────────────────────────────────────────────
import { SYSTEM_PROMPT } from './InzyPrompt';

// ─── Quick Questions ──────────────────────────────────────────────────────────
const QUICK = [
    "What courses do you offer?",
    "How much does it cost?",
    "Which plan is best?",
    "Do I get a certificate?",
    "Tech Career Pack details",
    "Best course for beginners?",
];

// ─── Course Categories ────────────────────────────────────────────────────────
const COURSE_CATEGORIES = [
    { name: "Tech Programs", icon: <Zap size={16} />, color: "#667eea" },
    { name: "Creative Programs", icon: <Award size={16} />, color: "#f687b3" },
    { name: "Business Programs", icon: <TrendingUp size={16} />, color: "#10b981" },
];

// ─── Strip emojis & clean for TTS ────────────────────────────────────────────
function cleanForSpeech(text) {
    return text
        // Remove all emoji unicode ranges
        .replace(/[\u{1F000}-\u{1FFFF}]/gu, '')
        .replace(/[\u{2600}-\u{27BF}]/gu, '')
        .replace(/[\u{FE00}-\u{FEFF}]/gu, '')
        .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
        // Remove markdown
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/[#*_`>]/g, '')
        // Replace Rs. symbol
        .replace(/₹/g, 'Rupees ')
        // Clean up punctuation for natural speech
        .replace(/\n\n+/g, '. ')
        .replace(/\n/g, ', ')
        .replace(/\s{2,}/g, ' ')
        .replace(/\.\s*\./g, '.')
        .trim();
}

// ElevenLabs API — Charlotte voice (young, warm, calm female AI voice)
const ELEVENLABS_KEY = import.meta.env.VITE_ELEVENLABS_API_KEY || '';
const ELEVENLABS_VOICE_ID = 'XB0fDUnXU5powFXDhCwa'; // Charlotte — young, calm, warm female

// Track current ElevenLabs audio for cancellation
let _currentAudio = null;

// Stop all speech (ElevenLabs + browser TTS)
function cancelSpeech() {
    if (_currentAudio) {
        _currentAudio.pause();
        _currentAudio.src = '';
        _currentAudio = null;
    }
    window.speechSynthesis?.cancel();
}

// Browser TTS fallback (calm female)
function _browserSpeak(clean, onStart, onEnd) {
    if (!window.speechSynthesis) { if (onEnd) onEnd(); return; }
    const utter = new SpeechSynthesisUtterance(clean);
    const voices = window.speechSynthesis.getVoices();
    const priority = ['Google UK English Female', 'Microsoft Zira', 'Microsoft Aria Online', 'Microsoft Jenny Online', 'Samantha', 'Karen', 'Moira', 'Tessa', 'Veena', 'Victoria', 'Fiona'];
    const isMale = (v) => ['david', 'mark', 'james', 'guy', 'george', 'fred', 'paul'].some(k => v.name.toLowerCase().includes(k));
    let chosen = null;
    for (const name of priority) { chosen = voices.find(v => v.name.includes(name)); if (chosen) break; }
    if (!chosen) chosen = voices.find(v => v.name.toLowerCase().includes('female'));
    if (!chosen) chosen = voices.find(v => ['en-IN', 'en-GB', 'en-AU', 'en-US'].some(l => v.lang === l) && !isMale(v));
    if (chosen) utter.voice = chosen;
    utter.rate = 0.82; utter.pitch = 1.2; utter.volume = 1;
    if (onStart) utter.onstart = onStart;
    if (onEnd) utter.onend = onEnd;
    window.speechSynthesis.speak(utter);
}

// ─── Main TTS — ElevenLabs AI voice with browser fallback ────────────────────
async function speakText(text, onStart, onEnd) {
    cancelSpeech();
    const clean = cleanForSpeech(text);
    if (!clean.trim()) { if (onEnd) onEnd(); return; }

    if (ELEVENLABS_KEY) {
        try {
            if (onStart) onStart();
            const res = await fetch(
                `https://api.elevenlabs.io/v1/text-to-speech/${ELEVENLABS_VOICE_ID}`,
                {
                    method: 'POST',
                    headers: {
                        'xi-api-key': ELEVENLABS_KEY,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        text: clean,
                        model_id: 'eleven_turbo_v2_5',   // fastest ElevenLabs model
                        voice_settings: {
                            stability: 0.85,        // high stability = consistent calm tone
                            similarity_boost: 0.75,
                            style: 0.2,             // slight warmth/expressiveness
                            use_speaker_boost: true,
                        },
                    }),
                }
            );
            if (!res.ok) throw new Error(`ElevenLabs ${res.status}`);
            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            const audio = new Audio(url);
            _currentAudio = audio;
            audio.onended = () => { URL.revokeObjectURL(url); _currentAudio = null; if (onEnd) onEnd(); };
            audio.onerror = () => { URL.revokeObjectURL(url); _currentAudio = null; _browserSpeak(clean, null, onEnd); };

            // Handle cross-browser/mobile autoplay policy restrictions
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.warn('[Inzy TTS] Audio playback restricted by browser (often mobile layout). Falling back to browser TTS.', error);
                    _browserSpeak(clean, null, onEnd);
                });
            }
            return;
        } catch (err) {
            console.warn('[Inzy TTS] ElevenLabs failed, using browser fallback:', err.message);
        }
    }

    // Fallback: browser TTS
    _browserSpeak(clean, onStart, onEnd);
}

// ─── Markdown-lite renderer ──────────────────────────────────────────────────
function RenderText({ text }) {
    // Helper to parse mix of **bold** and [link text](/path)
    const parseInline = (str) => {
        // 1. split by bold
        const boldParts = str.split(/\*\*(.*?)\*\*/g);
        return boldParts.map((bp, j) => {
            if (j % 2 === 1) return <strong key={`b-${j}`}>{bp}</strong>;
            // 2. parse links within non-bold text
            const linkRegex = /\[(.*?)\]\((.*?)\)/g;
            const linkParts = [];
            let lastIndex = 0;
            let match;
            while ((match = linkRegex.exec(bp)) !== null) {
                if (match.index > lastIndex) {
                    linkParts.push(bp.substring(lastIndex, match.index));
                }
                const linkText = match[1];
                const linkUrl = match[2];
                // Check if external or email link
                if (linkUrl.startsWith('http') || linkUrl.startsWith('mailto:')) {
                    linkParts.push(<a key={`l-${match.index}`} href={linkUrl} target="_blank" rel="noreferrer" className="inzy-link">{linkText}</a>);
                } else {
                    linkParts.push(<Link key={`l-${match.index}`} to={linkUrl} className="inzy-link">{linkText}</Link>);
                }
                lastIndex = match.index + match[0].length;
            }
            if (lastIndex < bp.length) {
                linkParts.push(bp.substring(lastIndex));
            }
            return linkParts.length > 0 ? <React.Fragment key={`f-${j}`}>{linkParts}</React.Fragment> : bp;
        });
    };

    return (
        <div className="inzy-msg-content">
            {text.split('\n').map((line, i) => {
                if (!line.trim()) return <br key={i} />;

                // Headings
                if (line.startsWith('###')) return <div key={i} className="inzy-h3">{parseInline(line.replace(/^###\s*/, ''))}</div>;
                if (line.startsWith('##')) return <div key={i} className="inzy-h2">{parseInline(line.replace(/^##\s*/, ''))}</div>;

                // Bullets — strip the "- " or "• " prefix FIRST, then render bold/link mix
                if (line.trim().startsWith('- ') || line.trim().startsWith('• ')) {
                    const bulletContent = line.trim().replace(/^[-•]\s+/, '');
                    return <div key={i} className="inzy-bullet">• <span>{parseInline(bulletContent)}</span></div>;
                }

                // Normal line
                return <div key={i}>{parseInline(line)}</div>;
            })}
        </div>
    );
}

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx9YStCSXPnmckNzkY_dGXSM3i4eOInyPYYlq8_HVNFz4mXO2oz-EKQTzLRUPKsT2IBzA/exec";

async function submitLeadToSheets(lead) {
    const payload = {
        formType: 'resume_lead',
        name: (lead.name || '').trim(),
        email: (lead.email || '').trim(),
        phone: (lead.phone || '').trim(),
        college: (lead.college || '').trim(),
        course: (lead.domain || '').trim(),
        yearOfStudy: (lead.year || '').trim(),
        jobInterest: (lead.domain || '').trim(),
        plan: 'Chatbot Counsellor (Inzy)',
        timestamp: new Date().toISOString(),
    };
    try {
        await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(payload),
        });
        console.log('[Inzy Chatbot] Lead submitted successfully:', payload);
    } catch (err) {
        console.warn('[Inzy Chatbot] Lead save failed:', err);
    }
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function StudentChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [voiceMode, setVoiceMode] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const handleOpenChatbot = () => {
            setIsOpen(true);
        };
        window.addEventListener('open-chatbot', handleOpenChatbot);
        return () => window.removeEventListener('open-chatbot', handleOpenChatbot);
    }, []);
    const [voiceState, setVoiceState] = useState('idle');
    const [messages, setMessages] = useState([
        {
            role: 'bot',
            text: "Hi there! I'm **Inzy**, your personal learning advisor at InternzLearn. Ask me anything about courses, pricing, certificates, or internships! 😊",
            time: new Date(),
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [voiceOn, setVoiceOn] = useState(true);
    const [listening, setListening] = useState(false);
    const [voiceTranscript, setVoiceTranscript] = useState('');
    const [showCategories, setShowCategories] = useState(true);

    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    const chatHistory = useRef([]);
    const recognitionRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    useEffect(() => {
        if (isOpen && !voiceMode) setTimeout(() => inputRef.current?.focus(), 200);
    }, [isOpen, voiceMode]);

    // Preload voices
    useEffect(() => {
        const load = () => window.speechSynthesis?.getVoices();
        load();
        window.speechSynthesis?.addEventListener('voiceschanged', load);
        return () => window.speechSynthesis?.removeEventListener('voiceschanged', load);
    }, []);

    // ─── API call (Groq — free forever) ─────────────────────────────────────────
    const callAPI = useCallback(async (userText, isVoice = false) => {

        // Store in Gemini-style history for display, convert to Groq format for API
        chatHistory.current.push({ role: 'user', parts: [{ text: userText }] });
        setIsLoading(true);
        if (isVoice) setVoiceState('thinking');

        const delay = (ms) => new Promise(r => setTimeout(r, ms));

        // Convert Gemini-style history to OpenAI/Groq format
        const toGroqMessages = (sysPrompt) => [
            { role: 'system', content: sysPrompt },
            ...chatHistory.current.map(m => ({
                role: m.role === 'model' ? 'assistant' : 'user',
                content: m.parts[0].text,
            }))
        ];

        const makeRequest = async (retryCount = 0) => {
            const sysPrompt = isVoice
                ? `${SYSTEM_PROMPT}\n\nIMPORTANT: This is a voice conversation. Reply in plain natural speech without any emojis, markdown, or bullet points. Keep it under 3 sentences.`
                : SYSTEM_PROMPT;

            const res = await fetch(GROQ_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${GROQ_API_KEY}`,
                },
                body: JSON.stringify({
                    model: GROQ_MODEL,
                    messages: toGroqMessages(sysPrompt),
                    temperature: 0.7,
                    max_tokens: 512,
                }),
            });
            const data = await res.json();

            // Auto-retry on rate limit (429) — wait 15s then retry once
            if (data?.error?.code === 429 && retryCount === 0) {
                console.warn('[Inzy] Rate limited, retrying in 15s...');
                await delay(15000);
                return makeRequest(1);
            }
            return data;
        };

        try {
            // Guard: check API key is set
            if (!GROQ_API_KEY) {
                if (isVoice) setVoiceState('idle');
                return "I'm not configured yet. Please set VITE_GROQ_API_KEY in your .env file. Get a free key at console.groq.com 😊";
            }

            const data = await makeRequest();

            if (data?.error) {
                const errMsg = data.error.message || 'Unknown error';
                const errCode = data.error.code || data.error.type;
                console.warn('[Inzy] API error:', errCode ? `[${errCode}]` : '', errMsg);
                chatHistory.current.pop();
                if (errCode === 429 || errMsg.toLowerCase().includes('rate') || errMsg.toLowerCase().includes('quota')) {
                    if (isVoice) setVoiceState('idle');
                    return "I'm a bit busy right now! Please wait a moment and try again. 😊";
                }
                if (isVoice) setVoiceState('idle');
                return `Sorry, I had a small hiccup. Please try again! 😊`;
            }

            let botText = data?.choices?.[0]?.message?.content?.trim()
                || "I'm not sure how to answer that. Could you ask in a different way? 😊";

            // Intercept lead capture tag
            const leadRegex = /\[LEAD_CAPTURE:\s*(\{.*?\})\]/;
            const match = botText.match(leadRegex);
            if (match) {
                try {
                    const leadData = JSON.parse(match[1]);
                    submitLeadToSheets(leadData);
                } catch (e) {
                    console.warn('[Inzy Chatbot] Failed to parse lead data:', e);
                }
                // Strip the tag from the text response
                botText = botText.replace(leadRegex, '').trim();
            }

            chatHistory.current.push({ role: 'model', parts: [{ text: botText }] });
            return botText;
        } catch (err) {
            console.warn('[Inzy Network Error]', err.message);
            chatHistory.current.pop();
            if (isVoice) setVoiceState('idle');
            return `Network error. Please check your connection.`;
        } finally {
            setIsLoading(false);
        }
    }, []);

    // ─── Text chat send ──────────────────────────────────────────────────────────
    const sendMessage = async (text) => {
        const userText = (text || input).trim();
        if (!userText || isLoading) return;
        setInput('');
        setShowCategories(false);
        setMessages(prev => [...prev, { role: 'user', text: userText, time: new Date() }]);
        const botText = await callAPI(userText, false);
        setMessages(prev => [...prev, { role: 'bot', text: botText, time: new Date() }]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    };

    // ─── Voice mode speech recognition ──────────────────────────────────────────
    const startVoiceListening = useCallback(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert('Speech recognition not supported in this browser. Try Chrome.');
            return;
        }
        window.speechSynthesis?.cancel();
        const rec = new SpeechRecognition();
        rec.lang = 'en-IN';
        rec.interimResults = true;
        rec.continuous = false;

        rec.onstart = () => { setListening(true); setVoiceState('listening'); setVoiceTranscript(''); };
        rec.onresult = (e) => {
            const transcript = Array.from(e.results).map(r => r[0].transcript).join('');
            setVoiceTranscript(transcript);
        };
        rec.onend = async () => {
            setListening(false);
            const finalText = recognitionRef.current?._lastTranscript || '';
            if (finalText.trim()) {
                setMessages(prev => [...prev, { role: 'user', text: finalText, time: new Date() }]);
                setVoiceTranscript('');
                const botText = await callAPI(finalText, true);
                setMessages(prev => [...prev, { role: 'bot', text: botText, time: new Date() }]);
                setVoiceState('speaking');
                speakText(botText,
                    () => setVoiceState('speaking'),
                    () => setVoiceState('idle')
                );
            } else {
                setVoiceState('idle');
                setVoiceTranscript('');
            }
        };
        rec.onerror = () => { setListening(false); setVoiceState('idle'); };

        // Track final transcript via interim
        rec.onresult = (e) => {
            const t = Array.from(e.results).map(r => r[0].transcript).join('');
            setVoiceTranscript(t);
            if (rec) rec._lastTranscript = t;
        };

        recognitionRef.current = rec;
        rec.start();
    }, [callAPI]);

    const stopVoiceListening = useCallback(() => {
        recognitionRef.current?.stop();
        setListening(false);
    }, []);

    // Text input mic button
    const startTextMic = useCallback(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) return;
        const rec = new SpeechRecognition();
        rec.lang = 'en-IN';
        rec.interimResults = false;
        rec.onstart = () => setListening(true);
        rec.onresult = (e) => { setInput(e.results[0][0].transcript); setListening(false); };
        rec.onend = () => setListening(false);
        rec.onerror = () => setListening(false);
        recognitionRef.current = rec;
        rec.start();
    }, []);

    const exitVoiceMode = () => {
        cancelSpeech();
        recognitionRef.current?.stop();
        setVoiceMode(false);
        setVoiceState('idle');
        setListening(false);
        setVoiceTranscript('');
    };

    const fmt = (d) => d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

    return (
        <>
            {/* ── FAB ── */}
            {!isOpen && (
                <button className="inzy-fab" onClick={() => setIsOpen(true)} id="inzy-fab">
                    <div className="inzy-fab-glow" />
                    <img src="/inzy-logo.png" alt="Inzy" className="inzy-fab-logo" />
                    <span>Ask Inzy</span>
                    <span className="inzy-fab-ping" />
                </button>
            )}

            {/* ── Full-screen Chat ── */}
            {isOpen && !voiceMode && (
                <div className={`inzy-fullscreen ${isFullscreen ? 'inzy-fullscreen-maximized' : ''}`} id="inzy-fullscreen">

                    {/* Header */}
                    <div className="inzy-header">
                        <div className="inzy-header-left">
                            <div className="inzy-logo">
                                <img src="/inzy-logo.png" alt="Inzy" className="inzy-logo-img" />
                            </div>
                            <div>
                                <div className="inzy-header-name">Inzy</div>
                                <div className="inzy-header-sub">
                                    <span className="status-dot"></span>
                                    InternzLearn AI • Online
                                </div>
                            </div>
                        </div>
                        <div className="inzy-header-right">
                            <button className="inzy-hdr-btn" onClick={() => setIsFullscreen(!isFullscreen)} title={isFullscreen ? "Minimize" : "Fullscreen"}>
                                {isFullscreen ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
                            </button>
                            <button className="inzy-hdr-btn" onClick={() => setVoiceOn(!voiceOn)} title={voiceOn ? "Mute" : "Unmute"}>
                                {voiceOn ? <Volume2 size={17} /> : <VolumeX size={17} />}
                            </button>
                            <button className="inzy-hdr-btn" onClick={() => { setIsOpen(false); setIsFullscreen(false); cancelSpeech(); }}>
                                <X size={17} />
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="inzy-msgs" id="inzy-msgs">
                        {messages.length === 1 && (
                            <div className="inzy-hero">
                                <div className="inzy-hero-logo">
                                    <img src="/inzy-logo.png" alt="Inzy" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
                                </div>
                                <h2 className="inzy-hero-title">Hi, I'm Inzy!</h2>
                                <p className="inzy-hero-sub">Your smart guide to InternzLearn courses, pricing & career advice.</p>
                            </div>
                        )}

                        {messages.map((msg, idx) => (
                            <div key={idx} className={`inzy-row ${msg.role === 'user' ? 'inzy-row-user' : 'inzy-row-bot'}`}>
                                {msg.role === 'bot' && (
                                    <div className="inzy-avatar-bot">
                                        <img src="/inzy-logo.png" alt="Inzy" style={{ width: '20px', height: '20px', borderRadius: '6px', objectFit: 'cover' }} />
                                    </div>
                                )}
                                <div className={`inzy-bubble ${msg.role === 'user' ? 'inzy-bubble-user' : 'inzy-bubble-bot'}`}>
                                    {msg.role === 'bot' ? <RenderText text={msg.text} /> : <span>{msg.text}</span>}
                                    <div className="inzy-time">{fmt(msg.time)}</div>
                                </div>
                                {msg.role === 'user' && (
                                    <div className="inzy-avatar-user">
                                        <User size={13} />
                                    </div>
                                )}
                            </div>
                        ))}

                        {isLoading && (
                            <div className="inzy-row inzy-row-bot">
                                <div className="inzy-avatar-bot">
                                    <img src="/inzy-logo.png" alt="Inzy" style={{ width: '20px', height: '20px', borderRadius: '6px', objectFit: 'cover' }} />
                                </div>
                                <div className="inzy-bubble inzy-bubble-bot inzy-typing">
                                    <span /><span /><span />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>



                    {/* Input */}
                    <div className="inzy-input-bar">
                        <div className="inzy-input-wrap">
                            <textarea
                                ref={inputRef}
                                className="inzy-input"
                                rows={1}
                                placeholder="Ask about courses, pricing, certificates..."
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                id="inzy-input"
                            />
                            <div className="inzy-input-actions">
                                <button
                                    className={`inzy-mic-btn ${listening ? 'inzy-mic-active' : ''}`}
                                    onClick={listening ? stopVoiceListening : startTextMic}
                                    title="Speak"
                                >
                                    {listening ? <MicOff size={18} /> : <Mic size={18} />}
                                </button>
                                <button
                                    className="inzy-send-btn"
                                    onClick={() => sendMessage()}
                                    disabled={!input.trim() || isLoading}
                                    id="inzy-send"
                                >
                                    {isLoading ? <Loader2 size={17} className="inzy-spin" /> : <Send size={17} />}
                                </button>
                                <button
                                    className="inzy-voice-input-btn"
                                    onClick={() => setVoiceMode(true)}
                                    title="Switch to voice mode"
                                >
                                    <Headphones size={17} />
                                </button>
                            </div>
                        </div>
                        <p className="inzy-disclaimer">Inzy • InternzLearn</p>
                    </div>
                </div>
            )}

            {/* ── VOICE MODE — fullscreen ── */}
            {isOpen && voiceMode && (
                <div className="inzy-voice-screen" id="inzy-voice-screen">
                    {/* Header */}
                    <div className="inzy-voice-header">
                        <div className="inzy-header-left">
                            <div className="inzy-logo">
                                <img src="/inzy-logo.png" alt="Inzy" className="inzy-logo-img" />
                            </div>
                            <div>
                                <div className="inzy-header-name">Inzy Voice</div>
                                <div className="inzy-header-sub">Hands-free conversation</div>
                            </div>
                        </div>
                        <button className="inzy-hdr-btn" onClick={exitVoiceMode} title="Exit voice mode">
                            <X size={17} />
                        </button>
                    </div>

                    {/* Animated Orb */}
                    <div className="inzy-voice-center">
                        <div className={`inzy-orb-wrap inzy-orb-${voiceState}`}>
                            <div className="inzy-orb-ring inzy-orb-ring-3" />
                            <div className="inzy-orb-ring inzy-orb-ring-2" />
                            <div className="inzy-orb-ring inzy-orb-ring-1" />
                            <div className="inzy-orb">
                                {voiceState === 'listening' && <MicOff size={32} />}
                                {voiceState === 'thinking' && <Loader2 size={32} className="inzy-spin" />}
                                {voiceState === 'speaking' && <Volume2 size={32} />}
                                {voiceState === 'idle' && <Sparkles size={32} />}
                            </div>
                        </div>

                        {/* Status text */}
                        <div className="inzy-voice-status">
                            {voiceState === 'idle' && 'Tap the mic to speak'}
                            {voiceState === 'listening' && 'Listening...'}
                            {voiceState === 'thinking' && 'Inzy is thinking...'}
                            {voiceState === 'speaking' && 'Inzy is speaking...'}
                        </div>

                        {/* Transcript */}
                        {voiceTranscript && (
                            <div className="inzy-voice-transcript">"{voiceTranscript}"</div>
                        )}

                        {/* Last bot message */}
                        {messages.length > 1 && voiceState !== 'listening' && (
                            <div className="inzy-voice-last-msg">
                                {messages[messages.length - 1].role === 'bot'
                                    ? cleanForSpeech(messages[messages.length - 1].text).slice(0, 200) + '...'
                                    : ''}
                            </div>
                        )}
                    </div>

                    {/* Mic button */}
                    <div className="inzy-voice-controls">
                        <button
                            className={`inzy-big-mic ${voiceState === 'listening' ? 'inzy-big-mic-active' : ''}`}
                            onClick={voiceState === 'listening' ? stopVoiceListening : startVoiceListening}
                            disabled={voiceState === 'thinking' || voiceState === 'speaking'}
                        >
                            {voiceState === 'listening' ? <MicOff size={30} /> : <Mic size={30} />}
                        </button>
                        <p className="inzy-voice-hint">
                            {voiceState === 'listening' ? 'Tap to stop' : voiceState === 'idle' ? 'Tap to speak' : ''}
                        </p>
                        <button
                            className="inzy-back-chat"
                            onClick={() => {
                                cancelSpeech();
                                setVoiceMode(false);
                                setVoiceState('idle');
                            }}
                        >
                            <MessageCircle size={14} />
                            <span>Switch to Chat</span>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
