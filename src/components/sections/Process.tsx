'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, Palette, Code2, Rocket } from 'lucide-react'
import { AnimatedSection, AnimatedDiv } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { useLocale } from '@/context/LocaleContext'

const stepIcons = [Search, Palette, Code2, Rocket]

export function Process() {
  const { t } = useLocale()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ['0%', '100%'])

  return (
    <AnimatedSection id="process" className="py-16 md:py-24 bg-surface/20 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          titleGradient={t.process.gradient}
          subtitle={t.process.subtitle}
          centered
        />

        <div ref={ref} className="relative max-w-3xl mx-auto">
          <div
            className="absolute left-[27px] top-8 bottom-8 w-px hidden md:block"
            style={{ background: 'var(--process-track)' }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent to-highlight origin-top"
              style={{
                height: lineHeight,
                boxShadow: '0 0 10px var(--process-glow), 0 0 4px var(--process-glow)',
                width: '3px',
                left: '-1px',
              }}
            />
          </div>

          <div className="space-y-10">
            {t.process.steps.map((step, i) => {
              const Icon = stepIcons[i]
              return (
                <AnimatedDiv key={i} delay={i * 0.1}>
                  <div className="flex gap-6 relative">
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-bg border border-border flex items-center justify-center relative z-10 shadow-sm">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <div className="pt-1.5 pb-2">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-fg-muted">0{i + 1}</span>
                        <h3 className="text-lg font-semibold text-fg">{step.title}</h3>
                        <span className="ml-auto text-xs text-fg-muted border border-border rounded-full px-2 py-0.5">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-fg-secondary leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </AnimatedDiv>
              )
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
