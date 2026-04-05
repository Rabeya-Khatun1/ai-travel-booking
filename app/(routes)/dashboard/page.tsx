"use client";

import Link from "next/link";
import { Plane, CalendarCheck, MapPin } from "lucide-react";
import { mockDestinations } from "@/data";

export default function UserDashboard() {
  const activeTrips = mockDestinations.slice(0, 1);
  const pastTrips = mockDestinations.slice(1, 3);

  return (
    <div className="p-4 md:p-8 space-y-8 animate-in fade-in zoom-in-95">
      
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">Hello, Traveler! 👋</h1>
          <p className="text-foreground/60">Welcome to your personal travel hub.</p>
        </div>
        <Link href="/plan" className="px-4 py-2 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 text-sm">
          + Plan New Trip
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Active Trip Primary Card */}
        <div className="md:col-span-2 bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl text-white relative overflow-hidden shadow-xl shadow-primary/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block flex items-center gap-2 w-max">
               <Plane className="w-3 h-3" /> Upcoming Trip
            </span>
            <h2 className="text-3xl font-black mb-2">{activeTrips[0]?.name}</h2>
            <p className="text-white/80 flex items-center gap-2 mb-6"><MapPin className="w-4 h-4" /> {activeTrips[0]?.location}</p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex justify-between items-center max-w-sm border border-white/20">
               <div>
                  <p className="text-xs text-white/60 font-bold uppercase">Dates</p>
                  <p className="font-medium">Nov 12 - Nov 18, 2026</p>
               </div>
               <div className="h-8 w-px bg-white/20" />
               <div>
                  <p className="text-xs text-white/60 font-bold uppercase">Guests</p>
                  <p className="font-medium">2 Adults</p>
               </div>
            </div>
            
            <button className="mt-6 px-6 py-2 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-colors">
               View Itinerary
            </button>
          </div>
        </div>

        {/* Quick Stats Sidebar */}
        <div className="space-y-6">
           <div className="bg-background rounded-3xl p-6 border border-foreground/10 shadow-sm flex items-center gap-4">
              <div className="p-4 bg-primary/10 text-primary rounded-2xl">
                 <CalendarCheck className="w-6 h-6" />
              </div>
              <div>
                 <p className="text-sm text-foreground/60 font-bold">Total Bookings</p>
                 <p className="text-2xl font-black">12</p>
              </div>
           </div>
           
           <div className="bg-background rounded-3xl p-6 border border-foreground/10 shadow-sm">
             <h3 className="font-bold mb-4">Past Adventures</h3>
             <div className="space-y-4">
               {pastTrips.map(trip => (
                 <div key={trip.id} className="flex gap-3 hover:bg-foreground/5 p-2 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-foreground/10">
                   <div className="w-12 h-12 rounded-xl bg-secondary/20 shrink-0"></div>
                   <div>
                     <p className="font-bold text-sm line-clamp-1">{trip.name}</p>
                     <p className="text-xs text-foreground/50">{trip.location}</p>
                   </div>
                 </div>
               ))}
             </div>
             <button className="w-full mt-4 text-xs font-bold text-primary hover:underline pb-1">View Full History &rarr;</button>
           </div>
        </div>
      </div>
      
    </div>
  );
}
