import { useEffect, useState, useRef } from 'react'

const TRAIL_LENGTH = 20
const IDLE_DECAY_MS = 100

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const lastMoveRef = useRef(Date.now())
  const decayIntervalRef = useRef<ReturnType<typeof setInterval>>()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isPointerFine = window.matchMedia('(pointer: fine)').matches

    if (prefersReducedMotion || !isPointerFine) return

    setShouldRender(true)
    document.body.classList.add('custom-cursor-active')

    const handleMouseMove = (e: MouseEvent) => {
      lastMoveRef.current = Date.now()
      setPosition({ x: e.clientX, y: e.clientY })
      setTrail((prev) => [
        { x: e.clientX, y: e.clientY },
        ...prev.slice(0, TRAIL_LENGTH - 1),
      ])
      setIsVisible(true)
    }
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => {
      setIsVisible(false)
      setTrail([])
    }

    decayIntervalRef.current = setInterval(() => {
      if (Date.now() - lastMoveRef.current > IDLE_DECAY_MS) {
        setTrail((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev))
      }
    }, 80)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (decayIntervalRef.current) clearInterval(decayIntervalRef.current)
    }
  }, [])

  if (!shouldRender) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* White smoke trail */}
      {isVisible &&
        trail.slice(1).map((pos, i) => {
          const progress = i / Math.max(trail.length, 1)
          const opacity = 0.35 * (1 - progress)
          const size = 12 + progress * 28
          const blur = 10 + progress * 14
          return (
            <div
              key={i}
              className="rounded-full fixed pointer-events-none"
              style={{
                left: pos.x,
                top: pos.y,
                width: size,
                height: size,
                marginLeft: -size / 2,
                marginTop: -size / 2,
                opacity,
                background: 'rgba(255, 255, 255, 0.7)',
                filter: `blur(${blur}px)`,
              }}
            />
          )
        })}

      {/* Smaller grey ring cursor */}
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="rounded-full bg-transparent border border-gray-400"
          style={{
            width: 18,
            height: 18,
            marginLeft: -7,
            marginTop: -7,
          }}
        />
      </div>
    </div>
  )
}
