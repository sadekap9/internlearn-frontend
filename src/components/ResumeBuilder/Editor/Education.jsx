import React from 'react';
import { InputGroup } from '../FormComponents';
import { GraduationCap, Plus, Trash2 } from 'lucide-react';

const Education = ({ education, onChange }) => {
    const addEducation = () => {
        onChange([
            { school: '', degree: '', year: '', grade: '' },
            ...education
        ]);
    };

    const removeEducation = (index) => {
        onChange(education.filter((_, i) => i !== index));
    };

    const updateEducation = (index, field, value) => {
        const newEdu = [...education];
        newEdu[index] = { ...newEdu[index], [field]: value };
        onChange(newEdu);
    };

    return (
        <div className="editor-section-inner">
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <h3 className="rbl-card-title mb-0 border-0 pb-0">
                    <GraduationCap size={20} /> Education
                </h3>
                <button onClick={addEducation} className="rbl-btn rbl-btn-sm rbl-btn-secondary">
                    <Plus size={14} /> Add Education
                </button>
            </div>

            <div className="space-y-4">
                {education.map((edu, index) => (
                    <div key={index} className="list-item-card group">
                        <div className="list-item-actions">
                            <button onClick={() => removeEducation(index)} className="delete-btn" title="Delete"><Trash2 size={14} /></button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2">
                                <InputGroup label="School / University" value={edu.school} onChange={(e) => updateEducation(index, 'school', e.target.value)} placeholder="University Name" />
                            </div>
                            <InputGroup label="Degree" value={edu.degree} onChange={(e) => updateEducation(index, 'degree', e.target.value)} placeholder="B.Tech Computer Science" />
                            <div className="grid grid-cols-2 gap-4">
                                <InputGroup label="Year" value={edu.year} onChange={(e) => updateEducation(index, 'year', e.target.value)} placeholder="2020-2024" />
                                <InputGroup label="Grade / GPA" value={edu.grade} onChange={(e) => updateEducation(index, 'grade', e.target.value)} placeholder="8.5/10" />
                            </div>
                        </div>
                    </div>
                ))}
                {education.length === 0 && (
                    <div className="text-center py-6 text-gray-500 text-sm border border-dashed border-gray-700 rounded-lg">
                        No education history added.
                    </div>
                )}
            </div>
        </div>
    );
};
export default Education;
