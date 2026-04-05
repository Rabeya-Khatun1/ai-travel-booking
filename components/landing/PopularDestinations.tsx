import { mockDestinations } from "@/data";
import { Star } from "lucide-react";
import Link from "next/link";

export default function PopularDestinations() {
  const destinations = mockDestinations.slice(0, 6);

  return (
    <section className="py-24 bg-foreground/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Trending Destinations</h2>
            <p className="text-foreground/70 text-lg">
              Check out where our AI is sending travelers this week.
            </p>
          </div>
          <Link href="/explore" className="text-primary font-bold hover:underline">
            View All Destinations &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link href={`/details/${dest.id}`} key={dest.id} className="group rounded-3xl overflow-hidden border border-foreground/10 bg-background shadow-md hover:shadow-xl transition-all h-[420px] flex flex-col cursor-pointer relative block">
              <div className="h-3/5 w-full bg-secondary/20 relative overflow-hidden">
                {dest.imageUrl && (
                  <img 
                    src={dest.imageUrl} 
                    alt={dest.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold shadow-sm">
                   <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> 4.9
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{dest.name}</h3>
                </div>
                <p className="text-foreground/70 mb-auto line-clamp-2">{dest.description}</p>
                <div className="mt-4 pt-4 border-t border-foreground/10 flex justify-between items-center z-10">
                  <span className="font-bold text-lg">From ${dest.price}</span>
                  <button className="px-4 py-2 bg-primary/10 text-primary rounded-xl font-medium hover:bg-primary hover:text-white transition-colors">
                    Explore
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
