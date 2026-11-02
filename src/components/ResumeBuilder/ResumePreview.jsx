import React from 'react';

/* ─────────────────────────────────────────────
   Shared style tokens — kept in sync with the
   print CSS injected inside handlePrint()
───────────────────────────────────────────── */
const S = {
    // Container
    wrap: {
        width: '210mm',
        minHeight: '297mm',
        padding: '12mm 16mm',
        background: 'white',
        color: '#1e293b', // slate-800
        fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontSize: '10pt',
        lineHeight: '1.4',
        boxSizing: 'border-box',
    },

    // Header section
    header: {
        textAlign: 'center',
        paddingBottom: '8pt',
        marginBottom: '10pt',
    },
    h1: {
        fontSize: '24pt',
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: '0.02em',
        lineHeight: '1.2',
        marginBottom: '4pt',
        color: '#0f172a', // slate-900
    },
    contactRow: {
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap',
        fontSize: '9pt',
        lineHeight: '1.4',
        color: '#475569', // slate-600
    },

    // Generic section
    section: {
        marginBottom: '10pt',
    },
    h2: {
        fontSize: '11pt',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: '#1d4ed8', // blue-700
        borderBottom: '2px solid #e2e8f0', // slate-200
        paddingBottom: '2pt',
        marginBottom: '6pt',
    },

    // Body text
    p: {
        fontSize: '9.5pt',
        lineHeight: '1.5',
        marginBottom: '3pt',
        color: '#334155', // slate-700
        textAlign: 'justify',
    },
    ul: {
        paddingLeft: '14pt',
        margin: '3pt 0 0 0',
        listStyleType: 'disc',
    },
    li: {
        fontSize: '9.5pt',
        lineHeight: '1.45',
        marginBottom: '2pt',
        color: '#334155', // slate-700
    },

    // Entry row (company / date)
    entryRow: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '10pt',
        color: '#0f172a', // slate-900
        marginBottom: '1pt',
    },
    bold: { fontWeight: '700' },
    roleItalic: { fontStyle: 'italic', color: '#1e293b', fontWeight: '500' },
    dateItalic: { fontStyle: 'italic', color: '#475569', fontSize: '9pt' },

    // Entry block gap
    entryBlock: { marginBottom: '8pt' },

    // Link
    a: { color: '#2563eb', textDecoration: 'none' }, // blue-600
};

