import React from 'react';
import { InputGroup, SmartBulletEditor } from '../FormComponents';
import { Briefcase, Plus, Trash2, ArrowUp, ArrowDown } from 'lucide-react';

const Experience = ({ experience, onChange, onAIGenerate }) => {

    const addExperience = () => {
        onChange([
            { company: '', role: '', start: '', end: '', description: '', location: '' },
            ...experience
        ]);
    };

    const removeExperience = (index) => {
        onChange(experience.filter((_, i) => i !== index));
    };

    const updateExperience = (index, field, value) => {
        const newExp = [...experience];
        newExp[index] = { ...newExp[index], [field]: value };
        onChange(newExp);
    };

    const moveExperience = (index, direction) => {
        const newExp = [...experience];
        if (direction === 'up' && index > 0) {
            [newExp[index], newExp[index - 1]] = [newExp[index - 1], newExp[index]];
        } else if (direction === 'down' && index < newExp.length - 1) {
            [newExp[index], newExp[index + 1]] = [newExp[index + 1], newExp[index]];
        }
        onChange(newExp);
    };

    return (
        <div className="editor-section-inner">
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <h3 className="rbl-card-title mb-0 border-0 pb-0">
                    <Briefcase size={20} /> Experience
                </h3>
                <button onClick={addExperience} className="rbl-btn rbl-btn-sm rbl-btn-secondary">
                    <Plus size={14} /> Add Position
                </button>
            </div>

            <div className="space-y-4">
                {experience.map((exp, index) => (
                    <div key={index} className="list-item-card group">
                        <div className="list-item-actions">
                            <button onClick={() => moveExperience(index, 'up')} title="Move Up"><ArrowUp size={14} /></button>
                            <button onClick={() => moveExperience(index, 'down')} title="Move Down"><ArrowDown size={14} /></button>
                            <button onClick={() => removeExperience(index)} className="delete-btn" title="Delete"><Trash2 size={14} /></button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputGroup label="Company" value={exp.company} onChange={(e) => updateExperience(index, 'company', e.target.value)} placeholder="Company Name" />
                            <InputGroup label="Role" value={exp.role} onChange={(e) => updateExperience(index, 'role', e.target.value)} placeholder="Job Title" />
                            <InputGroup label="Location" value={exp.location} onChange={(e) => updateExperience(index, 'location', e.target.value)} placeholder="City, Country" />
                            <div className="flex gap-2">
                                <InputGroup label="Start" value={exp.start} onChange={(e) => updateExperience(index, 'start', e.target.value)} placeholder="Jan 2022" />
                                <InputGroup label="End" value={exp.end} onChange={(e) => updateExperience(index, 'end', e.target.value)} placeholder="Present" />
                            </div>
                            <div className="md:col-span-2">
                                <SmartBulletEditor
                                    label="Key Achievements"
                                    value={exp.description}
                                    onChange={(val) => updateExperience(index, 'description', val)}
                                    placeholder="• Led a team of 5 developers..."
                                    onAIGenerate={() => onAIGenerate(index)}
                                />
                            </div>
                        </div>
                    </div>
                ))}
                {experience.length === 0 && (
                    <div className="text-center py-8 text-gray-500 text-sm border border-dashed border-gray-700 rounded-lg">
                        No experience added. Click "Add Position" to start.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Experience;
