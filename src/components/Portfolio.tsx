import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects, categories, type Category } from '../data/portfolio'
import PortfolioViewer from './PortfolioViewer'

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState<Category>('Todos')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.portfolio-title',
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.portfolio-title',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.portfolio-filter',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.portfolio-filter',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.portfolio-card',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.portfolio-grid',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [activeCategory])

  return (
    <>
      <section
        ref={sectionRef}
        id="portfolio"
        className="relative py-24 md:py-32 bg-brand-black"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <h2
            className="portfolio-title text-3xl md:text-5xl lg:text-6xl font-serif mb-12"
            style={{ clipPath: 'inset(100% 0 0 0)' }}
          >
            PORTFÓLIO
          </h2>

          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`portfolio-filter px-4 py-2 text-[11px] tracking-[0.15em] font-mono border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'border-brand-light bg-brand-light text-brand-black'
                    : 'border-brand-mid text-brand-light/50 hover:border-brand-light/50 hover:text-brand-light'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Portfolio grid */}
          <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProjects.map((project) => (
              <button
                key={project.id}
                data-cursor="photo"
                onClick={() => setSelectedProject(project.id)}
                className="portfolio-card group relative aspect-[4/5] overflow-hidden bg-brand-gray"
              >
                <img
                  src={project.cover}
                  alt={project.title}
                  loading="lazy"
                  width="800"
                  height="1000"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-[10px] tracking-[0.3em] font-mono text-brand-light/50 mb-2">
                    {String(project.id).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg md:text-xl font-serif text-brand-light mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-brand-light/50 font-mono tracking-wider">
                    {project.category.toUpperCase()}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <PortfolioViewer
          project={projects.find((p) => p.id === selectedProject)!}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}