'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon, SunMoon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className={cn('w-9 h-9 rounded-lg bg-surface/40 border border-border animate-pulse', className)} />
    )
  }

  const isDark = resolvedTheme === 'dark'
  const isSystem = theme === 'system'

  const cycle = () => {
    if (isSystem) setTheme('dark')
    else if (isDark) setTheme('light')
    else setTheme('system')
  }

  return (
    <button
      onClick={cycle}
      title={isSystem ? 'System' : isDark ? 'Dark' : 'Light'}
      className={cn(
        'w-9 h-9 rounded-lg flex items-center justify-center',
        'border border-border bg-surface/40 text-fg-secondary',
        'hover:text-fg hover:border-accent/50 hover:bg-surface/80',
        'transition-all duration-200',
        className,
      )}
      aria-label="Toggle theme"
    >
      {isSystem ? (
        <SunMoon size={16} />
      ) : isDark ? (
        <Moon size={16} />
      ) : (
        <Sun size={16} />
      )}
    </button>
  )
}
