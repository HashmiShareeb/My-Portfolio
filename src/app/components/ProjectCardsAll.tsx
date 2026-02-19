'use client'
import React from 'react'
import { motion } from 'framer-motion'

import { ProjectData } from '../interfaces/projects.interface'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Data from '../data/projects'

const ProjectCards = () => {
  return (
    <motion.section
      transition={{ delay: 0.2, duration: 0.5 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      id="projects"
      className="mx-auto lg:py-10 py-4"
    >
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Data.map((project: ProjectData) => (
          <motion.div
            key={project.id}
            className="group rounded-2xl overflow-hidden shadow-sm dark:shadow-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all duration-300 scale-[1.02] sm:scale-[1.03]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={`/project/${project.id}`}>
              <div className="relative w-full overflow-hidden">
                <CldImage
                  width={800}
                  height={600}
                  src={project.image}
                  alt={project.title}
                  quality={90}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 text-left">
                {project.tags && project.tags.length > 0 && (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="rounded-full border border-neutral-200/60 bg-white/60 px-2.5 py-0.5 text-xs font-medium text-neutral-500 backdrop-blur-sm dark:border-slate-700/40 dark:bg-slate-800/60 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="rounded-full px-1.5 py-0.5 text-[11px] font-medium text-gray-400 dark:text-gray-500">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}
                {project.title && (
                  <h2 className="mx-2 text-xl font-bold text-transparent">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 dark:from-teal-300 dark:via-cyan-400 dark:to-blue-400">
                      {project.title}
                    </span>
                  </h2>
                )}
                {project.label && (
                  <p className="mx-2 mt-2 dark:text-slate-300 text-sm font-medium">
                    {project.label}
                  </p>
                )}
                <button className="mt-4 inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-medium group">
                  <span className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-3.5 py-1.5 text-sm font-semibold text-teal-600 transition-all duration-200 group-hover:bg-teal-500/15 group-hover:gap-2.5 dark:bg-teal-400/10 dark:text-teal-400 dark:group-hover:bg-teal-400/15">
                    View Project
                    <ChevronRight
                      size={14}
                      strokeWidth={2.5}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default ProjectCards
