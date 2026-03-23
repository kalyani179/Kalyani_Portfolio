import { useEffect, useRef, useState } from 'react'
import { SmokeyFluidCursor } from 'react-smokey-fluid-cursor'

export function CustomCursor() {
  const [shouldRender, setShouldRender] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [ringVisible, setRingVisible] = useState(false)
  const rafRef = useRef<number | null>(null)
  const pendingRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isPointerFine = window.matchMedia('(pointer: fine)').matches

    if (prefersReducedMotion || !isPointerFine) return

    setShouldRender(true)
    document.body.classList.add('custom-cursor-active')

    return () => {
      document.body.classList.remove('custom-cursor-active')
    }
  }, [])

  useEffect(() => {
    if (!shouldRender) return

    const flush = () => {
      rafRef.current = null
      const p = pendingRef.current
      setPos({ x: p.x, y: p.y })
    }

    const onPointerMove = (e: PointerEvent) => {
      pendingRef.current = { x: e.clientX, y: e.clientY }
      setRingVisible(true)
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(flush)
      }
    }

    const hideRing = () => setRingVisible(false)
    const showRing = () => setRingVisible(true)

    const doc = document.documentElement
    doc.addEventListener('mouseleave', hideRing)
    doc.addEventListener('mouseenter', showRing)
    window.addEventListener('blur', hideRing)
    window.addEventListener('pointermove', onPointerMove, { passive: true })

    return () => {
      doc.removeEventListener('mouseleave', hideRing)
      doc.removeEventListener('mouseenter', showRing)
      window.removeEventListener('blur', hideRing)
      window.removeEventListener('pointermove', onPointerMove)
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [shouldRender])

  if (!shouldRender) return null

  return (
    <>
      <SmokeyFluidCursor
        config={{
          transparent: true,
          backColor: { r: 0, g: 0, b: 0 },
          id: 'smokey-fluid-canvas',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[10000] transition-opacity duration-150 ease-out"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
          opacity: ringVisible ? 1 : 0,
          visibility: ringVisible ? 'visible' : 'hidden',
        }}
      >
        <div
          className="box-border rounded-full border border-purple-400/80 bg-transparent shadow-[0_0_12px_rgba(168,85,247,0.3)] dark:border-purple-300/70"
          style={{ width: 20, height: 20 }}
        />
      </div>
    </>
  )
}
