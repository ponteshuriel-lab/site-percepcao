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
        className="absolute top-6 right-6 z-10 text-brand-light/60 hover:text-brand-light transition-colors"
        aria-label="Fechar"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 z-10 text-[11px] font-mono tracking-[0.2em] text-brand-light/50">
        {String(currentIndex + 1).padStart(2, '0')} / {String(allImages.length).padStart(2, '0')}
      </div>

      {/* Project info */}
      <div className="absolute bottom-6 left-6 z-10">
        <h3 className="text-lg font-serif text-brand-light">{project.title}</h3>
        <p className="text-xs font-mono text-brand-light/40 tracking-wider mt-1">
          {project.category.toUpperCase()}
        </p>
      </div>

      {/* Image */}
      <div
        ref={imageRef}
        className="w-full h-full flex items-center justify-center p-4 md:p-10"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={allImages[currentIndex]}
          alt={`${project.title} — ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
        />
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
      <div className="absolute bottom-0 left-0 w-full h-px bg-brand-mid">
        <div
          className="h-full bg-brand-light/50 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / allImages.length) * 100}%` }}
        />
      </div>
    </div>
  )
}