export default function Projects() {
  const projects = [
    {
      title: "Eyecatcher-Theke für Modehaus",
      img: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Praxis-Einrichtung mit Stauraum",
      img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Einbauschrank nach Maß",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <section id="projekte" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ausgewählte Projekte</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Ein Blick in unsere Arbeit: passgenaue Lösungen für Geschäfts- und Wohnräume.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <figure key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <div className="overflow-hidden">
                <img src={p.img} alt={p.title} className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <figcaption className="p-4 text-white/90 text-sm">{p.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
