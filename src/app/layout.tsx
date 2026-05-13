import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Providers } from '@/components/layout/Providers'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

const SITE_URL = 'https://nyar.dev'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Nyar — Freelance Frontend Developer | React, Next.js & Angular',
    template: '%s | Nyar',
  },

  description:
    'Freelance frontend developer based in Spain. I build fast, accessible websites and web apps for small and medium businesses — landing pages, dashboards and e-commerce. React, Next.js, Angular, TypeScript.',

  keywords: [
    'freelance frontend developer',
    'freelance web developer spain',
    'desarrollo web freelance',
    'desarrollador web freelance',
    'landing page developer',
    'next.js developer freelance',
    'react developer freelance',
    'angular developer freelance',
    'web app development small business',
    'small business website developer',
    'e-commerce development',
    'web performance audit',
  ],

  authors: [{ name: 'Nyar', url: SITE_URL }],
  creator: 'Nyar',

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: 'Nyar — Freelance Frontend Developer',
    description:
      'I build fast, clean web experiences for growing businesses. Landing pages, web apps, e-commerce and performance audits.',
    url: SITE_URL,
    siteName: 'Nyar',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nyar — Freelance Frontend Developer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Nyar — Freelance Frontend Developer',
    description:
      'I build fast, clean web experiences for growing businesses.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Nyar',
      jobTitle: 'Freelance Frontend Developer',
      description:
        'Frontend developer specializing in React, Next.js, Angular and TypeScript for small and medium businesses.',
      url: SITE_URL,
      knowsAbout: [
        'React',
        'Next.js',
        'Angular',
        'TypeScript',
        'JavaScript',
        'Tailwind CSS',
        'Web Performance',
      ],
      availableForHire: true,
      address: { '@type': 'PostalAddress', addressCountry: 'ES' },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'alejandropb.jobmail@gmail.com',
        availableLanguage: ['Spanish', 'English', 'German'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Nyar — Freelance Frontend Developer',
      description:
        'Portfolio of Nyar, a freelance frontend developer based in Spain.',
      author: { '@id': `${SITE_URL}/#person` },
      inLanguage: ['en', 'es', 'de'],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#service`,
      name: 'Nyar Frontend Development',
      provider: { '@id': `${SITE_URL}/#person` },
      serviceType: [
        'Landing Page Development',
        'Web Application Development',
        'E-commerce Development',
        'Web Performance Audit',
      ],
      areaServed: { '@type': 'Country', name: 'Spain' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Frontend Development Services',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
