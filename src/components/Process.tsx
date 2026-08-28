import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { processSteps } from '../data/phrases'

gsap.registerPlugin(ScrollTrigger)

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.process-title',
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.process-title',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.process-step',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.process-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.process-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.process-grid',
            start: 'top 75%',
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
      className="relative py-24 md:py-32 bg-brand-black"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <h2
          className="process-title text-3xl md:text-5xl lg:text-6xl font-serif mb-16 text-center"
          style={{ clipPath: 'inset(100% 0 0 0)' }}
        >
          DO CLIQUE À ENTREGA
        </h2>

        {/* Progress line */}
        <div className="hidden md:block relative mb-16">
          <div className="process-line h-px bg-brand-mid w-full origin-left" />
        </div>

        <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {processSteps.map((step, i) => (
            <div key={step.number} className="process-step relative">
              {/* Mobile connector */}
              {i < processSteps.length - 1 && (
                <div className="md:hidden absolute left-6 top-12 bottom-0 w-px bg-brand-mid" />
              )}

              <div className="flex items-start gap-4 md:flex-col md:items-center md:text-center">
                <span className="text-5xl md:text-6xl font-serif text-brand-light/10 leading-none">
                  {step.number}
                </span>
                <div className="md:mt-4">
                  <h3 className="text-lg md:text-xl font-serif text-brand-light mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-light/50 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}