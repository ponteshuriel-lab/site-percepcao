import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CameraShutter from './CameraShutter'

gsap.registerPlugin(ScrollTrigger)

export default function ShutterTransition() {
  const sectionRef = useRef<HTMLElement>(null)
  const shutterRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: 'top center',
          end: 'bottom center',
          scrub: 1.5,
        },
      })

      tl.to('.shutter-blade', {
        rotation: 0,
        scale: 1,
        duration: 0.4,
      })
        .to(
          shutterRef.current,
          { scale: 1, opacity: 1, duration: 0.3 },
          '<'
        )
        .to('.shutter-blade', {
          rotation: 30,
          scale: 0.8,
          duration: 0.2,
        })
        .to(
          shutterRef.current,
          { scale: 5, opacity: 0, duration: 0.3 },
          '-=0.1'
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 1.2 },
          { opacity: 1, scale: 1, duration: 0.4 },
          '-=0.15'
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
        {/* Shutter */}
        <div
          ref={shutterRef}
          className="absolute z-10"
          style={{ transform: 'scale(0)' }}
        >
          <CameraShutter size={300} isOpen={false} />
        </div>

        {/* Revealed image */}
        <div
          ref={imageRef}
          className="absolute inset-0 opacity-0"
        >
          <img
            src="/assets/portfolio/rainha-clara/f1.jpeg"
            alt="Captura de momento"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <p className="text-2xl md:text-4xl font-serif text-brand-light/60 text-center px-6">
            Captura → Memória
          </p>
        </div>
      </div>
    </section>
  )
}