export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-[#39FF14] to-[#9D00FF] bg-clip-text text-transparent">Let’s create something bold</span>
            </h2>
            <p className="mt-4 text-gray-600">
              I partner with startups and teams to craft distinctive brands and visuals. Tell me about
              your idea—I'll reply within 24 hours.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href="mailto:hello@danimartin.design" className="group inline-flex items-center gap-2 text-purple-800 hover:text-purple-900">
                <span className="inline-flex items-center justify-center rounded-full size-7 bg-purple-100 text-purple-700">✉️</span>
                hello@danimartin.design
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="inline-flex items-center justify-center rounded-full size-7 bg-[#39FF14]/15 text-[#1a7d0b]">⚡</span>
                Available for freelance & collaborations
              </div>
            </div>
          </div>

          <form className="rounded-2xl border border-purple-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                <input id="name" type="text" placeholder="Your name" className="w-full rounded-lg border border-purple-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input id="email" type="email" placeholder="you@example.com" className="w-full rounded-lg border border-purple-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300" />
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">Project details</label>
              <textarea id="message" rows={4} placeholder="Tell me about your goals, timeline, and budget" className="w-full rounded-lg border border-purple-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300" />
            </div>
            <button type="button" onClick={() => alert('Thanks! I will get back to you shortly.')} className="mt-5 inline-flex items-center justify-center rounded-full px-5 py-3 text-white bg-gradient-to-r from-[#39FF14] to-[#9D00FF] shadow hover:shadow-md transition-shadow w-full sm:w-auto">
              Send inquiry
            </button>
            <p className="mt-3 text-xs text-gray-500">No spam. Your details are safe and only used to reply to your inquiry.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
