'use client'
import React, { useState } from 'react'
import GradientTitle from './Text/GradientHeaderText'

import { motion, AnimatePresence } from 'framer-motion'
import { TechStackData } from '../data/languagesandskillsdata'

//custom motion animation
const skillsAnimation = {
  hidden: { y: 16, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.04,
      type: 'spring',
      stiffness: 140,
      damping: 18,
    },
  }),
  exit: { y: -8, opacity: 0, transition: { duration: 0.15 } },
}

const Skills = () => {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof TechStackData>('frontend')

  const categories = Object.keys(
    TechStackData,
  ) as (keyof typeof TechStackData)[]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      id="skills"
      className="lg:py-40 px-4 mx-auto lg:mx-0"
    >
      <GradientTitle title="My Skills" IsCentered={true} />
      <div className="grid place-items-center mt-4">
        <div
          role="tablist"
          aria-label="tech categories"
          className="inline-flex gap-1 rounded-full border border-gray-200/60 bg-white/50 p-1 backdrop-blur-xl dark:border-slate-700/40 dark:bg-slate-800/40"
        >
          <div className="flex gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={` capitalize px-3 py-1 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'text-teal-600 dark:text-teal-400 dark:bg-teal-900/40'
                    : ' text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <ul className="lg:mt-8 mt-4 flex gap-4 flex-wrap justify-center dark:text-slate-400 ">
            {TechStackData[activeCategory].map((skill, index) => (
              <motion.li
                key={`${skill}-${index}`}
                variants={skillsAnimation}
                animate="visible"
                exit="exit"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="list-none rounded-full border border-gray-200/60 bg-white/50 px-4 py-2 text-sm font-medium text-gray-600 backdrop-blur-sm transition-all duration-200 hover:border-teal-500/20 hover:bg-teal-500/[0.06] hover:text-teal-600 dark:border-slate-700/40 dark:bg-slate-800/40 dark:text-gray-300 dark:hover:border-teal-400/20 dark:hover:bg-teal-400/[0.06] dark:hover:text-teal-400"
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

export default Skills
