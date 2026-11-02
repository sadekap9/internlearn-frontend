import React from 'react';
import { Mail } from 'lucide-react';

const PaymentAndRefundPolicy = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-darkMainBg text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue to-accentGreen">
                    Payment and Refund Policy
                </h1>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section className="bg-darkCardBg p-6 rounded-xl border border-darkBorder hover:border-primaryBlue/30 transition-colors">
                        <h2 className="text-xl font-semibold mb-4 text-white">Refund Policy</h2>
                        <p className="mb-4">
                            We are committed to ensuring your satisfaction with any product, service, course, or workshop you have purchased from us. Please read the following terms carefully as they govern our refund policy.
                        </p>
                    </section>

                    <section className="bg-darkCardBg p-6 rounded-xl border border-darkBorder hover:border-primaryBlue/30 transition-colors">
                        <h2 className="text-xl font-semibold mb-4 text-white">Workshops</h2>
                        <p>
                            No refunds or credits will be granted against payments related to workshops.
                        </p>
                    </section>

                    <section className="bg-darkCardBg p-6 rounded-xl border border-darkBorder hover:border-primaryBlue/30 transition-colors">
                        <h2 className="text-xl font-semibold mb-4 text-white">Courses</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                We do not offer refunds for courses. Please carefully consider your schedule and commitment before enrolling.
                            </li>
                            <li>
                                You may transfer your enrollment to a subsequent cohort. A nominal administrative fee will apply for such transfers.
                            </li>
                        </ul>
                    </section>

                    <section className="bg-darkCardBg p-6 rounded-xl border border-darkBorder hover:border-primaryBlue/30 transition-colors">
                        <h2 className="text-xl font-semibold mb-4 text-white">Contact us</h2>
                        <p className="flex items-center gap-2">
                            If you have any questions about our refund policy, please contact us by email at{' '}
                            <a href="mailto:training@internzlearn.com" className="text-primaryBlue hover:underline flex items-center gap-1">
                                training@internzlearn.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PaymentAndRefundPolicy;
