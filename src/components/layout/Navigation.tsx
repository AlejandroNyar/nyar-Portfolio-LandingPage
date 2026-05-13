'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useLocale } from '@/context/LocaleContext'
import { Badge } from '@/components/ui/Badge'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'

const SECTION_IDS = ['services', 'projects', 'about', 'contact']
const NAV_HREF = ['#services', '#projects', '#about', '#contact'] as const

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const progress = useScrollProgress()
  const activeId = useActiveSection(SECTION_IDS)
  const { t } = useLocale()

  const navLinks = [
    { label: t.nav.links.services, href: '#services', id: 'services' },
    { label: t.nav.links.work, href: '#projects', id: 'projects' },
    { label: t.nav.links.about, href: '#about', id: 'about' },
    { label: t.nav.links.contact, href: '#contact', id: 'contact' },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-accent to-highlight z-[60] transition-all duration-100"
        style={{ width: `${progress}%` }}
      />

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-bg/80 backdrop-blur-md border-b border-border shadow-sm shadow-black/20'
            : 'bg-transparent',
        )}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="shrink-0">
            <span className="text-xl font-bold gradient-text">Nyar</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  activeId === link.id
                    ? 'text-fg bg-surface/60'
                    : 'text-fg-secondary hover:text-fg hover:bg-surface/40',
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <Badge variant="available" pulse>{t.nav.available}</Badge>
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors duration-200"
            >
              {t.nav.hire}
            </a>
          </div>

          {/* Mobile: lang + theme + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-fg-secondary hover:text-fg hover:bg-surface/60 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-2"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-bold text-fg-secondary hover:text-fg transition-colors py-3"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.28, duration: 0.3 }}
              className="mt-8 flex flex-col items-center gap-3"
            >
              <Badge variant="available" pulse>{t.nav.available}</Badge>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent-hover transition-colors"
              >
                {t.nav.hire}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
