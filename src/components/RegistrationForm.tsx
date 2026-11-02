import React, { useState, useRef, useEffect, ChangeEvent, FormEvent } from "react";

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyYd_KfXLt4xv-O_0lBeym9nD1cFi6WtTGHm-ZRxeM-MyljPZ6-VHKS2kEbAJ2XAZw5Ig/exec";

const REFERRAL_CODE = "IBMSCHOLAR@2026";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const DOMAINS = [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Web Development",
    "Android Development",
    "Cyber Security",
    "Java",
    "Python",
    "Embedded Systems",
    "Internet of Things",
    "VLSI",
    "IC Engine Design",
    "Hybrid Electric Vehicle",
    "Robotics",
    "Construction Planning",
    "Human Resources",
    "Finance",
    "Sales and Marketing",
    "Digital Marketing",
    "Stock Market",
    "UI / UX Design",
    "Generative AI",
    "Content Creation",
    "Graphic Design",
    "Social Media Marketing",
    "Medical Coding",
    "Industrial Biotechnology",
    "Psychology",
    "Neurology",
];

const ACADEMIC_YEARS = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Passout"];

const LANGUAGES = [
    "English / Kannada",
    "English / Hindi",
    "English / Telugu",
    "English / Malayalam",
    "English / Tamil",
];

// ─── SVG ICONS ────────────────────────────────────────────────────────────────
const IconCert = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" /><path d="M8 14.5L6 22l6-2 6 2-2-7.5" />
    </svg>
);
const IconClock = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
);
const IconProject = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
    </svg>
);
const IconUsers = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);
const IconShield = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
    </svg>
);
const IconTag = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
);
const IconCheck = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);
const IconArrow = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
);
const IconChevron = ({ open }: { open: boolean }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
        <polyline points="6 9 12 15 18 9" />
    </svg>
);
const IconError = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
);
const IconSpin = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" style={{ animation: "ait-spin 0.7s linear infinite" }}>
        <path d="M12 2a10 10 0 0 1 10 10" />
    </svg>
);
const IconBuilding = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);
const IconCopy = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
);

// ─── MAIN COMPONENT ─────────────────────────────────  ─────────────
interface RegistrationFormProps {
    onClose?: () => void;
}

