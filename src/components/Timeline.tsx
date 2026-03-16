import { Briefcase, GraduationCap } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const experience = [
  {
    period: "Sep'25 – Present",
    role: 'SDE-1',
    company: 'Akrivia HCM',
    description: 'Contributing to the development and enhancement of HR Management Software. Hyderabad, Telangana, India.',
  },
  {
    period: "Dec'24 – Aug'25",
    role: 'SDE-Intern',
    company: 'Akrivia HCM',
    description: 'HR Management Software development. Hyderabad, Telangana, India.',
  },
  {
    period: "Sep'24 – Dec'24",
    role: 'Full Stack Developer',
    company: 'QOptars (IIT Hyderabad Incubation Center)',
    description: 'Developing a website for accessing drone data using the MERN Stack',
  },
  {
    period: "Sep'23 – Feb'24",
    role: 'App Developer Intern',
    company: 'Novizit',
    description: 'Frontend development for mobile application & website using React Native and Tailwind CSS',
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
    details: 'B.Tech in Computer Science Engineering | CGPA: 9.22/10 (expected)',
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
    <div className="bg-gray-50 dark:bg-black transition-colors duration-300">
      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-12 text-center">
            Experience
          </h2>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-purple-700/50" />
            <div className="space-y-8">
              {experience.map((item, i) => (
                <TimelineItem
                  key={`exp-${i}`}
                  company={item.company}
                  role={item.role}
                  period={item.period}
                  description={item.description}
                  icon={<Briefcase className="text-purple-700" size={20} />}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 border-t border-purple-700/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center gap-2">
            <GraduationCap className="text-purple-700" size={32} />
            Education
          </h2>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-purple-700/50" />
            <div className="space-y-8">
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
}

function TimelineItem({ company, role, period, description, icon }: TimelineItemProps) {
  const { ref, isInView } = useInView(0.15)

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 md:odd:flex-row-reverse group transition-all duration-[1200ms] ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="hidden md:flex shrink-0 w-12 h-12 rounded-full bg-purple-700/20 dark:bg-purple-700/30 items-center justify-center -ml-6 md:ml-0 md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
        {icon}
      </div>
      <div className="md:w-[calc(50%-3rem)] md:odd:ml-auto md:odd:pl-12 md:odd:pr-0 md:even:pr-12 md:even:pl-0 pl-14 md:pl-0">
        <div className="p-4 rounded-xl bg-gray-100 dark:bg-[#111111] border border-purple-700/30 hover:border-purple-600/50 transition-colors">
          {/* First: Company / Institution name */}
          <h4 className="font-heading font-semibold text-lg text-gray-900 dark:text-white">
            {company}
          </h4>
          {/* Second: Role left, Period right - same row */}
          <div className="mt-1 flex flex-wrap items-baseline justify-between gap-2">
            <p className="text-purple-600 dark:text-purple-400 font-medium">{role}</p>
            <span className="text-sm font-mono text-purple-700 shrink-0">{period}</span>
          </div>
          {/* Third: Description */}
          {description && (
            <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}
