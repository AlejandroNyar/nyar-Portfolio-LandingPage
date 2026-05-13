'use client'

import { Mail, GitBranch, Link2, MessageSquare } from 'lucide-react'
import { AnimatedSection, AnimatedDiv } from '@/components/ui/AnimatedSection'
import { ContactForm } from '@/components/contact/ContactForm'
import { useLocale } from '@/context/LocaleContext'
import { SOCIAL_LINKS } from '@/lib/constants'

export function Contact() {
  const { t } = useLocale()

  const contactInfo = [
    { icon: MessageSquare, label: t.contact.labels.responseTime, value: t.contact.values.responseTime, href: undefined },
    { icon: Mail, label: t.contact.labels.email, value: SOCIAL_LINKS.email, href: `mailto:${SOCIAL_LINKS.email}` },
    { icon: GitBranch, label: t.contact.labels.github, value: 'github.com/nyar', href: SOCIAL_LINKS.github },
    { icon: Link2, label: t.contact.labels.linkedin, value: 'linkedin.com/in/nyar', href: SOCIAL_LINKS.linkedin },
  ]

  return (
    <AnimatedSection id="contact" className="py-16 md:py-24 max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-5 gap-16 lg:items-center">
        <AnimatedDiv className="lg:col-span-2 space-y-8">
          <div>
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              {t.contact.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-fg leading-tight">
              {t.contact.headline}{' '}
              <span className="gradient-text">{t.contact.gradient}</span>
            </h2>
            <p className="mt-4 text-fg-secondary leading-relaxed">{t.contact.body}</p>
          </div>

          <div className="space-y-3">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-3 p-3 rounded-lg bg-surface/40 border border-border">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon size={14} className="text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-fg-muted">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="text-sm text-fg hover:text-accent transition-colors truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-fg">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </AnimatedDiv>

        <AnimatedDiv delay={0.15} className="lg:col-span-3">
          <div className="p-6 md:p-8 rounded-2xl border border-border bg-surface/30 gradient-border">
            <ContactForm />
          </div>
        </AnimatedDiv>
      </div>
    </AnimatedSection>
  )
}
