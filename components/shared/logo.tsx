import Link from 'next/link'
import { cn } from '@/lib/utils'

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden className={cn('size-8 sm:size-9', className)}>
      <g fill="none" strokeWidth="1.4">
        {/* Outer circle */}
        <circle cx="20" cy="20" r="14" stroke="#164B42" />
        {/* Islamic arch / arch window shape */}
        <path d="M13 26 V19 a7 7 0 0 1 14 0 V26" stroke="#164B42" strokeLinecap="round" />
        {/* Inner dot */}
        <circle cx="20" cy="15" r="1.3" fill="#B89B5E" />
        {/* Horizontal base line */}
        <line x1="11" y1="26" x2="29" y2="26" stroke="#B89B5E" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn('group inline-flex items-center gap-2 sm:gap-2.5', className)}
      aria-label="Sunnah Journeys — home"
    >
      <LogoMark className="shrink-0 transition-transform duration-700 group-hover:scale-110" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.1rem] font-semibold tracking-tight text-emerald sm:text-[1.35rem]">Sunnah Journeys</span>
        <span className="mt-0.5 hidden text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-gold sm:block">Umrah Travel</span>
      </span>
    </Link>
  )
}
