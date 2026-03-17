const techCategories = [
  {
    category: 'Languages',
    technologies: ['C','C++','Java','Python', 'JavaScript','TypeScript'],
  },
  {
    category: 'Frontend',
    technologies: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'React.js', 'Angular'],
  },
  {
    category: 'Backend',
    technologies: ['NodeJS', 'ExpressJS', 'EJS', 'Objection.js'],
  },
  {
    category: 'Databases',
    technologies: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Tools & Concepts',
    technologies: ['DSA', 'System Design', 'Kafka', 'Docker', 'Git', 'Github'],
  },
]

export function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-20 px-6 bg-gray-50 dark:bg-transparent transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-12 text-center">
          Tech Stack
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {techCategories.map(({ category, technologies }, i) => (
            <div
              key={category}
              className="p-6 rounded-xl bg-gray-100 dark:bg-[#111111] border border-purple-700/30 hover:border-purple-600/50 transition-colors animate-slide-up opacity-0"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'forwards' }}
            >
              <h3 className="font-heading font-semibold text-lg text-purple-700 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-mono rounded-lg bg-purple-700/20 dark:bg-purple-700/30 text-purple-700 dark:text-purple-400 border border-purple-700/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
