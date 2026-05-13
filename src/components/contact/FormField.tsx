import { cn } from '@/lib/utils'

interface FormFieldProps {
  label: string
  error?: string
  children: React.ReactNode
  className?: string
}

export function FormField({ label, error, children, className }: FormFieldProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label className="text-sm font-medium text-fg-secondary">{label}</label>
      {children}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
}

export const inputClass =
  'w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-fg placeholder:text-fg-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/60 transition-all duration-200'
