"use client";

import { Save, UserCircle, Bell, Shield, Wallet } from "lucide-react";
import { useState } from "react";

export default function DashboardProfile() {
  const [success, setSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
        <p className="text-foreground/60">Manage your account preferences, security settings, and billing information.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Profile Sidebar Nav */}
        <div className="space-y-2">
           <button className="w-full flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary font-bold rounded-xl text-sm transition-colors text-left">
             <UserCircle className="w-5 h-5" /> General Info
           </button>
           <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-foreground/5 text-foreground/70 font-medium rounded-xl text-sm transition-colors text-left">
             <Shield className="w-5 h-5" /> Security
           </button>
           <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-foreground/5 text-foreground/70 font-medium rounded-xl text-sm transition-colors text-left">
             <Bell className="w-5 h-5" /> Notifications
           </button>
           <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-foreground/5 text-foreground/70 font-medium rounded-xl text-sm transition-colors text-left">
             <Wallet className="w-5 h-5" /> Billing Methods
           </button>
        </div>

        {/* Content Panel */}
        <div className="md:col-span-3 bg-background border border-foreground/10 rounded-3xl p-6 md:p-8 shadow-sm">
          <form className="space-y-6" onSubmit={handleSave}>
            
            <div className="flex items-center gap-6 pb-6 border-b border-foreground/10">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary text-3xl font-black shrink-0 relative overflow-hidden group border border-primary/30">
                 D
                 <div className="absolute inset-0 bg-black/50 hidden group-hover:flex items-center justify-center text-xs text-white cursor-pointer">
                   Upload
                 </div>
              </div>
              <div>
                 <h3 className="font-bold text-lg">Profile Avatar</h3>
                 <p className="text-sm text-foreground/50 mb-3">JPG, GIF or PNG. 1MB max.</p>
                 <button type="button" className="px-4 py-2 border border-foreground/20 rounded-lg text-sm font-bold hover:bg-foreground/5">Choose File</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div>
                 <label className="block text-sm font-bold mb-2">First Name</label>
                 <input type="text" defaultValue="Demo" className="w-full p-3 rounded-xl border border-foreground/10 bg-foreground/5 focus:ring-2 focus:ring-primary focus:outline-none" />
              </div>
              <div>
                 <label className="block text-sm font-bold mb-2">Last Name</label>
                 <input type="text" defaultValue="User" className="w-full p-3 rounded-xl border border-foreground/10 bg-foreground/5 focus:ring-2 focus:ring-primary focus:outline-none" />
              </div>
            </div>

            <div>
               <label className="block text-sm font-bold mb-2">Email Address</label>
               <input type="email" defaultValue="demo@travelai.com" className="w-full p-3 rounded-xl border border-foreground/10 bg-foreground/5 focus:ring-2 focus:ring-primary focus:outline-none" />
            </div>

            <div>
               <label className="block text-sm font-bold mb-2">Travel Preferences (Dietary/Accessibility)</label>
               <textarea rows={4} className="w-full p-3 rounded-xl border border-foreground/10 bg-foreground/5 focus:ring-2 focus:ring-primary focus:outline-none resize-none" placeholder="We use these notes to better tune the AI generated itineraries..." defaultValue="Prefer vegetarian local foods. No extreme hiking."></textarea>
            </div>

            <div className="pt-4 flex items-center gap-4 border-t border-foreground/10">
               <button type="submit" className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors flex items-center gap-2 shadow-lg shadow-primary/20">
                 <Save className="w-5 h-5" /> Save Changes
               </button>
               {success && <span className="text-green-600 font-bold text-sm animate-in fade-in">Settings updated!</span>}
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}
