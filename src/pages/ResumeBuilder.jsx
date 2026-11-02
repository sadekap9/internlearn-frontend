import React, { useState, useEffect } from 'react';
import '../components/ResumeBuilder/ResumeBuilder.css';

// Components
import ScoreWidget from '../components/ResumeBuilder/ScoreWidget';
import ResumePreview from '../components/ResumeBuilder/ResumePreview';
import BasicInfo from '../components/ResumeBuilder/Editor/BasicInfo';
import Summary from '../components/ResumeBuilder/Editor/Summary';
import Skills from '../components/ResumeBuilder/Editor/Skills';
import Experience from '../components/ResumeBuilder/Editor/Experience';
import Education from '../components/ResumeBuilder/Editor/Education';
import Projects from '../components/ResumeBuilder/Editor/Projects';
import Certifications from '../components/ResumeBuilder/Editor/Certifications';

// Modals
import LoadingOverlay from '../components/ResumeBuilder/Modals/LoadingOverlay';
import APIKeyModal from '../components/ResumeBuilder/Modals/APIKeyModal';
import ResumeLandingPage from '../components/ResumeBuilder/Landing/ResumeLandingPage';
import { Download, Trash2, ChevronRight, Briefcase, User, FileText, Code, GraduationCap, FolderKey, Award } from 'lucide-react';
import { openRazorpayCheckout } from '../utils/razorpay';
import { useNavigate } from 'react-router-dom';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const SectionHeader = ({ title, icon: IconName }) => {
  const IconMap = { User, FileText, Code, Briefcase, GraduationCap, FolderKey, Award };
  const Icon = IconMap[IconName];
  return (
    <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
      {Icon && <Icon size={20} className="text-blue-400" />}
      {title}
    </h3>
  );
};
const ResumeBuilder = () => {
  const navigate = useNavigate();

  // --- Initial State ---
  const initialState = {
    basicInfo: { name: '', title: '', phone: '', email: '', location: '', linkedin: '', portfolio: '' },
    summary: '',
    skills: [],
    experience: [],
    education: [],
    projects: [],
    certifications: [],
  };

  // --- State Management ---
  const [resume, setResume] = useState(initialState);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const templates = [
    { id: 'professional', name: 'Professional ATS', desc: 'Classic structural layout best for traditional ATS systems.' },
    { id: 'modern', name: 'Modern', desc: 'Slightly stylized but still ATS-friendly. Clean and elegant.' },
    { id: 'creative', name: 'Creative', desc: 'Bold headings and color accents. Standard layout.' }
  ];

  // --- Payment & Plan State ---
  const [isPaid, setIsPaid] = useState(false);
  const [isPremiumPaid, setIsPremiumPaid] = useState(false);
  const [isPlacementPaid, setIsPlacementPaid] = useState(false);
  const [showBuilder, setShowBuilder] = useState(false);
  const [activePlan, setActivePlan] = useState('basic'); // 'basic' | 'premium' | 'placement'

  // Load from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('internz_resume_data');
    if (saved) {
      try { setResume(JSON.parse(saved)); } catch (e) { }
    }
    const savedTemplate = localStorage.getItem('internz_resume_template');
    if (savedTemplate) setSelectedTemplate(savedTemplate);

    const paid = localStorage.getItem('internz_resume_paid') === 'true';
    const premium = localStorage.getItem('internz_resume_premium') === 'true';
    const placement = localStorage.getItem('internz_resume_placement') === 'true';

    if (paid) setIsPaid(true);
    if (premium) { setIsPremiumPaid(true); setIsPaid(true); setActivePlan('premium'); }
    if (placement) { setIsPlacementPaid(true); setIsPremiumPaid(true); setIsPaid(true); setActivePlan('placement'); }

    // Only skip landing page if user has ACTUALLY PAID (not just selected a plan)
    // Landing page always shows first on fresh visit / navbar click
    if (paid || premium || placement) setShowBuilder(true);

    setIsLoaded(true);
  }, []);

  // Save to LocalStorage on change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('internz_resume_data', JSON.stringify(resume));
      localStorage.setItem('internz_resume_template', selectedTemplate);
      localStorage.setItem('internz_resume_active_plan', activePlan);
    }
  }, [resume, selectedTemplate, activePlan, isLoaded]);

  const [userApiKey, setUserApiKey] = useState('');
  const [showKeyPrompt, setShowKeyPrompt] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // --- Plan Selection from Landing Page ---
  // Basic & AI: Enter builder FREE Â— pay only at download time
  // Placement: Pay upfront ? enrollment form
  const handleSelectPlan = (plan) => {
    if (plan.id === 'basic') {
      // Free entry Â— payment deferred to download
      setActivePlan('basic');
      setShowBuilder(true);
    } else if (plan.id === 'premium') {
      // Free entry with AI features visible Â— payment deferred to download / AI use
      setActivePlan('premium');
      setShowBuilder(true);
    } else if (plan.id === 'placement') {
      // Pay upfront immediately
      openRazorpayCheckout({
        amountRupees: plan.price,
        name: 'InternzLearn',
        description: 'Placement Mastery Pack Â– ATS Resume Builder',
        onSuccess: (response) => {
          const params = new URLSearchParams({
            plan: 'Placement Mastery Pack',
            amt: plan.price,
            pid: response?.razorpay_payment_id || '',
          });
          navigate(`/resume-enroll?${params.toString()}`);
        },
        onError: () => { },
      });
    }
  };

  // --- AI Logic ---
  const generateAIContent = async (prompt, onSuccess) => {
    setIsGenerating(true);
    const apiKey = userApiKey || GROQ_API_KEY;
    try {
      const response = await fetch(`https://api.groq.com/openai/v1/chat/completions`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKey}` },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          temperature: 0.7,
          messages: [
            { role: "system", content: "You are a professional resume writer specific for ATS optimization. Provide only the requested text without markdown formatting such as ** or ##. Do not provide conversational filler or intros." },
            { role: "user", content: prompt }
          ]
        })
      });
      const data = await response.json();
      if (!response.ok || data.error) {
        const status = response.status;
        const msg = data.error?.message;
        if (status === 429 || status === 403 || status === 400 || status === 401 || msg?.toLowerCase().includes("quota") || msg?.toLowerCase().includes("rate") || msg?.toLowerCase().includes("api key")) {
          setShowKeyPrompt(true); return;
        }
        throw new Error(msg || `API Error ${status}`);
      }
      if (data.choices?.[0]?.message?.content) {
        let content = data.choices[0].message.content.trim();
        if (content.startsWith('"') && content.endsWith('"')) content = content.slice(1, -1);
        onSuccess(content);
      }
    } catch (error) {
      setShowKeyPrompt(true);
    } finally {
      setIsGenerating(false);
    }
  };

  // AI features: charge for premium plan at first use if not yet paid
  const checkPremiumAccess = (callback) => {
    if (isPremiumPaid) {
      // Already paid Â— allow immediately
      callback();
    } else if (activePlan === 'premium' || activePlan === 'placement') {
      // User chose AI plan but hasn't paid yet Â— charge now
      openRazorpayCheckout({
        amountRupees: 99,
        name: 'InternzLearn',
        description: 'ATS Resume Builder Â– AI Assistant Plan',
        onSuccess: () => {
          setIsPaid(true);
          setIsPremiumPaid(true);
          localStorage.setItem('internz_resume_paid', 'true');
          localStorage.setItem('internz_resume_premium', 'true');
          callback();
        },
        onError: () => { },
      });
    } else {
      alert('AI features require the AI Resume Assistant plan (?99). Go back and select that plan.');
    }
  };

  const handleAISummary = () => checkPremiumAccess(() => {
    const prompt = `Write a professional resume summary for a ${resume.basicInfo.title || 'professional'} named ${resume.basicInfo.name || 'Candidate'}. ${resume.skills.length > 0 ? `Key skills: ${resume.skills.join(', ')}.` : ''} Keep it professional, concise and under 400 characters.`;
    generateAIContent(prompt, (content) => setResume(prev => ({ ...prev, summary: content })));
  });

  const handleAIExperience = (index) => checkPremiumAccess(() => {
    const exp = resume.experience[index];
    const prompt = `Write 3-4 forceful, metric-driven bullet points for a resume. Role: ${exp.role || 'Employee'}, Company: ${exp.company || 'Company'}. ${resume.skills.length > 0 ? `Incorporate skills: ${resume.skills.join(', ')}.` : ''} Start EACH bullet with a strong action verb. Include metrics if possible. Do NOT include any introductory or concluding text, just the bullet points separated by newlines.`;
    generateAIContent(prompt, (content) => {
      let formatted = content.split('\n').map(l => l.trim().replace(/^[-Â•*]\s*/, '')).filter(l => l.length > 0).join('\n');
      const newExp = [...resume.experience];
      newExp[index] = { ...newExp[index], description: formatted };
      setResume(prev => ({ ...prev, experience: newExp }));
    });
  });

  const handleAIProject = (index) => checkPremiumAccess(() => {
    const proj = resume.projects[index];
    const prompt = `Write a concise, impressive description for a tech project named "${proj.name || 'Project'}". ${proj.link ? `Context: ${proj.link}` : ''}. ${resume.skills.length > 0 ? `Tech stack: ${resume.skills.join(', ')}.` : ''} Format as 2-3 metric-driven bullet points. Start EACH bullet with a strong action verb. Focus on what was built, your contribution, and the outcome. Do NOT include any introductory or concluding text, just the bullet points separated by newlines.`;
    generateAIContent(prompt, (content) => {
      let formatted = content.split('\n').map(l => l.trim().replace(/^[-Â•*]\s*/, '')).filter(l => l.length > 0).join('\n');
      const newProjs = [...resume.projects];
      newProjs[index] = { ...newProjs[index], description: formatted };
      setResume(prev => ({ ...prev, projects: newProjs }));
    });
  });

  // --- Score Calculation ---
  const calculateScore = () => {
    let score = 0;
    const weights = { basicInfo: 15, summary: 10, skills: 15, experience: 25, education: 15, projects: 15, certifications: 5 };
    const info = resume.basicInfo;
    if (info.name) score += 3;
    if (info.title) score += 3;
    if (info.phone || info.email) score += 3;
    if (info.location) score += 3;
    if (info.linkedin || info.portfolio) score += 3;
    if (resume.summary.length > 50) score += weights.summary;
    if (resume.skills.length >= 5) score += weights.skills;
    else if (resume.skills.length > 0) score += (weights.skills / 5) * resume.skills.length;
    if (resume.experience.length >= 2) score += weights.experience;
    else if (resume.experience.length === 1) score += weights.experience / 2;
    if (resume.education.length >= 1) score += weights.education;
    if (resume.projects.length >= 2) score += weights.projects;
    else if (resume.projects.length === 1) score += weights.projects / 2;
    if (resume.certifications.length > 0) score += weights.certifications;
    return Math.min(100, Math.round(score));
  };
  const score = calculateScore();

  const resetResume = () => {
    if (window.confirm("Are you sure you want to clear your resume? This cannot be undone.")) {
      setResume(initialState);
      localStorage.removeItem('internz_resume_data');
    }
  };

  const handlePrint = () => {
    const resumeEl = document.getElementById('resume-preview');
    if (!resumeEl) return;
    const printWindow = window.open('', '_blank', 'width=900,height=700');
    // Set @page margin to 0 to remove browser headers/footers (date, URL)
    // We use a wrapping <table> with <thead> and <tfoot> to repeat the top/bottom 15mm margin on *every* page!
    printWindow.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title></title><script src="https://cdn.tailwindcss.com"><\/script><style>
      @page { size: A4; margin: 0; }
      * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; margin: 0; padding: 0; }
      html, body { background: white; font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif; }
      #resume-preview {
        width: 210mm !important;
        min-height: 297mm !important;
        height: max-content !important;
        margin: 0 auto !important;
        background: white !important;
        box-shadow: none !important;
        transform: none !important;
        padding: 0 16mm !important; /* vertical gap is handled by the table headers now */
      }
      section { page-break-inside: avoid; break-inside: avoid; }
      h2 { page-break-after: avoid; break-after: avoid; }
      a { color: black; text-decoration: none; }
      table.print-wrapper { width: 100%; border-spacing: 0; border-collapse: collapse; }
      table.print-wrapper th, table.print-wrapper td { padding: 0; margin: 0; border: none; background: white; }
      @media print { html, body { width: 210mm; } }
    </style></head><body>
      <table class="print-wrapper">
        <thead><tr><td><div style="height: 15mm;"></div></td></tr></thead>
        <tbody><tr><td>
          ${resumeEl.outerHTML}
        </td></tr></tbody>
        <tfoot><tr><td><div style="height: 15mm;"></div></td></tr></tfoot>
      </table>
    </body></html>`);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => { printWindow.print(); printWindow.close(); }, 1500);
  };

  const handleDownloadClick = () => {
    if (isPaid) {
      handlePrint();
    } else if (activePlan === 'basic') {
      openRazorpayCheckout({
        amountRupees: 9,
        name: 'InternzLearn',
        description: 'Basic Resume Download',
        prefill: {
          name: resume.basicInfo.name || '',
          email: resume.basicInfo.email || '',
          phone: resume.basicInfo.phone || '',
        },
        onSuccess: () => {
          setIsPaid(true);
          localStorage.setItem('internz_resume_paid', 'true');
          setTimeout(() => handlePrint(), 500);
        },
        onError: () => { },
      });
    } else if (activePlan === 'premium') {
      openRazorpayCheckout({
        amountRupees: 99,
        name: 'InternzLearn',
        description: 'ATS Resume Builder Â– AI Assistant Plan',
        prefill: {
          name: resume.basicInfo.name || '',
          email: resume.basicInfo.email || '',
          phone: resume.basicInfo.phone || '',
        },
        onSuccess: () => {
          setIsPaid(true);
          setIsPremiumPaid(true);
          localStorage.setItem('internz_resume_paid', 'true');
          localStorage.setItem('internz_resume_premium', 'true');
          setTimeout(() => handlePrint(), 500);
        },
        onError: () => { },
      });
    } else {
      setShowBuilder(false);
    }
  };

  // -- LANDING PAGE (first thing user sees) -------------------------
  if (!showBuilder) {
    return (
      <ResumeLandingPage
        onSelectPlan={handleSelectPlan}
        onUnlockPlan={(planId) => {
          if (planId === 'basic') { setActivePlan('basic'); }
          if (planId === 'premium') { setActivePlan('premium'); }
          if (planId === 'placement') { setActivePlan('placement'); setIsPaid(true); setIsPremiumPaid(true); setIsPlacementPaid(true); localStorage.setItem('internz_resume_placement', 'true'); localStorage.setItem('internz_resume_premium', 'true'); localStorage.setItem('internz_resume_paid', 'true'); }
          setShowBuilder(true);
        }}
      />
    );
  }

  // -- BUILDER -------------------------------------------------------
  return (
    <>
      {isGenerating && <LoadingOverlay />}
      {showKeyPrompt && <APIKeyModal onClose={() => setShowKeyPrompt(false)} onSave={(key) => { setUserApiKey(key); setShowKeyPrompt(false); }} />}

      <div className="rbl-wrap">
        <div className="orbs fixed inset-0 z-[-1] pointer-events-none">
          <div className="orb-1"></div>
          <div className="orb-2"></div>
        </div>

        <header className="rbl-header hide-on-print">
          <div className="flex flex-col">
            <h1 className="rbl-title">Resume Builder</h1>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 w-full sm:w-auto mt-4 sm:mt-0">
            <div className="bg-white/5 border border-white/10 rounded-xl p-2 px-3 flex items-center gap-2">
              <span className="text-sm text-gray-300 hidden sm:inline">Template:</span>
              <select 
                value={selectedTemplate} 
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="bg-transparent text-white font-bold outline-none cursor-pointer text-sm font-sans"
              >
                {templates.map(tpl => <option key={tpl.id} value={tpl.id} className="text-gray-900">{tpl.name}</option>)}
              </select>
            </div>
            <ScoreWidget score={score} />
            <button onClick={handleDownloadClick} className="rbl-btn rbl-btn-primary px-4 py-2 text-sm">
              <Download size={16} /> <span className="hidden sm:inline">Download</span>
            </button>
            <button
                onClick={() => setShowBuilder(false)}
                className="text-xs text-red-300 hover:text-white border border-red-500/30 hover:border-red-500 bg-red-500/10 px-3 py-2.5 rounded-xl transition-all font-bold"
            >
               Exit
            </button>
          </div>
        </header>

        {isPlacementPaid && (
            <div className="bg-amber-500/10 border border-amber-500/20 p-6 rounded-2xl w-full mb-6 shadow-lg shadow-amber-500/5 flex flex-col md:flex-row justify-between items-center hide-on-print gap-4">
                <div>
                  <h3 className="text-xl font-bold text-amber-500 mb-2 flex items-center gap-2">
                      <Briefcase size={20} /> Placement Mastery Unlocked
                  </h3>
                  <p className="text-gray-300 text-sm">
                      Access your self-paced placement mastery course and schedule your 1-on-1 profile review session below.
                  </p>
                </div>
                <button
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-4 py-3 md:py-2 rounded-xl font-bold shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 w-full md:w-auto whitespace-nowrap"
                  onClick={() => alert('Opening Placement Dashboard...')}
                >
                  Access Dashboard <ChevronRight size={18} />
                </button>
            </div>
        )}

        <div className="rbl-grid relative z-10 hide-on-print">
          
          {/* Left Column: Form Sections */}
          <div className="editor-col custom-scrollbar">
            
            <div className="flex justify-between items-center mb-4 px-2">
                <span className="text-gray-300 text-sm font-medium">Fill in your details to update the preview.</span>
                <button onClick={resetResume} className="text-sm text-red-400 hover:text-red-300 flex items-center gap-1 font-bold bg-red-500/10 px-3 py-1.5 rounded-lg transition-all hover:bg-red-500/20 group">
                  <Trash2 size={14} className="group-hover:rotate-12 transition-transform" /> Reset Data
                </button>
            </div>

            <div className="rbl-card p-6">
                <SectionHeader title="Basic Info" icon="User" />
                <BasicInfo basicInfo={resume.basicInfo} onChange={(v) => setResume(p => ({ ...p, basicInfo: v }))} />
            </div>

            <div className="rbl-card mt-4 p-6">
                <SectionHeader title="Professional Summary" icon="FileText" />
                <Summary summary={resume.summary} onChange={(v) => setResume(p => ({ ...p, summary: v }))} onAIGenerate={handleAISummary} />
            </div>

            <div className="rbl-card mt-4 p-6">
                <SectionHeader title="Skills" icon="Code" />
                <Skills skills={resume.skills} onChange={(v) => setResume(p => ({ ...p, skills: v }))} />
            </div>

            <div className="rbl-card mt-4 p-6">
                <SectionHeader title="Experience" icon="Briefcase" />
                <Experience experience={resume.experience} onChange={(v) => setResume(p => ({ ...p, experience: v }))} onAIGenerate={handleAIExperience} />
            </div>

            <div className="rbl-card mt-4 p-6">
                <SectionHeader title="Education" icon="GraduationCap" />
                <Education education={resume.education} onChange={(v) => setResume(p => ({ ...p, education: v }))} />
            </div>

            <div className="rbl-card mt-4 p-6">
                <SectionHeader title="Projects" icon="FolderKey" />
                <Projects projects={resume.projects} onChange={(v) => setResume(p => ({ ...p, projects: v }))} onAIGenerate={handleAIProject} />
            </div>

            <div className="rbl-card mt-4 p-6">
                <SectionHeader title="Certifications" icon="Award" />
                <Certifications certifications={resume.certifications} onChange={(v) => setResume(p => ({ ...p, certifications: v }))} />
            </div>
            
            <div className="flex flex-col items-center gap-2 pt-4 pb-8">
              {(!isPaid && activePlan === 'basic') && (
                <p className="text-xs text-gray-400 font-medium bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-700/50 text-center w-full max-w-sm">
                  * A one-time fee of â‚¹9 will be charged to download.
                </p>
              )}
              {(!isPaid && activePlan === 'premium') && (
                <p className="text-xs text-amber-400/80 font-medium bg-amber-500/10 px-4 py-2 rounded-lg border border-amber-500/20 text-center w-full max-w-sm">
                  * A one-time fee of â‚¹99 will be charged to download.
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Live Preview */}
          <div className="preview-col lg:flex justify-center sticky top-[120px] h-fit max-h-[calc(100vh-180px)] overflow-y-auto custom-scrollbar">
            <div className="preview-panel">
              <div className="resume-preview-scale">
                 <ResumePreview resume={resume} template={selectedTemplate} />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ResumeBuilder;
