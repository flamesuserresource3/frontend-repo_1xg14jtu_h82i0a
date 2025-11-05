import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Decorative background glow */}
      <div
        aria-hidden
        className="fixed inset-0 opacity-60 blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(40% 30% at 15% 10%, rgba(57,255,20,0.12) 0%, transparent 70%), radial-gradient(30% 25% at 85% 5%, rgba(157,0,255,0.12) 0%, transparent 70%), radial-gradient(45% 35% at 80% 80%, rgba(157,0,255,0.10) 0%, transparent 70%)',
        }}
      />

      <Navbar />
      <Hero />
      <Projects />
      <Contact />

      <footer className="border-t border-purple-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Muhammad Dani Martin. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#work" className="text-purple-700 hover:text-purple-900">Portfolio</a>
            <a href="#contact" className="text-purple-700 hover:text-purple-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
