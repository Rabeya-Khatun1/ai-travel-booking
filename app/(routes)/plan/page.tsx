"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { Loader2, MapPin, Calendar, Wallet, AlertCircle, Sparkles, Clock } from "lucide-react";
import Link from "next/link";

interface Activity {
  time: string;
  desc: string;
}

interface DayPlan {
  day: number;
  theme: string;
  activities: Activity[];
}

interface TravelPlan {
  title: string;
  destination: string;
  duration: string;
  budget: string;
  days: DayPlan[];
  budgetTips: string[];
}

function PlanGenerator() {
  const searchParams = useSearchParams();
  const prompt = searchParams.get("prompt");
  
  const [data, setData] = useState<TravelPlan | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!prompt) {
      setLoading(false);
      setError("No trip parameters provided. Please go back and enter a description.");
      return;
    }

    const generatePlan = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch("/api/ai", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        });

        if (!response.ok) {
          throw new Error("Failed to generate plan");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError("Our AI hit a creative block while generating your itinerary. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    generatePlan();
  }, [prompt]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 space-y-6">
        <div className="relative">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-ping"></div>
          <Loader2 className="w-16 h-16 text-primary animate-spin relative z-10" />
        </div>
        <h2 className="text-2xl font-bold">Dreaming up your perfect trip...</h2>
        <p className="text-foreground/60 max-w-md text-center">
          Our AI is scanning thousands of possibilities to build a custom itinerary based on "{prompt}".
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="p-6 bg-red-100 dark:bg-red-950/30 rounded-full mb-6">
          <AlertCircle className="w-12 h-12 text-red-600 dark:text-red-400" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Oops! Something went wrong</h2>
        <p className="text-foreground/70 mb-8 max-w-md">{error}</p>
        <Link href="/" className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors">
          Try a new prompt
        </Link>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 shadow-xl border border-foreground/10 bg-background rounded-3xl -mt-8 relative z-20">
      
      {/* Header Info */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary font-bold rounded-full mb-6 text-sm">
          <Sparkles className="w-4 h-4" /> AI Generated
        </div>
        <h1 className="text-3xl md:text-5xl font-black mb-6">{data.title}</h1>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-foreground/5 px-4 py-2 rounded-xl">
            <MapPin className="w-5 h-5 text-primary" /> <span className="font-medium">{data.destination}</span>
          </div>
          <div className="flex items-center gap-2 bg-foreground/5 px-4 py-2 rounded-xl">
            <Calendar className="w-5 h-5 text-secondary" /> <span className="font-medium">{data.duration}</span>
          </div>
          <div className="flex items-center gap-2 bg-foreground/5 px-4 py-2 rounded-xl">
            <Wallet className="w-5 h-5 text-green-500" /> <span className="font-medium">{data.budget}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Itinerary */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold border-b border-foreground/10 pb-4">Day-by-Day Itinerary</h2>
          
          <div className="space-y-6">
            {data.days.map((dayPlan) => (
              <div key={dayPlan.day} className="bg-foreground/5 p-6 rounded-2xl border border-foreground/10 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl shrink-0">
                    {dayPlan.day}
                  </div>
                  <h3 className="text-xl font-bold">{dayPlan.theme}</h3>
                </div>
                
                <div className="space-y-6 ml-6 border-l-2 border-foreground/10 pl-6">
                  {dayPlan.activities.map((act, i) => (
                    <div key={i} className="relative">
                      <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[1.93rem] top-1.5 ring-4 ring-background" />
                      <div className="font-semibold text-primary flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4" /> {act.time}
                      </div>
                      <p className="text-foreground/80 leading-relaxed">{act.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Tips Sidebar */}
        <div className="space-y-6">
          <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-2xl sticky top-24">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-600 dark:text-green-400">
              <Wallet className="w-6 h-6" /> Budget Tips
            </h2>
            <ul className="space-y-4">
              {data.budgetTips.map((tip, i) => (
                <li key={i} className="flex gap-3 text-foreground/80">
                  <div className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm font-bold shadow-sm">
                    {i + 1}
                  </div>
                  <span className="leading-tight">{tip}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full mt-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-lg">
              Save Itinerary
            </button>
            <button className="w-full mt-3 py-3 border border-foreground/20 text-foreground font-bold rounded-xl hover:bg-foreground/5 transition-colors">
              Modify Plan
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default function PlanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background pb-20">
      <div className="bg-primary/5 pt-10 pb-20 px-4">
        <div className="container mx-auto">
          <Link href="/" className="text-primary font-medium hover:underline inline-flex items-center gap-2 mb-4">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl font-extrabold text-foreground">Your Plan</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <Suspense fallback={
          <div className="flex justify-center py-32">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        }>
          <PlanGenerator />
        </Suspense>
      </div>
    </div>
  );
}