export default function RegistrationForm({ onClose }: RegistrationFormProps) {
    const [formData, setFormData] = useState<Record<string, string>>({
        name: "",
        email: "",
        phone: "",
        college: "",
        academicYear: "",
        branch: "",
        domain: "",
        language: "",
        classMode: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [focusedField, setFocusedField] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [step, setStep] = useState(1);
    const [domainSearch, setDomainSearch] = useState("");
    const [showDomainDropdown, setShowDomainDropdown] = useState(false);
    const [codeCopied, setCodeCopied] = useState(false);
    const overlayRef = useRef<HTMLDivElement>(null);
    const domainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape" && onClose) onClose(); };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (domainRef.current && !domainRef.current.contains(e.target as Node))
                setShowDomainDropdown(false);
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const filteredDomains = DOMAINS.filter((d) =>
        d.toLowerCase().includes(domainSearch.toLowerCase())
    );

    function copyReferralCode() {
        navigator.clipboard.writeText(REFERRAL_CODE).catch(() => { });
        setCodeCopied(true);
        setTimeout(() => setCodeCopied(false), 2200);
    }

    // ─── VALIDATION ───────────────────────────────────────────────────────────
    function validateStep1() {
        const e: Record<string, string> = {};
        if (!formData.name.trim()) e.name = "Full name is required";
        if (!formData.email.trim()) e.email = "Email address is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            e.email = "Enter a valid email address";
        if (!formData.phone.trim()) e.phone = "Contact number is required";
        else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, "")))
            e.phone = "Enter a valid 10-digit Indian mobile number";
        if (!formData.college.trim()) e.college = "College name is required";
        return e;
    }

    function validateStep2() {
        const e: Record<string, string> = {};
        if (!formData.academicYear) e.academicYear = "Please select your academic year";
        if (!formData.branch.trim()) e.branch = "Branch / department is required";
        if (!formData.domain) e.domain = "Please select a domain";
        if (!formData.language) e.language = "Please select your preferred language";
        if (!formData.classMode) e.classMode = "Please select your preferred class mode";
        return e;
    }

    // ─── HANDLERS ─────────────────────────────────────────────────────────────
    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    function handleNext() {
        const e = validateStep1();
        if (Object.keys(e).length > 0) { setErrors(e); return; }
        setErrors({});
        setStep(2);
    }

    function handleBack() { setStep(1); }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const errs = validateStep2();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setSubmitting(true);
        setSubmitError("");

        const payload: Record<string, string> = {
            formType: "interest_form",
            name: formData.name.trim(),
            email: formData.email.trim().toLowerCase(),
            phone: formData.phone.trim(),
            college: formData.college.trim(),
            course: formData.domain,
            academicYear: formData.academicYear,
            branch: formData.branch.trim(),
            language: formData.language,
            classMode: formData.classMode,
            referralCode: REFERRAL_CODE,
            source: "Website",
        };

        try {
            const fd = new FormData();
            Object.keys(payload).forEach((k) => fd.append(k, payload[k]));
            await fetch(APPS_SCRIPT_URL, { method: "POST", mode: "no-cors", body: fd });
            setSubmitted(true);
        } catch (err: any) {
            setSubmitError(err.message || "Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    }

    const progress = step === 1 ? 50 : 100;

    // ─── RENDER ───────────────────────────────────────────────────────────────
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap');

        .ait-wrap * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          box-sizing: border-box;
        }

        /* ── Animations ── */
        @keyframes ait-enter  { from { opacity: 0; transform: scale(0.97) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes ait-spin   { to   { transform: rotate(360deg); } }
        @keyframes ait-check  { from { stroke-dashoffset: 40; } to { stroke-dashoffset: 0; } }
        @keyframes ait-float  { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        @keyframes ait-shimmer{ 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        @keyframes ait-slide-r{ from { opacity: 0; transform: translateX(-14px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes ait-slide-l{ from { opacity: 0; transform: translateX(14px);  } to { opacity: 1; transform: translateX(0); } }

        /* ── Overlay ── */
        .ait-overlay {
          position: fixed; inset: 0;
          background: rgba(2, 8, 20, 0.82);
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          z-index: 9998;
          display: flex; align-items: center; justify-content: center;
          padding: 20px 16px; overflow-y: auto;
        }

        /* ── Modal shell ── */
        .ait-modal {
          position: relative; width: 100%; max-width: 620px;
          background: #FFFFFF;
          border-radius: 20px; overflow: hidden;
          animation: ait-enter 0.38s cubic-bezier(0.16, 1, 0.3, 1) both;
          margin: auto;
          box-shadow:
            0 0 0 1px rgba(15,23,42,0.08),
            0 32px 64px rgba(15,23,42,0.18),
            0 8px 24px rgba(15,23,42,0.08);
        }

        /* ── Header ── */
        .ait-header {
          padding: 36px 44px 30px;
          position: relative; overflow: hidden;
          background: linear-gradient(162deg, #0A1628 0%, #0E2044 50%, #071530 100%);
        }
        .ait-header::after {
          content: '';
          position: absolute; inset: 0;
          background-image:
            radial-gradient(ellipse 90% 70% at 15% -5%, rgba(30,86,160,0.28) 0%, transparent 65%),
            radial-gradient(ellipse 55% 45% at 92% 105%, rgba(180,140,255,0.1) 0%, transparent 60%);
          pointer-events: none;
        }
        .ait-header-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 32px 32px;
        }

        /* ── Top bar inside header ── */
        .ait-topbar {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 20px; position: relative; z-index: 1;
        }
        .ait-brand-row {
          display: flex; align-items: center; gap: 0;
        }
        .ait-brand-chip {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 11px;
          border-radius: 6px;
          font-size: 9.5px; font-weight: 700; letter-spacing: 1px;
          text-transform: uppercase;
        }
        .ait-brand-chip.il  { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.75); }
        .ait-brand-chip.ibm { background: rgba(59,130,246,0.15);  border: 1px solid rgba(59,130,246,0.28); color: #93C5FD; }
        .ait-brand-chip.iit { background: rgba(251,146,60,0.12);  border: 1px solid rgba(251,146,60,0.26); color: #FED7AA; }
        .ait-brand-sep { color: rgba(255,255,255,0.2); font-size: 11px; padding: 0 6px; font-weight: 300; }

        /* ── Heading area ── */
        .ait-heading {
          position: relative; z-index: 1; margin-bottom: 22px;
        }
        .ait-duration-tag {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 3px 10px; border-radius: 4px;
          background: rgba(251,191,36,0.1); border: 1px solid rgba(251,191,36,0.22);
          font-size: 9.5px; font-weight: 600; color: #FCD34D;
          letter-spacing: 0.8px; text-transform: uppercase; margin-bottom: 12px;
        }
        .ait-duration-tag svg { color: #FCD34D; }
        .ait-h1 {
          margin: 0 0 6px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 26px; font-weight: 700;
          color: #FFFFFF; line-height: 1.22; letter-spacing: -0.3px;
        }
        .ait-h1 span {
          background: linear-gradient(90deg, #60A5FA 0%, #C4B5FD 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ait-subtext {
          margin: 0; font-size: 12px; color: rgba(255,255,255,0.42);
          line-height: 1.75; max-width: 430px; font-weight: 400;
        }
        .ait-subtext strong { color: rgba(255,255,255,0.65); font-weight: 500; }

        /* ── Cert tags row ── */
        .ait-cert-row {
          display: flex; gap: 6px; flex-wrap: wrap;
          position: relative; z-index: 1; margin-bottom: 20px;
        }
        .ait-cert-tag {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 10px; border-radius: 5px;
          font-size: 10px; font-weight: 600; letter-spacing: 0.5px;
        }
        .ait-cert-tag.blue { background: rgba(59,130,246,0.14); border: 1px solid rgba(59,130,246,0.28); color: #93C5FD; }
        .ait-cert-tag.amber{ background: rgba(251,146,60,0.12); border: 1px solid rgba(251,146,60,0.25); color: #FED7AA; }
        .ait-cert-tag.slate{ background: rgba(148,163,184,0.1); border: 1px solid rgba(148,163,184,0.18); color: rgba(255,255,255,0.55); font-size: 9.5px; }

        /* ── Step indicator ── */
        .ait-step-row  { display: flex; align-items: center; gap: 0; position: relative; z-index: 1; }
        .ait-step      { display: flex; align-items: center; gap: 7px; }
        .ait-step-dot  {
          width: 24px; height: 24px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 700; flex-shrink: 0; transition: all 0.3s;
        }
        .ait-step-dot.active   { background: #FFFFFF; color: #0E2044; }
        .ait-step-dot.done     { background: rgba(96,165,250,0.25); color: rgba(255,255,255,0.85); }
        .ait-step-dot.inactive { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.3); }
        .ait-step-lbl  { font-size: 11px; font-weight: 600; transition: color 0.2s; }
        .ait-step-lbl.active   { color: rgba(255,255,255,0.92); }
        .ait-step-lbl.done,
        .ait-step-lbl.inactive { color: rgba(255,255,255,0.32); }
        .ait-step-line { flex: 1; max-width: 40px; height: 1px; background: rgba(255,255,255,0.1); margin: 0 6px; }

        /* ── Progress bar ── */
        .ait-progress-track {
          height: 2px; background: rgba(255,255,255,0.07);
          border-radius: 4px; margin-top: 18px; overflow: hidden;
          position: relative; z-index: 1;
        }
        .ait-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #3B82F6, #8B5CF6);
          border-radius: 4px;
          transition: width 0.55s cubic-bezier(0.34,1.56,0.64,1);
          position: relative;
        }
        .ait-progress-fill::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent);
          animation: ait-shimmer 2.2s infinite; background-size: 200% 100%;
        }

        /* ── Body ── */
        .ait-body    { padding: 28px 44px 0;  background: #F9FAFB; }
        .ait-footer  { padding: 20px 44px 24px; background: #F9FAFB; border-top: 1px solid #E9EDF3; }
        .ait-privacy { padding: 0 44px 20px; background: #F9FAFB; }

        /* ── Highlights grid ── */
        .ait-hl-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 18px; }
        .ait-hl-card {
          display: flex; align-items: flex-start; gap: 9px;
          padding: 11px 13px; background: #FFFFFF;
          border: 1px solid #E2E8F0; border-radius: 10px;
          transition: border-color 0.15s;
        }
        .ait-hl-card:hover { border-color: #CBD5E1; }
        .ait-hl-icon {
          width: 28px; height: 28px; border-radius: 7px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
        }
        .ait-hl-icon.blue  { background: #EFF6FF; color: #2563EB; }
        .ait-hl-icon.amber { background: #FFFBEB; color: #D97706; }
        .ait-hl-icon.green { background: #F0FDF4; color: #16A34A; }
        .ait-hl-icon.slate { background: #F1F5F9; color: #475569; }
        .ait-hl-title { font-size: 11.5px; font-weight: 600; color: #1E293B; line-height: 1.3; }
        .ait-hl-desc  { font-size: 10.5px; color: #94A3B8; margin-top: 1px; line-height: 1.4; }

        /* ── Referral banner ── */
        .ait-referral {
          display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
          padding: 12px 16px; margin-bottom: 20px;
          background: #FFFDF0;
          border: 1px solid #FDE68A; border-radius: 10px;
        }
        .ait-referral-lbl {
          display: flex; align-items: center; gap: 5px;
          font-size: 9.5px; font-weight: 700; color: #92400E;
          letter-spacing: 1px; text-transform: uppercase; white-space: nowrap;
        }
        .ait-referral-code {
          flex: 1; font-family: 'SFMono-Regular', Consolas, monospace;
          font-size: 13px; font-weight: 700; color: #78350F;
          letter-spacing: 1.2px; padding: 4px 10px;
          background: rgba(0,0,0,0.04); border-radius: 5px;
          text-align: center; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .ait-referral-badge {
          font-size: 10px; font-weight: 700; color: #065F46;
          background: #D1FAE5; padding: 4px 8px; border-radius: 5px; white-space: nowrap;
        }
        .ait-referral-btn {
          display: flex; align-items: center; gap: 4px;
          padding: 4px 10px; background: #92400E; color: #FEF3C7;
          border: none; border-radius: 5px; font-size: 10px; font-weight: 700;
          cursor: pointer; font-family: inherit; letter-spacing: 0.3px;
          transition: background 0.15s; white-space: nowrap;
        }
        .ait-referral-btn:hover { background: #78350F; }

        /* ── Section separator ── */
        .ait-section-sep {
          display: flex; align-items: center; gap: 10px; margin-bottom: 16px;
        }
        .ait-section-sep-line { flex: 1; height: 1px; background: #E2E8F0; }
        .ait-section-sep-label {
          font-size: 9.5px; font-weight: 700; color: #94A3B8;
          letter-spacing: 1.2px; text-transform: uppercase;
        }

        /* ── Field group ── */
        .ait-field  { margin-bottom: 18px; }
        .ait-label  {
          display: block; font-size: 11px; font-weight: 700;
          color: #64748B; letter-spacing: 1.2px; text-transform: uppercase;
          margin-bottom: 7px;
        }
        .ait-label span { color: #3B82F6; margin-left: 2px; }

        /* ── Input ── */
        .ait-input {
          width: 100%; padding: 12px 15px;
          font-size: 14px; font-family: inherit; font-weight: 400;
          color: #0F172A; background: #FFFFFF;
          border: 1px solid #E2E8F0; border-radius: 9px;
          outline: none; transition: all 0.18s;
          -webkit-appearance: none; appearance: none;
        }
        .ait-input:focus { border-color: #3B82F6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
        .ait-input.err  { border-color: #EF4444; box-shadow: 0 0 0 3px rgba(239,68,68,0.07); }
        .ait-input::placeholder { color: #CBD5E1; font-weight: 400; }

        /* ── Error message ── */
        .ait-err {
          margin: 5px 0 0; font-size: 11.5px; color: #EF4444;
          font-weight: 500; display: flex; align-items: center; gap: 4px;
        }

        /* ── 2-col grid ── */
        .ait-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 18px; }

        /* ── Academic Year cards ── */
        .ait-year-row { display: grid; grid-template-columns: repeat(5, 1fr); gap: 7px; }
        .ait-year-card {
          display: flex; align-items: center; justify-content: center;
          padding: 10px 5px; border: 1px solid #E2E8F0; border-radius: 8px;
          cursor: pointer; background: #FFFFFF;
          transition: all 0.15s; font-size: 11.5px; font-weight: 500;
          color: #64748B; text-align: center; line-height: 1.25;
          user-select: none;
        }
        .ait-year-card:hover          { border-color: #93C5FD; color: #1D4ED8; background: #EFF6FF; }
        .ait-year-card.sel            { border-color: #3B82F6; background: #EFF6FF; color: #1D4ED8; font-weight: 700; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
        .ait-year-card.err-border     { border-color: #FCA5A5; }

        /* ── Domain dropdown ── */
        .ait-domain-btn {
          width: 100%; padding: 12px 38px 12px 15px;
          font-size: 14px; font-family: inherit; font-weight: 400;
          color: #0F172A; background: #FFFFFF;
          border: 1px solid #E2E8F0; border-radius: 9px;
          cursor: pointer; display: flex; align-items: center; gap: 8px;
          transition: all 0.18s; text-align: left; position: relative;
        }
        .ait-domain-btn:hover,
        .ait-domain-btn.open { border-color: #3B82F6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
        .ait-domain-btn.err  { border-color: #EF4444; }
        .ait-domain-btn.ph   { color: #CBD5E1; }
        .ait-domain-chevron  { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); }

        .ait-dropdown {
          position: absolute; left: 0; right: 0; top: calc(100% + 5px);
          background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 11px;
          box-shadow: 0 16px 40px rgba(15,23,42,0.12), 0 0 0 1px rgba(59,130,246,0.05);
          z-index: 999; overflow: hidden;
          animation: ait-enter 0.14s ease;
        }
        .ait-dropdown-search { padding: 10px 10px 8px; border-bottom: 1px solid #F1F5F9; }
        .ait-dropdown-search input {
          width: 100%; padding: 8px 11px; font-size: 13px; font-family: inherit;
          font-weight: 400; border: 1px solid #E2E8F0; border-radius: 7px;
          outline: none; color: #0F172A; background: #F8FAFF;
        }
        .ait-dropdown-search input:focus { border-color: #3B82F6; }
        .ait-dropdown-list { max-height: 216px; overflow-y: auto; }
        .ait-dropdown-list::-webkit-scrollbar       { width: 4px; }
        .ait-dropdown-list::-webkit-scrollbar-track { background: transparent; }
        .ait-dropdown-list::-webkit-scrollbar-thumb { background: #BFDBFE; border-radius: 4px; }
        .ait-domain-item {
          padding: 10px 14px; font-size: 13.5px; font-family: inherit; font-weight: 400;
          color: #334155; cursor: pointer; display: flex; align-items: center;
          gap: 8px; transition: background 0.1s;
        }
        .ait-domain-item:hover  { background: #F8FAFF; color: #1D4ED8; }
        .ait-domain-item.sel    { background: #EFF6FF; color: #1D4ED8; font-weight: 600; }
        .ait-domain-item-check  { margin-left: auto; color: #3B82F6; }

        /* ── Select wrapper ── */
        .ait-select-wrap { position: relative; }
        .ait-select-wrap select {
          width: 100%; padding: 12px 38px 12px 15px;
          font-size: 14px; font-family: inherit; font-weight: 400;
          color: #0F172A; background: #FFFFFF;
          border: 1px solid #E2E8F0; border-radius: 9px;
          outline: none; -webkit-appearance: none; appearance: none;
          cursor: pointer; transition: all 0.18s;
        }
        .ait-select-wrap select:focus { border-color: #3B82F6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
        .ait-select-wrap select.err   { border-color: #EF4444; }
        .ait-select-wrap .ait-sel-icon { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); pointer-events: none; }

        /* ── Buttons ── */
        .ait-btn-primary {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 13px 32px; background: #1D4ED8;
          color: #FFFFFF; border: none; border-radius: 9px;
          font-size: 13.5px; font-weight: 700; cursor: pointer;
          letter-spacing: 0.1px; font-family: inherit;
          box-shadow: 0 2px 12px rgba(29,78,216,0.3);
          transition: all 0.2s;
        }
        .ait-btn-primary:hover:not(:disabled) {
          background: #2563EB;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(29,78,216,0.38);
        }
        .ait-btn-primary:active:not(:disabled) { transform: translateY(0); }
        .ait-btn-primary:disabled { background: #94A3B8; box-shadow: none; cursor: not-allowed; }

        .ait-btn-ghost {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 12px 22px; background: transparent;
          color: #64748B; border: 1px solid #E2E8F0; border-radius: 9px;
          font-size: 13px; font-weight: 600; cursor: pointer;
          font-family: inherit; transition: all 0.15s;
        }
        .ait-btn-ghost:hover { border-color: #CBD5E1; color: #334155; background: #F8FAFF; }

        /* ── Close button ── */
        .ait-close {
          position: absolute; top: 18px; right: 20px;
          width: 30px; height: 30px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.5); font-size: 17px;
          transition: all 0.15s; z-index: 10;
        }
        .ait-close:hover { background: rgba(255,255,255,0.14); color: #fff; border-color: rgba(255,255,255,0.22); }

        /* ── Success state ── */
        .ait-success {
          padding: 52px 44px; text-align: center; background: #F9FAFB;
        }
        .ait-success-ring {
          width: 68px; height: 68px; border-radius: 50%;
          background: linear-gradient(135deg, #BBF7D0, #6EE7B7);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 18px;
          animation: ait-float 3s ease-in-out infinite;
          box-shadow: 0 8px 24px rgba(16,185,129,0.2);
        }
        .ait-success-check-path { stroke-dasharray: 40; stroke-dashoffset: 0; animation: ait-check 0.5s ease 0.2s both; }
        .ait-success-badge {
          display: inline-block; padding: 3px 12px;
          background: #D1FAE5; border-radius: 100px; margin-bottom: 14px;
          font-size: 10.5px; font-weight: 700; color: #065F46; letter-spacing: 0.5px;
        }
        .ait-success-cert-row {
          display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-bottom: 18px;
        }
        .ait-success-cert {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 5px 11px; border-radius: 6px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.3px;
        }

        /* ── Privacy note ── */
        .ait-privacy-box {
          display: flex; align-items: flex-start; gap: 8px;
          padding: 10px 13px; background: #EFF6FF;
          border: 1px solid #BFDBFE; border-radius: 8px;
        }
        .ait-privacy-box p { margin: 0; font-size: 11.5px; color: #1D4ED8; line-height: 1.7; }

        /* ── Step animations ── */
        .ait-anim-r { animation: ait-slide-r 0.22s ease both; }
        .ait-anim-l { animation: ait-slide-l 0.22s ease both; }

        /* ── Submit error ── */
        .ait-submit-err {
          margin: 0 44px 0; padding: 11px 14px;
          background: #FEF2F2; border: 1px solid #FECACA;
          border-radius: 9px; font-size: 12.5px; color: #DC2626; font-weight: 500;
        }

        /* ── Class-mode toggle ── */
        .ait-mode-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
        }
        .ait-mode-card {
          position: relative; cursor: pointer;
          border: 1.5px solid #E2E8F0; border-radius: 10px;
          background: #FFFFFF; padding: 14px 16px;
          transition: all 0.18s; display: flex; align-items: flex-start; gap: 11px;
          user-select: none;
        }
        .ait-mode-card:hover { border-color: #93C5FD; background: #F8FBFF; }
        .ait-mode-card.sel   {
          border-color: #3B82F6; background: #EFF6FF;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
        }
        .ait-mode-card.err-border { border-color: #FCA5A5; }
        .ait-mode-radio {
          width: 16px; height: 16px; border-radius: 50%;
          border: 2px solid #CBD5E1; background: #FFFFFF;
          flex-shrink: 0; margin-top: 1px; transition: all 0.15s;
          display: flex; align-items: center; justify-content: center;
        }
        .ait-mode-card.sel .ait-mode-radio {
          border-color: #3B82F6; background: #3B82F6;
        }
        .ait-mode-radio-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #FFFFFF;
          opacity: 0; transform: scale(0); transition: all 0.15s;
        }
        .ait-mode-card.sel .ait-mode-radio-dot { opacity: 1; transform: scale(1); }
        .ait-mode-title { font-size: 13px; font-weight: 700; color: #0F172A; line-height: 1.3; margin-bottom: 2px; }
        .ait-mode-desc  { font-size: 11px; color: #94A3B8; line-height: 1.4; font-weight: 400; }
        .ait-mode-card.sel .ait-mode-title { color: #1D4ED8; }
        .ait-mode-card.sel .ait-mode-desc  { color: #60A5FA; }


        @media (max-width: 600px) {
          .ait-overlay { padding: 0; align-items: flex-end; }
          .ait-modal   {
            border-radius: 18px 18px 0 0; margin: 0; width: 100%;
            max-height: 92dvh; overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }
          .ait-modal::-webkit-scrollbar { display: none; }
          .ait-header::before {
            content: ''; display: block;
            position: absolute; top: 10px; left: 50%;
            transform: translateX(-50%);
            width: 32px; height: 4px; border-radius: 100px;
            background: rgba(255,255,255,0.18);
          }
          .ait-header   { padding: 28px 18px 22px; }
          .ait-h1       { font-size: 20px; }
          .ait-topbar   { flex-wrap: wrap; gap: 6px; }
          .ait-brand-row{ flex-wrap: wrap; gap: 4px; }
          .ait-close    { top: 14px; right: 14px; }
          .ait-body     { padding: 18px 16px 0; }
          .ait-footer   { padding: 14px 16px 20px; }
          .ait-privacy  { padding: 0 16px 18px; }
          .ait-success  { padding: 36px 18px; }
          .ait-submit-err { margin: 0 16px; }
          .ait-footer {
            display: flex !important; flex-direction: column-reverse !important;
            gap: 8px !important;
          }
          .ait-btn-primary, .ait-btn-ghost {
            width: 100%; justify-content: center;
            padding: 14px 20px; font-size: 14.5px;
            border-radius: 10px; min-height: 48px;
          }
          .ait-input,
          .ait-domain-btn,
          .ait-select-wrap select { padding: 13px 15px; font-size: 15px; min-height: 48px; }
          .ait-domain-btn         { padding: 13px 40px 13px 15px; }
          .ait-grid2              { grid-template-columns: 1fr; gap: 0; margin-bottom: 0; }
          .ait-grid2 > div        { margin-bottom: 18px; }
          .ait-year-row           { grid-template-columns: repeat(3, 1fr); }
          .ait-year-card          { padding: 11px 4px; font-size: 11px; min-height: 44px; border-radius: 8px; }
          .ait-hl-grid            { grid-template-columns: 1fr; }
          .ait-field              { margin-bottom: 16px; }
          .ait-dropdown           { bottom: calc(100% + 5px); top: auto; }
          .ait-dropdown-list      { max-height: 200px; }
          .ait-referral           { gap: 6px; }
          .ait-cert-row           { gap: 5px; }
        }

        @media (max-width: 380px) {
          .ait-h1        { font-size: 18px; }
          .ait-year-row  { grid-template-columns: repeat(2, 1fr); }
          .ait-brand-sep { display: none; }
        }
      `}</style>

            <div
                className="ait-overlay"
                ref={overlayRef}
                onClick={(e) => { if (e.target === overlayRef.current && onClose) onClose(); }}
            >
                <div className="ait-modal ait-wrap">

                    {/* ── CLOSE ── */}
                    {onClose && (
                        <button className="ait-close" onClick={onClose} aria-label="Close">&times;</button>
                    )}

                    {/* ══════════ HEADER ══════════ */}
                    <div className="ait-header">
                        <div className="ait-header-grid" />

                        {/* Top bar */}
                        <div className="ait-topbar">
                            <div className="ait-brand-row">
                                <span className="ait-brand-chip il">InternzLearn</span>
                                <span className="ait-brand-sep">/</span>
                                <span className="ait-brand-chip ibm">IBM SkillBuild</span>
                                <span className="ait-brand-sep">/</span>
                                <span className="ait-brand-chip iit">IIT Bombay</span>
                            </div>
                        </div>

                        {/* Duration */}
                        <div className="ait-heading">
                            <div className="ait-duration-tag">
                                <IconClock />
                                April 2026 – July 2026&nbsp;&nbsp;·&nbsp;&nbsp;3-Month Programme
                            </div>
                            <h2 className="ait-h1">
                                Training &amp; Certification<br />
                                <span>Programme 2026</span>
                            </h2>
                        </div>

                        {/* Cert tags */}
                        <div className="ait-cert-row">
                            <span className="ait-cert-tag blue"><IconCert /> IBM Certified</span>
                            <span className="ait-cert-tag amber"><IconBuilding /> IIT Bombay</span>
                            <span className="ait-cert-tag slate">4 Certifications Included</span>
                            <span className="ait-cert-tag slate">Offline Classes</span>
                        </div>

                        {/* Step indicator */}
                        <div className="ait-step-row">
                            {[1, 2].map((s) => (
                                <div key={s} className="ait-step">
                                    <div className={`ait-step-dot ${step === s ? "active" : step > s ? "done" : "inactive"}`}>
                                        {step > s ? <IconCheck /> : s}
                                    </div>
                                    <span className={`ait-step-lbl ${step === s ? "active" : step > s ? "done" : "inactive"}`}>
                                        {s === 1 ? "Personal Details" : "Programme Preferences"}
                                    </span>
                                    {s < 2 && <div className="ait-step-line" />}
                                </div>
                            ))}
                        </div>

                        <div className="ait-progress-track">
                            <div className="ait-progress-fill" style={{ width: `${progress}%` }} />
                        </div>
                    </div>

                    {/* ══════════ SUCCESS ══════════ */}
                    {submitted ? (
                        <div className="ait-success">
                            <div className="ait-success-ring">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path className="ait-success-check-path" d="M6 14l5 5 11-11"
                                        stroke="#059669" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="ait-success-badge">APPLICATION RECEIVED</div>
                            <h3 style={{ margin: "0 0 8px", fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: "#0F172A" }}>
                                You are on the list.
                            </h3>
                            <p style={{ margin: "0 0 6px", fontSize: 14, color: "#475569", lineHeight: 1.85 }}>
                                Thank you,{" "}
                                <strong style={{ color: "#1D4ED8" }}>{formData.name.split(" ")[0]}</strong>.
                                {" "}Our coordinator will reach out at{" "}
                                <strong style={{ color: "#1D4ED8" }}>{formData.email}</strong>{" "}within 24 hours.
                            </p>
                            <p style={{ margin: "0 0 20px", fontSize: 12, color: "#94A3B8", lineHeight: 1.8 }}>
                                You will receive <strong style={{ color: "#64748B" }}>4 industry-recognised certifications</strong>{" "}
                                jointly issued by IBM SkillBuild and IIT Bombay upon programme completion.
                            </p>
                            <div className="ait-success-cert-row">
                                <span className="ait-success-cert" style={{ background: "#DBEAFE", color: "#1D4ED8" }}>IBM SkillBuild</span>
                                <span className="ait-success-cert" style={{ background: "#FEF3C7", color: "#92400E" }}>IIT Bombay</span>
                            </div>
                            <p style={{ margin: "0 0 26px", fontSize: 12, color: "#94A3B8", lineHeight: 1.8 }}>
                                Queries?{" "}
                                <a href="mailto:support@internzlearn.com" style={{ color: "#2563EB", textDecoration: "none", fontWeight: 600 }}>
                                    support@internzlearn.com
                                </a>
                                {" "}or{" "}
                                <a href="tel:+919663415279" style={{ color: "#2563EB", textDecoration: "none", fontWeight: 600 }}>
                                    +91 96634 15279
                                </a>
                            </p>
                            {onClose && (
                                <button className="ait-btn-primary" onClick={onClose} style={{ margin: "0 auto" }}>
                                    Explore Programmes <IconArrow />
                                </button>
                            )}
                        </div>
                    ) : (
                        /* ══════════ FORM ══════════ */
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="ait-body">

                                {/* ─── STEP 1 ─── */}
                                {step === 1 && (
                                    <div className="ait-anim-r">

                                        {/* Programme highlights */}
                                        <div className="ait-hl-grid">
                                            <div className="ait-hl-card">
                                                <div className="ait-hl-icon blue"><IconCert /></div>
                                                <div>
                                                    <div className="ait-hl-title">4 Certifications</div>
                                                    <div className="ait-hl-desc">IBM SkillBuild &amp; IIT Bombay</div>
                                                </div>
                                            </div>
                                            <div className="ait-hl-card">
                                                <div className="ait-hl-icon slate"><IconUsers /></div>
                                                <div>
                                                    <div className="ait-hl-title">Offline Classes</div>
                                                    <div className="ait-hl-desc">Classroom-based learning</div>
                                                </div>
                                            </div>
                                            <div className="ait-hl-card">
                                                <div className="ait-hl-icon green"><IconProject /></div>
                                                <div>
                                                    <div className="ait-hl-title">Live Projects</div>
                                                    <div className="ait-hl-desc">Real-time assessments</div>
                                                </div>
                                            </div>
                                            <div className="ait-hl-card">
                                                <div className="ait-hl-icon amber"><IconClock /></div>
                                                <div>
                                                    <div className="ait-hl-title">April – July 2026</div>
                                                    <div className="ait-hl-desc">3-month structured curriculum</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Referral banner */}
                                        <div className="ait-referral">
                                            <div className="ait-referral-lbl">
                                                <IconTag /> Referral Code
                                            </div>
                                            <div className="ait-referral-code">{REFERRAL_CODE}</div>
                                            <div className="ait-referral-badge">30% Scholarship</div>
                                            <button type="button" className="ait-referral-btn" onClick={copyReferralCode}>
                                                <IconCopy />
                                                {codeCopied ? "Copied" : "Copy"}
                                            </button>
                                        </div>

                                        <div className="ait-section-sep">
                                            <div className="ait-section-sep-line" />
                                            <div className="ait-section-sep-label">Personal Information</div>
                                            <div className="ait-section-sep-line" />
                                        </div>

                                        {/* Name + Phone */}
                                        <div className="ait-grid2">
                                            <div>
                                                <label className="ait-label">Full Name <span>*</span></label>
                                                <input className={`ait-input${errors.name ? " err" : ""}`}
                                                    type="text" name="name" value={formData.name}
                                                    onChange={handleChange} placeholder="Your full name"
                                                    autoComplete="name"
                                                    onFocus={() => setFocusedField("name")}
                                                    onBlur={() => setFocusedField("")} />
                                                {errors.name && <p className="ait-err"><IconError />{errors.name}</p>}
                                            </div>
                                            <div>
                                                <label className="ait-label">Contact Number <span>*</span></label>
                                                <input className={`ait-input${errors.phone ? " err" : ""}`}
                                                    type="tel" name="phone" value={formData.phone}
                                                    onChange={handleChange} placeholder="10-digit mobile"
                                                    autoComplete="tel" maxLength={10}
                                                    onFocus={() => setFocusedField("phone")}
                                                    onBlur={() => setFocusedField("")} />
                                                {errors.phone && <p className="ait-err"><IconError />{errors.phone}</p>}
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="ait-field">
                                            <label className="ait-label">Email Address <span>*</span></label>
                                            <input className={`ait-input${errors.email ? " err" : ""}`}
                                                type="email" name="email" value={formData.email}
                                                onChange={handleChange} placeholder="yourname@college.edu"
                                                autoComplete="email"
                                                onFocus={() => setFocusedField("email")}
                                                onBlur={() => setFocusedField("")} />
                                            {errors.email && <p className="ait-err"><IconError />{errors.email}</p>}
                                        </div>

                                        {/* College */}
                                        <div className="ait-field" style={{ marginBottom: 0 }}>
                                            <label className="ait-label">College / Institution <span>*</span></label>
                                            <input className={`ait-input${errors.college ? " err" : ""}`}
                                                type="text" name="college" value={formData.college}
                                                onChange={handleChange}
                                                placeholder=""
                                                onFocus={() => setFocusedField("college")}
                                                onBlur={() => setFocusedField("")} />
                                            {errors.college && <p className="ait-err"><IconError />{errors.college}</p>}
                                        </div>
                                    </div>
                                )}

                                {/* ─── STEP 2 ─── */}
                                {step === 2 && (
                                    <div className="ait-anim-l">

                                        {/* Academic Year */}
                                        <div className="ait-field">
                                            <label className="ait-label">Academic Year <span>*</span></label>
                                            <div className="ait-year-row">
                                                {ACADEMIC_YEARS.map((yr) => (
                                                    <label key={yr}
                                                        className={`ait-year-card${formData.academicYear === yr ? " sel" : ""}${errors.academicYear && formData.academicYear !== yr ? " err-border" : ""}`}>
                                                        <input type="radio" name="academicYear" value={yr}
                                                            checked={formData.academicYear === yr}
                                                            onChange={handleChange}
                                                            style={{ display: "none" }} />
                                                        {yr}
                                                    </label>
                                                ))}
                                            </div>
                                            {errors.academicYear && <p className="ait-err"><IconError />{errors.academicYear}</p>}
                                        </div>

                                        {/* Branch */}
                                        <div className="ait-field">
                                            <label className="ait-label">Branch / Department <span>*</span></label>
                                            <input className={`ait-input${errors.branch ? " err" : ""}`}
                                                type="text" name="branch" value={formData.branch}
                                                onChange={handleChange}
                                                placeholder="e.g. Computer Science, ECE, Mechanical"
                                                onFocus={() => setFocusedField("branch")}
                                                onBlur={() => setFocusedField("")} />
                                            {errors.branch && <p className="ait-err"><IconError />{errors.branch}</p>}
                                        </div>

                                        {/* Domain */}
                                        <div className="ait-field">
                                            <label className="ait-label">Interested Domain <span>*</span></label>
                                            <div style={{ position: "relative" }} ref={domainRef}>
                                                <button type="button"
                                                    className={`ait-domain-btn${showDomainDropdown ? " open" : ""}${errors.domain ? " err" : ""}${!formData.domain ? " ph" : ""}`}
                                                    onClick={() => setShowDomainDropdown((v) => !v)}>
                                                    <span style={{ fontWeight: formData.domain ? 500 : 400 }}>
                                                        {formData.domain || "Select a domain"}
                                                    </span>
                                                    <span className="ait-domain-chevron">
                                                        <IconChevron open={showDomainDropdown} />
                                                    </span>
                                                </button>

                                                {showDomainDropdown && (
                                                    <div className="ait-dropdown">
                                                        <div className="ait-dropdown-search">
                                                            <input autoFocus placeholder="Search domain..."
                                                                value={domainSearch}
                                                                onChange={(e) => setDomainSearch(e.target.value)} />
                                                        </div>
                                                        <div className="ait-dropdown-list">
                                                            {filteredDomains.length === 0 ? (
                                                                <div style={{ padding: "14px 16px", fontSize: 13, color: "#94A3B8", textAlign: "center" }}>
                                                                    No domains found
                                                                </div>
                                                            ) : filteredDomains.map((d) => (
                                                                <div key={d}
                                                                    className={`ait-domain-item${formData.domain === d ? " sel" : ""}`}
                                                                    onClick={() => {
                                                                        setFormData((prev) => ({ ...prev, domain: d }));
                                                                        if (errors.domain) setErrors((prev) => ({ ...prev, domain: "" }));
                                                                        setShowDomainDropdown(false);
                                                                        setDomainSearch("");
                                                                    }}>
                                                                    <span>{d}</span>
                                                                    {formData.domain === d && (
                                                                        <span className="ait-domain-item-check"><IconCheck /></span>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            {errors.domain && <p className="ait-err"><IconError />{errors.domain}</p>}
                                        </div>

                                        {/* Language */}
                                        <div className="ait-field" style={{ marginBottom: 0 }}>
                                            <label className="ait-label">Preferred Language <span>*</span></label>
                                            <div className="ait-select-wrap">
                                                <select name="language" value={formData.language}
                                                    onChange={handleChange}
                                                    className={errors.language ? "err" : ""}>
                                                    <option value="" disabled>Select your preferred language</option>
                                                    {LANGUAGES.map((l) => (
                                                        <option key={l} value={l}>{l}</option>
                                                    ))}
                                                </select>
                                                <span className="ait-sel-icon">
                                                    <IconChevron open={false} />
                                                </span>
                                            </div>
                                            {errors.language && <p className="ait-err"><IconError />{errors.language}</p>}
                                        </div>

                                        {/* ── Class Mode ── */}
                                        <div className="ait-field" style={{ marginBottom: 0 }}>
                                            <label className="ait-label">Preferred Class Mode <span>*</span></label>
                                            <div className="ait-mode-row">
                                                {([
                                                    { value: "Offline", title: "Offline Classes", desc: "In-person, classroom-based sessions" },
                                                    { value: "Online",  title: "Online Classes",  desc: "Live virtual sessions, attend from anywhere" },
                                                ] as const).map((opt) => (
                                                    <label
                                                        key={opt.value}
                                                        className={`ait-mode-card${formData.classMode === opt.value ? " sel" : ""}${errors.classMode && formData.classMode !== opt.value ? " err-border" : ""}`}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="classMode"
                                                            value={opt.value}
                                                            checked={formData.classMode === opt.value}
                                                            onChange={handleChange}
                                                            style={{ display: "none" }}
                                                        />
                                                        <div className="ait-mode-radio">
                                                            <div className="ait-mode-radio-dot" />
                                                        </div>
                                                        <div>
                                                            <div className="ait-mode-title">{opt.title}</div>
                                                            <div className="ait-mode-desc">{opt.desc}</div>
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
                                            {errors.classMode && <p className="ait-err"><IconError />{errors.classMode}</p>}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Submit error */}
                            {submitError && (
                                <div className="ait-submit-err" style={{ marginTop: 16, marginBottom: 0 }}>
                                    {submitError}
                                </div>
                            )}

                            {/* Footer */}
                            <div className="ait-footer" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                                {step === 2 ? (
                                    <button type="button" onClick={handleBack} className="ait-btn-ghost">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                                        </svg>
                                        Back
                                    </button>
                                ) : <div />}

                                {step === 1 ? (
                                    <button type="button" onClick={handleNext} className="ait-btn-primary">
                                        Continue <IconArrow />
                                    </button>
                                ) : (
                                    <button type="submit" disabled={submitting} className="ait-btn-primary">
                                        {submitting ? (
                                            <><IconSpin /> Submitting</>
                                        ) : (
                                            <>Submit Application <IconArrow /></>
                                        )}
                                    </button>
                                )}
                            </div>

                            {/* Privacy */}
                            <div className="ait-privacy">
                                <div className="ait-privacy-box">
                                    <IconShield />
                                    <p>
                                        Your information is shared exclusively with InternzLearn, IBM SkillBuild &amp; IIT Bombay
                                        for this programme. We do not sell or share your data with third parties.
                                    </p>
                                </div>
                            </div>
                        </form>
                    )}

                </div>
            </div>
        </>
    );
}

// =============================================================================
// USAGE
//   import { useState } from "react";
//   import RegistrationForm from "./RegistrationForm";
//
//   export default function Page() {
//     const [open, setOpen] = useState(false);
//     return (
//       <>
//         <button onClick={() => setOpen(true)}>Register Now</button>
//         {open && <RegistrationForm onClose={() => setOpen(false)} />}
//       </>
//     );
//   }
//
// BODY SCROLL LOCK:
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [open]);
// =============================================================================