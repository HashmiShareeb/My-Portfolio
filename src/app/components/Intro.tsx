'use client'
import React from 'react'
import { motion } from 'framer-motion'
import CTA from './CTA'
import { CldImage } from 'next-cloudinary'
import { Download } from 'lucide-react'

import EducationAndCareerInfo from './EducationAndCareerInfo'

const Intro = () => {
  return (
    <motion.section
      transition={{ delay: 0.2, duration: 0.5 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      initial={{
        opacity: 0,
        y: 10,
      }}
      id="#home"
      className="min-h-screen flex flex-col items-center justify-center max-w-xl mx-auto px-4 text-center pt-20 lg:py-0"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: 'tween',
            duration: 0.5,
          }}
        >
          <CldImage
            src="self_portrait"
            alt="Shareeb portrait"
            width="400"
            height="400"
            className="rounded-full lg:my-20 my-8 h-60 w-60 overflow-hidden object-cover shadow-lg dark:shadow-none"
            quality="95"
            priority={true}
          />
        </motion.div>
      </div>

      {/* Introduction */}
      <span className="mb-4 font-mono lg:text-xl">
        <motion.span
          className="inline-block mr-2"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 20, -15, 20, -15, 0] }}
          transition={{
            duration: 1.2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 2,
          }}
          style={{ transformOrigin: '70% 70%' }}
          aria-hidden="true"
        >
          👋
        </motion.span>
        Hello there!
      </span>
      <h1 className="lg:text-6xl md:text-4xl text-3xl text-nowrap font-extrabold leading-relaxed tracking-tight">
        Shareeb Hashmi
      </h1>
      <h2 className="mt-4 text-2xl lg:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 dark:from-teal-300 dark:via-cyan-400 dark:to-blue-400">
        Junior Full-stack Developer
      </h2>
      <p className="mb-8 mt-4 text-md leading-relaxed text-center dark:text-slate-300 font-medium">
        I have a passion for web development and love creating new things. I am
        a fast learner and always eager to learn something new and face
        challenges!
      </p>

      {/* Education & work */}
      <EducationAndCareerInfo />

      {/* CTA */}
      <div className="flex lg:flex-row selection  items-center justify-center gap-10">
        <CTA href="/shareebcv_2026.pdf" target="_blank" download>
          <Download size={32} />
          <h1 className="text-lg font-bold ml-2">Download Resume</h1>
          <span className="sr-only">Resume</span>
        </CTA>
      </div>
    </motion.section>
  )
}
export default Intro
