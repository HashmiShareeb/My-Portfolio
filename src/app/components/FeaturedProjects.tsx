'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import { CldImage } from 'next-cloudinary'
import GradientTitle from './Text/GradientHeaderText'
import { getFeaturedProjects } from '@/utils/featured.projects'
import { ChevronRight } from 'lucide-react'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const FeaturedProjects = () => {
  const featured = getFeaturedProjects()

  return (
    <motion.section
      transition={{ delay: 0.2, duration: 0.5 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      id="projects"
      className="py-24 px-4 lg:mx-0 "
    >
      <div className="flex lg:flex-row flex-col items-center">
        <GradientTitle title="featured projects" IsCentered={false} />
        <Link
          href="/project"
          className="lg:ml-auto group inline transition duration-300 dark:text-teal-400 text-teal-500 relative"
        >
          <span className="flex items-center gap-2 group-hover:text-teal-300">
            show all projects
            <ChevronRight
              size={20}
              className="transition-transform duration-300 transform group-hover:translate-x-1"
            />
          </span>
        </Link>
      </div>

      {/* Carousel Container large screens */}
      <div className="mt-8 hidden md:block">
        <Carousel
          stopOnHover
          centerMode
          emulateTouch
          transitionTime={600}
          showIndicators={false}
          showStatus={false}
          useKeyboardArrows
          centerSlidePercentage={40}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button
                onClick={onClickHandler}
                className="hidden lg:block absolute left-2 top-1/2 z-20 -translate-y-1/2
                           rounded-full bg-white/90 dark:bg-slate-900/90
                           p-3 shadow-md dark:shadow-none hover:scale-110 transition"
                aria-label="Previous project"
              >
                <ChevronRight className="rotate-180 text-teal-500" size={28} />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button
                onClick={onClickHandler}
                className="lg:block hidden absolute right-2 top-1/2 z-20 -translate-y-1/2
                           rounded-full bg-white/90 dark:bg-slate-900/90
                           p-3 shadow-md dark:shadow-none hover:scale-110 transition"
                aria-label="Next project"
              >
                <ChevronRight className="text-teal-500" size={28} />
              </button>
            )
          }
        >
          {featured.map(project => (
            <div key={project.id} className="px-2">
              <Link href={`/project/${project.id}`}>
                <div className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="relative w-full overflow-hidden">
                    <CldImage
                      width={800}
                      height={600}
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      quality={90}
                    />
                  </div>

                  <div className="p-5 text-left">
                    {project.title && (
                      <h2 className="text-2xl font-bold text-transparent">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 dark:from-teal-300 dark:via-cyan-400 dark:to-blue-400">
                          {project.title}
                        </span>
                      </h2>
                    )}
                    {project.label && (
                      <p className="mt-2 dark:text-slate-300 text-base font-medium">
                        {project.label}
                      </p>
                    )}
                    <button className="mt-4 inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-medium group">
                      <span className="group-hover:text-teal-300 transition-all">
                        View Project
                      </span>
                      <ChevronRight
                        size={20}
                        className="transition-transform duration-300 transform group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
      {/*carousel smaller screens*/}
      <div className="mt-8 block md:hidden">
        <Carousel
          stopOnHover
          centerMode
          showArrows={true}
          showIndicators={false}
          showStatus={false}
          useKeyboardArrows={true}
          centerSlidePercentage={100}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button
                onClick={onClickHandler}
                className="lg:hidden block absolute left-2 top-1/2 z-20 -translate-y-1/2
                           rounded-full bg-white/90 dark:bg-slate-900/90
                           p-2 shadow-md dark:shadow-none hover:scale-60 transition"
                aria-label="Previous project"
              >
                <ChevronRight className="rotate-180 text-teal-500" size={28} />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button
                onClick={onClickHandler}
                className="lg:hidden block  absolute right-2 top-1/2 z-20 -translate-y-1/2
                           rounded-full bg-white/90 dark:bg-slate-900/90
                            p-2 shadow-md dark:shadow-none hover:scale-60 transition"
                aria-label="Next project"
              >
                <ChevronRight className="text-teal-500" size={28} />
              </button>
            )
          }
        >
          {featured.map(project => (
            <div key={project.id} className="px-2">
              <Link href={`/project/${project.id}`}>
                <div className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="relative w-full overflow-hidden">
                    <CldImage
                      width={800}
                      height={600}
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      quality={90}
                    />
                  </div>

                  <div className="p-5 text-left w-full">
                    {project.title && (
                      <h2 className="text-[1.2rem] font-bold text-transparent">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 dark:from-teal-300 dark:via-cyan-400 dark:to-blue-400">
                          {project.title}
                        </span>
                      </h2>
                    )}
                    {project.label && (
                      <p className="mt-2 dark:text-slate-300 text-sm font-medium">
                        {project.label}
                      </p>
                    )}
                    <button className="text-sm mt-4 inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-medium group">
                      <span className="group-hover:text-teal-300 transition-all">
                        View Project
                      </span>
                      <ChevronRight
                        size={20}
                        className="transition-transform duration-300 transform group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </motion.section>
  )
}

export default FeaturedProjects
