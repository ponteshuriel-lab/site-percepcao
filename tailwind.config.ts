/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-black': '#0A0A0A',
        'brand-dark': '#111111',
        'brand-gray': '#1A1A1A',
        'brand-mid': '#2A2A2A',
        'brand-light': '#F4F4F1',
        'brand-cream': '#E8E8E3',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Bebas Neue"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Bebas Neue"', 'sans-serif'],
        editorial: ['"Playfair Display"', 'Georgia', 'serif'],
        montserrat: ['"Montserrat"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      transitionTimingFunction: {
        'shutter': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      keyframes: {
        'scroll-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'scroll-line': 'scroll-line 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}