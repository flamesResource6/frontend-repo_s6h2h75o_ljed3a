import { CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20" id="home">
      <div className="absolute -top-32 -right-32 h-[30rem] w-[30rem] rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-amber-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Maßarbeit in Holz – präzise, modern, zuverlässig.
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl">
              Familienbetrieb aus Niederfischbach: Ladenbau, Objekteinrichtungen und individueller Innenausbau – von der Planung bis zur Montage aus einer Hand.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Beratung & Planung", "Fertigung mit High-Tech", "Montage vor Ort"].map((b) => (
                <span key={b} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/90">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" /> {b}
                </span>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3">
              <a href="#kontakt" className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-5 py-3 font-semibold text-slate-900 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.8)] hover:bg-amber-400 transition-colors">
                Angebot anfragen
              </a>
              <a href="#leistungen" className="rounded-xl border border-white/15 px-5 py-3 text-white/90 hover:bg-white/5 transition-colors">
                Leistungen entdecken
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-amber-500/20 via-transparent to-amber-400/10 blur-2xl rounded-3xl" />
              <div className="relative rounded-3xl border border-white/10 bg-slate-800/40 p-3 backdrop-blur">
                <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop" alt="Werkstatt Holzverarbeitung" className="rounded-2xl object-cover h-[360px] w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
