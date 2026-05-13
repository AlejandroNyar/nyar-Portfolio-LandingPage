'use client'

import { useState, useRef, useEffect } from 'react'
import { Languages, Check } from 'lucide-react'
import { useLocale } from '@/context/LocaleContext'
import { cn } from '@/lib/utils'
import type { Locale } from '@/i18n'

const localeLabels: Record<Locale, { short: string; label: string; flag: string }> = {
  en: { short: 'EN', label: 'English', flag: '🇬🇧' },
  es: { short: 'ES', label: 'Español', flag: '🇪🇸' },
  de: { short: 'DE', label: 'Deutsch', flag: '🇩🇪' },
}

const locales: Locale[] = ['en', 'es', 'de']

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'flex items-center gap-1.5 h-9 px-3 rounded-lg',
          'border border-border bg-surface/40 text-fg-secondary',
          'hover:text-fg hover:border-accent/50 hover:bg-surface/80',
          'transition-all duration-200 text-sm font-medium',
          open && 'border-accent/50 text-fg',
        )}
        aria-label="Change language"
      >
        <Languages size={14} />
        <span>{localeLabels[locale].short}</span>
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-2 w-36 bg-surface border border-border rounded-xl shadow-2xl shadow-black/40 py-1 z-50 overflow-hidden">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => { setLocale(loc); setOpen(false) }}
              className={cn(
                'w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-colors',
                locale === loc
                  ? 'text-accent bg-accent/5'
                  : 'text-fg-secondary hover:text-fg hover:bg-surface/60',
              )}
            >
              <span className="text-base">{localeLabels[loc].flag}</span>
              <span className="flex-1 text-left">{localeLabels[loc].label}</span>
              {locale === loc && <Check size={12} className="text-accent" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
