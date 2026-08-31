import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { phrases } from '../data/phrases'

export default function DynamicPhrases() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const phraseEls = containerRef.current?.querySelectorAll('.dynamic-phrase')
      if (!phraseEls) return

      phraseEls.forEach((el, i) => {
        const isLast = i === phraseEls.length - 1
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'top 40%',
              toggleActions: 'play none none reverse',
            },
          }
        )

        if (!isLast) {
          gsap.fromTo(
            el.querySelector('.phrase-divider'),
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 70%',
                toggleActions: 'play none none none',
              },
            }
          )
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-brand-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="space-y-0">
          {phrases.map((phrase, i) => {
            const isLast = i === phrases.length - 1
            return (
              <div
                key={i}
                className="dynamic-phrase py-16 md:py-24 flex flex-col items-center justify-center"
              >
                <p
                  className={`text-2xl md:text-4xl lg:text-5xl font-serif text-center max-w-4xl px-6 leading-tight ${
                    isLast
                      ? 'text-brand-light/90 italic font-medium'
                      : 'text-brand-light/50 italic'
                  }`}
                >
                  {phrase}
                </p>
                {!isLast && (
                  <div className="phrase-divider w-12 h-px bg-brand-mid mt-16 md:mt-24 origin-center" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
