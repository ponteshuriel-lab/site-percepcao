import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const loaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      // Loading circle spins then fades out
      tl.to(loaderRef.current, {
        opacity: 0,
        scale: 1.5,
        duration: 0.6,
        ease: 'power2.out',
      })
        .fromTo(
          '.hero-logo-text',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.2'
        )
        .fromTo(
          '.hero-title',
          { clipPath: 'inset(100% 0 0 0)' },
          { clipPath: 'inset(0% 0 0 0)', duration: 0.8, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          '.hero-subtitle',
          { clipPath: 'inset(100% 0 0 0)' },
          { clipPath: 'inset(0% 0 0 0)', duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          '.hero-scroll',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.2'
        )

      // Scroll parallax
      gsap.to(imageRef.current, {
        yPercent: 25,
        scale: 1.15,
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      gsap.to(textRef.current, {
        yPercent: -30,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: 'top top',
          end: '50% top',
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-brand-black"
    >
      {/* Background image */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
        style={{ transformOrigin: 'center center' }}
      >
        <img
          src="/assets/portfolio/casamento-daniela-e-carlos/f1.jpg"
          alt="Casamento Daniela e Carlos — fotografia profissional em Sobral"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Loading circle */}
      <div
        ref={loaderRef}
        className="absolute inset-0 flex items-center justify-center z-10 bg-brand-black"
      >
        <svg className="loader-ring" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="#2A2A2A" strokeWidth="2" />
          <circle
            cx="24" cy="24" r="20"
            stroke="#F4F4F1"
            strokeWidth="2"
            strokeDasharray="80 45"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Center content */}
      <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <div className="hero-logo-text opacity-0 mb-8">
          <img src="/assets/logo-p.svg" alt="Percepção MD" className="w-24 h-24 md:w-32 md:h-32" />
        </div>

        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight text-center mb-4 opacity-0" style={{ clipPath: 'inset(100% 0 0 0)' }}>
          PERCEPÇÃO MD
        </h1>

        <p className="hero-subtitle text-sm md:text-base font-light tracking-[0.15em] text-brand-light/70 text-center max-w-md opacity-0" style={{ clipPath: 'inset(100% 0 0 0)' }}>
          Mais do que registrar.<br />
          Criamos imagens que permanecem.
        </p>

        <div className="hero-scroll absolute bottom-10 flex flex-col items-center gap-2 opacity-0">
          <span className="text-[10px] tracking-[0.3em] font-mono text-brand-light/60">
            SCROLL TO DISCOVER
          </span>
          <div className="w-px h-8 bg-brand-light/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-light animate-scroll-line" />
          </div>
        </div>
      </div>
    </section>
  )
}