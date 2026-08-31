import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const [cursorLabel, setCursorLabel] = useState<string>('')

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const cursor = cursorRef.current
    const dot = cursorDotRef.current
    if (!cursor || !dot) return

    let mouseX = 0
    let mouseY = 0

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1, ease: 'power2.out' })
      gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.35, ease: 'power2.out' })
    }

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 })
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.2 })
    }

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 })
      gsap.to(dot, { scale: 0, opacity: 0, duration: 0.2 })
    }

    const handleLinkEnter = () => {
      gsap.to(cursor, { scale: 2.5, duration: 0.3, ease: 'power2.out' })
      gsap.to(dot, { scale: 0.5, duration: 0.2 })
      cursor.classList.add('mix-blend-difference')
    }

    const handleLinkLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power2.out' })
      gsap.to(dot, { scale: 1, duration: 0.2 })
      cursor.classList.remove('mix-blend-difference')
    }

    const handlePhotoEnter = () => {
      gsap.to(cursor, { scale: 3, duration: 0.3, ease: 'power2.out' })
      gsap.to(dot, { scale: 0, duration: 0.15 })
      cursor.classList.add('mix-blend-difference')
      setCursorLabel('VIEW')
    }

    const handlePhotoLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power2.out' })
      gsap.to(dot, { scale: 1, duration: 0.2 })
      cursor.classList.remove('mix-blend-difference')
      setCursorLabel('')
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    const links = document.querySelectorAll('a, button')
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkEnter)
      link.addEventListener('mouseleave', handleLinkLeave)
    })

    const photos = document.querySelectorAll('[data-cursor="photo"]')
    photos.forEach((photo) => {
      photo.addEventListener('mouseenter', handlePhotoEnter)
      photo.addEventListener('mouseleave', handlePhotoLeave)
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkEnter)
        link.removeEventListener('mouseleave', handleLinkLeave)
      })
      photos.forEach((photo) => {
        photo.removeEventListener('mouseenter', handlePhotoEnter)
        photo.removeEventListener('mouseleave', handlePhotoLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 border border-brand-light/40 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference flex items-center justify-center hidden md:flex"
      >
        {cursorLabel && (
          <span className="text-[8px] font-mono tracking-widest text-brand-light">
            {cursorLabel}
          </span>
        )}
      </div>
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-light rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  )
}
