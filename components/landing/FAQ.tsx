"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "How does the AI itinerary generation work?",
      a: "Our AI processes your preferences, budget, and travel dates against a massive database of flights, hotels, and attractions to build an optimized, minute-by-minute itinerary that maximizes your experience."
    },
    {
      q: "Can I modify the AI-generated plans?",
      a: "Yes! The AI produces a base plan, which you can then customize. Edit times, swap out restaurants, or lock in specific days and let the AI regenerate the rest."
    },
    {
      q: "Is it free to generate travel plans?",
      a: "Basic itinerary generation is completely free. We offer a premium subscription for advanced features like live real-time booking integrations and 24/7 AI concierge support during your trip."
    },
    {
      q: "Does TravelAI actually book the flights and hotels?",
      a: "Yes, you can safely and securely book accommodations and travel directly through our platform once you're satisfied with your itinerary."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-foreground/5">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-foreground/70 text-lg">Everything you need to know about TravelAI.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-background rounded-2xl border border-foreground/10 overflow-hidden"
            >
              <button 
                className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-lg focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 text-foreground/50 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-foreground/70 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
