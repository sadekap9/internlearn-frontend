import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Tag, Percent, Save, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();
    // Using local storage to persist coupons for this demo
    const [coupons, setCoupons] = useState(() => {
        const saved = localStorage.getItem('adminCoupons');
        return saved ? JSON.parse(saved) : [
            { id: 1, code: 'WELCOME10', discount: '10', uses: 45 },
            { id: 2, code: 'EARLYBIRD', discount: '20', uses: 12 }
        ];
    });

    const [newCoupon, setNewCoupon] = useState({ code: '', discount: '' });

    useEffect(() => {
        localStorage.setItem('adminCoupons', JSON.stringify(coupons));
    }, [coupons]);

    const handleAddCoupon = (e) => {
        e.preventDefault();
        if (!newCoupon.code || !newCoupon.discount) return;

        const coupon = {
            id: Date.now(),
            code: newCoupon.code.toUpperCase(),
            discount: newCoupon.discount,
            uses: 0
        };

        setCoupons([...coupons, coupon]);
        setNewCoupon({ code: '', discount: '' });
    };

    const handleDelete = (id) => {
        setCoupons(coupons.filter(c => c.id !== id));
    };

    const handleLogout = () => {
        // In a real app, clear auth tokens here
        navigate('/admin/9663415279/login');
    };

    return (
        <div className="min-h-screen bg-darkMainBg text-white p-6 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-10 bg-darkCardBg p-6 rounded-2xl border border-white/10 shadow-lg">
                    <div>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-blue-400">
                            Admin Dashboard
                        </h1>
                        <p className="text-gray-400 mt-1">Manage discount pricing and coupons</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors border border-red-500/20"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Create Coupon Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-darkCardBg border border-white/10 rounded-2xl p-6 shadow-xl sticky top-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-accentGreen/20 rounded-lg flex items-center justify-center text-accentGreen">
                                    <Plus size={24} />
                                </div>
                                <h2 className="text-xl font-bold">Create Coupon</h2>
                            </div>

                            <form onSubmit={handleAddCoupon} className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium ml-1">Coupon Code</label>
                                    <div className="relative">
                                        <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                        <input
                                            type="text"
                                            value={newCoupon.code}
                                            onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value.toUpperCase() })}
                                            placeholder="e.g. SUMMER30"
                                            className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accentGreen transition-all placeholder:text-gray-600 uppercase font-mono"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium ml-1">Discount Percentage</label>
                                    <div className="relative">
                                        <Percent className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                        <input
                                            type="number"
                                            value={newCoupon.discount}
                                            onChange={(e) => setNewCoupon({ ...newCoupon, discount: e.target.value })}
                                            placeholder="e.g. 30"
                                            min="0"
                                            max="100"
                                            className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accentGreen transition-all placeholder:text-gray-600 font-mono"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-accentGreen text-darkMainBg font-bold rounded-xl hover:bg-green-400 transition-colors shadow-lg shadow-green-500/10 flex items-center justify-center gap-2"
                                >
                                    <Save size={18} />
                                    Generate Code
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Coupon List */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <Tag className="text-primaryBlue" />
                            Active Coupons
                            <span className="text-sm font-normal text-gray-500 ml-2">({coupons.length})</span>
                        </h2>

                        <div className="grid grid-cols-1 gap-4">
                            {coupons.length === 0 ? (
                                <div className="text-center py-12 border-2 border-dashed border-white/5 rounded-2xl">
                                    <p className="text-gray-500">No active coupons found.</p>
                                </div>
                            ) : (
                                coupons.map((coupon) => (
                                    <div key={coupon.id} className="bg-darkCardBg border border-white/5 rounded-xl p-5 flex items-center justify-between hover:border-white/20 transition-all group">
                                        <div className="flex items-center gap-5">
                                            <div className="w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center text-2xl font-mono font-bold text-white group-hover:bg-primaryBlue/10 group-hover:text-primaryBlue transition-colors border border-white/5">
                                                {coupon.discount}%
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold font-mono tracking-wide text-white">{coupon.code}</h3>
                                                <p className="text-xs text-gray-500 mt-1">Generated ID: #{coupon.id}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-6">
                                            <div className="text-right hidden sm:block">
                                                <p className="text-sm text-gray-400">Status</p>
                                                <div className="flex items-center gap-1 text-green-400 text-sm font-medium">
                                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                    Active
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleDelete(coupon.id)}
                                                className="p-3 bg-white/5 text-gray-400 hover:bg-red-500/20 hover:text-red-400 rounded-lg transition-colors border border-transparent hover:border-red-500/20"
                                                title="Delete Coupon"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
