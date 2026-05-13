import { cn } from '@/lib/utils'

type BadgeVariant = 'available' | 'nda' | 'in_progress' | 'coming_soon' | 'default'

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
  pulse?: boolean
}

const variants: Record<BadgeVariant, string> = {
  available: 'bg-available/10 text-available border-available/30',
  nda: 'bg-fg-muted/10 text-fg-secondary border-fg-muted/20',
  in_progress: 'bg-accent/10 text-accent border-accent/30',
  coming_soon: 'bg-highlight/10 text-highlight border-highlight/30',
  default: 'bg-surface text-fg-secondary border-border',
}

export function Badge({ variant = 'default', children, className, pulse }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border',
        variants[variant],
        className,
      )}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-[ping-slow_2s_cubic-bezier(0,0,0.2,1)_infinite] absolute inline-flex h-full w-full rounded-full bg-available opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-available" />
        </span>
      )}
      {children}
    </span>
  )
}
