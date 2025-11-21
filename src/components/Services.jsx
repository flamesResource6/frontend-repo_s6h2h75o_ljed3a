import { Wrench, Store, Building2, Ruler, Layers, Truck } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Store,
      title: "Ladenbau",
      desc: "Individuelle Shop-Konzepte, Theken, Regalsysteme und Präsentationsmöbel – funktional und markenstark.",
    },
    {
      icon: Building2,
      title: "Objekteinrichtungen",
      desc: "Durchdachte Lösungen für Büros, Praxen, Hotels und öffentliche Räume – langlebig und präzise.",
    },
    {
      icon: Ruler,
      title: "Innenausbau",
      desc: "Maßgefertigte Möbel, Einbauschränke, Raumteiler und komplette Wohn- und Geschäftsräume.",
    },
    {
      icon: Layers,
      title: "Planung & Fertigung",
      desc: "Digitale Planung, vernetzte Produktion und modernste Maschinentechnik für höchste Qualität.",
    },
    {
      icon: Wrench,
      title: "Montage",
      desc: "Zuverlässige Umsetzung vor Ort – passgenau, sauber, termingerecht.",
    },
    {
      icon: Truck,
      title: "Projektabwicklung",
      desc: "Alles aus einer Hand: Beratung, Planung, Produktion, Logistik und Installation.",
    },
  ];

  return (
    <section id="leistungen" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Leistungen</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Individuelle Lösungen für Ladenbau, Objekteinrichtungen und Innenausbau – von der Idee bis zur fertigen Montage.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-transform hover:-translate-y-1">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-amber-500/10 to-transparent" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-white/70 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
