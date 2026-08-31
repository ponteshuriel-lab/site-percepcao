import { useRef, useEffect, DependencyList } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from './useReducedMotion'

export function useGsapContext(
  callback: (context: gsap.Context) => void,
  deps: DependencyList = []
) {
  const ref = useRef<HTMLElement | null>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      callback(ctx)
    }, ref)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReduced, ...deps])

  return ref
}

export function useGsapTimeline(
  callback: (tl: gsap.core.Timeline, context: gsap.Context) => void,
  deps: DependencyList = []
) {
  const ref = useRef<HTMLElement | null>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      callback(tl, ctx)
    }, ref)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReduced, ...deps])

  return ref
}
