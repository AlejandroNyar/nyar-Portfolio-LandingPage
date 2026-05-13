export const SITE_URL = 'https://nyar.dev'
export const SITE_NAME = 'Nyar'
export const SITE_TITLE = 'Nyar — Freelance Frontend Developer'
export const SITE_DESCRIPTION =
  'Freelance frontend developer. I build fast, polished web experiences for growing businesses — landing pages, web apps, e-commerce and more.'

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const SOCIAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  email: 'alejandropb.jobmail@gmail.com',
}

export const PROJECT_CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'web_app', label: 'Web Apps' },
  { value: 'landing', label: 'Landing Pages' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'audit', label: 'Audits' },
] as const
