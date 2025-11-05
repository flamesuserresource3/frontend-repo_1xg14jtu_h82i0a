const projects = [
  {
    title: 'Neon Bytes — Brand Identity',
    description:
      'A playful, tech-forward identity with electric accents and modular shapes for a boutique creative studio.',
    tags: ['Branding', 'Art Direction', 'Motion'],
    link: '#',
    colorFrom: '#39FF14',
    colorTo: '#9D00FF',
  },
  {
    title: 'Pulse UI — Design System',
    description:
      'A purple-first design language for a SaaS platform: components, tokens, and micro-interactions.',
    tags: ['UI Design', 'System', 'Prototype'],
    link: '#',
    colorFrom: '#9D00FF',
    colorTo: '#39FF14',
  },
  {
    title: 'Glow Festival — Poster Series',
    description:
      'Experimental poster explorations inspired by sound waves, grids, and highlighter color fields.',
    tags: ['Print', 'Typography', 'Illustration'],
    link: '#',
    colorFrom: '#9D00FF',
    colorTo: '#39FF14',
  },
];

function ProjectCard({ title, description, tags, link, colorFrom, colorTo }) {
  return (
    <a
      href={link}
      className="group relative flex flex-col rounded-2xl border border-purple-200 bg-white overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-[16/9]">
        <div
          className="absolute inset-0"
          style={{
            background:
              `radial-gradient(60% 80% at 20% 20%, ${colorFrom}22 0%, transparent 60%), radial-gradient(70% 90% at 80% 80%, ${colorTo}22 0%, transparent 60%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/0 to-white/10" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-purple-200 bg-purple-50 text-purple-700 px-2.5 py-1 text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="px-5 pb-5 mt-auto">
        <span className="inline-flex items-center text-sm font-medium text-purple-700">
          View project
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{
        background:
          `linear-gradient(120deg, ${colorFrom}33, transparent 40%, ${colorTo}33)`,
      }} />
    </a>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative py-16 md:py-24 bg-gradient-to-b from-white via-white to-purple-50/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-[#9D00FF] to-[#39FF14] bg-clip-text text-transparent">Selected Work</span>
            </h2>
            <p className="text-gray-600 mt-2">A small curation of recent projects and personal explorations.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center text-purple-700 hover:text-purple-900">
            Get a quote
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
