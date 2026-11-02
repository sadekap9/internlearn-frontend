import React from 'react';
import { InputGroup, SmartBulletEditor } from '../FormComponents';
import { FolderGit2, Plus, Trash2 } from 'lucide-react';

const Projects = ({ projects, onChange, onAIGenerate }) => {
    const addProject = () => {
        onChange([
            { name: '', description: '', link: '' },
            ...projects
        ]);
    };

    const removeProject = (index) => {
        onChange(projects.filter((_, i) => i !== index));
    };

    const updateProject = (index, field, value) => {
        const newProj = [...projects];
        newProj[index] = { ...newProj[index], [field]: value };
        onChange(newProj);
    };

    return (
        <div className="editor-section-inner">
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <h3 className="rbl-card-title mb-0 border-0 pb-0">
                    <FolderGit2 size={20} /> Projects
                </h3>
                <button onClick={addProject} className="rbl-btn rbl-btn-sm rbl-btn-secondary">
                    <Plus size={14} /> Add Project
                </button>
            </div>

            <div className="space-y-4">
                {projects.map((proj, index) => (
                    <div key={index} className="list-item-card group">
                        <div className="list-item-actions">
                            <button onClick={() => removeProject(index)} className="delete-btn" title="Delete"><Trash2 size={14} /></button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputGroup label="Project Name" value={proj.name} onChange={(e) => updateProject(index, 'name', e.target.value)} placeholder="E-commerce App" />
                            <InputGroup label="Link / Tech Stack" value={proj.link} onChange={(e) => updateProject(index, 'link', e.target.value)} placeholder="github.com/..." />
                            <div className="md:col-span-2">
                                <SmartBulletEditor
                                    label="Description"
                                    value={proj.description}
                                    onChange={(val) => updateProject(index, 'description', val)}
                                    placeholder="• Built a full-stack application using MERN..."
                                    onAIGenerate={() => onAIGenerate(index)}
                                />
                            </div>
                        </div>
                    </div>
                ))}
                {projects.length === 0 && (
                    <div className="text-center py-6 text-gray-500 text-sm border border-dashed border-gray-700 rounded-lg">
                        No projects added.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
