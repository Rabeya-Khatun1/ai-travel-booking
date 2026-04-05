import React from "react";
import Link from "next/link";
import { ArrowRight, Search, Tag } from "lucide-react";

export default function BlogIndexPage() {
  const posts = [
    {
      title: "How to Pack Light for a Two Week European Tour",
      date: "Oct 12, 2026",
      category: "Tips",
      readTime: "5 min read",
      img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Discovering Hidden Gems in Southeast Asia",
      date: "Oct 08, 2026",
      category: "Guides",
      readTime: "8 min read",
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "The Future of AI in Travel Planning",
      date: "Oct 01, 2026",
      category: "Technology",
      readTime: "4 min read",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "10 Most Photogenic Streets in Kyoto",
      date: "Sep 25, 2026",
      category: "Photography",
      readTime: "6 min read",
      img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Surviving Long Haul Flights: A Guide",
      date: "Sep 18, 2026",
      category: "Tips",
      readTime: "7 min read",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Experiencing Greek Culinary Traditions",
      date: "Sep 12, 2026",
      category: "Food",
      readTime: "9 min read",
      img: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Blog Hero */}
      <div className="bg-primary/5 py-16 px-4 md:py-24 mb-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">The TravelAI Journal</h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Deep dive into expert travel tips, AI-powered itinerary generation tutorials, and spectacular global destinations.
          </p>
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input 
              type="text" 
              placeholder="Search all posts..." 
              className="w-full pl-12 pr-4 py-4 rounded-full border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row gap-12">
        
        {/* Main Content Grid */}
        <div className="md:w-3/4">
          <div className="flex justify-between items-center mb-8 border-b border-foreground/10 pb-4">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-bold cursor-pointer">All</span>
              <span className="px-3 py-1 bg-foreground/5 rounded-full text-xs font-bold cursor-pointer hover:bg-foreground/10 transition-colors">Tips</span>
              <span className="px-3 py-1 bg-foreground/5 rounded-full text-xs font-bold cursor-pointer hover:bg-foreground/10 transition-colors">Guides</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <div key={i} className="group flex flex-col h-[400px] border border-foreground/10 rounded-3xl overflow-hidden hover:shadow-xl transition-all cursor-pointer bg-background">
                <div className="h-48 w-full overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-background/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    <span>{post.category}</span>
                    <span className="text-foreground/50">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="mt-auto text-sm text-foreground/50 flex justify-between items-center w-full">
                    <span>{post.date}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="px-8 py-3 bg-secondary/10 text-secondary border border-secondary/20 font-bold rounded-xl hover:bg-secondary hover:text-white transition-colors">
              Load More Posts
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:w-1/4 space-y-8">
          <div className="p-6 bg-foreground/5 rounded-3xl border border-foreground/10">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Tag className="w-5 h-5 text-primary" /> Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['Backpacking', 'Luxury', 'Europe', 'AI Tips', 'Itineraries', 'Asia'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-background border border-foreground/10 text-xs font-medium rounded-full cursor-pointer hover:border-primary hover:text-primary transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-primary to-secondary rounded-3xl text-white">
            <h3 className="font-bold text-xl mb-2">Subscribe</h3>
            <p className="text-white/80 text-sm mb-4">Never miss a travel tip again. Delivered weekly.</p>
            <input type="email" placeholder="Email address" className="w-full mb-3 px-4 py-2 rounded-lg text-foreground focus:outline-none" />
            <button className="w-full py-2 bg-foreground text-background font-bold rounded-lg hover:bg-foreground/90 transition-colors text-sm">Sign Up</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
