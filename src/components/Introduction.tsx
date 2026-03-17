import { ArrowRight } from 'lucide-react'
import { resumeUrl } from '../config'

export function Introduction() {
  return (
    <section
      id="intro"
      className="min-h-screen flex flex-col justify-start pt-16 px-6 pb-20 bg-gray-50 dark:bg-transparent transition-colors duration-300"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start animate-fade-in">
        {/* Left: Large name */}
        <div>
          <h1 className="font-heading font-bold text-gray-900 dark:text-white leading-tight">
            <span className="text-2xl sm:text-3xl lg:text-8xl">Hi, I'm</span>
            <br />
            <span className="text-8xl sm:text-9xl lg:text-10xl xl:text-11xl text-purple-500">
              Kalyani Dantuluri
            </span>
            <span className="text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">.</span>
          </h1>
        </div>

        {/* Right: About me + View Resume button */}
        <div className="flex flex-col gap-6 lg:pt-12 lg:justify-self-end">
          <div className="w-fit">
            <h2 className="font-about font-semibold text-2xl text-gray-900 dark:text-white">
              About me
            </h2>
            <div className="h-0.5 mt-1 w-full overflow-hidden rounded-full">
              <div className="h-full w-1/3 animate-shimmer motion-reduce:animate-none bg-gradient-to-r from-transparent via-white to-transparent" />
            </div>
          </div>
          <p className="font-body text-lg text-gray-600 dark:text-zinc-300 leading-relaxed max-w-md">
            I work as SDE-1 at Akrivia HCM and build impactful software that scales. Specialized in the{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              MEAN Stack
            </span>{' '}
            Passionate about clean code, performance, and user-centric design.
          </p>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 w-fit px-6 py-3 rounded-full bg-purple-700 hover:bg-purple-600 text-white font-heading font-semibold transition-colors animate-outline-shine motion-reduce:animate-none"
          >
            View Resume
            <ArrowRight
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </section>
  )
}
