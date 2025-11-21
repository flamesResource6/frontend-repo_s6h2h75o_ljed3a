import { Menu, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#projekte", label: "Projekte" },
    { href: "#prozess", label: "Prozess" },
    { href: "#ueber-uns", label: "Über uns" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 ring-1 ring-white/20 shadow-lg" />
              <div>
                <p className="text-white font-semibold leading-tight">Schreinerei Otterbach</p>
                <p className="text-xs text-white/60 leading-none">Niederfischbach</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a href="#kontakt" className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-slate-900 font-semibold shadow-[0_10px_30px_-10px_rgba(245,158,11,0.8)] hover:bg-amber-400 transition-colors">
                <Phone className="h-4 w-4" /> Angebot anfragen
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white">
              <Menu />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((n) => (
                  <a key={n.href} href={n.href} className="text-white/80 hover:text-white">
                    {n.label}
                  </a>
                ))}
                <a href="#kontakt" className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-slate-900 font-semibold">
                  <Phone className="h-4 w-4" /> Angebot anfragen
                </a>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <MapPin className="h-4 w-4" /> Niederfischbach
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
