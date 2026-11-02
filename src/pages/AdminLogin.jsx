import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ChevronRight, Eye, EyeOff } from 'lucide-react';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulated delay for realistic feel
        setTimeout(() => {
            if (formData.email === 'info@internzlearn.com' && formData.password === 'admin@0987') {
                // Success
                // alert("Login Successful! Waiting for next steps...");
                // In a real app, you'd save a token here
                localStorage.setItem('adminToken', 'dummy-token-secure');
                navigate('/admin/9663415279/dashboard');
            } else {
                setError('Invalid credentials. Please contact support.');
            }
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-darkMainBg flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primaryBlue/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="w-full max-w-md bg-darkCardBg/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 relative z-10">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                        <Lock className="text-primaryBlue w-8 h-8" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">Admin Portal</h1>
                    <p className="text-gray-400 text-sm">Restricted access area. Please identify yourself.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Email ID</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primaryBlue transition-colors w-5 h-5" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-darkMainBg border border-white/10 text-white rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-primaryBlue/50 transition-all placeholder:text-gray-600"
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primaryBlue transition-colors w-5 h-5" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full bg-darkMainBg border border-white/10 text-white rounded-xl py-3.5 pl-12 pr-12 focus:outline-none focus:border-primaryBlue/50 transition-all placeholder:text-gray-600"
                                placeholder="••••••••"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {error && (
                        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-primaryBlue to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                            <>
                                Secure Login <ChevronRight size={18} />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-500">
                        Unauthorized access is strictly prohibited.<br />
                        IP Address logged for security purposes.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
