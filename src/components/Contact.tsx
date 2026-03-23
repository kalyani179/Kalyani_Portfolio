import { Github, Linkedin, Instagram } from 'lucide-react'
import { socialLinks } from '../config'

const links = [
  { href: socialLinks.github, icon: Github, label: 'GitHub' },
  { href: socialLinks.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: socialLinks.instagram, icon: Instagram, label: 'Instagram' },
]

export function Contact() {
  return (
    <footer
      id="contact"
      className="py-16 pt-32 px-6 bg-gray-50 dark:bg-transparent transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-6">
          Let's Connect
        </h2>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
          Reach out for collaborations, opportunities, or just a friendly chat.
        </p>
        <div className="flex justify-center gap-6">
          {links.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative inline-flex border-2 border-purple-700/30 rounded-xl p-[2px] text-gray-900 dark:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black"
            >
              {/* Rotating purple shimmer around the square */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
              >
                <span
                  className="absolute left-1/2 top-1/2 h-[220%] w-[220%] animate-contact-border-spin motion-reduce:animate-none bg-[conic-gradient(from_0deg,transparent_0deg_100deg,rgba(168,85,247,0.15)_130deg,rgba(192,132,252,0.95)_180deg,rgba(147,51,234,0.85)_200deg,rgba(168,85,247,0.2)_230deg,transparent_260deg_360deg)] opacity-90 dark:opacity-100"
                  style={{ transformOrigin: 'center center' }}
                />
              </span>
              <span className="relative z-[1] flex items-center justify-center rounded-[10px] bg-gray-100 p-4 transition-all duration-300 group-hover:bg-purple-700 group-hover:text-white dark:bg-[#111111] dark:group-hover:bg-purple-700">
                <Icon size={24} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
