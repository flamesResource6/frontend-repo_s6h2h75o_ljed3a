import { PencilRuler, Hammer, Sparkles, PackageOpen } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: PencilRuler,
      title: "Beratung & Planung",
      desc: "Wir entwickeln gemeinsam die optimale Lösung – passgenau für Ihren Raum und Ihre Anforderungen.",
    },
    {
      icon: Hammer,
      title: "Fertigung",
      desc: "Moderne Maschinentechnik und vernetzte Prozesse sorgen für Präzision und Qualität.",
    },
    {
      icon: PackageOpen,
      title: "Montage",
      desc: "Termintreu und sauber montiert – perfekt eingepasst vor Ort.",
    },
    {
      icon: Sparkles,
      title: "Übergabe",
      desc: "Nachkontrolle, Feinschliff und Einweisung – alles bereit zur Nutzung.",
    },
  ];

  return (
    <section id="prozess" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">So arbeiten wir</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Transparente Abläufe, zuverlässige Ausführung und ein Ergebnis, das überzeugt.</p>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <li key={title} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm text-white/60">0{idx + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
