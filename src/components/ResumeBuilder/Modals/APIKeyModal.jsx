import React, { useState } from 'react';

const APIKeyModal = ({ onClose, onSave }) => {
    const [key, setKey] = useState('');

    return (
        <div className="fixed inset-0 bg-black/80 z-[10001] flex items-center justify-center backdrop-blur-sm px-4">
            <div className="bg-darkCardBg border border-darkBorder p-6 rounded-xl w-full max-w-md shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-2">Groq API Key Required</h3>
                <p className="text-sm text-gray-400 mb-4">
                    The system's shared API key has exceeded its usage limit. To continue using AI features, please enter your own free Groq API Key (get one at console.groq.com).
                </p>
                <input
                    type="password"
                    placeholder="gsk_..."
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    className="w-full bg-darkMainBg border border-darkBorder rounded-lg px-3 py-2 text-white mb-4 focus:border-primaryBlue outline-none"
                />
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-400 hover:text-white"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onSave(key)}
                        className="px-4 py-2 bg-primaryBlue text-white rounded-lg hover:bg-opacity-90"
                    >
                        Save Key
                    </button>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                    Your key is only stored in memory and never sent to our servers.
                </p>
            </div>
        </div>
    );
};
export default APIKeyModal;
