'use client'

import { useEffect, useState } from 'react'
import { GitBranch, Link2, Mail } from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/constants'
import { useLocale } from '@/context/LocaleContext'

export function Footer() {
  const [time, setTime] = useState('')
  const { t } = useLocale()

  const navLinks = [
    { label: t.nav.links.services, href: '#services' },
    { label: t.nav.links.work, href: '#projects' },
    { label: t.nav.links.about, href: '#about' },
    { label: t.nav.links.contact, href: '#contact' },
  ]

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('en-ES', {
          timeZone: 'Europe/Madrid',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }),
      )
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="border-t border-border bg-surface/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xl font-bold gradient-text">Nyar</span>
            <p className="text-xs text-fg-muted mt-1">{t.footer.tagline}</p>
          </div>

          <div className="flex items-center gap-5">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-fg-muted hover:text-fg transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="p-2 text-fg-muted hover:text-accent transition-colors rounded-lg hover:bg-surface" aria-label="Email">
                <Mail size={16} />
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-2 text-fg-muted hover:text-accent transition-colors rounded-lg hover:bg-surface" aria-label="GitHub">
                <GitBranch size={16} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-fg-muted hover:text-accent transition-colors rounded-lg hover:bg-surface" aria-label="LinkedIn">
                <Link2 size={16} />
              </a>
            </div>
            {time && (
              <div className="hidden md:flex items-center gap-1.5 text-xs text-fg-muted border border-border/50 rounded-lg px-3 py-1.5 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-available inline-block" />
                {time} CET
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-fg-muted">
          <p>© {new Date().getFullYear()} Nyar. {t.footer.rights}</p>
          <p>{t.footer.craft}</p>
        </div>
      </div>
    </footer>
  )
}
