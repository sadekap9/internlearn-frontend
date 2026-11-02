import React, { useState } from 'react';
import { SectionTitle } from '../FormComponents';
import { Plus, X, Zap } from 'lucide-react';

const Skills = ({ skills, onChange }) => {
    const [skillInput, setSkillInput] = useState('');

    const addSkill = () => {
        if (skillInput.trim()) {
            onChange([...skills, skillInput.trim()]);
            setSkillInput('');
        }
    };

    return (
        <div className="editor-section-inner">
            

            <div className="flex gap-2 mb-6">
                <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addSkill()}
                    placeholder="Add a skill (e.g. React.js)"
                    className="rbl-input flex-1"
                />
                <button onClick={addSkill} className="rbl-btn rbl-btn-secondary px-4">
                    <Plus size={18} />
                </button>
            </div>

            <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-tag group">
                        {skill}
                        <button
                            onClick={() => onChange(skills.filter((_, i) => i !== index))}
                            className="remove-btn opacity-60 group-hover:opacity-100"
                        >
                            <X size={14} />
                        </button>
                    </span>
                ))}
                {skills.length === 0 && (
                    <div className="text-sm text-text3 italic">No skills added yet.</div>
                )}
            </div>
        </div>
    );
};

export default Skills;
