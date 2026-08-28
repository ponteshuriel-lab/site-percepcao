import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const navItems = [
  { label: 'TRABALHOS', href: '#portfolio' },
  { label: 'SMART ALBUM', href: '#smart-album' },
  { label: 'SOBRE', href: '#about' },
  { label: 'CONTATO', href: '#contact' },
]

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const onScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('bg-brand-black/80', 'backdrop-blur-md')
        header.classList.remove('bg-transparent')
      } else {
        header.classList.remove('bg-brand-black/80', 'backdrop-blur-md')
        header.classList.add('bg-transparent')
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      gsap.fromTo('.menu-item', { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power3.out' })
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-transparent"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group" aria-label="Percepção MD - Home">
            <img src="/assets/logo-p.svg" alt="Percepção MD" className="h-10 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-[11px] tracking-[0.2em] font-mono text-brand-light/70 hover:text-brand-light transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2 z-[60]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <span className={`block w-6 h-px bg-brand-light transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`block w-6 h-px bg-brand-light transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-brand-black flex flex-col items-center justify-center transition-opacity duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="menu-item text-2xl tracking-[0.15em] font-light text-brand-light/80 hover:text-brand-light transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}