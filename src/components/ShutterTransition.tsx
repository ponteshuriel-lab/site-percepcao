import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ShutterTransition() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'circle(0% at 50% 50%)' },
        {
          clipPath: 'circle(75% at 50% 50%)',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current!,
            start: 'top center',
            end: 'bottom center',
            scrub: 1.5,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-[150vh] bg-brand-black"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div
          ref={imageRef}
          className="absolute inset-0"
          style={{ clipPath: 'circle(0% at 50% 50%)' }}
        >
          <img
            src="/assets/portfolio/rainha-clara/f1.jpeg"
            alt="Captura de momento"
            width="1920"
            height="1080"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <p className="text-2xl md:text-4xl font-serif text-brand-light text-center px-6">
            Captura → Memória
          </p>
        </div>
      </div>
    </section>
  )
}