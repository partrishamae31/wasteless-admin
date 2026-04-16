import React from 'react';
import { X, User, Store, ShieldCheck, Calendar, Mail, Star, Receipt, FileCheck } from 'lucide-react';

const UserDetailsModal = ({ isOpen, onClose, userData }) => {
  if (!isOpen) return null;

  // Mock data for display based on your screenshot
  const details = {
    name: userData?.name || "TechRepair Valenzuela",
    email: userData?.email || "techrepair@email.com",
    joinDate: "December 15, 2025",
    role: userData?.role || "Repair Shop",
    transactions: userData?.transactions || 24,
    rating: userData?.rating || 4.8,
    status: "Active",
    verified: "Yes",
    businessPermit: "BP12345",
    techCert: "TC54321"
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-800">User Details</h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={20} className="text-slate-500" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-8 bg-slate-50/50">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-y-8 gap-x-12">
              
              {/* Account Info */}
              <DetailItem label="Name" value={details.name} icon={<User size={14} />} />
              <DetailItem label="Email" value={details.email} icon={<Mail size={14} />} />
              
              <DetailItem label="Join Date" value={details.joinDate} icon={<Calendar size={14} />} />
              <DetailItem label="Role" value={details.role} icon={<Store size={14} />} />

              {/* Platform Metrics */}
              <DetailItem label="Transactions" value={details.transactions} icon={<Receipt size={14} />} />
              <DetailItem label="Rating" value={`${details.rating} ★`} icon={<Star size={14} />} />

              {/* Status */}
              <DetailItem 
                label="Status" 
                value={details.status} 
                valueColor="text-emerald-600 font-bold" 
              />
              <DetailItem 
                label="Verified" 
                value={details.verified} 
                icon={<ShieldCheck size={14} className="text-emerald-500" />} 
                valueColor="text-emerald-600 font-bold"
              />

              {/* Credentials */}
              <DetailItem label="Business Permit" value={details.businessPermit} icon={<FileCheck size={14} />} />
              <DetailItem label="Technical Certification" value={details.techCert} icon={<FileCheck size={14} />} />
              
              {/* Footer item across two columns */}
              <div className="col-span-2 border-t border-slate-100 pt-6">
                <p className="text-[11px] text-slate-400 uppercase tracking-widest font-bold mb-1">Registered Shop Name</p>
                <p className="text-sm font-semibold text-slate-800">{details.name}</p>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-6 bg-white border-t border-slate-100 flex justify-end">
          <button 
            onClick={onClose}
            className="px-8 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable component for each detail entry
const DetailItem = ({ label, value, icon, valueColor = "text-slate-800" }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[11px] text-slate-400 uppercase tracking-widest font-bold">
      {label}
    </span>
    <div className="flex items-center gap-2">
      {icon && <span className="text-slate-400">{icon}</span>}
      <span className={`text-sm font-semibold ${valueColor}`}>
        {value}
      </span>
    </div>
  </div>
);

export default UserDetailsModal;