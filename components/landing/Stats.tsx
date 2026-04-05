export default function Stats() {
  const stats = [
    { value: "500K+", label: "Trips Planned" },
    { value: "120+", label: "Countries Covered" },
    { value: "98%", label: "Happy Travelers" },
    { value: "24/7", label: "AI Support" },
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl md:text-5xl font-black mb-2 tracking-tight">{stat.value}</span>
              <span className="text-white/80 font-medium text-lg">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
