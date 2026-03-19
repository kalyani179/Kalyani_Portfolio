import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 100
const PARTICLE_SIZE = 2
const FALL_SPEED = 0.5
const OPACITY = 0.35

interface Particle {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

export function PixelSnow() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: PARTICLE_SIZE + Math.random() * 1,
      speed: FALL_SPEED + Math.random() * 0.8,
      opacity: OPACITY * (0.6 + Math.random() * 0.3),
    }))

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`
        ctx.fillRect(p.x, p.y, p.size, p.size)

        p.y += p.speed
        if (p.y > canvas.height) {
          p.y = -p.size
          p.x = Math.random() * canvas.width
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      style={{ background: 'transparent' }}
      aria-hidden
    />
  )
}