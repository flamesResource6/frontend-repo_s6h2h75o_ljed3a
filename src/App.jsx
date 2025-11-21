import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.08),transparent_60%)]" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Gallery />
        <Process />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70">
          <p>© {new Date().getFullYear()} Schreinerei Otterbach – Niederfischbach</p>
          <div className="text-sm">
            Qualität • Präzision • Zuverlässige Ausführung
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
