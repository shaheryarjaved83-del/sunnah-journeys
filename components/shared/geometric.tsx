import { cn } from '@/lib/utils'

export function EightPointStar({ className, strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden className={cn('text-gold', className)}>
      <g stroke="currentColor" strokeWidth={strokeWidth}>
        <rect x="20" y="20" width="60" height="60" />
        <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" />
        <circle cx="50" cy="50" r="18" />
        <circle cx="50" cy="50" r="6" />
      </g>
    </svg>
  )
}

export function OrnamentDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('flex items-center justify-center gap-3', className)}>
      <span className="gold-rule h-px w-16 sm:w-24" />
      <svg viewBox="0 0 24 24" className="size-3.5 text-gold" fill="currentColor">
        <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
      </svg>
      <span className="gold-rule h-px w-16 sm:w-24" />
    </div>
  )
}
