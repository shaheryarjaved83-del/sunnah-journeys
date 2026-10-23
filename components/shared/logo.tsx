import Link from 'next/link'
import { cn } from '@/lib/utils'

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden className={cn('size-9', className)}>
      <g fill="none" strokeWidth="1.4">
        <rect x="9" y="9" width="22" height="22" rx="1.5" stroke="#164B42" />
        <rect x="9" y="9" width="22" height="22" rx="1.5" stroke="#B89B5E" transform="rotate(45 20 20)" />
        <path d="M15.5 26 V20 a4.5 4.5 0 0 1 9 0 V26" stroke="#164B42" strokeLinecap="round" />
      </g>
      <circle cx="20" cy="15.2" r="1.1" fill="#B89B5E" />
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
      <LogoMark className="transition-transform duration-700 group-hover:rotate-45" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.15rem] font-semibold tracking-tight text-emerald sm:text-[1.35rem]">Sunnah Journeys</span>
        <span className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-gold">Umrah Travel</span>
      </span>
    </Link>
  )
}
