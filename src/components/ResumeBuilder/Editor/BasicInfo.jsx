import React from 'react';
import { SectionTitle, InputGroup } from '../FormComponents';
import { User } from 'lucide-react';

const BasicInfo = ({ basicInfo, onChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange({ ...basicInfo, [name]: value });
    };

    return (
        <div className="editor-section-inner">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputGroup label="Full Name" name="name" value={basicInfo.name} onChange={handleChange} placeholder="John Doe" />
                <InputGroup label="Job Title" name="title" value={basicInfo.title} onChange={handleChange} placeholder="Software Engineer" />
                <InputGroup label="Phone" name="phone" value={basicInfo.phone} onChange={handleChange} placeholder="+1 234 567 890" />
                <InputGroup label="Email" name="email" value={basicInfo.email} onChange={handleChange} placeholder="john@example.com" />
                <InputGroup label="Location" name="location" value={basicInfo.location} onChange={handleChange} placeholder="New York, USA" />
                <InputGroup label="LinkedIn (URL)" name="linkedin" value={basicInfo.linkedin} onChange={handleChange} placeholder="linkedin.com/in/johndoe" />
                <div className="md:col-span-2">
                    <InputGroup label="Portfolio / Website" name="portfolio" value={basicInfo.portfolio} onChange={handleChange} placeholder="johndoe.com" />
                </div>
            </div>
        </div>
    );
};

export default BasicInfo;
