'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { LocaleProvider } from '@/context/LocaleContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <LocaleProvider>{children}</LocaleProvider>
    </NextThemesProvider>
  )
}
