'use client'

import { motion, cubicBezier } from 'framer-motion'
import { cn } from '@/lib/utils'

const ease = cubicBezier(0.21, 0.47, 0.32, 0.98)

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  id?: string
}

export function AnimatedSection({ children, className, delay = 0, id }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease }}
      className={cn('relative', className)}
    >
      {children}
    </motion.section>
  )
}

export function AnimatedDiv({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
