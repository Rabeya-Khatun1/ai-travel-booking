"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Plane, CalendarCheck, Settings, Users, Map, PieChart } from "lucide-react";

export default function Sidebar({ isAdmin }: { isAdmin: boolean }) {
  const pathname = usePathname();

  const userRoutes = [
    { name: "My Dashboard", path: "/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "My Trips", path: "/dashboard/trips", icon: <Plane className="w-5 h-5" /> },
    { name: "My Bookings", path: "/dashboard/bookings", icon: <CalendarCheck className="w-5 h-5" /> },
    { name: "Profile Settings", path: "/dashboard/profile", icon: <Settings className="w-5 h-5" /> },
  ];

  const adminRoutes = [
    { name: "Admin Overview", path: "/dashboard/admin", icon: <PieChart className="w-5 h-5" /> },
    { name: "Manage Users", path: "/dashboard/admin/users", icon: <Users className="w-5 h-5" /> },
    { name: "Manage Destinations", path: "/dashboard/admin/destinations", icon: <Map className="w-5 h-5" /> },
    { name: "All Bookings", path: "/dashboard/admin/bookings", icon: <CalendarCheck className="w-5 h-5" /> },
  ];

  const routes = isAdmin ? adminRoutes : userRoutes;

  return (
    <div className="w-64 border-r border-foreground/10 bg-background flex flex-col h-full shrink-0 hidden md:flex">
      <div className="h-16 flex items-center px-6 border-b border-foreground/10">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary">TravelAI</Link>
        {isAdmin && <span className="ml-2 px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400 text-xs font-bold uppercase tracking-wider">Admin</span>}
      </div>
      
      <div className="p-4 flex-1 overflow-y-auto space-y-1">
        <div className="text-xs uppercase font-bold text-foreground/50 mb-4 px-2">Navigation</div>
        {routes.map((route) => {
          const isActive = pathname === route.path;
          return (
            <Link 
              key={route.path} 
              href={route.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-colors ${
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground/70 hover:bg-foreground/5"
              }`}
            >
              {route.icon}
              {route.name}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-foreground/10">
        <div className="p-4 bg-primary/10 rounded-2xl">
          <h4 className="font-bold text-sm mb-1">Need help?</h4>
          <p className="text-xs text-foreground/70 mb-3">Check our documentation or contact support.</p>
          <button className="w-full py-2 bg-primary text-white rounded-lg text-xs font-bold">Get Support</button>
        </div>
      </div>
    </div>
  );
}
