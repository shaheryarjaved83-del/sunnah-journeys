'use server'

import { enquirySchema, type EnquiryValues } from '@/lib/enquiry-schema'

export type EnquiryResult =
  | { ok: true; demo: boolean; reference: string }
  | { ok: false; error: string }

/**
 * Integration point: connect an email provider (e.g. Resend) or CRM here.
 * Until then the enquiry is validated server-side and returned as a demo result —
 * nothing is sent, stored, booked or charged.
 */
export async function submitEnquiry(values: EnquiryValues): Promise<EnquiryResult> {
  const parsed = enquirySchema.safeParse(values)
  if (!parsed.success) {
    return { ok: false, error: 'Some details look incorrect. Please review the form and try again.' }
  }

  await new Promise((resolve) => setTimeout(resolve, 900))

  const reference = `DEMO-${Date.now().toString(36).toUpperCase().slice(-6)}`
  return { ok: true, demo: true, reference }
}
