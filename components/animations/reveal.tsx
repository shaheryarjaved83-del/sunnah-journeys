'use client'

import { motion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  amount?: number
}

export function Reveal({ children, className, delay = 0, y = 28, amount = 0.25 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

const container: Variants = {
  hidden: {},
  show: (stagger: number = 0.12) => ({ transition: { staggerChildren: stagger } }),
}

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
}

export function Stagger({
  children,
  className,
  stagger = 0.12,
  amount = 0.15,
}: {
  children: ReactNode
  className?: string
  stagger?: number
  amount?: number
}) {
  return (
    <motion.div
      className={className}
      variants={container}
      custom={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  )
}

/** Mask-style image reveal: an ivory curtain lifts while the image settles from a gentle zoom. */
export function ImageReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className ?? ''}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="absolute inset-0"
        variants={{ hidden: { scale: 1.15 }, show: { scale: 1, transition: { duration: 1.6, ease, delay } } }}
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute inset-0 z-10 origin-top bg-sage-50"
        variants={{ hidden: { scaleY: 1 }, show: { scaleY: 0, transition: { duration: 1.1, ease, delay } } }}
      />
    </motion.div>
  )
}
