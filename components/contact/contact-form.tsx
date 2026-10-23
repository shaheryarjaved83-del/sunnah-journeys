'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'motion/react'
import { AlertCircle, ArrowRight, Check, ChevronDown, Loader2 } from 'lucide-react'
import { enquirySchema, travellerOptions, type EnquiryValues } from '@/lib/enquiry-schema'
import { submitEnquiry, type EnquiryResult } from '@/app/actions/enquiry'
import { packages } from '@/lib/packages'
import { cn } from '@/lib/utils'

interface ContactFormProps {
  initialPackage?: string
}

const packageOptions = [
  { value: 'not-sure', label: 'Not sure yet' },
  { value: 'custom', label: 'Custom / Tailored Package' },
  ...packages.map((p) => ({ value: p.slug, label: `${p.title} — ${p.durationDays} days` })),
]

const ease = [0.22, 1, 0.36, 1] as const

const inputBase =
  'w-full rounded-xl border bg-ivory/50 px-4 py-3 text-sm text-ink transition-all placeholder:text-muted-ink/50 focus:outline-none focus:ring-2 focus:bg-white'
const inputOk = 'border-line focus:border-gold focus:ring-gold/20'
const inputErr = 'border-destructive/50 focus:border-destructive focus:ring-destructive/20'

function Field({
  label,
  error,
  children,
  htmlFor,
  required,
}: {
  label: string
  error?: string
  children: ReactNode
  htmlFor: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-gold">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive">
          <AlertCircle className="size-3.5 shrink-0" aria-hidden />
          {error}
        </p>
      )}
    </div>
  )
}

function SelectChevron() {
  return (
    <ChevronDown
      className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-ink"
      aria-hidden
    />
  )
}

