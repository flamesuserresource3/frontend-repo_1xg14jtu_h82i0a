import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24 lg:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-3 py-1 mb-4">
              <span className="size-2 rounded-full bg-[#39FF14]"></span>
              <span className="text-xs font-medium text-purple-700">Available for freelance</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              <span className="bg-gradient-to-r from-[#9D00FF] via-purple-500 to-[#39FF14] bg-clip-text text-transparent">
                Muhammad Dani
              </span>
              <br />
              <span className="text-gray-900">Martin</span>
            </h1>
            <p className="mt-5 text-gray-600 text-lg">
              Graphic Designer crafting playful, modern identities and digital visuals. I blend
              bold color with interactive storytelling to shape memorable brands.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#work" className="inline-flex items-center justify-center rounded-full px-5 py-3 text-white bg-gradient-to-r from-[#39FF14] to-[#9D00FF] shadow hover:shadow-md transition-shadow">
                View portfolio
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full px-5 py-3 text-purple-800 bg-purple-50 border border-purple-200 hover:bg-purple-100 transition-colors">
                Contact me
              </a>
            </div>
          </div>
          <div className="relative h-[360px] sm:h-[420px] md:h-[500px] rounded-2xl overflow-hidden border border-purple-200 bg-white">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#39FF14]/10 via-transparent to-[#9D00FF]/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
