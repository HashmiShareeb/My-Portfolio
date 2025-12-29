'use client'
import { p } from 'framer-motion/client'
import ProjectCards from '../components/ProjectCardsAll'
import GradientTitle from '../components/Text/GradientHeaderText'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col lg:px-52 px-4 py-20">
      <GradientTitle
        title="Projects"
        description="some projects are still in development! To view more projects, visit my GitHub profile."
      />
      {/* go back */}
      <div className="flex items-center">
        <Link href="/">
          <button className="group inline transition duration-300 text-teal-400 relative">
            <span className="flex flex-row-reverse items-center gap-2 group-hover:text-teal-300 group-focus:text-teal-300 mt-2">
              Back
              <ChevronLeft
                size={20}
                className="transition-transform duration-300 transform group-hover:translate-x-1"
              />
            </span>
          </button>
        </Link>
      </div>

      <ProjectCards />
    </div>
  )
}

export default Projects
