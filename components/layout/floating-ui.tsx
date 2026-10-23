'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'motion/react'
import { ArrowUp } from 'lucide-react'
import { getWhatsAppLink } from '@/lib/site-config'
import { WhatsAppIcon } from '@/components/shared/social-icons'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-emerald via-sage to-gold"
      style={{ scaleX }}
    />
  )
}

export function FloatingActions() {
  const { scrollY } = useScroll()
  const [showTop, setShowTop] = useState(false)
  useMotionValueEvent(scrollY, 'change', (y) => setShowTop(y > 700))

  const whatsapp = getWhatsAppLink('Assalamu alaikum, I would like to enquire about Umrah packages.')
  const waClasses =
    'group flex size-14 items-center justify-center rounded-full bg-emerald text-white shadow-[0_14px_34px_-10px_rgba(22,75,66,0.6)] ring-4 ring-white/70 transition-transform duration-300 hover:-translate-y-1'

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-center gap-3 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            key="top"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="flex size-11 items-center justify-center rounded-full border border-line bg-white/90 text-emerald shadow-sm backdrop-blur transition-colors hover:border-gold hover:text-gold"
          >
            <ArrowUp className="size-4" aria-hidden />
          </motion.button>
        )}
      </AnimatePresence>
      <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.4, type: 'spring', stiffness: 220, damping: 18 }}>
        {whatsapp ? (
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className={waClasses}>
            <WhatsAppIcon className="size-6" />
          </a>
        ) : (
          <Link
            href="/contact#enquiry"
            aria-label="Enquire with us (WhatsApp number not yet configured)"
            title="WhatsApp number not yet configured — opens the enquiry form"
            className={waClasses}
          >
            <WhatsAppIcon className="size-6" />
          </Link>
        )}
      </motion.div>
    </div>
  )
}
