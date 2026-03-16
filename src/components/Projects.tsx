import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'MVGR Voices',
    period: "Jan'24 – Mar'24",
    description: 'A platform for students to express ideas through podcasts and blogs.',
    technologies: ['React', 'Tailwind CSS', 'Express.js', 'Node.js', 'MongoDB', 'Firebase', 'Chatbot', 'Docker'],
    achievements: [
      'Over 2,000 users in 10 days',
      'Reduced loading time by 50%',
      'Implemented chatbot and real-time notifications',
      'Theme-switching functionality',
    ],
    link: 'https://mvgrvoices.onrender.com/',
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-50 dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-12 text-center">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-1">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="group p-6 rounded-2xl bg-gray-100 dark:bg-[#111111] border border-purple-700/30 hover:border-purple-600/50 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 animate-slide-up opacity-0"
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white group-hover:text-purple-700 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm font-mono text-purple-700">{project.period}</span>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-600 text-white font-heading font-semibold text-sm transition-colors shrink-0"
                >
                  View Project
                  <ExternalLink size={16} />
                </a>
              </div>

              <p className="mt-4 text-gray-600 dark:text-zinc-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-purple-700/20 dark:bg-purple-700/30 text-purple-700 dark:text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-6 space-y-2">
                <span className="text-sm font-heading font-semibold text-gray-900 dark:text-white">
                  Achievements:
                </span>
                {project.achievements.map((a) => (
                  <li key={a} className="text-sm text-gray-600 dark:text-zinc-400 flex items-start gap-2">
                    <span className="text-purple-700 mt-1.5">•</span>
                    {a}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl border border-dashed border-purple-700/30 text-center text-gray-500 dark:text-zinc-500">
          <p className="font-heading font-medium">More projects coming soon</p>
        </div>
      </div>
    </section>
  )
}
