export default function About() {
  return (
    <section id="ueber-uns" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Familienbetrieb mit Anspruch</h2>
            <p className="mt-4 text-white/80">
              Die Schreinerei Otterbach ist ein erfahrener Familienbetrieb aus Niederfischbach. Wir verbinden traditionelles Handwerk mit modernster Maschinentechnik und vernetzten Produktionsprozessen. Qualität, Präzision und zuverlässige Ausführung stehen bei uns an erster Stelle.
            </p>
            <p className="mt-4 text-white/80">
              Von der ersten Beratung über die detaillierte Planung bis zur passgenauen Fertigung und Montage – bei uns erhalten Sie alles aus einer Hand.
            </p>
          </div>
          <div>
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-3">
              <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop" alt="Schreinerei Otterbach Werkstatt" className="rounded-2xl object-cover h-[320px] w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
