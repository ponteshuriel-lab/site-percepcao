import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ContactForm from './ContactForm'

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const [showForm, setShowForm] = useState(false)

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
        '.cta-subtitle',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cta-subtitle',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.cta-accent',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cta-accent',
            start: 'top 90%',
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
          alt="Casamento Daniela e Carlos — fotografia profissional em Sobral"
          className="w-full h-full object-cover opacity-30"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/50 to-brand-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="cta-subtitle text-sm md:text-base font-mono tracking-[0.3em] text-brand-light/50 mb-6 uppercase">
          Pronto para criar sua história?
        </p>

        <h2
          className="cta-title text-4xl md:text-6xl lg:text-7xl font-serif mb-6 tracking-tight"
          style={{ clipPath: 'inset(100% 0 0 0)' }}
        >
          VAMOS CRIAR O SEU PRÓXIMO REGISTRO?
        </h2>

        <div className="cta-accent w-20 h-px bg-brand-light mb-10 mx-auto origin-center" />

        {showForm ? (
          <div className="cta-button max-w-md mx-auto mb-10">
            <ContactForm />
            <button
              onClick={() => setShowForm(false)}
              className="mt-6 text-xs tracking-[0.15em] font-mono text-brand-light/50 hover:text-brand-light transition-colors"
            >
              ← Voltar
            </button>
          </div>
        ) : (
          <>
            {/* TODO: Substituir pelo número real do WhatsApp */}
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-block px-10 py-5 bg-brand-light text-brand-black text-xs tracking-[0.25em] font-mono hover:bg-brand-cream transition-all duration-300 hover:scale-105 mb-6 min-h-[48px] min-w-[48px] flex items-center justify-center"
            >
              FALE COM A PERCEPÇÃO MD
            </a>

            <button
              onClick={() => setShowForm(true)}
              className="cta-button block mx-auto mb-14 text-xs tracking-[0.2em] font-mono text-brand-light/50 hover:text-brand-light transition-colors min-h-[44px]"
            >
              ou preencha o formulário
            </button>
          </>
        )}

        <div className="cta-links flex items-center justify-center gap-10">
          <a
            href="https://instagram.com/percepcaomd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.2em] font-mono text-brand-light/50 hover:text-brand-light transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            INSTAGRAM
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.2em] font-mono text-brand-light/50 hover:text-brand-light transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            WHATSAPP
          </a>
          <a
            href="#portfolio"
            className="text-xs tracking-[0.2em] font-mono text-brand-light/50 hover:text-brand-light transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            PORTFÓLIO
          </a>
        </div>
      </div>
    </section>
  )
}
