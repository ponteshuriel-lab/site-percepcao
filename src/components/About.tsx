import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { filter: 'blur(20px)', scale: 1.1 },
        {
          filter: 'blur(0px)',
          scale: 1,
          scrollTrigger: {
            trigger: sectionRef.current!,
            start: 'top 80%',
            end: 'center center',
            scrub: 1.5,
          },
        }
      )

      gsap.fromTo(
        '.about-title',
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-title',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.about-accent',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-accent',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.about-text',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current!,
            start: 'top 85%',
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
      id="about"
      className="relative min-h-screen py-24 md:py-32 bg-brand-black"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div ref={textRef} className="order-2 lg:order-1">
            <h2
              className="about-title text-4xl md:text-6xl lg:text-7xl font-serif mb-4 tracking-tight"
              style={{ clipPath: 'inset(100% 0 0 0)' }}
            >
              NOSSO OLHAR
            </h2>
            <div className="about-accent w-16 h-px bg-brand-light mb-8 origin-left" />
            <div className="space-y-6">
              <p className="about-text text-base md:text-lg text-brand-light/70 leading-relaxed font-light">
                Fotografia não é apenas apertar o botão da câmera.
              </p>
              <p className="about-text text-base md:text-lg text-brand-light/70 leading-relaxed font-light">
                É entender o momento. É sentir a luz. É escolher o enquadramento
                que vai transformar uma fração de segundo em uma memória permanente.
              </p>
              <p className="about-text text-lg md:text-xl text-brand-light/90 leading-relaxed font-bold">
                Cada imagem que criamos carrega intenção, técnica e emoção.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative overflow-hidden">
            <div ref={imageRef} className="relative aspect-[3/4] w-full">
              <img
                src="/assets/portfolio/doutora-jordana/f1.jpg"
                alt="Ensaio fotográfico profissional"
                className="w-full h-full object-cover"
                width="800"
                height="1067"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
