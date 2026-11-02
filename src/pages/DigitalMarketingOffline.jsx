import React from 'react';

const DigitalMarketingOffline = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-darkMainBg text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
                <div className="bg-darkCardBg p-8 rounded-2xl border border-darkBorder max-w-2xl w-full shadow-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue to-accentGreen">
                        Digital Marketing Offline
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Master Digital Marketing with our immersive offline program. Get hands-on training, industry mentorship, and 100% placement assistance.
                    </p>
                    <div className="inline-block bg-primaryBlue/10 text-primaryBlue px-6 py-3 rounded-full font-semibold border border-primaryBlue/20 animate-pulse">
                        Admissions Opening Soon
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        <div className="bg-darkMainBg p-4 rounded-lg border border-darkBorder">
                            <h3 className="font-bold text-white mb-1">Classroom Training</h3>
                            <p className="text-sm text-gray-400">Learn in a professional environment</p>
                        </div>
                        <div className="bg-darkMainBg p-4 rounded-lg border border-darkBorder">
                            <h3 className="font-bold text-white mb-1">Live Projects</h3>
                            <p className="text-sm text-gray-400">Work on real marketing campaigns</p>
                        </div>
                        <div className="bg-darkMainBg p-4 rounded-lg border border-darkBorder">
                            <h3 className="font-bold text-white mb-1">Certification</h3>
                            <p className="text-sm text-gray-400">Industry recognized credentials</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalMarketingOffline;
