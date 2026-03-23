import { useState } from 'react'
import { resumeUrl } from '../config'
import { ArrowHoverSwap } from './ArrowHoverSwap'

export function Introduction() {
  const [resumeHovered, setResumeHovered] = useState(false)

  return (
    <section
      id="intro"
      className="min-h-screen flex flex-col justify-start pt-16 px-6 pb-20 transition-colors duration-300"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start animate-fade-in">
        {/* Left: Large name */}
        <div className="lg:ml-12">
          <h1 className="font-heading font-bold text-white leading-tight">
            <span className="text-2xl sm:text-3xl lg:text-8xl">Hi, I'm</span>
            <br />
            <span className="text-8xl sm:text-9xl lg:text-10xl xl:text-11xl font-body colored-text">
              Kalyani Dantuluri
            </span>
            <span className="text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">.</span>
          </h1>
        </div>

        {/* Right: About me + View Resume button */}
        <div className="flex flex-col gap-6 lg:pt-12 lg:justify-self-end max-w-md lg:mr-12">
          <div className="w-fit">
            <h2 className="font-about font-semibold text-2xl text-white">
              About me
            </h2>
            <div className="h-0.5 mt-1 w-full overflow-hidden rounded-full">
              <div className="h-full w-1/3 animate-shimmer motion-reduce:animate-none bg-gradient-to-r from-transparent via-white to-transparent" />
            </div>
          </div>
          <p className="font-body text-lg text-zinc-300 leading-relaxed">
            I work as <span className="font-semibold text-white">
              SDE-1
            </span> at <a href="https://akriviahcm.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400">Akrivia HCM</a>. Specialized in the{' '}
            <span className="font-semibold text-white">
              MEAN   
            </span> Stack and <span className="font-semibold text-white">MERN</span> Stack.
            Passionate about building scalable and efficient software solutions.
          </p>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 w-fit px-6 py-3 rounded-full gradient-button font-heading font-semibold transition-all animate-outline-shine motion-reduce:animate-none"
            onMouseEnter={() => setResumeHovered(true)}
            onMouseLeave={() => setResumeHovered(false)}
            onFocus={() => setResumeHovered(true)}
            onBlur={() => setResumeHovered(false)}
          >
            View Resume
            <ArrowHoverSwap
              active={resumeHovered}
              size={20}
              strokeWidth={2.5}
              inactiveRightClassName="group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
