import { CldImage } from 'next-cloudinary'
import { ProjectData } from '@/app/interfaces/projects.interface'

export const ProjectBanner = ({ project }: { project: ProjectData }) => {
  return (
    <CldImage
      src={project.image}
      alt={project.title || 'Project Banner'}
      width={1400}
      height={600}
      quality={95}
      className="mx-auto my-8 overflow-hidden shadow-md dark:shadow-none rounded-xl w-full h-auto"
      priority
    />
  )
}
