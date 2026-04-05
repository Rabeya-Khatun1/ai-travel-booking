import { Tent, Building2, Umbrella, MountainSnow, Palmtree, Utensils } from "lucide-react";

export default function Categories() {
  const categories = [
    { name: "Beach", icon: <Umbrella className="w-6 h-6" />, color: "bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400" },
    { name: "Mountains", icon: <MountainSnow className="w-6 h-6" />, color: "bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400" },
    { name: "City", icon: <Building2 className="w-6 h-6" />, color: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300" },
    { name: "Camping", icon: <Tent className="w-6 h-6" />, color: "bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400" },
    { name: "Tropical", icon: <Palmtree className="w-6 h-6" />, color: "bg-yellow-100 dark:bg-yellow-950/40 text-yellow-600 dark:text-yellow-400" },
    { name: "Culinary", icon: <Utensils className="w-6 h-6" />, color: "bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Browse by Vibe</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.name} 
              className="flex flex-col items-center justify-center p-8 rounded-3xl border border-foreground/10 hover:border-primary/50 bg-background shadow-sm hover:shadow-lg transition-all cursor-pointer h-[180px] group"
            >
              <div className={`p-4 rounded-full mb-4 group-hover:scale-110 transition-transform ${cat.color}`}>
                {cat.icon}
              </div>
              <span className="font-semibold">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
