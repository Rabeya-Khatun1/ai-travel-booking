"use client";

import { CheckCircle2, Navigation, Zap, Globe2 } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const missionCards = [
    { icon: <Zap className="w-8 h-8 text-primary" />, title: "Instant AI Infrastructure", desc: "We run thousands of complex travel parameters through top-tier Large Language Models to craft localized plans in less than 3 seconds." },
    { icon: <Globe2 className="w-8 h-8 text-secondary" />, title: "Worldwide Integrations", desc: "Our mock pricing engines connect globally. Wherever you wish to fly, we have the hypothetical network endpoints to map it immediately." },
    { icon: <Navigation className="w-8 h-8 text-primary" />, title: "Hyper-Personalization", desc: "No more generic top-10 lists. Build vacations entirely tailored precisely to your specific budget and stylistic constraints." },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="relative py-24 md:py-32 overflow-hidden bg-primary/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Revolutionizing Destination Logistics</h1>
          <p className="text-xl text-foreground/70 mb-10">
            TravelAI isn't just an itinerary generator. It is a comprehensive framework merging cutting-edge generative models directly with dynamic localized scheduling.
          </p>
          <Link href="/plan" className="px-8 py-4 bg-primary text-white rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all">
            See the AI Engine in action
          </Link>
        </div>
      </div>

      {/* Core Mission */}
      <div className="py-24 container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">The Architecture of Vacationing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionCards.map((card, i) => (
            <div key={i} className="p-8 rounded-3xl border border-foreground/10 bg-background shadow-lg hover:-translate-y-2 transition-transform duration-300">
               <div className="p-4 bg-foreground/5 rounded-2xl w-max mb-6">
                 {card.icon}
               </div>
               <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
               <p className="text-foreground/70 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Callout */}
      <div className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-background/70 mb-10">Stop wasting 15 hours coordinating Google Docs and 12 different search tabs.</p>
          <Link href="/register" className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors">
            Create Free Account
          </Link>
        </div>
      </div>
    </div>
  );
}
