"use client";

import { useState } from "react";
import { Search, Filter, MoreHorizontal, ChevronLeft, ChevronRight, Edit, Trash2 } from "lucide-react";

// Mock user database
const MOCK_USERS = Array.from({ length: 45 }).map((_, i) => ({
  id: `USR-${1000 + i}`,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 10 === 0 ? "Admin" : "User",
  status: i % 8 === 0 ? "Inactive" : "Active",
  joinedDate: `Oct ${Math.floor(Math.random() * 28) + 1}, 2026`
}));

export default function ManageUsers() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filter
  const filteredUsers = MOCK_USERS.filter(u => 
    u.name.toLowerCase().includes(search.toLowerCase()) || 
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  
  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold">Manage Users</h1>
          <p className="text-foreground/60">View, update, and manage all assigned user accounts.</p>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors">
          + Add New User
        </button>
      </div>

      {/* Table Actions */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 bg-background p-4 rounded-t-2xl border border-foreground/10 border-b-0">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
          <input 
            type="text" 
            placeholder="Search users..." 
            value={search}
            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
            className="w-full pl-9 pr-4 py-2 bg-foreground/5 border border-foreground/10 rounded-xl focus:outline-none focus:border-primary text-sm"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-foreground/10 rounded-xl font-medium text-sm hover:bg-foreground/5 transition-colors">
          <Filter className="w-4 h-4" /> Filters
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-background border border-foreground/10 rounded-b-2xl overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-foreground/5 text-sm uppercase text-foreground/50 font-bold">
              <th className="p-4 border-b border-foreground/10">User ID</th>
              <th className="p-4 border-b border-foreground/10">User details</th>
              <th className="p-4 border-b border-foreground/10 hidden md:table-cell">Joined Date</th>
              <th className="p-4 border-b border-foreground/10">Role</th>
              <th className="p-4 border-b border-foreground/10">Status</th>
              <th className="p-4 border-b border-foreground/10 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="border-b border-foreground/5 hover:bg-foreground/5 transition-colors group">
                <td className="p-4 font-mono text-xs text-foreground/50">{user.id}</td>
                <td className="p-4">
                  <p className="font-bold">{user.name}</p>
                  <p className="text-xs text-foreground/50">{user.email}</p>
                </td>
                <td className="p-4 text-sm hidden md:table-cell">{user.joinedDate}</td>
                <td className="p-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${user.role === 'Admin' ? 'bg-primary/20 text-primary' : 'bg-foreground/10 text-foreground'}`}>
                    {user.role}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 w-max ${user.status === 'Active' ? 'text-green-600 bg-green-100 dark:bg-green-950 dark:text-green-400' : 'text-red-600 bg-red-100 dark:bg-red-950 dark:text-red-400'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`} />
                    {user.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                     <button className="p-2 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                     <button className="p-2 hover:bg-red-500/10 hover:text-red-500 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="p-4 flex items-center justify-between border-t border-foreground/10">
          <p className="text-sm text-foreground/50">
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredUsers.length)} of {filteredUsers.length} users
          </p>
          <div className="flex gap-2">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 border border-foreground/10 rounded-lg hover:bg-foreground/5 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 border border-foreground/10 rounded-lg hover:bg-foreground/5 disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
