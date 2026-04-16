/* UserManagement.jsx */
import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { Search, Filter, ShieldCheck, ShieldAlert, MoreHorizontal, Store, User } from 'lucide-react';
// 1. Import the modal component
import VerifyCredentialsModal from './components/modals/VerifyCredentialsModal'; 
import UserDetailsModal from './components/modals/UserDetailsModal';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'TechRepair Valenzuela', email: 'techrepair@email.com', role: 'Repair Shop', verified: true, transactions: 24, rating: 4.8 },
    { id: 2, name: 'Maria Santos', email: 'maria.santos@email.com', role: 'Seller', verified: true, transactions: 5, rating: 4.6 },
    { id: 3, name: 'E-Parts Hub', email: 'eparts@email.com', role: 'Repair Shop', verified: false, transactions: 0, rating: null },
    { id: 4, name: 'Juan Cruz', email: 'juan.cruz@email.com', role: 'Seller', verified: true, transactions: 12, rating: 4.9 },
  ]);

  // 2. Add state for modal visibility and tracking the selected user
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleVerifyClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
const [isDetailsOpen, setIsDetailsOpen] = useState(false);
const [selectedUserForDetails, setSelectedUserForDetails] = useState(null);

const handleViewDetails = (user) => {
  setSelectedUserForDetails(user);
  setIsDetailsOpen(true);
};
  return (
    <div className="flex-1 bg-slate-50 p-8 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>

      {/* Search and Filters */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search users by name or email..." 
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg bg-white text-sm font-medium hover:bg-slate-50">
          <Filter size={18} /> All Roles
        </button>
      </div>

      {/* User Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider font-semibold">
            <tr>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Verification</th>
              <th className="px-6 py-4 text-center">Transactions</th>
              <th className="px-6 py-4 text-center">Rating</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50/50 transition">
                <td className="px-6 py-4">
                  <div className="font-semibold text-slate-900">{user.name}</div>
                  <div className="text-xs text-slate-500">{user.email}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="flex items-center gap-2 text-slate-600">
                    {user.role === 'Repair Shop' ? <Store size={14} /> : <User size={14} />}
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {user.verified ? (
                    <span className="flex items-center gap-1 text-emerald-600 font-medium">
                      <ShieldCheck size={14} /> Verified
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-orange-500 font-medium">
                      <ShieldAlert size={14} /> Pending
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-center text-slate-700">{user.transactions}</td>
                <td className="px-6 py-4 text-center text-slate-700">{user.rating ? `${user.rating} ★` : 'N/A'}</td>
                <td className="px-6 py-4 text-right space-x-2">
                  {/* 3. Update the Verify button to trigger the modal */}
                  {!user.verified && (
                    <button 
                      onClick={() => handleVerifyClick(user)}
                      className="px-3 py-1 bg-emerald-600 text-white text-xs rounded-md hover:bg-emerald-700 font-medium"
                    >
                      Verify
                    </button>
                  )}
                  <button 
  onClick={() => handleViewDetails(user)}
  className="px-3 py-1 border border-slate-200 text-slate-600 text-xs rounded-md hover:bg-slate-50 font-medium"
>
  View
</button>
                  <button className="px-3 py-1 bg-red-600 text-white text-xs rounded-md hover:bg-red-700 font-medium">Suspend</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 4. Render the modal at the bottom of the JSX */}
      <VerifyCredentialsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        shopData={selectedUser}
      />
      {/* Verification Modal */}
      <VerifyCredentialsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        shopData={selectedUser}
      />

      {/* User Details Modal */}
      <UserDetailsModal 
        isOpen={isDetailsOpen} 
        onClose={() => setIsDetailsOpen(false)} 
        userData={selectedUserForDetails}
      />
    </div>
  );
};

export default UserManagement;