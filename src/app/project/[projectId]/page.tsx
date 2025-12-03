'use client'

import { ChevronLeft, Folder } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Data from '@/app/data/projects'
import DigitalPatientTwin from '@/app/mdx/digital-patient-twin.mdx'
import Blitx from '@/app/mdx/blitx.mdx'
import TimeTableApp from '@/app/mdx/time-table-app.mdx'
import MyPortfolio from '@/app/mdx/my-portfolio.mdx'
import Harmony from '@/app/mdx/harmony-energy.mdx'
import MovieApp from '@/app/mdx/movie-app.mdx'
import MichaelN from '@/app/mdx/michael-naessens.mdx'
import NexusFM from '@/app/mdx/nexus-fm.mdx'
import { MDXProvider, useMDXComponents } from '@mdx-js/react'
import { ProjectData } from '@/app/interfaces/projects.interface'
import { ProjectWrapper } from '@/app/components/ProjectWrapper'
import { ProjectCTAs as ProjectCTA } from '@/app/components/project/cta'
import { Section } from '@/app/components/project/Section'
import { ProjectGallery } from '@/app/components/project/ProjectGallery'
import { ProjectBanner } from '@/app/components/project/Banner'

// Map projectId → { data, mdx component }
const projects: Record<string, { data: ProjectData; Content: any }> = {
  'digital-patient-twin': {
    data: {
      ...Data.find((p: { id: string }) => p.id === 'digital-patient-twin')!,
    },
    Content: DigitalPatientTwin,
  },
  blitx: {
    data: {
      ...Data.find((p: { id: string }) => p.id === 'blitx')!,
    },
    Content: Blitx,
  },
  'my-portfolio': {
    data: {
      ...Data.find((p: { id: string }) => p.id === 'my-portfolio')!,
    },
    Content: MyPortfolio,
  },
  'timetable-app': {
    data: {
      ...Data.find((p: { id: string }) => p.id === 'timetable-app')!,
    },
    Content: TimeTableApp,
  },
  'harmony-energy': {
    data: {
      ...Data.find((p: { id: string }) => p.id === 'harmony-energy')!,
    },
    Content: Harmony,
  },
  'movie-app': {
    data: {
      ...Data.find((p: { id: string }) => p.id === 'movie-app')!,
    },
    Content: MovieApp,
  },
  'deborah-lintermans': {
    data: {
      ...Data.find((p: { id: string }) => p.id === 'deborah-lintermans')!,
    },
    Content: require('@/app/mdx/deborah-lintermans.mdx').default,
  },
  'michael-naessens': {
    data: {
      ...Data.find((p: { id: string }) => p.id === 'michael-naessens')!,
    },
    Content: MichaelN,
  },
  'nexus-fm': {
    data: {
      ...Data.find((p: { id: string }) => p.id === 'nexus-fm')!,
    },
    Content: NexusFM,
  },
}

export default function ProjectPage() {
  const { projectId } = useParams()

  // Find the project data from the imported Data array
  const project = Data.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="flex items-center gap-4 text-2xl font-bold">
          <Folder size={40} />
          Project not found
        </h1>

        <Link href="/project/">
          <button className="group inline transition duration-300 dark:text-teal-400 text-teal-500 relative">
            <span className="flex items-center gap-2 group-hover:text-teal-300 group-focus:text-teal-300 mt-2">
              <ChevronLeft
                size={20}
                className="transition-transform duration-300 transform group-hover:-translate-x-1"
              />
              back to projects
            </span>
          </button>
        </Link>
      </div>
    )
  }
  const { Content } = projects[projectId as string]
  const projectData = projects[projectId as string].data

  return (
    <section className="dark:text-slate-300 font-medium">
      {/* start go back to project btn */}
      <div className="fixed lg:top-20 top-14 left-4 z-20">
        <Link href="/project">
          <button className="relative inline group transition duration-300 text-teal-500 dark:text-teal-400">
            <span className="mt-2 flex items-center gap-2 transition-colors group-hover:text-teal-300 group-focus:text-teal-300 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 shadow dark:shadow-none">
              <ChevronLeft
                size={20}
                className="transform transition-transform duration-300 lg:group-hover:-translate-x-1"
              />
              <span className="sr-only md:not-sr-only">Back</span>
            </span>
          </button>
        </Link>
      </div>
      {/* end of go back button */}
      <MDXProvider>
        <ProjectWrapper>
          <ProjectBanner project={projectData} />
          {projectData.label && (
            <span className="inline-block mb-4 px-3 py-1 text-sm font-semibold rounded-full bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300">
              {projectData.label}
            </span>
          )}
          <h2 className="lg:text-4xl text-2xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 dark:from-teal-300 dark:via-cyan-400 dark:to-blue-400">
              {projectData.title}
            </span>
          </h2>
          {(projectData.tags ?? []).map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-xs sm:text-sm font-mono bg-gray-200 dark:bg-slate-800 rounded-full mt-1 inline-block mr-2 mb-4 text-gray-800 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
          {/*Render MDX*/}
          <Content {...projectData} />
          {/* Render sections */}
          {project.sections?.map((section, idx) => (
            <Section key={idx} section={section} />
          ))}
          <ProjectCTA project={projectData} />
          <ProjectGallery project={projectData} />
        </ProjectWrapper>
      </MDXProvider>
    </section>
  )
}
