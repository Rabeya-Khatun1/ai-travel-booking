"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, User, Settings, LogOut } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const ROUTES = [
  { name: "Home", path: "/" },
  // { name: "Explore", path: "/explore" },
  { name: "Dashboard", path: "/dashboard", isDropdown: true },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
  
  const profileRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsExploreDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-primary">TravelAI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {ROUTES.map((route) => (
            route.name === "Explore" ? (
              <div key={route.name} className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsExploreDropdownOpen(!isExploreDropdownOpen)}
                  className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors text-foreground/80 focus:outline-none"
                >
                  {route.name}
                  <ChevronDown className={`h-4 w-4 transition-transform ${isExploreDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isExploreDropdownOpen && (
                  <div className="absolute top-full mt-2 w-48 rounded-xl bg-background border border-foreground/10 shadow-lg p-2 flex flex-col gap-1 overflow-hidden animate-in fade-in slide-in-from-top-2">
                    <Link href="/explore/destinations" className="px-4 py-2 text-sm hover:bg-foreground/5 rounded-lg transition-colors">Top Destinations</Link>
                    <Link href="/explore/itineraries" className="px-4 py-2 text-sm hover:bg-foreground/5 rounded-lg transition-colors">AI Itineraries</Link>
                    <Link href="/explore/deals" className="px-4 py-2 text-sm hover:bg-foreground/5 rounded-lg transition-colors">Special Deals</Link>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                key={route.name} 
                href={route.path} 
                className="text-sm font-medium hover:text-primary transition-colors text-foreground/80"
              >
                {route.name}
              </Link>
            )
          ))}
        </nav>

        {/* Right Section: Actions & Profile */}
        <div className="hidden lg:flex items-center gap-4">
          {/* <ThemeToggle />
           */}
          <div className="h-6 w-px bg-foreground/10 mx-2"></div>
          
          {/* Profile Menu */}
          <div className="relative" ref={profileRef}>
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-transparent hover:border-primary transition-all overflow-hidden">
                <User className="h-5 w-5 text-primary" />
              </div>
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-background border border-foreground/10 shadow-lg p-2 flex flex-col gap-1 animate-in fade-in zoom-in-95">
                <div className="px-4 py-3 border-b border-foreground/10 mb-1">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-foreground/60">john@example.com</p>
                </div>
                <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-foreground/5 rounded-lg transition-colors">
                  <User className="h-4 w-4" /> My Profile
                </Link>
                <Link href="/dashboard/profile" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-foreground/5 rounded-lg transition-colors">
                  <Settings className="h-4 w-4" /> Settings
                </Link>
                <div className="h-px bg-foreground/10 my-1"></div>
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors text-left w-full">
                  <LogOut className="h-4 w-4" /> Sign Out
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="p-2 -mr-2 text-foreground focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-background border-b border-foreground/10 shadow-xl overflow-y-auto max-h-[calc(100vh-4rem)] animate-in slide-in-from-top-2">
          <div className="p-4 flex flex-col gap-2">
            {ROUTES.map((route) => (
              <Link 
                key={route.name}
                href={route.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium rounded-xl hover:bg-foreground/5 transition-colors"
              >
                {route.name}
              </Link>
            ))}
            
            <div className="h-px bg-foreground/10 my-2"></div>
            
            <div className="px-4 py-2 flex items-center gap-3">
               <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
               </div>
               <div>
                 <p className="text-sm font-medium">John Doe</p>
                 <p className="text-xs text-foreground/60">john@example.com</p>
               </div>
            </div>
            
            <button className="mt-2 flex items-center gap-2 px-4 py-3 text-base font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition-colors text-left">
              <LogOut className="h-5 w-5" /> Sign Out
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
