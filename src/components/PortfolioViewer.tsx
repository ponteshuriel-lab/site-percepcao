import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import type { Project } from '../data/portfolio'

interface PortfolioViewerProps {
  project: Project
  onClose: () => void
}

export default function PortfolioViewer({ project, onClose }: PortfolioViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const overlayRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const allImages = [project.cover, ...project.images]

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= allImages.length) return
      gsap.to(imageRef.current, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          setCurrentIndex(index)
          gsap.to(imageRef.current, { opacity: 1, duration: 0.3 })
        },
      })
    },
    [allImages.length]
  )

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goTo(currentIndex + 1)
      if (e.key === 'ArrowLeft') goTo(currentIndex - 1)
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [currentIndex, onClose, goTo])

  useEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    )
  }, [])

  const handleClose = () => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: onClose,
    })
  }

  // Swipe support
  const touchStartX = useRef(0)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo(currentIndex + 1)
      else goTo(currentIndex - 1)
    }
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-brand-black/95 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — Visualizador de portfólio`}
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-[max(16px,env(safe-area-inset-top))] right-4 md:right-6 z-10 w-11 h-11 flex items-center justify-center text-brand-light/60 hover:text-brand-light transition-colors bg-brand-black/40 backdrop-blur-sm"
        aria-label="Fechar"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-[max(20px,env(safe-area-inset-top))] left-4 md:left-10 z-10 text-[11px] font-mono tracking-[0.2em] text-brand-light/50">
        {String(currentIndex + 1).padStart(2, '0')} / {String(allImages.length).padStart(2, '0')}
      </div>

      {/* Image */}
      <div
        ref={imageRef}
        className="w-full h-full flex items-center justify-center px-3 md:px-10 pt-[max(80px,env(safe-area-inset-top))] md:pt-10 pb-[calc(160px+env(safe-area-inset-bottom))] md:pb-10"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={allImages[currentIndex]}
          alt={`${project.title} — ${currentIndex + 1}`}
          width="1920"
          height="1080"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Project info + mobile thumbnails */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-brand-black via-brand-black/85 to-transparent md:bg-none md:via-transparent pt-16 md:pt-0 px-4 md:px-10 pb-[max(16px,env(safe-area-inset-bottom))] md:pb-8">
        <h3 className="text-lg font-serif text-brand-light">{project.title}</h3>
        <p className="text-xs font-mono text-brand-light/40 tracking-wider mt-1">
          {project.category.toUpperCase()}
        </p>

        {/* Thumbnails - mobile navigation */}
        <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar md:hidden">
          {allImages.map((src, i) => (
            <button
              key={src}
              onClick={() => goTo(i)}
              aria-label={`Ir para foto ${i + 1}`}
              className={`w-14 h-14 shrink-0 overflow-hidden border transition-all duration-300 ${
                i === currentIndex
                  ? 'border-brand-light'
                  : 'border-brand-mid opacity-40'
              }`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                width="56"
                height="56"
                className={`w-full h-full object-cover ${
                  i === currentIndex ? '' : 'grayscale'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Navigation arrows - desktop only */}
      {currentIndex > 0 && (
        <button
          onClick={() => goTo(currentIndex - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-brand-light/40 hover:text-brand-light transition-colors hidden md:flex"
          aria-label="Foto anterior"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}
      {currentIndex < allImages.length - 1 && (
        <button
          onClick={() => goTo(currentIndex + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-brand-light/40 hover:text-brand-light transition-colors hidden md:flex"
          aria-label="Próxima foto"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-brand-mid z-20">
        <div
          className="h-full bg-brand-light/50 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / allImages.length) * 100}%` }}
        />
      </div>
    </div>
  )
}