const ResumePreview = ({ resume, template = 'modern' }) => {
    // Template Styles Override
    const tplS = { ...S };
    let headerStyle = { ...tplS.header };
    let h1Style = { ...tplS.h1 };
    let h2Style = { ...tplS.h2 };
    let contactRowStyle = { ...tplS.contactRow };

    if (template === 'professional') {
        h1Style = { ...h1Style, fontFamily: "'Times New Roman', serif", textTransform: 'none', color: '#000' };
        h2Style = { ...h2Style, fontFamily: "'Times New Roman', serif", color: '#000', borderBottom: '1px solid #000' };
        tplS.p = { ...tplS.p, fontFamily: "'Times New Roman', serif" };
        tplS.li = { ...tplS.li, fontFamily: "'Times New Roman', serif" };
        tplS.bold = { ...tplS.bold, fontFamily: "'Times New Roman', serif" };
        tplS.roleItalic = { ...tplS.roleItalic, fontFamily: "'Times New Roman', serif" };
        tplS.dateItalic = { ...tplS.dateItalic, fontFamily: "'Times New Roman', serif" };
    } else if (template === 'creative') {
        h1Style = { ...h1Style, color: '#4f46e5' }; // Indigo 600
        h2Style = { ...h2Style, color: '#4f46e5', borderBottom: '2px dashed #e0e7ff', paddingBottom: '4px' };
        headerStyle = { ...headerStyle, textAlign: 'left', borderLeft: '4px solid #4f46e5', paddingLeft: '16px', marginLeft: '-16px' };
        contactRowStyle = { ...contactRowStyle, justifyContent: 'flex-start' };
    }

    return (
        <div
            id="resume-preview"
            className={`shadow-2xl resume-preview-scale template-${template}`}
            style={tplS.wrap}
        >
            {/* ── Header ── */}
            <header style={headerStyle}>
                <h1 style={h1Style}>{resume.basicInfo.name || 'YOUR NAME'}</h1>
                <div style={contactRowStyle}>
                    {resume.basicInfo.email && <span>{resume.basicInfo.email}</span>}
                    {resume.basicInfo.phone && <span>| {resume.basicInfo.phone}</span>}
                    {resume.basicInfo.location && <span>| {resume.basicInfo.location}</span>}
                    {resume.basicInfo.linkedin && (
                        <span>
                            |{' '}
                            <a href={resume.basicInfo.linkedin} style={S.a}>
                                {resume.basicInfo.linkedin.replace(/^https?:\/\/(www\.)?/, '')}
                            </a>
                        </span>
                    )}
                    {resume.basicInfo.portfolio && (
                        <span>
                            |{' '}
                            <a href={resume.basicInfo.portfolio} style={S.a}>
                                {resume.basicInfo.portfolio.replace(/^https?:\/\/(www\.)?/, '')}
                            </a>
                        </span>
                    )}
                </div>
            </header>

            {/* ── Summary ── */}
            {resume.summary && (
                <section style={tplS.section}>
                    <h2 style={h2Style}>Summary</h2>
                    <p style={tplS.p}>{resume.summary}</p>
                </section>
            )}

            {/* ── Skills ── */}
            {resume.skills && resume.skills.length > 0 && (
                <section style={tplS.section}>
                    <h2 style={h2Style}>Technical Skills</h2>
                    <p style={tplS.p}>{resume.skills.join(' • ')}</p>
                </section>
            )}

            {/* ── Education ── */}
            {resume.education && resume.education.length > 0 && (
                <section style={tplS.section}>
                    <h2 style={h2Style}>Education</h2>
                    {resume.education.map((edu, i) => (
                        <div key={i} style={tplS.entryBlock}>
                            <div style={tplS.entryRow}>
                                <span style={tplS.bold}>{edu.school}</span>
                                <span style={tplS.dateItalic}>{edu.year}</span>
                            </div>
                            <div style={tplS.entryRow}>
                                <span style={tplS.roleItalic}>{edu.degree}</span>
                                {edu.grade && <span style={tplS.dateItalic}>{edu.grade}</span>}
                            </div>
                        </div>
                    ))}
                </section>
            )}

            {/* ── Experience ── */}
            {resume.experience && resume.experience.length > 0 && (
                <section style={tplS.section}>
                    <h2 style={h2Style}>Experience</h2>
                    {resume.experience.map((exp, i) => (
                        <div key={i} style={tplS.entryBlock}>
                            <div style={tplS.entryRow}>
                                <span style={tplS.bold}>{exp.company}</span>
                                <span style={tplS.dateItalic}>{exp.start}{exp.start && exp.end ? ' – ' : ''}{exp.end}</span>
                            </div>
                            <div style={tplS.entryRow}>
                                <span style={tplS.roleItalic}>{exp.role}</span>
                                <span style={{ ...tplS.dateItalic, fontSize: '9.5pt' }}>{exp.location}</span>
                            </div>
                            {exp.description && (
                                <ul style={tplS.ul}>
                                    {exp.description.split('\n').map((line, idx) =>
                                        line.trim() && (
                                            <li key={idx} style={tplS.li}>
                                                {line.replace(/^[•\-]\s*/, '')}
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                        </div>
                    ))}
                </section>
            )}

            {/* ── Projects ── */}
            {resume.projects && resume.projects.length > 0 && (
                <section style={tplS.section}>
                    <h2 style={h2Style}>Projects</h2>
                    {resume.projects.map((proj, i) => (
                        <div key={i} style={tplS.entryBlock}>
                            <div style={tplS.entryRow}>
                                <span style={tplS.bold}>{proj.name}</span>
                                {proj.link && (
                                    <a href={proj.link} style={{ ...tplS.a, ...tplS.dateItalic }}>
                                        {proj.link.replace(/^https?:\/\//, '')}
                                    </a>
                                )}
                            </div>
                            {proj.description && (
                                <ul style={tplS.ul}>
                                    {proj.description.split('\n').map((line, idx) =>
                                        line.trim() && (
                                            <li key={idx} style={tplS.li}>
                                                {line.replace(/^[•\-]\s*/, '')}
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                        </div>
                    ))}
                </section>
            )}

            {/* ── Certifications ── */}
            {resume.certifications && resume.certifications.length > 0 && (
                <section style={tplS.section}>
                    <h2 style={h2Style}>Certifications</h2>
                    <ul style={tplS.ul}>
                        {resume.certifications.map((cert, i) =>
                            cert.trim() && <li key={i} style={tplS.li}>{cert}</li>
                        )}
                    </ul>
                </section>
            )}
        </div>
    );
};

export default ResumePreview;
