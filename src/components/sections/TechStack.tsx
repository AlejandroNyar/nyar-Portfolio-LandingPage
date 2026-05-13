'use client'

import { AnimatedSection, AnimatedDiv } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TechPill } from '@/components/ui/TechPill'
import { skills } from '@/data/skills'
import { useLocale } from '@/context/LocaleContext'
import type { Skill } from '@/types/skill'

const groupOrder: Skill['group'][] = ['frontend', 'frameworks', 'styling', 'tooling', 'learning']

export function TechStack() {
  const { t } = useLocale()

  const grouped = groupOrder.reduce<Record<Skill['group'], Skill[]>>(
    (acc, g) => ({ ...acc, [g]: skills.filter((s) => s.group === g) }),
    {} as Record<Skill['group'], Skill[]>,
  )

  return (
    <AnimatedSection id="skills" className="py-16 md:py-24 bg-surface/20 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          titleGradient={t.skills.gradient}
          subtitle={t.skills.subtitle}
        />
        <div className="space-y-8">
          {groupOrder.map((group, gi) => (
            <AnimatedDiv key={group} delay={gi * 0.08}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="sm:w-40 shrink-0">
                  <p className="text-xs font-semibold text-fg-muted uppercase tracking-wider pt-1.5">
                    {t.skills.groups[group]}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {grouped[group].map((skill) => (
                    <TechPill key={skill.name} skill={skill} levelLabel={t.skills.levels[skill.level]} />
                  ))}
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
