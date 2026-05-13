'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ProjectPlaceholder } from '@/components/projects/ProjectPlaceholder'
import { projects } from '@/data/projects'
import { useLocale } from '@/context/LocaleContext'
import { cn } from '@/lib/utils'
import type { Project } from '@/types/project'

export function Projects() {
  const [active, setActive] = useState<string>('all')
  const { t } = useLocale()

  const filterOptions = [
    { value: 'all', label: t.projects.filters.all },
    { value: 'web_app', label: t.projects.filters.web_app },
    { value: 'landing', label: t.projects.filters.landing },
    { value: 'ecommerce', label: t.projects.filters.ecommerce },
    { value: 'audit', label: t.projects.filters.audit },
  ]

  const filtered =
    active === 'all' ? projects : projects.filter((p) => p.category === active)

  const isPlaceholder = (p: Project) =>
    p.status === 'nda' || p.status === 'in_progress' || p.status === 'coming_soon'

  return (
    <AnimatedSection id="projects" className="py-16 md:py-24 max-w-6xl mx-auto px-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <SectionHeader
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          titleGradient={t.projects.gradient}
          subtitle={t.projects.subtitle}
          className="mb-0"
        />
        <div className="flex flex-wrap gap-1.5 shrink-0">
          {filterOptions.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={cn(
                'px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200',
                active === cat.value
                  ? 'bg-accent text-white shadow-sm shadow-accent/20'
                  : 'bg-surface border border-border text-fg-secondary hover:text-fg hover:border-accent/40',
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              {isPlaceholder(project) ? (
                <ProjectPlaceholder project={project} />
              ) : (
                <ProjectCard project={project} />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </AnimatedSection>
  )
}
