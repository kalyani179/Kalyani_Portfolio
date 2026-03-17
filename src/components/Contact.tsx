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
      className="py-16 px-6 bg-gray-50 dark:bg-transparent transition-colors duration-300"
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
              className="p-4 rounded-xl bg-gray-100 dark:bg-[#111111] border border-purple-700/30 text-gray-900 dark:text-white hover:bg-purple-700 hover:text-white hover:border-purple-600 transition-all duration-300"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
