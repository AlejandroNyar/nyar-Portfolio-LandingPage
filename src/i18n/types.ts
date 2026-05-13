export type Locale = 'en' | 'es' | 'de'

export interface Translations {
  nav: {
    links: { services: string; work: string; about: string; contact: string }
    available: string
    hire: string
  }
  hero: {
    badge: string
    headline1: string
    headline2: string
    subtitle: string
    cta1: string
    cta2: string
    words: string[]
    basedIn: string
    response: string
    languages: string
  }
  services: {
    eyebrow: string
    title: string
    gradient: string
    subtitle: string
    items: {
      landing: { title: string; description: string; highlights: string[] }
      webapp: { title: string; description: string; highlights: string[] }
      ecommerce: { title: string; description: string; highlights: string[] }
      audit: { title: string; description: string; highlights: string[] }
    }
  }
  skills: {
    eyebrow: string
    title: string
    gradient: string
    subtitle: string
    groups: {
      frontend: string
      frameworks: string
      styling: string
      tooling: string
      learning: string
    }
    levels: {
      expert: string
      advanced: string
      intermediate: string
      learning: string
    }
  }
  projects: {
    eyebrow: string
    title: string
    gradient: string
    subtitle: string
    filters: { all: string; web_app: string; landing: string; ecommerce: string; audit: string }
    categories: { web_app: string; landing: string; ecommerce: string; audit: string }
    status: { nda: string; in_progress: string; coming_soon: string; live: string }
  }
  process: {
    eyebrow: string
    title: string
    gradient: string
    subtitle: string
    steps: Array<{ title: string; description: string; duration: string }>
  }
  about: {
    eyebrow: string
    title: string
    gradient: string
    bio: string[]
    facts: {
      location: string
      timezone: string
      languages: string
      response: string
    }
    labels: {
      location: string
      timezone: string
      languages: string
      response: string
    }
    downloadCv: string
    workWithMe: string
  }
  testimonials: {
    eyebrow: string
    title: string
    gradient: string
    emptyTitle: string
    emptyBody: string
    emptyLink: string
  }
  contact: {
    eyebrow: string
    headline: string
    gradient: string
    body: string
    labels: {
      responseTime: string
      email: string
      github: string
      linkedin: string
    }
    values: {
      responseTime: string
    }
    form: {
      name: string
      namePlaceholder: string
      email: string
      emailPlaceholder: string
      projectType: string
      projectTypePlaceholder: string
      projectTypes: {
        landing: string
        webapp: string
        ecommerce: string
        audit: string
        other: string
      }
      budget: string
      budgetPlaceholder: string
      budgets: {
        discuss: string
      }
      message: string
      messagePlaceholder: string
      submit: string
      submitting: string
      successTitle: string
      successBody: string
      successReset: string
      errorBody: string
    }
  }
  footer: {
    tagline: string
    rights: string
    craft: string
  }
}
