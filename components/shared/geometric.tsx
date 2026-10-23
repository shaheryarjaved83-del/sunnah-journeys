import { cn } from '@/lib/utils'

export function GeometricMotif({ className, strokeWidth = 1 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden className={cn('text-gold', className)}>
      <g stroke="currentColor" strokeWidth={strokeWidth}>
        <circle cx="50" cy="50" r="45" />
        <circle cx="50" cy="50" r="25" />
        <circle cx="50" cy="50" r="8" />
        <line x1="50" y1="5" x2="50" y2="25" />
        <line x1="50" y1="75" x2="50" y2="95" />
        <line x1="5" y1="50" x2="25" y2="50" />
        <line x1="75" y1="50" x2="95" y2="50" />
        <line x1="18" y1="18" x2="32" y2="32" />
        <line x1="68" y1="68" x2="82" y2="82" />
        <line x1="82" y1="18" x2="68" y2="32" />
        <line x1="32" y1="68" x2="18" y2="82" />
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
