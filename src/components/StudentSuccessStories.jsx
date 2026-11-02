import React from 'react';
import { Quote, Star } from 'lucide-react';

const StudentSuccessStories = () => {
    const testimonials = [
        {
            name: "Sneha P.",
            course: "Data Science",
            quote: "The internship experience was a game changer. I got placed within 2 weeks of completion!",
            rating: 5,
            role: "Placed at Capgemini"
        },
        {
            name: "Aryan K.",
            course: "Web Development",
            quote: "Practical projects helped me build a strong portfolio. Highly documented and structured learning.",
            rating: 5,
            role: "Freelance Developer"
        },
        {
            name: "Rohan D.",
            course: "Marketing",
            quote: "Mentors were extremely helpful. The career support team really pushes you to do your best.",
            rating: 4,
            role: "Marketing Associate"
        }
    ];

    return (
        <section className="py-20 bg-darkMainBg" id="stories">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">From Learning to Earning</h2>
                    <div className="w-20 h-1.5 bg-accentGreen mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-darkCardBg p-8 rounded-2xl relative border border-darkBorder hover:border-primaryBlue/30 hover:shadow-lg transition-all">
                            <Quote className="text-primaryBlue/20 absolute top-6 right-6" size={48} />

                            <div className="flex items-center space-x-1 mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="#FACC15" className="text-yellow-500" />
                                ))}
                            </div>

                            <p className="text-darkTextSecondary text-lg mb-6 italic">"{item.quote}"</p>

                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gray-700 rounded-full mr-4 border border-gray-600"></div> {/* Placeholder Avatar */}
                                <div>
                                    <h4 className="font-bold text-white">{item.name}</h4>
                                    <p className="text-xs text-primaryBlue font-semibold uppercase">{item.course}</p>
                                    <p className="text-xs text-darkMuted">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudentSuccessStories;
