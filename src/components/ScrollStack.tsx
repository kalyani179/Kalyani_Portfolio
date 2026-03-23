import { motion, useScroll, useTransform } from 'framer-motion'
import ReactLenis from 'lenis/react'
import React, { useRef } from 'react'

const StickyCard = ({
  i,
  children,
  progress,
  range,
  targetScale,
  cardOffset,
  cardTopBase,
  cardClassName,
}: {
  i: number
  children: React.ReactNode
  progress: any
  range: [number, number]
  targetScale: number
  cardOffset: number
  cardTopBase: number
  cardClassName: string
}) => {
  const container = useRef<HTMLDivElement>(null)
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * cardOffset + cardTopBase}px)`,
        }}
        className={cardClassName}
      >
        {children}
      </motion.div>
    </div>
  )
}

export const ScrollStackItem = ({
  children,
}: {
  children: React.ReactNode
}) => <>{children}</>

const ScrollStack = ({
  children,
  className = '',
  cardOffset = 20,
  cardTopBase = 250,
  minScale = 0.5,
  scaleStep = 0.1,
  cardClassName = 'relative origin-top w-full',
}: {
  children: React.ReactNode
  className?: string
  cardOffset?: number
  cardTopBase?: number
  minScale?: number
  scaleStep?: number
  cardClassName?: string
}) => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const childrenArray = React.Children.toArray(children)

  return (
    <ReactLenis root>
      <main
        ref={container}
        className={`relative flex w-full flex-col items-center justify-center pb-32 ${className}`.trim()}
      >
        {childrenArray.map((child, i) => {
          const targetScale = Math.max(
            minScale,
            1 - (childrenArray.length - i - 1) * scaleStep,
          )
          return (
            <StickyCard
              key={i}
              i={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              cardOffset={cardOffset}
              cardTopBase={cardTopBase}
              cardClassName={cardClassName}
            >
              {child}
            </StickyCard>
          )
        })}
      </main>
    </ReactLenis>
  )
}

export default ScrollStack
