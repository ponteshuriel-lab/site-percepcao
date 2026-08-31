import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const services = [
  {
    number: '01',
    title: ['MARKETING DIGITAL'],
    description:
      'Estratégia e presença online construídas para gerar resultado, não só curtidas.',
  },
  {
    number: '02',
    title: ['FOTOGRAFIA', 'PROFISSIONAL'],
    description:
      'Still, produto, retrato e cobertura com direção de arte consistente.',
  },
  {
    number: '03',
    title: ['EDIÇÃO DE IMAGEM'],
    description:
      'Tratamento e retoque que mantêm identidade visual em cada entrega.',
  },
  {
    number: '04',
    title: ['SITES E SISTEMAS'],
    description:
      'Sites institucionais e sistemas sob medida, do briefing ao deploy, para profissionalizar sua presença digital.',
  },
  {
    number: '05',
    title: ['COBERTURA DE', 'EVENTOS'],
    description:
      'Registro completo do início ao fim, com making of e entrega ágil.',
  },
  {
    number: '06',
    title: ['VÍDEOS & REELS'],
    description:
      'Conteúdo em movimento pensado para reter atenção e converter.',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.services-title',
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-title',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.service-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
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
      id="services"
      className="py-24 md:py-32 bg-brand-black"
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-10">
        <h2
          className="services-title text-3xl md:text-5xl lg:text-6xl font-serif mb-16 md:mb-20 tracking-tight"
          style={{ clipPath: 'inset(100% 0 0 0)' }}
        >
          SERVIÇOS
        </h2>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="service-card bg-[#F8F8F6] border border-[#E5E5E3] rounded-2xl p-8 flex flex-col min-h-[234px]"
            >
              <span className="text-xs font-mono text-[#999999] tracking-wider mb-8">
                {service.number}
              </span>

              <h3 className="text-lg md:text-xl font-sans font-medium text-[#111111] leading-tight tracking-tight mb-4 uppercase">
                {service.title.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h3>

              <p className="text-sm font-sans font-light text-[#666666] leading-relaxed mt-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
