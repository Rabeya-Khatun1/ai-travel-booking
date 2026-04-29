"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin } from "lucide-react";

// import image1 from '@/public/images/hero1.mp4';
// import image2 from '@/public/images/hero2.mp4';
// import image3 from '@/public/images/hero3.mp4';
// import image4 from '@/public/images/hero4.mp4';
// import image5 from '@/public/images/hero5.mp4';
// import image6 from '@/public/images/hero6.mp4';

export default function Hero() {
  const [prompt, setPrompt] = useState("");
  const [currentVideo, setCurrentVideo] = useState(0);
  const router = useRouter();

const image1 = '/images/hero1.mp4';
const image2 = '/images/hero2.mp4';
const image3 = '/images/hero3.mp4';
const image4 = '/images/hero4.mp4';
const image5 = '/images/hero5.mp4';
const image6 = '/images/hero6.mp4';

  const videos = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ];

  // 🔥 auto change video
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 5000); // 5 sec

    return () => clearInterval(interval);
  }, []);

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
    <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0 ">
  {videos.map((src, index) => (
    <video
      key={index}
      autoPlay
      loop
      muted
      playsInline
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
        index === currentVideo ? "opacity-100" : "opacity-0"
      }`}
      onLoadedData={(e) => (e.currentTarget.playbackRate = 1.25)}
    >
      <source src={src} type="video/mp4" />
    </video>
  ))}
</div>


      {/* ❗ তোমার existing UI (unchanged) */}
      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center text-white">
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Plan Your Trip <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            with AI
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
          Enter your dream destination and let our advanced AI generate the perfect personalized itinerary for you in seconds.
        </p>

        <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 shadow-2xl flex flex-col sm:flex-row gap-2 items-center">
          <div className="flex-1 flex items-center gap-3 px-6 w-full">
            <MapPin className="text-primary w-6 h-6 shrink-0" />
            <input 
              type="text" 
              placeholder="Where do you want to go?"
              className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/60 py-4 text-lg"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <button 
            onClick={handleGenerate}
            className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Generate Plan
          </button>
        </div>

      </div>
    </section>
  );
}