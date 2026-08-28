import { useRef, useEffect } from 'react'
import gsap from 'gsap'

interface CameraShutterProps {
  size?: number
  isOpen?: boolean
  blades?: number
  className?: string
}

export default function CameraShutter({
  size = 160,
  isOpen = false,
  blades = 8,
  className = '',
}: CameraShutterProps) {
  const groupRef = useRef<SVGGElement>(null)

  useEffect(() => {
    if (!groupRef.current) return
    gsap.to(groupRef.current, {
      rotation: isOpen ? 30 : 0,
      scale: isOpen ? 0.8 : 1,
      duration: 1.2,
      ease: 'power2.inOut',
    })
  }, [isOpen])

  const center = size / 2
  const bladeLength = size * 0.42
  const bladeWidth = size * 0.18

  const bladePaths = Array.from({ length: blades }, (_, i) => {
    const angle = (360 / blades) * i
    return `M ${center} ${center} 
            l ${bladeWidth} 0 
            l ${bladeWidth * 0.3} ${-bladeLength} 
            l ${-bladeWidth * 2.6} 0 Z`
  })

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle
        cx={center}
        cy={center}
        r={center - 2}
        fill="none"
        stroke="#F4F4F1"
        strokeWidth="1"
        opacity="0.3"
      />

      {/* Inner ring */}
      <circle
        cx={center}
        cy={center}
        r={size * 0.35}
        fill="none"
        stroke="#F4F4F1"
        strokeWidth="0.5"
        opacity="0.2"
      />

      {/* Blades */}
      <g ref={groupRef} style={{ transformOrigin: `${center}px ${center}px` }}>
        {bladePaths.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="#F4F4F1"
            opacity="0.12"
            style={{ transformOrigin: `${center}px ${center}px` }}
            className="shutter-blade"
          />
        ))}
      </g>

      {/* Center dot */}
      <circle cx={center} cy={center} r={2} fill="#F4F4F1" opacity="0.4" />
    </svg>
  )
}