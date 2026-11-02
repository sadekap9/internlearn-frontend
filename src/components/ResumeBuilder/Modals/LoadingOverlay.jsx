import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingOverlay = ({ message = "Generative AI is working..." }) => (
    <div className="fixed inset-0 bg-black/50 z-[10000] flex items-center justify-center backdrop-blur-sm">
        <div className="bg-darkCardBg border border-darkBorder p-6 rounded-xl flex flex-col items-center gap-4 text-white">
            <Loader2 className="animate-spin text-primaryBlue" size={32} />
            <p>{message}</p>
        </div>
    </div>
);
export default LoadingOverlay;
