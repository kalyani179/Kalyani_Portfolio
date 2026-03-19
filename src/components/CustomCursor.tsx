import { useEffect, useState } from 'react'
import { SmokeyFluidCursor } from 'react-smokey-fluid-cursor'

export function CustomCursor() {
  const [shouldRender, setShouldRender] = useState(false)

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

  if (!shouldRender) return null

  return (
    <SmokeyFluidCursor
      config={{
        transparent: true,
        backColor: { r: 0, g: 0, b: 0 },
        id: 'smokey-fluid-canvas',
      }}
    />
  )
}
