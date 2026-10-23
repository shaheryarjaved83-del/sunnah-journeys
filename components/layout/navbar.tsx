'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { cn } from '@/lib/utils'
import { navLinks, siteConfig } from '@/lib/site-config'
import { Logo } from '@/components/shared/logo'
import { ButtonLink } from '@/components/shared/button-link'
import { GeometricMotif } from '@/components/shared/geometric'
import { Mail, Phone } from 'lucide-react'

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const toggleRef = useRef<HTMLButtonElement>(null)

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-emerald focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-50 px-2 pt-1.5 sm:px-5 sm:pt-4">
        <nav
          aria-label="Main"
          className={cn(
            'mx-auto flex max-w-[1320px] items-center justify-between rounded-full border px-3 transition-all duration-500 sm:px-6',
            scrolled || open
              ? 'h-12 border-line/80 bg-white/90 shadow-[0_12px_40px_-20px_rgba(32,45,41,0.35)] backdrop-blur-xl sm:h-16'
              : 'h-12 border-white/60 bg-white/65 backdrop-blur-md sm:h-[4.5rem]',
          )}
        >
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={cn(
                    'group relative px-4 py-2 text-sm font-medium transition-colors',
                    isActive(link.href) ? 'text-emerald' : 'text-ink/75 hover:text-emerald',
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={cn(
                      'absolute inset-x-4 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-500',
                      isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ButtonLink href="/contact" className="hidden sm:inline-flex">
              Plan Your Umrah
            </ButtonLink>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative flex size-9 items-center justify-center rounded-full border border-line bg-white/80 sm:size-11 lg:hidden"
            >
              <span className="relative block h-3 w-5" aria-hidden>
                <span
                  className={cn(
                    'absolute left-0 block h-[1.5px] w-5 bg-emerald transition-all duration-300',
                    open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0',
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 block h-[1.5px] bg-emerald transition-all duration-300',
                    open ? 'top-1/2 w-5 -translate-y-1/2 -rotate-45' : 'bottom-0 w-3.5',
                  )}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-0 z-40 overflow-y-auto bg-ivory lg:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="bg-pattern pointer-events-none absolute inset-0 opacity-40" aria-hidden />
            <GeometricMotif className="pointer-events-none absolute -right-24 bottom-10 size-80 opacity-40" strokeWidth={0.4} />
            <div className="relative flex min-h-full flex-col px-6 pt-20 pb-10">
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-line"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(link.href) ? 'page' : undefined}
                      className="flex items-baseline justify-between py-5"
                    >
                      <span className={cn('font-serif text-4xl', isActive(link.href) ? 'text-emerald italic' : 'text-ink')}>
                        {link.label}
                      </span>
                      <span className="text-xs font-semibold tracking-[0.2em] text-gold">{`0${i + 1}`}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-auto pt-10"
              >
                <ButtonLink href="/contact" size="lg" className="w-full" onClick={() => setOpen(false)}>
                  Plan Your Umrah
                </ButtonLink>
                <div className="mt-6 flex flex-col gap-2 text-sm text-muted-ink">
                  <span className="inline-flex items-center gap-2">
                    <Phone className="size-4 text-gold" aria-hidden /> {siteConfig.contact.phoneDisplay}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Mail className="size-4 text-gold" aria-hidden /> {siteConfig.contact.emailDisplay}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
