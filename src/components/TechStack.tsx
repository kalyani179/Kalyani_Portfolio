import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const TECH_ICON_SLUGS: Record<string, string> = {
  C: 'c',
  'C++': 'cplusplus',
  Java: 'openjdk',
  Python: 'python',
  JavaScript: 'javascript',
  TypeScript: 'typescript',
  HTML: 'html5',
  CSS: 'css',
  'Tailwind CSS': 'tailwindcss',
  Bootstrap: 'bootstrap',
  'React.js': 'react',
  Angular: 'angular',
  NodeJS: 'nodedotjs',
  ExpressJS: 'express',
  MongoDB: 'mongodb',
  MySQL: 'mysql',
  Docker: 'docker',
  Git: 'git',
  Github: 'github',
  Redis: 'redis',
}

const techCategories = [
  {
    category: 'Languages',
    technologies: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Frontend',
    technologies: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'React.js', 'Angular'],
  },
  {
    category: 'Backend & Databases',
    technologies: ['NodeJS', 'ExpressJS', 'MongoDB', 'MySQL', 'Redis'],
  },
  {
    category: 'Tools & Concepts',
    technologies: ['DSA', 'System Design', 'Docker', 'Git', 'Github'],
  },
]

const AUTO_SCROLL_INTERVAL_MS = 3000

export function TechStack() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const programmaticScrollRef = useRef(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const updateActiveIndex = () => {
      if (programmaticScrollRef.current) return
      const containerRect = container.getBoundingClientRect()
      const center = containerRect.left + containerRect.width / 2
      let closestIndex = 0
      let closestDist = Infinity
      cardRefs.current.forEach((card, i) => {
        if (!card) return
        const rect = card.getBoundingClientRect()
        const cardCenter = rect.left + rect.width / 2
        const dist = Math.abs(cardCenter - center)
        if (dist < closestDist) {
          closestDist = dist
          closestIndex = i
        }
      })
      setActiveIndex(closestIndex)
    }

    container.addEventListener('scroll', updateActiveIndex)
    const ro = new ResizeObserver(updateActiveIndex)
    ro.observe(container)
    updateActiveIndex()
    return () => {
      container.removeEventListener('scroll', updateActiveIndex)
      ro.disconnect()
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    const container = scrollRef.current
    if (!container) return

    const autoScroll = () => {
      const nextIndex = (activeIndex + 1) % techCategories.length
      scrollToIndex(nextIndex)
    }

    const interval = setInterval(autoScroll, AUTO_SCROLL_INTERVAL_MS)
    return () => clearInterval(interval)
  }, [activeIndex])

  const scrollToIndex = (index: number) => {
    programmaticScrollRef.current = true
    setActiveIndex(index)
    const container = scrollRef.current
    const card = cardRefs.current[index]
    if (container && card) {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const containerCenter = container.clientWidth / 2
      const maxScroll = container.scrollWidth - container.clientWidth
      const scrollPos = Math.max(0, Math.min(cardCenter - containerCenter, maxScroll))
      container.scrollTo({ left: scrollPos, behavior: 'smooth' })
    }
    setTimeout(() => { programmaticScrollRef.current = false }, 600)
  }

  return (
    <section
      id="skills"
      className="py-12 px-6 bg-gray-50 dark:bg-transparent lg:pt-36 transition-colors duration-300 overflow-visible max-sm:py-8 max-sm:px-4"
    >
      <div className="max-w-full my-4 mx-auto max-sm:my-2">
        <h2 className="font-heading font-bold text-3xl text-gray-900 dark:text-white text-center max-sm:text-2xl max-sm:px-2">
          Skills
        </h2>

        <div className="relative overflow-visible">
          {/* Prev button - loops to last when on first */}
          <button
            type="button"
            onClick={() => scrollToIndex((activeIndex - 1 + techCategories.length) % techCategories.length)}
            aria-label="Previous card"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center bg-purple-500/50 border border-white/20 text-white transition-all cursor-pointer shadow-lg max-sm:left-1 max-sm:h-7 max-sm:w-7 max-sm:touch-manipulation"
          >
            <ChevronLeft className="h-3 w-3 sm:h-[18px] sm:w-[18px]" strokeWidth={2} aria-hidden />
          </button>

          {/* Next button - loops to first when on last */}
          <button
            type="button"
            onClick={() => scrollToIndex((activeIndex + 1) % techCategories.length)}
            aria-label="Next card"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center bg-purple-500/50 border border-white/20 text-white transition-all cursor-pointer shadow-lg max-sm:right-1 max-sm:h-7 max-sm:w-7 max-sm:touch-manipulation"
          >
            <ChevronRight className="h-3 w-3 sm:h-[18px] sm:w-[18px]" strokeWidth={2} aria-hidden />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto py-10 pb-4 px-14 sm:px-20 snap-x snap-mandatory scroll-smooth scrollbar-hide max-sm:gap-4 max-sm:py-8 max-sm:px-10 max-sm:overscroll-x-contain max-sm:[-webkit-overflow-scrolling:touch]"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {techCategories.map(({ category, technologies }, i) => {
              const isActive = activeIndex === i
              return (
                <div
                  key={category}
                  ref={(el) => { cardRefs.current[i] = el }}
                  className={`relative flex-shrink-0 w-[280px] sm:w-[320px] min-h-[240px] p-8 rounded-3xl overflow-hidden snap-center transition-all duration-500 ease-out max-sm:w-[min(17.5rem,calc(100vw-5rem))] max-sm:min-h-[220px] max-sm:p-5 max-sm:rounded-2xl ${
                    isActive
                      ? 'scale-105 opacity-100 max-sm:scale-100'
                      : 'opacity-35 scale-90 max-sm:scale-95'
                  }`}
                  style={{
                    background: isActive
                      ? 'rgba(20, 20, 28, 0.85)'
                      : 'rgba(15, 15, 20, 0.6)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(192, 132, 252, 0.25)',
                    boxShadow: isActive
                      ? '0 0 40px rgba(147, 51, 234, 0.15), 0 0 0 1px rgba(192, 132, 252, 0.1)'
                      : '0 4px 20px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {/* Radial gradient glow - top right */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(147, 51, 234, 0.12) 0%, transparent 60%)',
                    }}
                  />
                  <div className="relative">
                    <h3
                      className={`font-heading font-medium text-lg mb-4 transition-colors duration-300 max-sm:text-base max-sm:mb-3 ${
                        isActive ? 'text-[#E8E8E8]' : 'text-[#B0B0B0]'
                      }`}
                      style={{ letterSpacing: '0.02em' }}
                    >
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2 max-sm:gap-1.5">
                      {technologies.map((tech) => {
                        const iconSlug = TECH_ICON_SLUGS[tech]
                        return (
                          <span
                            key={tech}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-body rounded-lg transition-all duration-300 max-sm:px-2.5 max-sm:py-1 max-sm:text-xs ${
                              isActive
                                ? 'bg-purple-500/15 text-[#E0E0E0] border border-purple-400/20'
                                : 'bg-purple-500/10 text-[#A0A0A0] border border-purple-500/10'
                            }`}
                            style={{ lineHeight: 1.5, fontWeight: 500 }}
                          >
                            {iconSlug && (
                              <img
                                src={`https://cdn.simpleicons.org/${iconSlug}?viewbox=auto&size=16`}
                                alt=""
                                className="w-4 h-4 shrink-0"
                              />
                            )}
                            {tech}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
