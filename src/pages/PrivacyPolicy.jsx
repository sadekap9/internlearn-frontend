import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-darkMainBg text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue to-accentGreen">
                    Privacy Policy
                </h1>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section className="bg-darkCardBg p-6 rounded-xl border border-darkBorder">
                        <h2 className="text-xl font-semibold mb-4 text-white">Introduction</h2>
                        <p className="mb-4">
                            At InternzLearn, we are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
                        </p>
                    </section>

                    <section className="bg-darkCardBg p-6 rounded-xl border border-darkBorder">
                        <h2 className="text-xl font-semibold mb-4 text-white">Information We Collect</h2>
                        <p className="mb-4">
                            We collect personal information that you voluntarily provide to us when registering at the Services expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services or otherwise contacting us.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Name and Contact Data</li>
                            <li>Credentials</li>
                            <li>Payment Data</li>
                        </ul>
                    </section>

                    <section className="bg-darkCardBg p-6 rounded-xl border border-darkBorder">
                        <h2 className="text-xl font-semibold mb-4 text-white">How We Use Your Information</h2>
                        <p>
                            We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                        </p>
                    </section>

                    <section className="bg-darkCardBg p-6 rounded-xl border border-darkBorder">
                        <h2 className="text-xl font-semibold mb-4 text-white">Contact Us</h2>
                        <p>
                            If you have questions or comments about this policy, you may email us at <a href="mailto:training@internzlearn.com" className="text-primaryBlue hover:underline">training@internzlearn.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
