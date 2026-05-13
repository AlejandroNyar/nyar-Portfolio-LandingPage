'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { FormField, inputClass } from './FormField'
import { cn } from '@/lib/utils'
import { SOCIAL_LINKS } from '@/lib/constants'
import { useLocale } from '@/context/LocaleContext'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  projectType: z.string().min(1),
  budget: z.string().min(1),
  message: z.string().min(20),
})

type FormData = z.infer<typeof schema>
type Status = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const { t } = useLocale()
  const f = t.contact.form

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) { setStatus('success'); reset() }
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
        <div className="w-16 h-16 rounded-full bg-available/10 border border-available/30 flex items-center justify-center">
          <CheckCircle size={28} className="text-available" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-fg mb-1">{f.successTitle}</h3>
          <p className="text-fg-secondary">{f.successBody}</p>
        </div>
        <button onClick={() => setStatus('idle')} className="text-sm text-accent hover:underline mt-2">
          {f.successReset}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField label={f.name} error={errors.name && f.name}>
          <input {...register('name')} className={inputClass} placeholder={f.namePlaceholder} />
        </FormField>
        <FormField label={f.email} error={errors.email && f.email}>
          <input {...register('email')} type="email" className={inputClass} placeholder={f.emailPlaceholder} />
        </FormField>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <FormField label={f.projectType} error={errors.projectType && f.projectType}>
          <select {...register('projectType')} className={inputClass}>
            <option value="">{f.projectTypePlaceholder}</option>
            <option value="landing">{f.projectTypes.landing}</option>
            <option value="webapp">{f.projectTypes.webapp}</option>
            <option value="ecommerce">{f.projectTypes.ecommerce}</option>
            <option value="audit">{f.projectTypes.audit}</option>
            <option value="other">{f.projectTypes.other}</option>
          </select>
        </FormField>
        <FormField label={f.budget} error={errors.budget && f.budget}>
          <select {...register('budget')} className={inputClass}>
            <option value="">{f.budgetPlaceholder}</option>
            <option value="500-1500">€500 – €1,500</option>
            <option value="1500-5000">€1,500 – €5,000</option>
            <option value="5000-15000">€5,000 – €15,000</option>
            <option value="15000+">€15,000+</option>
            <option value="discuss">{f.budgets.discuss}</option>
          </select>
        </FormField>
      </div>

      <FormField label={f.message} error={errors.message && f.message}>
        <textarea {...register('message')} className={cn(inputClass, 'min-h-32 resize-none')} placeholder={f.messagePlaceholder} />
      </FormField>

      {status === 'error' && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          <AlertCircle size={16} />
          {f.errorBody}{' '}
          <a href={`mailto:${SOCIAL_LINKS.email}`} className="underline">{SOCIAL_LINKS.email}</a>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-accent/20"
      >
        {status === 'loading' ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            {f.submitting}
          </>
        ) : (
          <>
            <Send size={16} />
            {f.submit}
          </>
        )}
      </button>
    </form>
  )
}
