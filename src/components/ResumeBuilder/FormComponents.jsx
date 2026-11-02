import React from 'react';
import { Sparkles, Plus, Trash2 } from 'lucide-react';

export const SectionTitle = ({ children }) => (
    <h3 className="rbl-card-title">{children}</h3>
);

export const InputGroup = ({ label, name, value, onChange, placeholder, type = "text" }) => (
    <div className="input-group">
        <label>{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="rbl-input"
        />
    </div>
);

export const TextAreaGroup = ({ label, value, onChange, placeholder, maxLength, onAIGenerate }) => (
    <div className="input-group">
        <div className="flex justify-between items-center mb-1">
            <label>{label}</label>
            <div className="flex items-center gap-2">
                {onAIGenerate && (
                    <button
                        onClick={onAIGenerate}
                        className="ai-generate-btn"
                        title="Generate with AI"
                    >
                        <Sparkles size={14} /> AI Assist
                    </button>
                )}
                {maxLength && <span className="text-xs text-textSecondary">{value.length}/{maxLength}</span>}
            </div>
        </div>
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            maxLength={maxLength}
            rows={4}
            className="rbl-textarea"
        />
    </div>
);

export const SmartBulletEditor = ({ label, value, onChange, placeholder, onAIGenerate }) => {
    // Value logic remains the same
    const handleKeyDown = (e, index, lines) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const newLines = [...lines];
            newLines.splice(index + 1, 0, ''); // Insert empty string after current
            onChange(newLines.join('\n'));
            setTimeout(() => {
                const inputs = document.querySelectorAll(`[data-bullet-id="${label}"]`);
                if (inputs[index + 1]) inputs[index + 1].focus();
            }, 0);
        } else if (e.key === 'Backspace' && lines[index] === '' && lines.length > 1) {
            e.preventDefault();
            const newLines = lines.filter((_, i) => i !== index);
            onChange(newLines.join('\n'));
            setTimeout(() => {
                const inputs = document.querySelectorAll(`[data-bullet-id="${label}"]`);
                if (inputs[index - 1]) inputs[index - 1].focus();
            }, 0);
        } else if (e.key === 'Backspace' && lines.length > 1 && lines[index] !== '') {
            // Optional: Merge with previous line if backspace at start? 
            // For simplicity, keep current behavior unless requested.
        }
    };

    const handleChange = (val, index, lines) => {
        const newLines = [...lines];
        newLines[index] = val;
        onChange(newLines.join('\n'));
    };

    const lines = value ? value.split('\n') : [''];

    return (
        <div className="smart-bullet-editor input-group">
            <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-textSecondary">{label}</label>
                {onAIGenerate && (
                    <button
                        onClick={onAIGenerate}
                        className="ai-generate-btn"
                        title="Generate with AI"
                    >
                        <Sparkles size={14} /> AI Assist
                    </button>
                )}
            </div>

            <div className="space-y-2">
                {lines.map((line, index) => (
                    <div key={index} className="flex items-start gap-2">
                        <span className="text-primaryBlue mt-3">•</span>
                        <input
                            data-bullet-id={label}
                            type="text"
                            value={line}
                            onChange={(e) => handleChange(e.target.value, index, lines)}
                            onKeyDown={(e) => handleKeyDown(e, index, lines)}
                            placeholder={index === 0 ? placeholder : "Type and press Enter..."}
                            className="rbl-input"
                        />
                    </div>
                ))}
            </div>
            <div className="text-xs text-textSecondary mt-2 text-right">Press <b>Enter</b> for new line, <b>Backspace</b> to delete.</div>
        </div>
    );
};
