import { useState, useEffect } from 'react'
import ScrollStack, { ScrollStackItem } from './ScrollStack'
import { ArrowHoverSwap } from './ArrowHoverSwap'

function useMinWidthMd() {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : true,
  )
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => setMatches(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return matches
}

// Project hero images are in public/
const projects = [
  {
    title: 'MVGR Voices',
    year: '2024',
    category: 'Web Platform',
    link: 'https://mvgrvoices.onrender.com/',
    image: '/mvgr-voices-hero.png',
  },
  {
    title: 'Modern Dictionary',
    year: '2026',
    category: 'Personal Project',
    link: 'https://moderndictionary.onrender.com/',
    image: '/MD.png',
  }
]

function ProjectCardContent({ project }: { project: (typeof projects)[0] }) {
  const [cardActive, setCardActive] = useState(false)

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full max-sm:touch-manipulation group"
      onMouseEnter={() => setCardActive(true)}
      onMouseLeave={() => setCardActive(false)}
      onFocus={() => setCardActive(true)}
      onBlur={() => setCardActive(false)}
      onPointerDown={() => setCardActive(true)}
    >
      <div
        className="relative flex flex-col h-full rounded-t-[10px] overflow-hidden"
        style={{
          background: 'rgb(20, 20, 28)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(192, 132, 252, 0.25)',
          boxShadow: '0 0 40px rgba(147, 51, 234, 0.15), 0 0 0 1px rgba(192, 132, 252, 0.1)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none rounded-t-[14px]"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(147, 51, 234, 0.12) 0%, transparent 60%)',
          }}
        />
        <div className="relative px-6 pt-5 pb-4 max-sm:px-4 max-sm:pt-4 max-sm:pb-3 text-[#E8E8E8]">
          <div className="flex items-center justify-between text-sm font-mono text-[#E0E0E0] opacity-90 max-sm:flex-wrap max-sm:gap-x-3 max-sm:gap-y-1 max-sm:text-xs">
            <span>{project.year}</span>
            <span className="max-sm:text-right">{project.category}</span>
          </div>
          <div className="h-px w-full mt-3 mb-4 bg-purple-400/20" />
          <div className="flex items-center justify-between gap-4 max-sm:items-start max-sm:gap-3">
            <h3 className="font-heading font-normal text-xl sm:text-4xl text-left text-[#E8E8E8] max-sm:min-w-0 max-sm:flex-1 max-sm:leading-tight">
              {project.title}
            </h3>
            <div className="shrink-0 text-purple-300 group-hover:text-purple-200 transition-colors pointer-events-none max-sm:scale-90 max-sm:origin-top-right">
              <ArrowHoverSwap active={cardActive} size={48} strokeWidth={2} />
            </div>
          </div>
        </div>
        <div className="relative pb-5 sm:pb-6 max-sm:pb-4">
          <div className="relative aspect-[2.5/1] min-h-[180px] overflow-hidden max-sm:aspect-[16/10] max-sm:min-h-[160px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
          </div>
        </div>
      </div>
    </a>
  )
}

export function Projects() {
  const mdUp = useMinWidthMd()

  return (
    <section
      id="projects"
      className="relative isolate bg-gray-50 dark:bg-transparent transition-colors duration-300"
    >
      <h2 className="font-heading font-bold text-3xl text-gray-900 dark:text-white pt-32 pb-4 text-center max-sm:text-2xl max-sm:pt-20 max-sm:pb-3 max-sm:px-4">
        Projects
      </h2>

      {mdUp ? (
        <ScrollStack
          cardOffset={40}
          cardTopBase={55}
          minScale={0.88}
          scaleStep={0.12}
          cardClassName="relative origin-top w-full max-w-3xl overflow-hidden rounded-t-[10px]"
        >
          {projects.map((project, i) => (
            <ScrollStackItem key={i}>
              <div className="px-2 sm:px-4">
                <ProjectCardContent project={project} />
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      ) : (
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 pb-16 pt-2">
          {projects.map((project, i) => (
            <ProjectCardContent key={i} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}
