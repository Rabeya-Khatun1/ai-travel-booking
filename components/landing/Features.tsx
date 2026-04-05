import { Sparkles, Calendar, Map, CheckCircle2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Smart AI Itineraries",
      description: "Our AI analyzes millions of data points to craft the perfect daily schedule tailored just for you."
    },
    {
      icon: <Calendar className="w-8 h-8 text-secondary" />,
      title: "Flexible Scheduling",
      description: "Easily drag and drop activities, or let the AI instantly recalculate routes if plans change."
    },
    {
      icon: <Map className="w-8 h-8 text-primary" />,
      title: "Interactive Maps",
      description: "Visualize your entire journey with integrated 3D maps and instant navigation routing."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-secondary" />,
      title: "Instant Booking",
      description: "Reserve flights, hotels, and activities with a single click, perfectly synced."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose AI Travel?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            We handle the complex logistics so you can focus entirely on enjoying the journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="p-8 rounded-3xl border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition-colors h-[280px] flex flex-col items-start justify-center">
              <div className="p-3 bg-background rounded-2xl shadow-sm mb-6 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
