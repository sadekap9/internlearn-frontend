import React from 'react';
import { SectionTitle, TextAreaGroup } from '../FormComponents';
import { FileText } from 'lucide-react';

const Summary = ({ summary, onChange, onAIGenerate }) => {
    return (
        <div className="editor-section-inner">
            
            <TextAreaGroup
                label="Summary"
                value={summary}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Briefly describe your professional background and key achievements..."
                maxLength={500}
                onAIGenerate={onAIGenerate}
            />
        </div>
    );
};

export default Summary;
