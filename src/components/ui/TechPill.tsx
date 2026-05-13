'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import type { Skill } from '@/types/skill'

interface TechPillProps {
  skill: Skill
  levelLabel?: string
}

const levelColors: Record<Skill['level'], string> = {
  expert: 'border-accent/40 text-accent bg-accent/5 hover:bg-accent/10',
  advanced: 'border-highlight/30 text-highlight bg-highlight/5 hover:bg-highlight/10',
  intermediate: 'border-border text-fg-secondary bg-surface hover:border-accent/30',
  learning: 'border-available/30 text-available bg-available/5 hover:bg-available/10',
}

export function TechPill({ skill, levelLabel }: TechPillProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="relative inline-block">
      <span
        className={cn(
          'inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border',
          'transition-all duration-200 cursor-default',
          levelColors[skill.level],
        )}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {skill.name}
      </span>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-10 pointer-events-none">
          <div className="bg-surface border border-border rounded-lg px-3 py-2 text-xs text-fg-secondary whitespace-nowrap shadow-xl">
            <span className="font-medium text-fg">{levelLabel ?? skill.level}</span>
            {skill.years && (
              <span className="text-fg-muted"> · {skill.years}y exp</span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
