import React from 'react';
import { Plus, Trash2, Award } from 'lucide-react';

const Certifications = ({ certifications, onChange }) => {
    const addCertification = () => {
        onChange([...certifications, '']);
    };

    const removeCertification = (index) => {
        onChange(certifications.filter((_, i) => i !== index));
    };

    const updateCertification = (index, value) => {
        const newCerts = [...certifications];
        newCerts[index] = value;
        onChange(newCerts);
    };

    return (
        <div className="editor-section-inner">
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <h3 className="rbl-card-title mb-0 border-0 pb-0">
                    <Award size={20} /> Certifications
                </h3>
                <button onClick={addCertification} className="rbl-btn rbl-btn-sm rbl-btn-secondary">
                    <Plus size={14} /> Add
                </button>
            </div>

            <div className="space-y-3">
                {certifications.map((cert, index) => (
                    <div key={index} className="flex gap-3 items-center group">
                        <input
                            type="text"
                            value={cert}
                            onChange={(e) => updateCertification(index, e.target.value)}
                            className="rbl-input"
                            placeholder="Certification Name (e.g. AWS Certified Solutions Architect)"
                        />
                        <button
                            onClick={() => removeCertification(index)}
                            className="rbl-btn rbl-btn-sm rbl-btn-ghost text-red-400 hover:bg-red-500/10 opacity-60 group-hover:opacity-100 transition-opacity"
                            title="Remove"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                ))}
                {certifications.length === 0 && (
                    <div className="text-center py-6 text-gray-500 text-sm border border-dashed border-gray-700 rounded-lg">
                        No certifications added yet.
                    </div>
                )}
            </div>
        </div>
    );
};
export default Certifications;
