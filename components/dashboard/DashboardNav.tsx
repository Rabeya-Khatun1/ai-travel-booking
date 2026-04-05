"use client";

import { Bell, Search, User as UserIcon, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface Props {
  isAdmin: boolean;
  toggleMockRole: () => void;
}

export default function DashboardNav({ isAdmin, toggleMockRole }: Props) {
  return (
    <header className="h-16 border-b border-foreground/10 bg-background/80 backdrop-blur flex items-center justify-between px-4 lg:px-8 z-10 sticky top-0">
      
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 rounded-lg bg-foreground/5">
          <Menu className="w-5 h-5" />
        </button>
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-9 pr-4 py-2 border border-foreground/10 bg-foreground/5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary w-64"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Development Toggle */}
        <button 
          onClick={toggleMockRole}
          className="hidden md:flex text-xs font-bold px-3 py-1.5 border border-foreground/20 rounded-full hover:bg-foreground/5 transition-colors"
        >
          Switch to {isAdmin ? 'User' : 'Admin'} Mode
        </button>

        <ThemeToggle />
        
        <button className="relative p-2 rounded-full hover:bg-foreground/5">
          <Bell className="w-5 h-5 text-foreground/70" />
          <div className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="h-6 w-px bg-foreground/10"></div>
        
        <div className="flex items-center gap-3 pl-2 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
            <UserIcon className="w-5 h-5" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight">{isAdmin ? "Admin Root" : "Demo User"}</p>
            <p className="text-xs text-foreground/60">{isAdmin ? "super@travelai.com" : "demo@travelai.com"}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
