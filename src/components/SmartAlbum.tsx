import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/portfolio'

gsap.registerPlugin(ScrollTrigger)

export default function SmartAlbum() {
  const sectionRef = useRef<HTMLElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const [demoOpen, setDemoOpen] = useState(false)
  const [demoIndex, setDemoIndex] = useState(0)
  const demoProject = projects[0]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.smart-title',
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.smart-title',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.smart-text',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.smart-text',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        phoneRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: phoneRef.current!,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Animate phone screen images
      gsap.fromTo(
        '.phone-photo',
        { y: 40, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: phoneRef.current!,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section
        ref={sectionRef}
        id="smart-album"
        className="relative py-24 md:py-32 bg-brand-dark"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <h2
                className="smart-title text-3xl md:text-5xl lg:text-6xl font-serif mb-6"
                style={{ clipPath: 'inset(100% 0 0 0)' }}
              >
                SMART ALBUM
              </h2>
              <p className="smart-text text-sm md:text-base text-brand-light/60 leading-relaxed font-light mb-4">
                Seu trabalho não termina quando fazemos a última foto.
              </p>
              <p className="smart-text text-sm md:text-base text-brand-light/60 leading-relaxed font-light mb-8">
                Você recebe um álbum virtual personalizado — uma experiência de entrega
                onde cada fotografia ganha vida. Acesse, compartilhe, revise.
                Seu momento. Seu álbum. Sua história.
              </p>
              <button
                onClick={() => setDemoOpen(true)}
                className="smart-text px-6 py-3 border border-brand-light/30 text-[11px] tracking-[0.2em] font-mono text-brand-light hover:bg-brand-light hover:text-brand-black transition-all duration-300"
              >
                EXPERIMENTAR SMART ALBUM
              </button>
            </div>

            {/* Phone mockup */}
            <div ref={phoneRef} className="flex justify-center">
              <div className="relative w-[280px] md:w-[320px]">
                {/* Phone frame */}
                <div className="relative bg-brand-black rounded-[2.5rem] p-3 border border-brand-mid/50 shadow-2xl">
                  {/* Screen */}
                  <div className="relative bg-brand-gray rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                    {/* Status bar */}
                    <div className="absolute top-0 left-0 right-0 h-12 flex items-end justify-center pb-2 z-10">
                      <div className="w-20 h-5 bg-brand-black rounded-full" />
                    </div>

                    {/* Album header */}
                    <div className="pt-14 px-4 pb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 rounded-full bg-brand-mid flex items-center justify-center">
                          <span className="text-[8px] font-serif text-brand-light">P</span>
                        </div>
                        <span className="text-[9px] font-mono tracking-wider text-brand-light/70">PERCEPÇÃO MD</span>
                      </div>
                      <p className="text-[10px] text-brand-light/40 font-light">Seu álbum</p>
                    </div>

                    {/* Album photos */}
                    <div className="px-3 space-y-2 pb-4">
                      <div className="phone-photo aspect-[4/3] rounded-lg overflow-hidden">
                        <img
                          src={demoProject.images[0]}
                          alt="Foto do álbum"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="phone-photo aspect-square rounded-lg overflow-hidden">
                          <img
                            src={demoProject.images[1]}
                            alt="Foto do álbum"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="phone-photo aspect-square rounded-lg overflow-hidden">
                          <img
                            src={demoProject.images[2]}
                            alt="Foto do álbum"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom text */}
                    <div className="absolute bottom-6 left-0 right-0 text-center">
                      <p className="text-[10px] text-brand-light/30 font-serif italic">
                        Seu momento. Seu álbum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive demo modal */}
      {demoOpen && (
        <div
          className="fixed inset-0 z-[100] bg-brand-black/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Demo Smart Album"
        >
          <button
            onClick={() => setDemoOpen(false)}
            className="absolute top-6 right-6 text-brand-light/60 hover:text-brand-light transition-colors z-10"
            aria-label="Fechar demo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="w-full max-w-md">
            {/* Demo phone */}
            <div className="relative bg-brand-black rounded-[2.5rem] p-3 border border-brand-mid/50 shadow-2xl">
              <div className="relative bg-brand-gray rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                <div className="absolute top-0 left-0 right-0 h-12 flex items-end justify-center pb-2 z-10">
                  <div className="w-20 h-5 bg-brand-black rounded-full" />
                </div>

                <div className="pt-14 px-4 pb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-full bg-brand-mid flex items-center justify-center">
                      <span className="text-[8px] font-serif text-brand-light">P</span>
                    </div>
                    <span className="text-[9px] font-mono tracking-wider text-brand-light/70">PERCEPÇÃO MD</span>
                  </div>
                  <p className="text-[10px] text-brand-light/40 font-light">{demoProject.title}</p>
                </div>

                <div className="px-3 pb-4">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-2">
                    <img
                      src={demoProject.images[demoIndex % demoProject.images.length]}
                      alt="Demo Smart Album"
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                  </div>
                  <p className="text-[10px] text-center text-brand-light/30 font-serif italic">
                    Foto {demoIndex + 1} de {demoProject.images.length}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex gap-2 justify-center mb-3">
                    {demoProject.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setDemoIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i === demoIndex % demoProject.images.length
                            ? 'bg-brand-light scale-125'
                            : 'bg-brand-mid'
                        }`}
                        aria-label={`Foto ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setDemoIndex(Math.max(0, demoIndex - 1))}
                      disabled={demoIndex === 0}
                      className="flex-1 py-2 text-[9px] font-mono tracking-wider border border-brand-mid text-brand-light/50 hover:text-brand-light hover:border-brand-light/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      ANTERIOR
                    </button>
                    <button
                      onClick={() => setDemoIndex(Math.min(demoProject.images.length - 1, demoIndex + 1))}
                      disabled={demoIndex === demoProject.images.length - 1}
                      className="flex-1 py-2 text-[9px] font-mono tracking-wider bg-brand-light text-brand-black hover:bg-brand-cream transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      PRÓXIMA
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}