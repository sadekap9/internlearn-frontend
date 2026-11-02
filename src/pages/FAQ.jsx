import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-darkCardBg rounded-xl border border-darkBorder overflow-hidden transition-all duration-300">
            <button
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-lg text-white">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-primaryBlue" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
            </button>
            <div
                className={`px-6 text-gray-300 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                    }`}
            >
                {answer}
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "What courses does InternzLearn offer?",
            answer: "We offer a wide range of courses in technology, management, and design, including Web Development, Data Science, Digital Marketing, and Product Management."
        },
        {
            question: "Are the internships paid?",
            answer: "Our internships are designed to provide industry experience. While some partner companies offer stipends, many of our program-linked internships are unpaid learning opportunities focused on skill-building and mentorship."
        },
        {
            question: "How do I get my certificate?",
            answer: "Upon successful completion of your course and internship project, you will receive a verified certificate from InternzLearn and our corporate partners."
        },
        {
            question: "Can I access the course material after the program ends?",
            answer: "Yes! You get lifetime access to the course materials, recorded sessions, and community forums even after you complete the program."
        },
        {
            question: "What is the refund policy?",
            answer: "We do not offer refunds for courses once enrolled. However, you may transfer your enrollment to a future cohort. Please refer to our Payment and Refund Policy page for more details."
        },
        {
            question: "How can I contact support?",
            answer: "You can reach our support team via email at training@internzlearn.com or through the Support page on our website."
        }
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen bg-darkMainBg text-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue to-accentGreen">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-400 text-center mb-12">
                    Find answers to common questions about our programs and platform.
                </p>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
