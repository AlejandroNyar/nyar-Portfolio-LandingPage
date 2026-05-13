'use client'

import { MapPin, Clock, Languages, Timer, Download } from 'lucide-react'
import { AnimatedSection, AnimatedDiv } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { useLocale } from '@/context/LocaleContext'
import { personal } from '@/data/personal'

export function About() {
  const { t } = useLocale()

  const quickFacts = [
    { icon: MapPin, label: t.about.labels.location, value: t.about.facts.location },
    { icon: Clock, label: t.about.labels.timezone, value: t.about.facts.timezone },
    { icon: Languages, label: t.about.labels.languages, value: t.about.facts.languages },
    { icon: Timer, label: t.about.labels.response, value: t.about.facts.response },
  ]

  return (
    <AnimatedSection id="about" className="py-16 md:py-24 max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <AnimatedDiv>
          <SectionHeader
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            titleGradient={t.about.gradient}
          />
          <div className="space-y-4 text-fg-secondary leading-relaxed">
            {t.about.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={personal.cvUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors shadow-sm shadow-accent/20"
            >
              <Download size={15} />
              {t.about.downloadCv}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-fg-secondary font-medium text-sm hover:text-fg hover:border-accent/50 transition-colors"
            >
              {t.about.workWithMe}
            </a>
          </div>
        </AnimatedDiv>

        <AnimatedDiv delay={0.15}>
          <div className="w-full aspect-square max-w-[180px] sm:max-w-xs mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-accent/10 via-surface to-highlight/5 border border-border flex items-center justify-center mb-8">
            <span className="text-6xl font-bold gradient-text opacity-40 select-none">N</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {quickFacts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="p-4 rounded-xl bg-surface/40 border border-border">
                <div className="flex items-center gap-2 mb-1">
                  <Icon size={14} className="text-accent" />
                  <span className="text-xs text-fg-muted font-medium uppercase tracking-wide">{label}</span>
                </div>
                <p className="text-sm text-fg font-medium">{value}</p>
              </div>
            ))}
          </div>
        </AnimatedDiv>
      </div>
    </AnimatedSection>
  )
}
