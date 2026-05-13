'use client'

import { Quote } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { testimonials } from '@/data/testimonials'
import { useLocale } from '@/context/LocaleContext'

export function Testimonials() {
  const { t } = useLocale()

  return (
    <AnimatedSection className="py-16 md:py-24 bg-surface/20 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          titleGradient={t.testimonials.gradient}
          centered
        />

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-surface border border-border flex items-center justify-center">
                <Quote size={22} className="text-fg-muted" />
              </div>
              <div>
                <p className="text-fg-secondary font-medium">{t.testimonials.emptyTitle}</p>
                <p className="text-sm text-fg-muted mt-1">
                  {t.testimonials.emptyBody}{' '}
                  <a href="#contact" className="text-accent hover:underline">
                    {t.testimonials.emptyLink}
                  </a>
                </p>
              </div>
            </div>
          ) : (
            testimonials.map((testimony) => (
              <div key={testimony.id} className="p-6 rounded-xl border border-border bg-surface/40">
                <Quote size={20} className="text-accent/40 mb-4" />
                <p className="text-fg-secondary leading-relaxed mb-5 text-sm">&ldquo;{testimony.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-sm font-bold text-accent">
                    {testimony.author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-fg">{testimony.author}</p>
                    <p className="text-xs text-fg-muted">{testimony.role} · {testimony.company}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </AnimatedSection>
  )
}
