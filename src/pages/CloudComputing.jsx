import React, { useState } from 'react';
import {
    Cloud,
    Server,
    Shield,
    Database,
    Code,
    Globe,
    Briefcase,
    TrendingUp,
    Users,
    CheckCircle,
    ArrowRight,
    Award,
    Clock,
    Calendar,
    ChevronDown,
    Zap,
    Cpu,
    Lock,
    Loader2,
    X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { openRazorpayCheckout } from '../utils/razorpay';
import ProgramFees from '../components/ProgramFees';
import awsLogo from '../assets/aws-logo.svg';
import azureLogo from '../assets/azure-logo.svg';
import gcpLogo from '../assets/gcp-logo.svg';
import dockerLogo from '../assets/docker-logo.svg';
import kubernetesLogo from '../assets/kubernetes-logo.svg';
import terraformLogo from '../assets/terraform-logo.svg';
import linuxLogo from '../assets/linux-logo.svg';
import jenkinsLogo from '../assets/jenkins-logo.svg';
import gitLogo from '../assets/git-logo.svg';
import pythonLogo from '../assets/python-logo.svg';

const CloudComputing = () => {
    const navigate = useNavigate();
    const [openModule, setOpenModule] = useState(null);
    const programName = "Cloud Computing";
    const programCode = "cloud-computing";

    // Form State
    const [submitStatus, setSubmitStatus] = useState('idle');
    const [onboardingStatus, setOnboardingStatus] = useState('idle');
    const [showOnboardingModal, setShowOnboardingModal] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        reason: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('loading');
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx9YStCSXPnmckNzkY_dGXSM3i4eOInyPYYlq8_HVNFz4mXO2oz-EKQTzLRUPKsT2IBzA/exec';
        try {
            const formPayload = new FormData();
            formPayload.append('name', formData.name);
            formPayload.append('email', formData.email);
            formPayload.append('phone', formData.phone);
            formPayload.append('college', formData.college);
            formPayload.append('course', programName);
            formPayload.append('reason', formData.reason);
            formPayload.append('timestamp', new Date().toISOString());

            await fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: formPayload });
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', college: '', reason: '' });
        } catch (error) {
            console.error("Error submitting form", error);
            setSubmitStatus('idle');
            alert("Something went wrong. Please try again.");
        }
    };

    const handleOnboardingSubmit = async (e) => {
        e.preventDefault();
        setOnboardingStatus('loading');
        setOnboardingStatus('success');
    };

    return (
        <div className="min-h-screen bg-darkMainBg text-white font-sans selection:bg-primaryBlue selection:text-white pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-0 pb-16 lg:pt-6 lg:pb-24">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-sky-900/20 z-0 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primaryBlue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 space-y-5">
                            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-sky-200 drop-shadow-sm">
                                    Cloud Computing
                                </span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue to-cyan-400">Career Starter Program</span>
                            </h1>

                            <p className="text-lg text-gray-300 leading-relaxed max-w-xl font-light">
                                Master the cloud with AWS, Azure, and Google Cloud. Learn to deploy scalable, secure, and reliable applications in the cloud environment.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <button onClick={() => document.getElementById('fees')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-gradient-to-r from-primaryBlue to-blue-600 rounded-xl font-bold text-white shadow-[0_0_20px_rgba(0,174,239,0.3)] hover:shadow-[0_0_30px_rgba(0,174,239,0.5)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 border border-white/10">
                                    Apply Now
                                    <ArrowRight size={20} />
                                </button>
                                <a href="/Internz%20learn%20brochure.pdf" download="Internz_Learn_Brochure.pdf" className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                                    <Award size={20} className="text-accentGreen" />
                                    Download Brochure
                                </a>
                            </div>

                            <div className="flex items-center gap-6 text-sm text-gray-400 pt-4">
                                <div className="flex items-center gap-2 text-indigo-200 bg-indigo-900/40 px-3 py-1.5 rounded-full text-sm font-medium border border-indigo-500/30">
                                    <Clock className="w-4 h-4 text-indigo-400" />
                                    <span>Next batch: October 5th</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-primaryBlue" />
                                    <span>Duration: 8 weeks</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-darkCardBg/50 backdrop-blur-md p-2">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primaryBlue/20 to-sky-500/20 opacity-30 mix-blend-overlay"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                                    alt="Cloud Computing"
                                    className="rounded-xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/70 backdrop-blur-md rounded-xl p-4 border border-white/10 flex justify-between items-center">
                                        <div>
                                            <p className="text-xs text-gray-400">Average Salary</p>
                                            <p className="text-xl font-bold text-white">₹5-14 LPA</p>
                                        </div>
                                        <div className="h-8 w-[1px] bg-white/20"></div>
                                        <div>
                                            <p className="text-xs text-gray-400">Growth</p>
                                            <p className="text-xl font-bold text-accentGreen">40%</p>
                                        </div>
                                        <div className="h-8 w-[1px] bg-white/20"></div>
                                        <div>
                                            <p className="text-xs text-gray-400">Market Size</p>
                                            <p className="text-xl font-bold text-white">$600B+</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Overview */}
            <section className="py-20 bg-darkMainBg border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primaryBlue font-semibold tracking-wider uppercase text-sm">Why Choose This Program</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">Program Overview</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Become a Cloud Architect or DevOps Engineer using industry-standard tools. Learn to build, deploy, and manage robust cloud infrastructures.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <Cloud />, title: "Multi-Cloud Mastery", desc: "Get hands-on experience with AWS, Microsoft Azure, and Google Cloud Platform." },
                            { icon: <Server />, title: "Infrastructure as Code", desc: "Automate infrastructure provisioning using Terraform and Ansible." },
                            { icon: <Shield />, title: "Cloud Security", desc: "Implement best security practices for identity, data, and network protection." },
                            { icon: <Users />, title: "1-on-1 Mentorship", desc: "Learn directly from Cloud Certified Experts with real industry experience." },
                            { icon: <Briefcase />, title: "Placement Support", desc: "Resume building, mock interviews, and guaranteed interview opportunities." },
                            { icon: <Globe />, title: "Global Certification", desc: "Prepare for AWS Certified Solutions Architect and other global certifications." }
                        ].map((item, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-primaryBlue/30 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-primaryBlue/20 rounded-lg flex items-center justify-center text-primaryBlue mb-6 group-hover:scale-110 transition-transform">
                                    {React.cloneElement(item.icon, { size: 24 })}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools & Technologies */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primaryBlue/5 skew-y-3 transform origin-top-left scale-110"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Tools & Technologies</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { name: "AWS", color: "text-orange-400", code: "Aws", logo: awsLogo },
                            { name: "Azure", color: "text-blue-500", code: "Az", logo: azureLogo },
                            { name: "GCP", color: "text-red-500", code: "Gc", logo: gcpLogo },
                            { name: "Docker", color: "text-blue-400", code: "Dk", logo: dockerLogo },
                            { name: "Kubernetes", color: "text-blue-600", code: "K8", logo: kubernetesLogo },
                            { name: "Terraform", color: "text-purple-400", code: "Tf", logo: terraformLogo },
                            { name: "Linux", color: "text-yellow-300", code: "Lx", logo: linuxLogo },
                            { name: "Jenkins", color: "text-red-400", code: "Jk", logo: jenkinsLogo },
                            { name: "Git", color: "text-orange-600", code: "Gt", logo: gitLogo },
                            { name: "Python", color: "text-yellow-400", code: "Py", logo: pythonLogo }
                        ].map((tool, index) => (
                            <div key={index} className="flex flex-col items-center gap-3 group">
                                <div className="w-20 h-20 bg-darkCardBg border border-white/10 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg group-hover:-translate-y-2 transition-transform duration-300 overflow-hidden p-3">
                                    {tool.logo ? (
                                        <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                                    ) : (
                                        <span className={tool.color}>{tool.code}</span>
                                    )}
                                </div>
                                <span className="text-sm text-gray-400 font-medium">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What You Will Build */}
            <section className="py-20 bg-darkMainBg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">What You Will Build</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Apply your cloud skills in practical scenarios. Build projects that demonstrate your architectural expertise.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-darkCardBg">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-darkCardBg to-transparent z-10 opacity-60" />
                                <img
                                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop"
                                    alt="Static Web Hosting"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <Server className="text-white/20 w-16 h-16 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <div className="text-xs font-bold text-accentGreen uppercase tracking-wider mb-2">Mini Project</div>
                                <h3 className="text-xl font-bold mb-3">Static Web Hosting</h3>
                                <p className="text-gray-400 text-sm mb-4">Host a high-performance static website using AWS S3, CloudFront, and Route 53 with SSL integration.</p>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-darkCardBg">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-darkCardBg to-transparent z-10 opacity-60" />
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                                    alt="Serverless API"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <Cloud className="text-white/20 w-16 h-16 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <div className="text-xs font-bold text-primaryBlue uppercase tracking-wider mb-2">Major Project</div>
                                <h3 className="text-xl font-bold mb-3">Serverless API</h3>
                                <p className="text-gray-400 text-sm mb-4">Build and deploy a scalable, serverless backend API using AWS Lambda, API Gateway, and DynamoDB.</p>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="group relative rounded-2xl overflow-hidden border border-primaryBlue/30 bg-darkCardBg shadow-[0_0_30px_rgba(0,174,239,0.1)]">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-darkCardBg to-transparent z-10 opacity-60" />
                                <img
                                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=format&fit=crop"
                                    alt="Auto-Scaling Infrastructure"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <Zap className="text-white/20 w-16 h-16 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">Capstone Project</div>
                                <h3 className="text-xl font-bold mb-3">Auto-Scaling Infrastructure</h3>
                                <p className="text-gray-400 text-sm mb-4">Design a fault-tolerant web application with Load Balancers and Auto Scaling Groups on EC2.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-20 bg-darkSectionBg/50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Detailed Curriculum</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                title: "Cloud Computing Fundamentals",
                                description: "Understanding Cloud models (IaaS, PaaS, SaaS) and deployment types (Public, Private, Hybrid). Intro to virtualization."
                            },
                            {
                                title: "AWS Core Services (EC2, S3, RDS)",
                                description: "Deep dive into Compute, Storage, and Database services. Launching instances and managing storage buckets."
                            },
                            {
                                title: "Networking & VPC",
                                description: "Designing secure cloud networks using VPC, Subnets, Route Tables, Internet Gateways, and Security Groups."
                            },
                            {
                                title: "Identity & Access Management (IAM)",
                                description: "Managing users, groups, roles, and policies to secure your AWS resources effectively."
                            },
                            {
                                title: "Serverless Computing",
                                description: "Introduction to AWS Lambda and API Gateway for building modern, event-driven applications."
                            },
                            {
                                title: "Containerization (Docker)",
                                description: "Creating, deploying, and managing containers. Dockerfiles, Images, and Docker Hub."
                            },
                            {
                                title: "Orchestration with Kubernetes",
                                description: "Managing containerized applications at scale. Pods, Deployments, Services, and Kubernetes clusters."
                            },
                            {
                                title: "DevOps & CI/CD",
                                description: "Implementing Continuous Integration and Deployment pipelines using Jenkins and Git."
                            },
                            {
                                title: "Infrastructure as Code (Terraform)",
                                description: "Provisioning and managing infrastructure using code. Writing Terraform scripts for AWS resources."
                            },
                            {
                                title: "Monitoring & Logging",
                                description: "Using CloudWatch for monitoring resources and setting up alerts for system health."
                            }
                        ].map((module, index) => (
                            <div
                                key={index}
                                className={`bg-darkCardBg border ${openModule === index ? 'border-primaryBlue' : 'border-white/5'} rounded-2xl overflow-hidden transition-all duration-300`}
                            >
                                <button
                                    onClick={() => setOpenModule(openModule === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-colors ${openModule === index ? 'bg-primaryBlue text-white' : 'bg-primaryBlue/10 text-primaryBlue'}`}>
                                            {index + 1}
                                        </div>
                                        <h3 className={`text-xl font-bold transition-colors ${openModule === index ? 'text-primaryBlue' : 'text-white'}`}>
                                            {module.title}
                                        </h3>
                                    </div>
                                    <ChevronDown
                                        className={`transform transition-transform duration-300 ${openModule === index ? 'rotate-180 text-primaryBlue' : 'text-gray-400'}`}
                                        size={24}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openModule === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-6 pt-0 pl-[5.5rem] pr-6 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                                        {module.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certification */}
            <section className="py-20 bg-darkMainBg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-8 md:p-12">
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold">Industry Recognized Certificate</h2>
                            <p className="text-gray-400">
                                Validate your skills with a professional certificate from Global Interns. Add it to your LinkedIn profile and resume to stand out to recruiters.
                            </p>
                            <a href="/All%20Sample%20Certificate.pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-white text-darkMainBg font-bold rounded-lg hover:bg-gray-200 transition-colors">
                                View Sample Certificate
                            </a>
                        </div>
                        <div className="md:w-1/2 flex justify-center perspective-1000">
                            <div className="relative w-full max-w-xl duration-500 transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-all cursor-pointer group">
                                <div className="absolute inset-0 bg-primaryBlue/20 blur-2xl group-hover:bg-primaryBlue/30 transition-all rounded-full"></div>
                                <img
                                    src="/certificate.png"
                                    alt="Internship Certificate"
                                    className="relative w-full h-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 z-10"
                                />
                                {/* Reflection effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-30 transition-opacity rounded-xl z-20 pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <ProgramFees
                programName={programName}
                programCode={programCode}
                formData={formData}
            />

            {/* Application Form */}
            <section className="py-20 bg-darkSectionBg relative overflow-hidden" id="apply">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accentGreen/5 rounded-full blur-[100px]"></div>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-4">Secure Your Spot</h2>
                        <p className="text-gray-400">Applications closing soon for next batch.</p>
                    </div>

                    <div className="bg-darkCardBg border border-white/10 rounded-2xl p-8 shadow-2xl">
                        {submitStatus === 'success' ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Application Received!</h3>
                                <p className="text-gray-400">We will contact you shortly.</p>
                                <button
                                    onClick={() => setSubmitStatus('idle')}
                                    className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                                >
                                    Submit Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primaryBlue text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="john@example.com"
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primaryBlue text-white"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="+91 98765 43210"
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primaryBlue text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">College / University</label>
                                        <input
                                            type="text"
                                            name="college"
                                            value={formData.college}
                                            onChange={handleInputChange}
                                            placeholder="University Name"
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primaryBlue text-white"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Reason for joining</label>
                                    <textarea
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleInputChange}
                                        placeholder="I want to join because..."
                                        rows="4"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primaryBlue text-white resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitStatus === 'loading'}
                                    className="w-full py-4 bg-gradient-to-r from-primaryBlue to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-transform hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {submitStatus === 'loading' ? 'Submitting...' : 'Submit Application'}
                                </button>
                                <p className="text-xs text-center text-gray-500">By submitting, you agree to our Terms & Privacy Policy.</p>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Master Cloud Computing?</h2>
                    <p className="text-xl text-blue-200 mb-8">Join our Cloud program and elevate your career to the skies.</p>
                    <button className="px-10 py-4 bg-white text-blue-900 font-bold rounded-full shadow-2xl hover:bg-gray-100 transition-all transform hover:-translate-y-1">
                        Apply Now & Get Started
                    </button>
                </div>
            </section>



        </div>
    );
};

export default CloudComputing;
