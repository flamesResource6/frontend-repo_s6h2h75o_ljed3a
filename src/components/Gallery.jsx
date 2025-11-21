import { useState, useEffect } from "react";
import { X, Maximize2 } from "lucide-react";

export default function Gallery() {
  const images = [
    {
      src:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
      alt: "Massivholzplatte in der Werkstatt",
    },
    {
      src:
        "https://images.unsplash.com/photo-1519710164239-4f071f3dcd1a?q=80&w=1600&auto=format&fit=crop",
      alt: "Handwerk: Maßnehmen und Anzeichnen",
    },
    {
      src:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
      alt: "CNC-Fräse mit Präzisionsschnitt",
    },
    {
      src:
        "https://images.unsplash.com/photo-1504148455329-9f4f0d1e5f81?q=80&w=1600&auto=format&fit=crop",
      alt: "Feinschliff an Kanten und Flächen",
    },
    {
      src:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1600&auto=format&fit=crop",
      alt: "Montage vor Ort: Einbauten nach Maß",
    },
    {
      src:
        "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1600&auto=format&fit=crop",
      alt: "Detail: Gehrung und Verbindung",
    },
    {
      src:
        "https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1600&auto=format&fit=crop",
      alt: "Werkbank mit Werkzeugen",
    },
    {
      src:
        "https://images.unsplash.com/photo-1494949360228-4e9bde560065?q=80&w=1600&auto=format&fit=crop",
      alt: "Oberfläche: Öl/Wachs-Finish",
    },
    {
      src:
        "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1600&auto=format&fit=crop",
      alt: "Stauraumlösung im Objektbereich",
    },
    {
      src:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop",
      alt: "Einbauschrank mit Schiebetüren",
    },
    {
      src:
        "https://images.unsplash.com/photo-1521783988139-893ce6e2b701?q=80&w=1600&auto=format&fit=crop",
      alt: "Individuelle Küche aus Holz",
    },
    {
      src:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      alt: "Materialauswahl und Muster",
    },
  ];

  const [active, setActive] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="galerie" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Galerie</h2>
          <p className="mt-3 text-white/70 max-w-2xl">
            Einblicke in Werkstatt, Material und Ergebnisse. Mehr Eindrücke folgen – gerne stellen wir auf
            Anfrage projektbezogene Referenzen zusammen.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {images.map((img, idx) => (
            <figure
              key={idx}
              className="relative mb-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto transition-transform duration-700 hover:scale-[1.02] cursor-zoom-in"
                onClick={() => setActive(img)}
              />
              <figcaption className="flex items-center justify-between p-3 text-xs text-white/70">
                <span className="truncate pr-2">{img.alt}</span>
                <button
                  aria-label="Bild vergrößern"
                  className="inline-flex items-center gap-1 rounded-lg bg-slate-800/70 px-2 py-1 text-white/80 hover:text-white hover:bg-slate-700/80 transition"
                  onClick={() => setActive(img)}
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                </button>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setActive(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} className="w-full h-auto rounded-xl shadow-2xl" />
            <button
              aria-label="Schließen"
              className="absolute -top-3 -right-3 rounded-full bg-slate-900/90 p-2 text-white/90 hover:text-white hover:bg-slate-800 shadow-lg"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <div className="mt-3 text-center text-white/80 text-sm">{active.alt}</div>
          </div>
        </div>
      )}
    </section>
  );
}
