import { Info } from 'lucide-react'
import { cn } from '@/lib/utils'

export function DemoNote({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('inline-flex items-start gap-2 text-xs leading-relaxed text-muted-ink', className)}>
      <Info className="mt-0.5 size-3.5 shrink-0 text-gold" aria-hidden />
      <span>{children}</span>
    </p>
  )
}
