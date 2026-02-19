import React from 'react'
import Contact from './Contact'
import { GlassSeparator } from './ui/glassSeperator'

const Footer = () => {
  return (
    <footer className="relative mt-8">
      <GlassSeparator />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        {/* Copyright */}
        <p className="text-sm text-slate-400 dark:text-slate-400/80 font-medium">
          Made with ❤️ by Shareeb Hashmi{` © ${new Date().getFullYear()}`}
        </p>

        {/* Social links */}
        <div className="flex items-center gap-1">
          <Contact variant="compact" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
