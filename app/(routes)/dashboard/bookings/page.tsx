"use client";

import { CheckCircle2, Ticket, Clock, Download } from "lucide-react";
import Link from "next/link";
import { mockDestinations } from "@/data";

export default function DashboardBookings() {
  const bookings = mockDestinations.slice(4, 7).map((d, i) => ({
    id: `BKG-${4859 + i}`,
    destination: d.name,
    location: d.location,
    date: `Dec ${12 + (i*5)}, 2026`,
    price: d.price,
    status: i === 0 ? "Upcoming" : "Completed"
  }));

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold">My Bookings</h1>
          <p className="text-foreground/60">Track your reserved flights, accommodations, and guided tours.</p>
        </div>
        <Link href="/explore" className="px-4 py-2 bg-secondary text-white rounded-xl font-bold hover:bg-secondary/90 transition-colors border border-secondary">
          Find New Adventures
        </Link>
      </div>

      <div className="bg-background rounded-3xl border border-foreground/10 shadow-sm overflow-hidden mt-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-foreground/5 text-sm uppercase text-foreground/50 font-bold border-b border-foreground/10">
              <th className="p-6">Booking Details</th>
              <th className="p-6 hidden sm:table-cell">Dates</th>
              <th className="p-6">Amount</th>
              <th className="p-6">Status</th>
              <th className="p-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((bkg) => (
              <tr key={bkg.id} className="border-b border-foreground/5 hover:bg-foreground/5 transition-colors group">
                <td className="p-6">
                  <p className="font-bold text-lg mb-1">{bkg.destination}</p>
                  <p className="text-sm border flex items-center gap-1 text-foreground/50 font-mono w-max px-2 py-0.5 rounded-md border-foreground/10 bg-foreground/5"><Ticket className="w-3 h-3" /> {bkg.id}</p>
                </td>
                <td className="p-6 hidden sm:table-cell">
                  <div className="flex items-center gap-2 text-sm font-medium">
                     <Clock className="w-4 h-4 text-foreground/40" /> {bkg.date}
                  </div>
                </td>
                <td className="p-6 font-mono font-bold">${bkg.price}.00</td>
                <td className="p-6">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 w-max ${bkg.status === "Upcoming" ? "bg-primary/10 text-primary" : "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400"}`}>
                   {bkg.status === "Upcoming" ? <Clock className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                   {bkg.status}
                  </span>
                </td>
                <td className="p-6 text-right">
                   <button className="p-2 border border-foreground/10 rounded-lg hover:bg-background shadow-sm hover:shadow transition-all text-foreground/70 group-hover:text-primary">
                     <Download className="w-4 h-4" />
                   </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {bookings.length === 0 && (
          <div className="p-12 text-center text-foreground/50 font-medium">
             No active bookings found.
          </div>
        )}
      </div>

    </div>
  );
}
