'use client'

import { Globe, LayoutDashboard, ShoppingCart, Zap, LucideIcon } from 'lucide-react'
import { AnimatedSection, AnimatedDiv } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { services } from '@/data/services'
import { useCursorPosition } from '@/hooks/useCursorPosition'
import { useLocale } from '@/context/LocaleContext'
import { cn } from '@/lib/utils'

const iconMap: Record<string, LucideIcon> = {
  Globe,
  LayoutDashboard,
  ShoppingCart,
  Zap,
}

const serviceKeys = ['landing', 'webapp', 'ecommerce', 'audit'] as const

function ServiceCard({
  serviceKey,
  icon,
  index,
}: {
  serviceKey: typeof serviceKeys[number]
  icon: string
  index: number
}) {
  const { t } = useLocale()
  const { onMouseMove } = useCursorPosition()
  const Icon = iconMap[icon] ?? Globe
  const item = t.services.items[serviceKey]

  return (
    <AnimatedDiv delay={index * 0.1} className="h-full">
      <div
        className={cn(
          'relative group p-6 rounded-xl border border-border bg-surface/40 h-full flex flex-col',
          'hover:border-accent/40 transition-all duration-300 overflow-hidden cursor-default',
        )}
        onMouseMove={onMouseMove}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
          style={{
            background:
              'radial-gradient(250px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99,102,241,0.07), transparent 80%)',
          }}
        />
        <div className="relative z-10 flex flex-col h-full">
          <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors shrink-0">
            <Icon size={20} className="text-accent" />
          </div>
          <h3 className="text-lg font-semibold text-fg mb-2 min-h-[3.5rem] leading-snug">{item.title}</h3>
          <p className="text-sm text-fg-secondary leading-relaxed mb-4 flex-1">{item.description}</p>
          <ul className="space-y-1">
            {item.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-xs text-fg-muted">
                <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedDiv>
  )
}

export function Services() {
  const { t } = useLocale()

  return (
    <AnimatedSection id="services" className="py-16 md:py-24 max-w-6xl mx-auto px-6">
      <SectionHeader
        eyebrow={t.services.eyebrow}
        title={t.services.title}
        titleGradient={t.services.gradient}
        subtitle={t.services.subtitle}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, i) => (
          <ServiceCard
            key={service.id}
            serviceKey={service.id as typeof serviceKeys[number]}
            icon={service.icon}
            index={i}
          />
        ))}
      </div>
    </AnimatedSection>
  )
}
