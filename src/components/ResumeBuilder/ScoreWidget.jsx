import React from 'react';

const ScoreWidget = ({ score }) => {
    return (
        <div className="bg-darkCardBg border border-darkBorder px-4 py-2 rounded-lg flex items-center gap-3 w-full md:w-auto justify-center">
            <div className="text-sm text-textSecondary font-semibold">Resume Score</div>
            <div className="w-32 h-2 bg-darkMainBg rounded-full overflow-hidden">
                <div
                    className={`h-full transition-all duration-500 ${score < 50 ? 'bg-red-500' : score < 80 ? 'bg-yellow-500' : 'bg-green-500'}`}
                    style={{ width: `${score}%` }}
                />
            </div>
            <div className={`font-bold ${score < 50 ? 'text-red-500' : score < 80 ? 'text-yellow-500' : 'text-green-500'}`}>{score}/100</div>
        </div>
    );
};
export default ScoreWidget;
