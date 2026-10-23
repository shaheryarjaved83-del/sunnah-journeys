import { z } from 'zod'

export const travellerOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'] as const

export const enquirySchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your full name.').max(80, 'Name is too long.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone number.')
    .max(20, 'Phone number is too long.')
    .regex(/^[+\d\s()-]+$/, 'Use digits, spaces, +, ( ) or - only.'),
  preferredPackage: z.string().min(1, 'Please choose a package or “Not sure yet”.'),
  travellers: z.enum(travellerOptions, { message: 'Please select the number of travellers.' }),
  travelDate: z
    .string()
    .optional()
    .refine((v) => !v || new Date(v) >= new Date(new Date().toDateString()), 'Please choose a future date.'),
  message: z.string().trim().max(1000, 'Please keep your message under 1000 characters.').optional(),
})

export type EnquiryValues = z.infer<typeof enquirySchema>
