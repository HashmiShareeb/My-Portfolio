'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function CTA({
  id,
  href,
  target,
  download,
  mailto,
  ariaLabel,
  children,
  isSecondary,
}: {
  id?: string
  href?: string
  target?: string
  download?: boolean
  mailto?: string
  ariaLabel?: string
  isSecondary?: boolean
  children: React.ReactNode
}) {
  const handleClick = () => {
    if (mailto) {
      window.location.href = `mailto:${mailto}`
    }
  }

  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        whileFocus={{
          scale: 1.0,
          transition: { duration: 0.2 },
        }}
      >
        <Link
          id={id || ''}
          aria-label={ariaLabel || ''}
          href={href || '#'}
          target={target || '_self'}
          download={download || false}
          className={`flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 font-medium backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent
            ${
              isSecondary
                ? 'border-zinc-300/60 bg-zinc-100/50 text-zinc-700 hover:border-zinc-400/40 hover:bg-zinc-200/50 hover:shadow-md hover:shadow-zinc-500/[0.06] focus:ring-zinc-400/30 dark:border-slate-600/40 dark:bg-slate-700/40 dark:text-zinc-300 dark:hover:border-zinc-500/30 dark:hover:bg-slate-600/40 dark:hover:shadow-zinc-500/[0.06] dark:focus:ring-zinc-500/30'
                : 'border-teal-200/60 bg-teal-500/10 text-teal-600 hover:border-teal-500/20 hover:bg-teal-500/20 hover:shadow-md hover:shadow-teal-500/[0.06] focus:ring-teal-500/30 dark:border-teal-800/40 dark:bg-teal-900/40 dark:text-teal-400 dark:hover:border-teal-400/20 dark:hover:bg-teal-800/40 dark:hover:shadow-teal-400/[0.06] dark:focus:ring-teal-400/30'
            }`}
        >
          {children}
        </Link>
      </motion.button>
    </>
  )
}

export default CTA
