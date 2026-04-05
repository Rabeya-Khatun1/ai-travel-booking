"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Search, MapPin, Star, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { mockDestinations, Destination } from "@/data";

const ITEMS_PER_PAGE = 8;

export default function ExplorePage() {
  const [data, setData] = useState<Destination[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters State
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState<number>(5000);
  const [sortBy, setSortBy] = useState("recommended");
  const [currentPage, setCurrentPage] = useState(1);

  // Simulate API Fetch
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setData(mockDestinations);
      setIsLoading(false);
    }, 1200); // 1.2s skeleton loader demo
    return () => clearTimeout(timer);
  }, []);

  // Filter & Sort Logic
  const filteredAndSortedData = useMemo(() => {
    let result = [...data];

    // Filter by Search Query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (dest) => dest.name.toLowerCase().includes(q) || dest.location.toLowerCase().includes(q)
      );
    }

    // Filter by Price
    result = result.filter((dest) => dest.price <= maxPrice);

    // Sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        break;
      default:
        // "recommended" keeps original mock order (or could be custom scored)
        break;
    }

    return result;
  }, [data, searchQuery, maxPrice, sortBy]);

  // Pagination Logic
  const totalItems = filteredAndSortedData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  
  // Ensure we don't end up on an empty page if filters reduce results
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const currentItems = filteredAndSortedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Header Area */}
      <div className="bg-primary/5 py-12 px-4 mb-8">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Explore Destinations</h1>
          <p className="text-foreground/70 text-lg max-w-2xl">
            Find the perfect getaway from our curated list of world-class locations. Filter by price, rating, and more to narrow down your dream vacation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        
        {/* Controls / Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-foreground/5 p-4 rounded-2xl mb-12 border border-foreground/10">
          
          {/* Search Bar */}
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" />
            <input 
              type="text" 
              placeholder="Search by destination or city..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-primary w-full"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto items-center">
            
            {/* Price Filter */}
            <div className="flex items-center gap-3 w-full sm:w-auto px-4 py-2 bg-background rounded-xl border border-foreground/10">
              <SlidersHorizontal className="w-4 h-4 text-primary" />
              <div className="flex flex-col text-xs font-medium w-32">
                <span>Max Price: ${maxPrice}</span>
                <input 
                  type="range" 
                  min="500" max="5000" step="100" 
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-primary h-1 bg-foreground/10 rounded-full appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Sort Dropdown */}
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full sm:w-auto py-3 px-4 rounded-xl border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer font-medium"
            >
              <option value="recommended">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest Additions</option>
            </select>
          </div>
        </div>

        {/* Results Grid - 4 columns on large screens */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse bg-background border border-foreground/10 rounded-3xl overflow-hidden h-[420px] flex flex-col">
                <div className="w-full h-48 bg-foreground/10" />
                <div className="p-5 flex flex-col flex-1 gap-4">
                  <div className="h-6 w-3/4 bg-foreground/10 rounded" />
                  <div className="h-4 w-1/2 bg-foreground/10 rounded" />
                  <div className="mt-auto h-10 w-full bg-foreground/10 rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        ) : currentItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentItems.map((dest) => (
              <div key={dest.id} className="group rounded-3xl border border-foreground/10 bg-background shadow-sm hover:shadow-xl transition-all h-[420px] flex flex-col overflow-hidden relative">
                {/* Image Placeholder */}
                <div className="h-48 w-full bg-secondary/10 relative overflow-hidden shrink-0">
                  {dest.imageUrl && (
                    <img 
                      src={dest.imageUrl} 
                      alt={dest.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
                  <div className="absolute top-3 right-3 z-20 bg-background/90 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 text-xs font-bold shadow-sm border border-foreground/5">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /> {dest.rating} ({dest.reviews})
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5 flex-1 flex flex-col z-20">
                  <div className="flex items-center gap-1 text-sm text-primary font-bold mb-2">
                    <MapPin className="w-4 h-4" /> {dest.location}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight mb-2">
                    {dest.name}
                  </h3>
                  
                  <div className="mt-auto pt-4 border-t border-foreground/10 flex justify-between items-center w-full">
                     <div className="flex flex-col">
                       <span className="text-xs text-foreground/50 uppercase font-bold">Starts from</span>
                       <span className="font-black text-xl">${dest.price}</span>
                     </div>
                     <Link href={`/details/${dest.id}`} className="px-5 py-2.5 bg-foreground/5 text-foreground hover:bg-primary hover:text-white rounded-xl font-bold text-sm transition-colors">
                       View Details
                     </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-foreground/5 rounded-3xl border border-foreground/10 border-dashed">
            <h3 className="text-2xl font-bold mb-2">No destinations found</h3>
            <p className="text-foreground/60">Try adjusting your search criteria or price filter.</p>
            <button 
              onClick={() => { setSearchQuery(""); setMaxPrice(5000); setSortBy("recommended"); }}
              className="mt-6 px-6 py-2 bg-primary text-white rounded-xl font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {!isLoading && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-16">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full border border-foreground/20 hover:bg-foreground/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="font-medium">
              Page {currentPage} of {totalPages}
            </div>
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full border border-foreground/20 hover:bg-foreground/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
