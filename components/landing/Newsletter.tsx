"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSuccess(true);
      setEmail("");
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-secondary rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Get Travel Inspiration in your Inbox</h2>
            <p className="text-white/80 text-lg mb-10">
              Join 50,000+ travelers who receive our curated list of hidden destinations and exclusive deals every week.
            </p>
            
            {success ? (
              <div className="flex items-center justify-center gap-2 p-4 bg-white/20 backdrop-blur-md rounded-2xl max-w-md mx-auto text-white font-bold animate-in zoom-in">
                <CheckCircle2 className="w-6 h-6" /> You are now subscribed!
              </div>
            ) : (
              <form className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-full text-foreground focus:outline-none focus:ring-4 focus:ring-white/30"
                />
                <button 
                  type="submit"
                  className="px-8 py-4 bg-foreground text-background font-bold rounded-full hover:bg-foreground/90 transition-colors shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="text-sm text-white/60 mt-4">We care about your data. Read our Privacy Policy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
