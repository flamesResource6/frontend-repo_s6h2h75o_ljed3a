import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Kontakt</h2>
            <p className="mt-3 text-white/80">Lassen Sie uns über Ihr Projekt sprechen. Wir beraten Sie persönlich und erstellen ein individuelles Angebot.</p>

            <div className="mt-6 space-y-3 text-white/80">
              <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-amber-400" /> +49 (0000) 000000</p>
              <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-amber-400" /> info@schreinerei-otterbach.de</p>
              <p className="flex items-center gap-2"><MapPin className="h-5 w-5 text-amber-400" /> Niederfischbach</p>
            </div>
          </div>

          <form className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 space-y-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Name</label>
              <input type="text" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500/40" placeholder="Ihr Name" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">E-Mail</label>
              <input type="email" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500/40" placeholder="Ihre E-Mail" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Nachricht</label>
              <textarea rows="4" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500/40" placeholder="Ihr Anliegen"></textarea>
            </div>
            <button type="button" className="w-full rounded-xl bg-amber-500 px-5 py-3 font-semibold text-slate-900 hover:bg-amber-400 transition-colors">Nachricht senden</button>
          </form>
        </div>
      </div>
    </section>
  );
}
