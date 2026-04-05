import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Solo Traveler",
      text: "The AI completely understood my desire for off-the-beaten-path cafes in Tokyo. It scheduled my entire week perfectly without feeling rushed.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Mark & Emma",
      role: "Honeymooners",
      text: "We were stressed about planning our trip to Greece. This app not only built the itinerary but found hotels we would have never discovered ourselves.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "David Chen",
      role: "Digital Nomad",
      text: "I travel constantly for work. Being able to generate a weekend exploration plan instantly in any new city is a total game changer for me.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-foreground/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Loved by Travelers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <div key={i} className="bg-background p-8 rounded-3xl border border-foreground/10 flex flex-col shadow-sm h-[320px]">
              <Quote className="w-10 h-10 text-primary/20 mb-4 inline-block" />
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-foreground/80 italic flex-1">{test.text}</p>
              
              <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                  <img src={test.avatar} alt={test.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">{test.name}</h4>
                  <p className="text-sm text-foreground/60">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
