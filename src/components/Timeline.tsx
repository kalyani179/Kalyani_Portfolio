import { Briefcase, GraduationCap } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const experience = [
  {
    period: "Sep'25 – Present",
    role: 'SDE-1',
    company: 'Akrivia HCM',
    description: 'Contributing to the development and enhancement of HR Management Software',
  },
  {
    period: "Dec'24 – Aug'25",
    role: 'SDE-Intern',
    company: 'Akrivia HCM',
    description: 'Completed tasks assigned by mentors and gained hands-on experience in MEAN Stack',
  },
  {
    period: "Sep'24 – Dec'24",
    role: 'Full Stack Developer',
    company: 'Qoptars (IIT Hyderabad Inc. Hub)',
    description: 'Developed a website for tracking flood related data for government officials using MERN Stack',
  },
  {
    period: "Sep'23 – Feb'24",
    role: 'App Developer Intern',
    company: 'Novizit',
    description: 'Frontend development for mobile application MVP using React Native and Tailwind CSS',
  },
  {
    period: "Jul'23 – Dec'23",
    role: 'Full Stack Developer Intern',
    company: 'Tech Table',
    description: 'Developed web applications using the MERN Stack and collaborated on client projects',
  },
]

const education = [
  {
    period: '2021 – 2025',
    institution: 'Maharaj Vijayram Gajapathi Raj College Of Engineering, India',
    details: 'B.Tech in CSE | CGPA: 9.22/10',
  },
  {
    period: '2019 – 2021',
    institution: 'Sri Chaitanya Junior College, India',
    details: 'BIE (Class XII) | Aggregate: 99%',
  },
  {
    period: '2006 – 2019',
    institution: 'Dr. Besant School, India',
    details: 'SSC (Class X) | CGPA: 10/10',
  },
]

export function Timeline() {
  return (
    <div className="bg-gray-50 dark:bg-transparent transition-colors duration-300">
      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 max-sm:py-12 max-sm:px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-12 max-sm:text-2xl max-sm:mb-8 text-center">
            Experience
          </h2>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-purple-700/50" />
            <div className="space-y-8 max-sm:space-y-6">
              {experience.map((item, i) => (
                <TimelineItem
                  key={`exp-${i}`}
                  company={item.company}
                  role={item.role}
                  period={item.period}
                  description={item.description}
                  icon={<Briefcase className="text-purple-700" size={20} />}
                  current={i === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 max-sm:py-12 max-sm:px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-12 max-sm:text-2xl max-sm:mb-8 text-center flex items-center justify-center gap-2 max-sm:flex-wrap">
            <GraduationCap className="text-purple-700 max-sm:w-7 max-sm:h-7" size={32} />
            Education
          </h2>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-purple-700/50" />
            <div className="space-y-8 max-sm:space-y-6">
              {education.map((item, i) => (
                <TimelineItem
                  key={`edu-${i}`}
                  company={item.institution}
                  role={item.details}
                  period={item.period}
                  icon={<GraduationCap className="text-purple-700" size={20} />}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

interface TimelineItemProps {
  company: string
  role: string
  period: string
  description?: string
  icon: React.ReactNode
  current?: boolean
}

function TimelineItem({ company, role, period, description, icon, current }: TimelineItemProps) {
  const { ref, isInView } = useInView(0.15)

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 max-sm:gap-4 md:odd:flex-row-reverse group transition-all duration-[1200ms] ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className={`hidden md:flex shrink-0 w-12 h-12 rounded-full bg-purple-700/20 dark:bg-purple-700/30 items-center justify-center -ml-6 md:ml-0 md:absolute md:left-1/2 md:-translate-x-1/2 z-10 transition-opacity ${current ? 'opacity-100 border border-purple-500' : 'opacity-90'}`}>
        {icon}
      </div>
      <div className="md:w-[calc(50%-3rem)] md:odd:ml-auto md:odd:pl-12 md:odd:pr-0 md:even:pr-12 md:even:pl-0 pl-14 max-sm:pl-12 md:pl-0 max-sm:min-w-0 max-sm:flex-1">
        <div
          className={`p-4 max-sm:p-3 rounded-xl max-sm:rounded-lg bg-gray-100 dark:bg-[#111111] border transition-colors ${
            current
              ? 'border-purple-500 shadow-[0_0_18px_rgba(147,51,234,0.35)] hover:border-purple-400'
              : 'border-purple-600/50'
          }`}
        >
          {/* First: Company / Institution name */}
          <div className="flex items-center justify-between gap-3 max-sm:items-start max-sm:gap-2">
            <h4 className="font-heading font-semibold text-lg max-sm:text-base text-gray-900 dark:text-white max-sm:leading-snug max-sm:min-w-0">
              {company}
            </h4>
          </div>
          {/* Second: Role left, Period right - same row */}
          <div className="mt-1 flex flex-wrap items-baseline justify-between gap-2 max-sm:mt-1.5 max-sm:gap-x-2 max-sm:gap-y-1">
            <p className="text-purple-600 dark:text-purple-400 font-medium max-sm:text-sm max-sm:leading-snug max-sm:min-w-0">
              {role}
            </p>
            <span className="text-sm font-mono text-purple-700 max-sm:text-xs max-sm:shrink-0">
              {period}
            </span>
          </div>
          {/* Third: Description */}
          {description && (
            <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400 max-sm:text-xs max-sm:leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
