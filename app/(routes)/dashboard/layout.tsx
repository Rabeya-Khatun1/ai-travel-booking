"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNav from "@/components/dashboard/DashboardNav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Global Mock Role State (since we don't have a DB hooked up)
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="flex h-screen bg-foreground/5 w-full overflow-hidden z-50 fixed inset-0">
      <Sidebar isAdmin={isAdmin} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardNav isAdmin={isAdmin} toggleMockRole={() => setIsAdmin(!isAdmin)} />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
