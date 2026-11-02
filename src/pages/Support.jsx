import React from 'react';
import { MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

const Support = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-darkMainBg text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue to-accentGreen">
                    Support Center
                </h1>

                <p className="text-xl text-gray-300 mb-12">
                    We're here to help! Choose how you'd like to get in touch with our team.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Email Support */}
                    <div className="bg-darkCardBg p-8 rounded-2xl border border-darkBorder hover:border-primaryBlue/50 transition-all duration-300">
                        <Mail className="w-10 h-10 text-primaryBlue mb-6" />
                        <h2 className="text-2xl font-bold mb-2">Email Support</h2>
                        <p className="text-gray-400 mb-6">
                            For general inquiries, course details, and partnership opportunities.
                        </p>
                        <a href="mailto:training@internzlearn.com" className="text-white font-semibold hover:text-primaryBlue transition-colors">
                            training@internzlearn.com
                        </a>
                    </div>

                    {/* Chat Support Mock */}
                    <div className="bg-darkCardBg p-8 rounded-2xl border border-darkBorder hover:border-accentGreen/50 transition-all duration-300">
                        <MessageSquare className="w-10 h-10 text-accentGreen mb-6" />
                        <h2 className="text-2xl font-bold mb-2">Live Chat</h2>
                        <p className="text-gray-400 mb-6">
                            Chat available via our social media channels or the chat widget in the corner.
                        </p>
                        <button className="text-accentGreen font-semibold hover:underline">
                            Start a conversation &rarr;
                        </button>
                    </div>

                    {/* Office Location */}
                    <div className="bg-darkCardBg p-8 rounded-2xl border border-darkBorder hover:border-purple-500/50 transition-all duration-300 md:col-span-2">
                        <MapPin className="w-10 h-10 text-purple-500 mb-6" />
                        <h2 className="text-2xl font-bold mb-2">Visit Our Office</h2>
                        <p className="text-gray-400 mb-4">
                            InternzLearn Headquarters
                        </p>
                        <address className="not-italic text-gray-300">
                            46/4, Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area,<br />
                            Hosapalaya, Muneshwara Nagar,<br />
                            Bengaluru, Karnataka 560068
                        </address>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
