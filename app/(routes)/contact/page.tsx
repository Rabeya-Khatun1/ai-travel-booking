"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Reset after 5s
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 lg:py-32 max-w-6xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6">Get In Touch</h1>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Have questions about our AI travel engine, business integrations, or premium pricing? Our technical support teams are ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Contact Details Panel */}
          <div className="lg:col-span-2 space-y-10">
            <div>
               <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
               <p className="text-foreground/60 mb-8">We try to reply to all queries within 24 working hours.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <p className="text-foreground/60 text-sm">support@travelai.com</p>
                  <p className="text-foreground/60 text-sm">enterprise@travelai.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Call Us</h4>
                  <p className="text-foreground/60 text-sm">+1 (555) 000-0000</p>
                  <p className="text-foreground/60 text-sm">Mon-Fri 9am to 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-foreground/10 rounded-xl text-foreground">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Headquarters</h4>
                  <p className="text-foreground/60 text-sm">123 Market Street, Suite 900</p>
                  <p className="text-foreground/60 text-sm">San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-3 bg-foreground/5 p-8 md:p-10 rounded-3xl border border-foreground/10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in zoom-in">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
                <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                <p className="text-foreground/60 max-w-xs mx-auto">One of our representatives will securely contact your email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">First Name</label>
                    <input type="text" required placeholder="John" className="w-full p-4 rounded-xl border border-foreground/10 bg-background focus:ring-2 focus:ring-primary focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Last Name</label>
                    <input type="text" required placeholder="Doe" className="w-full p-4 rounded-xl border border-foreground/10 bg-background focus:ring-2 focus:ring-primary focus:outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Email Address</label>
                  <input type="email" required placeholder="john@example.com" className="w-full p-4 rounded-xl border border-foreground/10 bg-background focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Subject Selection</label>
                  <select required className="w-full p-4 rounded-xl border border-foreground/10 bg-background focus:ring-2 focus:ring-primary focus:outline-none text-foreground/80 cursor-pointer">
                    <option value="">Select a topic...</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Inquiry</option>
                    <option value="partnership">Enterprise Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Your Message</label>
                  <textarea required rows={5} placeholder="How can we help?" className="w-full p-4 rounded-xl border border-foreground/10 bg-background focus:ring-2 focus:ring-primary focus:outline-none resize-none"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                  <Send className="w-5 h-5" /> Send Message 
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
