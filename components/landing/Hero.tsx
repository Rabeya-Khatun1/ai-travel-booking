"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin } from "lucide-react";

export default function Hero() {
  const [prompt, setPrompt] = useState("");
  const router = useRouter();

  const handleGenerate = () => {
    if (prompt.trim()) {
      router.push(`/plan?prompt=${encodeURIComponent(prompt.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleGenerate();
    }
  };

  return (
    <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700">
          Plan Your Trip <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            with AI
          </span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150">
          Enter your dream destination and let our advanced AI generate the perfect personalized itinerary for you in seconds.
        </p>

        {/* Search Input Box */}
        <div className="w-full max-w-3xl bg-background/80 backdrop-blur-md p-2 rounded-full border border-foreground/10 shadow-2xl flex flex-col sm:flex-row gap-2 items-center animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
          <div className="flex-1 flex items-center gap-3 px-6 w-full">
            <MapPin className="text-primary w-6 h-6 shrink-0" />
            <input 
              type="text" 
              placeholder="Where do you want to go? e.g. 3 day trip in Cox's Bazar under 10000 taka"
              className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-foreground/50 py-4 text-lg"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <button 
            onClick={handleGenerate}
            className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Generate Plan
          </button>
        </div>
      </div>
    </section>
  );
}
