import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CameraShutter from './CameraShutter'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const shutterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })

      tl.to('.shutter-group', {
        rotation: 30,
        scale: 0.8,
        duration: 1.2,
        stagger: 0.05,
        ease: 'power2.inOut',
      })
        .to(
          '.hero-shutter-ring',
          { scale: 15, opacity: 0, duration: 1, ease: 'power2.in' },
          '-=0.8'
        )
        .fromTo(
          '.hero-logo-text',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
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

      gsap.to(shutterRef.current, {
        scale: 1.3,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: '20% top',
          end: '60% top',
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
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Shutter overlay */}
      <div ref={shutterRef} className="absolute inset-0 flex items-center justify-center z-10">
        <CameraShutter size={200} isOpen={false} className="hero-shutter-ring" />
      </div>

      {/* Center content */}
      <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <div className="hero-logo-text opacity-0 mb-8">
          <img src="/assets/logo-p.svg" alt="P" className="w-24 h-24 md:w-32 md:h-32" />
        </div>

        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight text-center mb-4 opacity-0" style={{ clipPath: 'inset(100% 0 0 0)' }}>
          PERCEPÇÃO MD
        </h1>

        <p className="hero-subtitle text-sm md:text-base font-light tracking-[0.15em] text-brand-light/70 text-center max-w-md opacity-0" style={{ clipPath: 'inset(100% 0 0 0)' }}>
          Mais do que registrar.<br />
          Criamos imagens que permanecem.
        </p>

        <div className="hero-scroll absolute bottom-10 flex flex-col items-center gap-2 opacity-0">
          <span className="text-[10px] tracking-[0.3em] font-mono text-brand-light/40">
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