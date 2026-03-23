import { ArrowRight, ArrowUpRight } from 'lucide-react'

type ArrowHoverSwapProps = {
  active: boolean
  /** Lucide size prop (px) */
  size: number
  strokeWidth?: number
  className?: string
  /** Extra classes on the right-arrow wrapper when not active (e.g. parent group-hover) */
  inactiveRightClassName?: string
}

/**
 * Crossfades between ArrowRight and ArrowUpRight instead of swapping mounts.
 */
export function ArrowHoverSwap({
  active,
  size,
  strokeWidth = 2,
  className = '',
  inactiveRightClassName = '',
}: ArrowHoverSwapProps) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out motion-reduce:duration-0 motion-reduce:transition-none ${
          active ? 'pointer-events-none scale-[0.88] opacity-0' : `scale-100 opacity-100 ${inactiveRightClassName}`
        }`}
      >
        <ArrowRight size={size} strokeWidth={strokeWidth} className="block" />
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out motion-reduce:duration-0 motion-reduce:transition-none ${
          active ? 'scale-100 opacity-100' : 'pointer-events-none scale-[0.88] opacity-0'
        }`}
      >
        <ArrowUpRight size={size} strokeWidth={strokeWidth} className="block" />
      </span>
    </span>
  )
}
