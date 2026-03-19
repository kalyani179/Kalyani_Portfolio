import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { resumeUrl } from '../config'

const navLinks = [
  { href: '#intro', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#tech-stack', label: 'Tech Stack' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="pt-6 px-6 md:px-12 transition-colors">
      {/* Desktop: NextUAV-style layout - Logo | Pill | CTA */}
      <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto">
        {/* Left: Logo */}
        {/* <a
          href="#intro"
          className="font-heading font-bold text-lg text-white shrink-0"
        >
          Kalyani Dantuluri
        </a> */}

        {/* Center: Nav pill */}
        <div className="flex-1 flex justify-center px-4">
          <div className="flex items-center gap-6 rounded-full px-8 py-2.5 border border-white/10 bg-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm lg:text-base font-medium text-white/90 hover:colored-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: CTA button */}
        {/* <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white/90 transition-colors"
        >
          View Resume
        </a> */}
      </div>

      {/* Mobile: hamburger */}
      <div className="md:hidden flex justify-between items-center">
        <a href="#intro" className="font-heading font-bold text-lg text-white">
          Kalyani
        </a>
        <button
          className="p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-4 py-4 px-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-white hover:colored-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block py-2 text-white hover:colored-text"
          >
            View Resume
          </a>
        </div>
      )}
    </nav>
  )
}
