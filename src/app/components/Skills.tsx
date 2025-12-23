'use client'
import React, { useState } from 'react'
import GradientTitle from './Text/GradientHeaderText'

import { motion } from 'framer-motion'
import { TechStackData } from '../data/languagesandskillsdata'

//custom motion animation
const skillsAnimation = {
  hidden: { y: 24, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.06, type: 'spring', stiffness: 120 },
  }),
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
      className="py-24 px-4 mx-auto lg:mx-0"
    >
      <GradientTitle title="My Skills" IsCentered={true} />
      <div className="grid place-items-center mt-4">
        <div
          role="tablist"
          aria-label="tech categories"
          className="bg-slate-100 shadow-md dark:shadow-none dark:bg-slate-800 p-2 rounded-md"
        >
          <div className="flex gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={` capitalize px-3 py-1 rounded-md text-sm font-semibold transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-teal-300 text-teal-800 dark:bg-teal-700 dark:text-teal-300'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <ul className="lg:mt-8 mt-4 flex gap-4 flex-wrap justify-center dark:text-slate-400 ">
          {TechStackData[activeCategory].map((skill, index) => (
            <motion.li
              key={`${skill}-${index}`}
              variants={skillsAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className=" list-none m-0  dark:bg-teal-800 dark:text-teal-300 shadow dark:shadow-none px-4 py-2 rounded-md text-sm font-semibold bg-teal-300 text-teal-800 dark:hover:bg-teal-700 dark:hover:text-teal-300 hover:bg-teal-300 hover:text-teal-900 transition-colors duration-300 ease-in-out"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}

export default Skills
