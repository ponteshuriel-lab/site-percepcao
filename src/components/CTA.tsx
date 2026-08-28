import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-image',
        { scale: 1.15 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: sectionRef.current!,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      )

      gsap.fromTo(
        '.cta-title',
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cta-title',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.cta-button',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cta-button',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.cta-links a',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cta-links',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black"
    >
      {/* Background image */}
      <div className="absolute inset-0 cta-image">
        <img
          src="/assets/portfolio/casamento-daniela-e-carlos/f2.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/40 to-brand-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h2
          className="cta-title text-3xl md:text-5xl lg:text-6xl font-serif mb-8"
          style={{ clipPath: 'inset(100% 0 0 0)' }}
        >
          VAMOS CRIAR O SEU PRÓXIMO REGISTRO?
        </h2>

        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button inline-block px-8 py-4 bg-brand-light text-brand-black text-[11px] tracking-[0.2em] font-mono hover:bg-brand-cream transition-all duration-300 hover:scale-105 mb-12"
        >
          FALE COM A PERCEPÇÃO MD
        </a>

        <div className="cta-links flex items-center justify-center gap-8">
          <a
            href="https://instagram.com/percepcaomd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.15em] font-mono text-brand-light/50 hover:text-brand-light transition-colors duration-300"
          >
            INSTAGRAM
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.15em] font-mono text-brand-light/50 hover:text-brand-light transition-colors duration-300"
          >
            WHATSAPP
          </a>
          <a
            href="#portfolio"
            className="text-[11px] tracking-[0.15em] font-mono text-brand-light/50 hover:text-brand-light transition-colors duration-300"
          >
            PORTFÓLIO
          </a>
        </div>
      </div>
    </section>
  )
}