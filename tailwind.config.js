/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#000000',
          dark: '#000000',
        },
        surface: {
          light: '#111111',
          dark: '#111111',
        },
        primary: {
          DEFAULT: '#7e22ce',
          hover: '#6d28d9',
          hoverDark: '#9333ea',
        },
        secondary: {
          light: '#94A3B8',
          dark: '#94A3B8',
        },
        accent: '#FACC15',
        text: {
          primary: {
            light: '#FFFFFF',
            dark: '#FFFFFF',
          },
          muted: {
            light: '#A1A1AA',
            dark: '#A1A1AA',
          },
        },
        border: {
          light: '#27272a',
          dark: '#27272a',
        },
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['2.5rem', { lineHeight: '1.2' }],
        'hero-lg': ['3rem', { lineHeight: '1.2' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
