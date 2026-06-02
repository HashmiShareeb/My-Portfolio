'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import CTA from './CTA'
import { Download, Github, Linkedin } from 'lucide-react'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = (id: string) => {
    setIsOpen(false)
  }

  const [activeHash, setActiveHash] = useState<string>('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveHash(window.location.hash)
    }
  }, [])

  const isActive = (id: string) => {
    return `#/${id}` === activeHash
      ? 'text-teal-400 bg-white/10 '
      : 'text-gray-400'
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const navLinks = [
    { label: 'Home', href: '/#', id: 'home' },
    { label: 'Projects', href: '/#projects', id: 'projects' },
    { label: 'Skills', href: '/#skills', id: 'skills' },
    { label: 'Contact', href: '/#contact', id: 'contact' },
  ]
  return (
    <nav className="relative">
      <div
        className={`fixed top-0 z-[1100] h-[3.5rem] w-full ${
          isOpen
            ? 'bg-transparent shadow-none backdrop-blur-0'
            : '  bg-white/10 dark:bg-slate-950/30 backdrop-blur-2xl border-white/20 dark:border-white/10'
        }`}
      >
        {' '}
        <div className="flex items-center justify-between h-full lg:px-56 px-4">
          <Link href="/" className="text-lg font-bold">
            Shareeb{' '}
            <span className="text-teal-500 dark:text-teal-400 font-extrabold">
              Hashmi
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => closeMenu(link.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors text-gray-600 duration-200
                  hover:text-teal-400 hover:bg-white/10 dark:hover:bg-white/5
                  ${isActive(link.id)}`}
              >
                {link.label}
              </Link>
            ))}

            <CTA href="/shareebcv_2026.pdf" target="_blank" download>
              <Download size={16} />
              <h1 className="text-sm font-bold ml-1">Resume</h1>
              <span className="sr-only">Resume</span>
            </CTA>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-teal-400 hover:dark:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
            aria-label="Toggle menu"
          >
            <svg
              className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <svg
              className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 z-[999] w-full h-screen  bg-white/10 dark:bg-slate-900/30 backdrop-blur-2xl border-white/20 dark:border-white/10 origin-top ${
          isOpen ? 'block' : 'hidden '
        }`}
      >
        <div className="pt-[3.5rem] flex flex-col gap-10 items-center justify-center h-full">
          {/* Menu items */}
          {navLinks.map(link => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => closeMenu(link.id)}
              className={`lg:text-6xl text-4xl font-bold uppercase hover:text-teal-300 transition-colors duration-200
                ${isActive(link.id)}`}
            >
              {link.label}
            </Link>
          ))}
          <CTA href="/shareebcv_2026.pdf" target="_blank" download>
            <Download size={32} />
            <h1 className="text-lg font-bold ml-2">Download Resume</h1>
            <span className="sr-only">Resume</span>
          </CTA>
          <div className="flex gap-4 mt-4 justify-center w-full">
            <Link
              href="https://github.com/HashmiShareeb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center"
            >
              <Github
                size={28}
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shareeb-hashmi-569b38161/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center"
            >
              <Linkedin
                size={28}
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
