'use client'

import { motion, cubicBezier } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { useLocale } from '@/context/LocaleContext'

const ease = cubicBezier(0.21, 0.47, 0.32, 0.98)

function WordCarousel({ words }: { words: string[] }) {
  const lineH = 1.2 // em, must match h-[1.2em] on each word
  const n = words.length

  // Build keyframes: hold at each position, then slide to the next.
  // Each word occupies 1/n of the total duration (hold 88%, slide 12%).
  const yFrames: string[] = []
  const times: number[] = []
  for (let i = 0; i < n; i++) {
    const segStart = i / n
    const segSlide = segStart + (0.88 / n)
    yFrames.push(`${-i * lineH}em`, `${-i * lineH}em`)
    times.push(segStart, segSlide)
  }
  // Duplicate of first word — jump back here at repeat (seamless loop)
  yFrames.push(`${-n * lineH}em`)
  times.push(1)

  return (
    <span className="relative inline-block overflow-hidden h-[1.2em] align-bottom">
      <motion.span
        className="inline-flex flex-col"
        animate={{ y: yFrames }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', times }}
      >
        {[...words, words[0]].map((w, i) => (
          <span key={i} className="gradient-text block h-[1.2em]">
            {w}
          </span>
        ))}
      </motion.span>
    </span>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export function Hero() {
  const { t } = useLocale()

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="glow-orb absolute -top-40 -left-40 w-96 h-96 opacity-60" />
      <div
        className="glow-orb absolute top-1/2 -right-40 w-80 h-80 opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <Badge variant="available" pulse>{t.hero.badge}</Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-fg leading-[1.1] tracking-tight"
            >
              {t.hero.headline1}{' '}
              <WordCarousel words={t.hero.words} />
              <br />
              <span className="text-fg-secondary">{t.hero.headline2}</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-fg-secondary leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent-hover transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/30"
              >
                <Sparkles size={16} />
                {t.hero.cta1}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-fg-secondary font-semibold hover:text-fg hover:border-accent/50 hover:bg-surface/60 transition-all duration-200"
              >
                {t.hero.cta2}
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm text-fg-muted">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-available" />
                {t.hero.basedIn}
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {t.hero.response}
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-highlight" />
                {t.hero.languages}
              </div>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="relative hidden lg:block"
          >
            <CodeBlock className="w-full" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -bottom-6 -right-4 bg-surface border border-border rounded-xl p-4 shadow-2xl shadow-black/40"
            >
              <p className="text-xs text-fg-muted mb-2 font-medium">Lighthouse Score</p>
              <div className="flex gap-3">
                {[
                  { label: 'Perf', value: 99, color: 'text-available' },
                  { label: 'A11y', value: 100, color: 'text-available' },
                  { label: 'SEO', value: 100, color: 'text-available' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="text-center">
                    <p className={`text-xl font-bold ${color}`}>{value}</p>
                    <p className="text-xs text-fg-muted">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="absolute -top-4 -left-4 bg-accent/10 border border-accent/30 rounded-lg px-3 py-2"
            >
              <span className="text-xs font-semibold text-accent">Next.js 16 · React 19</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-fg-muted"
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
