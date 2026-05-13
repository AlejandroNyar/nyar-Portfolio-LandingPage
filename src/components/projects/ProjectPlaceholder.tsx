import { Lock, Clock, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import type { Project } from '@/types/project'

const statusConfig: Record<
  Project['status'],
  { icon: typeof Lock; label: string; badge: React.ComponentProps<typeof Badge>['variant'] }
> = {
  nda: { icon: Lock, label: 'NDA', badge: 'nda' },
  in_progress: { icon: Clock, label: 'In Progress', badge: 'in_progress' },
  coming_soon: { icon: ArrowRight, label: 'Coming Soon', badge: 'coming_soon' },
  live: { icon: ArrowRight, label: 'Live', badge: 'default' },
}

const categoryLabels: Record<Project['category'], string> = {
  web_app: 'Web App',
  landing: 'Landing Page',
  ecommerce: 'E-commerce',
  audit: 'Performance Audit',
}

interface ProjectPlaceholderProps {
  project: Project
}

export function ProjectPlaceholder({ project }: ProjectPlaceholderProps) {
  const status = statusConfig[project.status]
  const Icon = status.icon

  return (
    <div className="group relative rounded-xl border border-border bg-surface/40 overflow-hidden hover:border-accent/30 transition-all duration-300">
      {/* Image area */}
      <div className="relative h-44 bg-gradient-to-br from-surface to-bg flex items-center justify-center border-b border-border overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative flex flex-col items-center gap-3 text-fg-muted">
          <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center">
            <Icon size={22} className="text-fg-muted" />
          </div>
          <Badge variant={status.badge}>{status.label}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-fg">{project.title}</h3>
          <span className="text-xs text-fg-muted shrink-0 mt-0.5">
            {categoryLabels[project.category]}
          </span>
        </div>
        <p className="text-sm text-fg-secondary leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-surface border border-border text-fg-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
