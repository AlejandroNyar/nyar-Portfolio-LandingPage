'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { en, es, de } from '@/i18n'
import type { Locale, Translations } from '@/i18n'

const translations: Record<Locale, Translations> = { en, es, de }

const STORAGE_KEY = 'nyar-locale'

interface LocaleContextValue {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  t: en,
  setLocale: () => {},
})

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
    if (stored && stored in translations) {
      setLocaleState(stored)
    }
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  return (
    <LocaleContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  return useContext(LocaleContext)
}
