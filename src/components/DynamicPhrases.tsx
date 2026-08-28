import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { phrases } from '../data/phrases'

gsap.registerPlugin(ScrollTrigger)

export default function DynamicPhrases() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const phraseEls = containerRef.current?.querySelectorAll('.dynamic-phrase')
      if (!phraseEls) return

      phraseEls.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'top 40%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="py-16 md:py-24">
      {phrases.map((phrase, i) => (
        <div
          key={i}
          className="dynamic-phrase py-12 md:py-20 flex items-center justify-center"
        >
          <p className="text-xl md:text-3xl lg:text-4xl font-serif text-center text-brand-light/30 max-w-3xl px-6 italic leading-relaxed">
            {phrase}
          </p>
        </div>
      ))}
    </div>
  )
}