export function ContactForm({ initialPackage }: ContactFormProps) {
  const [result, setResult] = useState<EnquiryResult | null>(null)

  const initialValues: EnquiryValues = {
    fullName: '',
    email: '',
    phone: '',
    preferredPackage:
      initialPackage && packageOptions.some((o) => o.value === initialPackage) ? initialPackage : 'not-sure',
    travellers: undefined,
    travelDate: '',
    message: '',
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: initialValues,
  })

  const onSubmit = async (values: EnquiryValues) => {
    const res = await submitEnquiry(values)
    setResult(res)
    if (res.ok) {
      reset(initialValues)
    }
  }

  if (result?.ok) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="flex flex-col items-center justify-center rounded-[2rem] border border-emerald/20 bg-sage-50 p-10 text-center sm:p-16"
      >
        <div className="flex size-16 items-center justify-center rounded-full bg-emerald text-white">
          <Check className="size-8" strokeWidth={2.5} aria-hidden />
        </div>
        <h3 className="mt-6 text-3xl font-medium text-ink">Thank You for Your Enquiry</h3>
        <p className="mt-3 max-w-md leading-relaxed text-muted-ink">
          Your enquiry has been received. Our team will be in touch soon to discuss your journey.
        </p>
        <div className="mt-6 rounded-xl border border-gold/30 bg-white px-6 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Reference</p>
          <p className="mt-1 font-serif text-2xl text-ink">{result.reference}</p>
        </div>
        {result.demo && (
          <p className="mt-5 inline-flex items-start gap-2 text-xs leading-relaxed text-muted-ink">
            <AlertCircle className="mt-0.5 size-3.5 shrink-0 text-gold" aria-hidden />
            <span>Demonstration mode — no enquiry was sent and no payment was taken. Connect an email provider or CRM to go live.</span>
          </p>
        )}
        <button
          type="button"
          onClick={() => setResult(null)}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald transition-colors hover:text-gold"
        >
          Send another enquiry
          <ArrowRight className="size-4" aria-hidden />
        </button>
      </motion.div>
    )
  }

  return (
    <div className="rounded-[2rem] border border-line bg-white p-7 shadow-[0_30px_80px_-50px_rgba(22,75,66,0.4)] sm:p-10">
      <div className="mb-8">
        <p className="eyebrow flex items-center gap-3">
          <span className="h-px w-8 bg-gold/70" aria-hidden />
          Enquiry Form
        </p>
        <h2 className="mt-4 text-3xl font-medium text-ink sm:text-4xl">Plan Your Sacred Journey</h2>
        <p className="mt-3 leading-relaxed text-muted-ink">
          Share a few details and our team will be glad to discuss suitable options for your pilgrimage.
        </p>
      </div>

      {result && !result.ok && (
        <div className="mb-6 flex items-center gap-3 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="size-4 shrink-0" aria-hidden />
          {result.error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full Name" htmlFor="fullName" required error={errors.fullName?.message}>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              aria-invalid={!!errors.fullName}
              className={cn(inputBase, errors.fullName ? inputErr : inputOk)}
              {...register('fullName')}
            />
          </Field>
          <Field label="Email" htmlFor="email" required error={errors.email?.message}>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              className={cn(inputBase, errors.email ? inputErr : inputOk)}
              {...register('email')}
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Phone" htmlFor="phone" required error={errors.phone?.message}>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+44 1234 567890"
              aria-invalid={!!errors.phone}
              className={cn(inputBase, errors.phone ? inputErr : inputOk)}
              {...register('phone')}
            />
          </Field>
          <Field label="Travellers" htmlFor="travellers" required error={errors.travellers?.message}>
            <div className="relative">
              <select
                id="travellers"
                aria-invalid={!!errors.travellers}
                defaultValue=""
                className={cn(inputBase, 'appearance-none pr-10', errors.travellers ? inputErr : inputOk)}
                {...register('travellers')}
              >
                <option value="" disabled>
                  Select number
                </option>
                {travellerOptions.map((n) => (
                  <option key={n} value={n}>
                    {n} {n === '1' ? 'person' : 'people'}
                  </option>
                ))}
              </select>
              <SelectChevron />
            </div>
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Preferred Package" htmlFor="preferredPackage" required error={errors.preferredPackage?.message}>
            <div className="relative">
              <select
                id="preferredPackage"
                aria-invalid={!!errors.preferredPackage}
                className={cn(inputBase, 'appearance-none pr-10', errors.preferredPackage ? inputErr : inputOk)}
                {...register('preferredPackage')}
              >
                {packageOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <SelectChevron />
            </div>
          </Field>
          <Field label="Preferred Travel Date" htmlFor="travelDate" error={errors.travelDate?.message}>
            <input
              id="travelDate"
              type="date"
              aria-invalid={!!errors.travelDate}
              className={cn(inputBase, errors.travelDate ? inputErr : inputOk)}
              {...register('travelDate')}
            />
          </Field>
        </div>

        <Field label="Message" htmlFor="message" error={errors.message?.message}>
          <textarea
            id="message"
            rows={4}
            placeholder="Tell us about your travel preferences, special requirements, or any questions you have..."
            aria-invalid={!!errors.message}
            className={cn(inputBase, 'resize-none', errors.message ? inputErr : inputOk)}
            {...register('message')}
          />
        </Field>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group/btn inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-emerald px-7 text-[0.95rem] font-semibold tracking-wide text-white shadow-[0_10px_30px_-12px_rgba(22,75,66,0.55)] transition-all duration-300 hover:bg-emerald-deep disabled:pointer-events-none disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden />
                Sending...
              </>
            ) : (
              <>
                Submit Enquiry
                <ArrowRight className="size-4 transition-transform duration-500 group-hover/btn:translate-x-1" aria-hidden />
              </>
            )}
          </button>
        </div>

        <p className="inline-flex items-start gap-2 text-xs leading-relaxed text-muted-ink">
          <AlertCircle className="mt-0.5 size-3.5 shrink-0 text-gold" aria-hidden />
          <span>
            Demonstration mode — no enquiry is sent and no payment is taken. Connect an email provider or CRM to go live.
          </span>
        </p>
      </form>
    </div>
  )
}
