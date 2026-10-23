import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'gold' | 'ghost' | 'light'
type Size = 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary: 'bg-emerald text-white hover:bg-emerald-deep shadow-[0_10px_30px_-12px_rgba(22,75,66,0.55)]',
  secondary: 'border border-emerald/25 bg-white/60 text-emerald backdrop-blur hover:border-gold hover:bg-white',
  gold: 'bg-gold text-white hover:bg-[#a5884d] shadow-[0_10px_30px_-12px_rgba(184,155,94,0.7)]',
  ghost: 'text-emerald hover:text-gold px-0',
  light: 'bg-white text-emerald hover:bg-ivory shadow-[0_10px_30px_-14px_rgba(32,45,41,0.35)]',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-13 px-7 text-[0.95rem]',
}

export function buttonClasses(variant: Variant = 'primary', size: Size = 'md', className?: string) {
  return cn(
    'group/btn inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-wide transition-all duration-300 disabled:pointer-events-none disabled:opacity-60',
    variants[variant],
    variant !== 'ghost' && sizes[size],
    className,
  )
}

function Arrow() {
  return (
    <span className="relative inline-flex size-4 overflow-hidden" aria-hidden>
      <ArrowRight className="size-4 transition-transform duration-500 group-hover/btn:translate-x-5" />
      <ArrowRight className="absolute size-4 -translate-x-5 transition-transform duration-500 group-hover/btn:translate-x-0" />
    </span>
  )
}

interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, 'className'> {
  children: ReactNode
  variant?: Variant
  size?: Size
  arrow?: boolean
  className?: string
}

export function ButtonLink({ children, variant, size, arrow = true, className, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonClasses(variant, size, className)} {...props}>
      <span>{children}</span>
      {arrow && <Arrow />}
    </Link>
  )
}

interface ButtonProps extends ComponentProps<'button'> {
  variant?: Variant
  size?: Size
  arrow?: boolean
}

export function Button({ children, variant, size, arrow = false, className, ...props }: ButtonProps) {
  return (
    <button className={buttonClasses(variant, size, className)} {...props}>
      {children}
      {arrow && <Arrow />}
    </button>
  )
}

export { Arrow as ButtonArrow }
