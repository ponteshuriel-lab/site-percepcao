import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useScrollReveal(
  selector: string,
  options?: {
    y?: number
    opacity?: number
    duration?: number
    delay?: number
    stagger?: number
    start?: string
    scrub?: boolean | number
  }
) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const els = ref.current.querySelectorAll(selector)
    if (!els.length) return

    const ctx = gsap.context(() => {
      gsap.from(els, {
        y: options?.y ?? 60,
        opacity: options?.opacity ?? 0,
        duration: options?.duration ?? 1,
        delay: options?.delay ?? 0,
        stagger: options?.stagger ?? 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current!,
          start: options?.start ?? 'top 80%',
          toggleActions: 'play none none none',
          ...(options?.scrub !== undefined ? { scrub: options.scrub } : {}),
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [selector])

  return ref
}

export { gsap, ScrollTrigger }