"use client";

import { useState } from "react";
import { Search, MapPin, Edit, Trash2, Plus, Filter } from "lucide-react";
import { mockDestinations } from "@/data";

export default function AdminDestinations() {
  const [search, setSearch] = useState("");
  
  const filteredDestinations = mockDestinations.filter(d => 
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold">Manage Destinations</h1>
          <p className="text-foreground/60">Add, edit, or remove catalog locations available to the AI planner.</p>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" /> Add Destination
        </button>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 bg-background p-4 rounded-t-2xl border border-foreground/10 border-b-0 mt-6">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
          <input 
            type="text" 
            placeholder="Search catalog..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-foreground/5 border border-foreground/10 rounded-xl focus:outline-none focus:border-primary text-sm"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-foreground/10 rounded-xl font-medium text-sm hover:bg-foreground/5 transition-colors">
          <Filter className="w-4 h-4" /> Filter Catalog
        </button>
      </div>

      <div className="bg-background border border-foreground/10 rounded-b-2xl overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-foreground/5 text-sm uppercase text-foreground/50 font-bold">
              <th className="p-4 border-b border-foreground/10 w-20">Media</th>
              <th className="p-4 border-b border-foreground/10">Location Info</th>
              <th className="p-4 border-b border-foreground/10">Base Price</th>
              <th className="p-4 border-b border-foreground/10">Rating</th>
              <th className="p-4 border-b border-foreground/10">Tags</th>
              <th className="p-4 border-b border-foreground/10 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDestinations.map((dest) => (
              <tr key={dest.id} className="border-b border-foreground/5 hover:bg-foreground/5 transition-colors group">
                <td className="p-4">
                  <div className="w-16 h-12 rounded-lg bg-secondary/10 overflow-hidden relative">
                    {dest.imageUrl && <img src={dest.imageUrl} className="w-full h-full object-cover" alt="" />}
                  </div>
                </td>
                <td className="p-4">
                  <p className="font-bold text-base leading-tight">{dest.name}</p>
                  <p className="text-xs text-foreground/50 flex items-center gap-1 mt-1"><MapPin className="w-3 h-3" /> {dest.location}</p>
                </td>
                <td className="p-4 font-mono font-bold text-sm">${dest.price}</td>
                <td className="p-4">
                  <span className="text-xs font-bold px-2 py-1 rounded-md bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500">
                    {dest.rating} ({dest.reviews})
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-1 flex-wrap">
                    {dest.tags?.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-[10px] uppercase font-bold px-1.5 py-0.5 bg-foreground/10 rounded">{tag}</span>
                    ))}
                    {(dest.tags?.length || 0) > 2 && <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 bg-foreground/5 rounded text-foreground/50">+{dest.tags!.length - 2}</span>}
                  </div>
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
        {filteredDestinations.length === 0 && (
          <div className="p-12 text-center text-foreground/50 font-medium">No destinations found in catalog.</div>
        )}
      </div>
    </div>
  );
}
