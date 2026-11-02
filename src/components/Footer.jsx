import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-darkSectionBg text-darkTextSecondary py-12 border-t border-darkBorder" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">

                    {/* Brand Info */}
                    <div className="col-span-1">
                        <div className="mb-4">
                            <img src="/logo.png" alt="InternzLearn" className="h-12 w-auto" />
                        </div>
                        <p className="text-sm leading-relaxed mb-4">
                            Empowering the next generation of professionals through world-class virtual internships and mentorships.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/people/Internz-Learn/61550766895392" target="_blank" rel="noopener noreferrer" className="hover:text-primaryBlue transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-primaryBlue transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-primaryBlue transition-colors"><Instagram size={20} /></a>
                            <a href="https://www.linkedin.com/company/internzlearn01/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="hover:text-primaryBlue transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about-us" className="hover:text-primaryBlue transition-colors">About Us</Link></li>
                            <li><Link to="/join/learner" className="hover:text-primaryBlue transition-colors">Careers</Link></li>
                            <li><a href="#" className="hover:text-primaryBlue transition-colors">Blog</a></li>
                            <li><Link to="/support" className="hover:text-primaryBlue transition-colors">Contact Us</Link></li>
                            <li><Link to="/join/instructor" className="hover:text-primaryBlue transition-colors">Apply as Mentor</Link></li>
                        </ul>
                    </div>

                    {/* Industries */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Industries</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-primaryBlue transition-colors">Marketing</a></li>
                            <li><a href="#" className="hover:text-primaryBlue transition-colors">Product</a></li>
                            <li><a href="#" className="hover:text-primaryBlue transition-colors">Data</a></li>
                            <li><a href="#" className="hover:text-primaryBlue transition-colors">Tech</a></li>
                            <li><a href="#" className="hover:text-primaryBlue transition-colors">Design</a></li>
                        </ul>
                    </div>

                    {/* Legals */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Legals</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/privacy-policy" className="hover:text-primaryBlue transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms-and-condition" className="hover:text-primaryBlue transition-colors">Terms and Condition</Link></li>
                            <li><Link to="/support" className="hover:text-primaryBlue transition-colors">Support</Link></li>
                            <li><Link to="/faq" className="hover:text-primaryBlue transition-colors">FAQ</Link></li>
                            <li><Link to="/payment-and-refund-policy" className="hover:text-primaryBlue transition-colors">Payment and Refund Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Get in Touch</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-2 text-primaryBlue flex-shrink-0 mt-1" />
                                <span className="text-sm">InternzLearn, 46/4, Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, Hosapalaya, Muneshwara Nagar, Bengaluru, Karnataka 560068</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-2 text-primaryBlue flex-shrink-0" />
                                <span>training@internzlearn.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-darkBorder pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>© 2026 INTERNZ LEARN PRIVATE LIMITED. All Rights Reserved.</p>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <div className="bg-white rounded px-2 py-1 flex items-center gap-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="Razorpay" className="h-5" />

                            <div className="h-4 w-px bg-gray-300"></div>
                            <img src="https://mma.prnewswire.com/media/1717353/Easebuzz_Logo.jpg" alt="Easebuzz" className="h-5" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
