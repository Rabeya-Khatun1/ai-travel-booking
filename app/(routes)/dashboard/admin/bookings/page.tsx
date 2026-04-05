"use client";

import { useState } from "react";
import { Search, Filter, CheckCircle2, XCircle, Clock } from "lucide-react";
import { mockDestinations } from "@/data";

export default function AdminBookingsOverview() {
  const [search, setSearch] = useState("");
  
  // Create a massive random array out of our mock destinations for admin viewing
  const globalBookings = Array.from({ length: 15 }).map((_, i) => {
    const dest = mockDestinations[i % mockDestinations.length];
    const statuses = ["Confirmed", "Pending", "Cancelled", "Confirmed", "Confirmed"];
    return {
      id: `BKG-SYS-${9000 + i}`,
      user: `guest${i}@example.com`,
      destination: dest.name,
      amount: dest.price,
      status: statuses[i % statuses.length],
      date: `Nov ${1 + (i*2)}, 2026`
    };
  });

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Global Bookings Ledger</h1>
          <p className="text-foreground/60">Monitor and resolve transactional booking statuses across the platform.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 bg-background p-4 rounded-t-2xl border border-foreground/10 border-b-0 mt-6">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
          <input 
            type="text" 
            placeholder="Search by Booking ID or User..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-foreground/5 border border-foreground/10 rounded-xl focus:outline-none focus:border-primary text-sm"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-foreground/10 rounded-xl font-medium text-sm hover:bg-foreground/5 transition-colors">
          <Filter className="w-4 h-4" /> Filter Status
        </button>
      </div>

      <div className="bg-background border border-foreground/10 rounded-b-2xl overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-foreground/5 text-sm uppercase text-foreground/50 font-bold">
              <th className="p-4 border-b border-foreground/10">Ref ID</th>
              <th className="p-4 border-b border-foreground/10">User Contact</th>
              <th className="p-4 border-b border-foreground/10">Destination</th>
              <th className="p-4 border-b border-foreground/10">Revenue</th>
              <th className="p-4 border-b border-foreground/10">Transaction Status</th>
            </tr>
          </thead>
          <tbody>
            {globalBookings.map((bkg) => (
              <tr key={bkg.id} className="border-b border-foreground/5 hover:bg-foreground/5 transition-colors">
                <td className="p-4 font-mono font-bold text-sm text-foreground/70">{bkg.id}</td>
                <td className="p-4 text-sm font-medium">{bkg.user}</td>
                <td className="p-4 text-sm">{bkg.destination}</td>
                <td className="p-4 font-mono font-bold text-primary">${bkg.amount}</td>
                <td className="p-4">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 w-max
                    ${bkg.status === 'Confirmed' ? 'bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-400' : ''}
                    ${bkg.status === 'Pending' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-400' : ''}
                    ${bkg.status === 'Cancelled' ? 'bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400' : ''}
                  `}>
                    {bkg.status === 'Confirmed' && <CheckCircle2 className="w-3.5 h-3.5" />}
                    {bkg.status === 'Pending' && <Clock className="w-3.5 h-3.5" />}
                    {bkg.status === 'Cancelled' && <XCircle className="w-3.5 h-3.5" />}
                    {bkg.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
