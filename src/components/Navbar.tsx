import { useTheme } from '../context/ThemeContext'
import { Sun, Moon, Menu, X, CircleUser } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { href: '#intro', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#tech-stack', label: 'Tech Stack' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <nav className="top-0 left-0 right-0 z-40 py-4 px-6 md:px-8 bg-gray-50/95 dark:bg-black/95 backdrop-blur-md border-b border-purple-700/30 transition-colors">
      <div className="w-full flex items-center justify-between">
        <a href="#intro" className="px-4 font-heading font-bold text-lg text-purple-500 dark:text-white flex items-center gap-2 shrink-0">
          Kalyani Dantuluri
        </a>

        <div className="hidden md:flex items-center gap-6 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 dark:text-zinc-400 hover:text-purple-700 dark:hover:text-purple-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg hover:bg-purple-700/20 transition-colors text-gray-900 dark:text-white"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-4 py-4 px-4 rounded-xl bg-gray-100 dark:bg-[#111111] border border-purple-700/30">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-900 dark:text-white hover:text-purple-700"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { toggleTheme(); setOpen(false) }}
            className="block py-2 w-full text-left"
          >
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
          </button>
        </div>
      )}
    </nav>
  )
}
