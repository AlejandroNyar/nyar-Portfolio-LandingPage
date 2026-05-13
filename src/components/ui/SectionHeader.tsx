import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  titleGradient?: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  titleGradient,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 md:mb-16', centered && 'text-center', className)}>
      {eyebrow && (
        <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-fg leading-tight">
        {title}
        {titleGradient && (
          <>
            {' '}
            <span className="gradient-text">{titleGradient}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-fg-secondary text-lg leading-relaxed max-w-2xl', centered && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
