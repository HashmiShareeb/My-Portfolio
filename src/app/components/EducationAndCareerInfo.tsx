import { GraduationCap, SearchIcon } from 'lucide-react'
import Link from 'next/link'

const EducationAndCareerInfo = () => {
  return (
    <div className="mb-12 text-sm md:text-md dark:text-slate-300 flex flex-col md:flex-row items-center justify-center gap-4">
      <p className="w-full md:w-auto flex-1 max-w-prose text-center">
        <GraduationCap className="inline mb-1 mr-1" size={16} />
        Graduated:{' '}
        <strong>
          Bachelor&apos;s Multimedia and Creative Technologies{' '}
          <Link
            href="https://mct.be/"
            target="_blank"
            className="underline hover:text-teal-300 transition-colors duration-100"
          >
            (MCT)
          </Link>
        </strong>
      </p>

      <span
        className="hidden md:block h-6 border-l border-teal-300 dark:border-teal-600 mx-4"
        role="separator"
        aria-orientation="vertical"
      ></span>

      <p className="w-full md:w-auto flex-1 max-w-prose text-center">
        <SearchIcon className="inline mb-1 mr-1" size={16} />
        Looking for opportunities to grow as a{' '}
        <strong>Frontend/Backend Developer</strong> and{' '}
        <strong>UI/UX Designer</strong>.
      </p>
    </div>
  )
}

export default EducationAndCareerInfo
