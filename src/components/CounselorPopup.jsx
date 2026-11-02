import React, { useState, useEffect, useRef } from 'react';
import { X, MessageSquare, Send, User, ChevronDown, Sparkles, MinusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CounselorPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! 👋 I'm your InternzLearn career assistant.", sender: 'bot' },
        { id: 2, text: "I can help you find the perfect program to boost your career. To get started, may I know your name?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [step, setStep] = useState(0); // 0: Name, 1: Email, 2: Phone, 3: Interest, 4: Done
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const [userData, setUserData] = useState({ name: '', email: '', phone: '', interest: '' });

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        // Auto-open chat after delay if not previously engaged
        const hasInteracted = sessionStorage.getItem('hasInteractedWithChat');
        if (!hasInteracted) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 45000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input.trim();
        setMessages(prev => [...prev, { id: Date.now(), text: userMsg, sender: 'user' }]);
        setInput('');
        setIsTyping(true);

        // Simulate thinking delay
        setTimeout(() => {
            processStep(userMsg);
        }, 1000);
    };

    const processStep = (userMsg) => {
        let botResponse = "";
        let nextStep = step + 1;

        switch (step) {
            case 0: // Name
                setUserData(prev => ({ ...prev, name: userMsg }));
                botResponse = `Nice to meet you, ${userMsg}! 🌟 To send you the best course details, could you share your email address?`;
                break;
            case 1: // Email
                setUserData(prev => ({ ...prev, email: userMsg }));
                botResponse = "Perfect! 📧 And a phone number where our senior counselor can reach you for a quick discussion?";
                break;
            case 2: // Phone
                setUserData(prev => ({ ...prev, phone: userMsg }));
                botResponse = "Got it. Finally, which domain are you most interested in? (e.g., Web Dev, AI, Data Science, etc.)";
                break;
            case 3: // Interest
                setUserData(prev => ({ ...prev, interest: userMsg }));
                botResponse = "Thank you! 🎉 I've passed your details to our expert team. A counselor will call you shortly to guide you forward. Have a great day!";
                sessionStorage.setItem('hasInteractedWithChat', 'true');
                break;
            default:
                botResponse = "If you have more questions, feel free to ask! We are here to help.";
                nextStep = step; // Stay on same step
        }

        setIsTyping(false);
        setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
        setStep(nextStep);
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setIsMinimized(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end pointer-events-none">
            {/* Chat Container */}
            <AnimatePresence>
                {isOpen && !isMinimized && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="pointer-events-auto bg-[#0F172A]/90 backdrop-blur-xl border border-white/10 w-[350px] md:w-[380px] h-[500px] rounded-2xl shadow-2xl overflow-hidden flex flex-col mb-4"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-4 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border border-white/20">
                                        <img src="/counselor.png" alt="AI" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-indigo-600 rounded-full"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">Career Assistant</h3>
                                    <p className="text-[10px] text-blue-100 flex items-center gap-1">
                                        <Sparkles size={8} /> Now Online
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => setIsMinimized(true)}
                                    className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <MinusCircle size={18} />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.sender === 'user'
                                            ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-tr-none'
                                            : 'bg-white/10 text-slate-200 border border-white/5 rounded-tl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                    <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-tl-none border border-white/5 flex gap-1 items-center">
                                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-[#020617]/50 border-t border-white/10">
                            <form onSubmit={handleSend} className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder={step === 4 ? "Conversation ended" : "Type your message..."}
                                    disabled={step === 4 || isTyping}
                                    className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || step === 4}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:shadow-lg hover:shadow-violet-500/25 disabled:opacity-0 disabled:scale-75 transition-all"
                                >
                                    <Send size={16} />
                                </button>
                            </form>
                            <div className="text-center mt-2">
                                <p className="text-[10px] text-slate-500">
                                    We respect your privacy. No spam.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                layout
                onClick={toggleChat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pointer-events-auto bg-gradient-to-r from-violet-600 to-indigo-600 hover:shadow-violet-500/50 text-white p-4 rounded-full shadow-lg shadow-violet-500/30 flex items-center justify-center group relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></div>
                <div className="absolute inset-0 bg-violet-400 rounded-full animate-ping opacity-20 duration-3000"></div>
                {isOpen && !isMinimized ? <ChevronDown size={24} /> : <MessageSquare size={24} />}

                {/* Notification Badge */}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#020617]"></span>
                )}
            </motion.button>
        </div>
    );
};

export default CounselorPopup;
