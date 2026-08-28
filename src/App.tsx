import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CustomCursor from './components/CustomCursor'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import ShutterTransition from './components/ShutterTransition'
import SmartAlbum from './components/SmartAlbum'
import Process from './components/Process'
import DynamicPhrases from './components/DynamicPhrases'
import CTA from './components/CTA'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-brand-black text-brand-light">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <DynamicPhrases />
        <ShutterTransition />
        <SmartAlbum />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App