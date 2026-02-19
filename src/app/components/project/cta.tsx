import { ProjectData } from '@/app/interfaces/projects.interface'
import CTA from '../CTA'
import {
  Github,
  Earth,
  Link2,
  Link,
  PlayCircle,
  Folder,
  File,
} from 'lucide-react'

// CTA Buttons component
export const ProjectCTAs = ({ project }: { project: ProjectData }) => {
  return (
    <div className="flex lg:-mt-11 items-center lg:justify-end gap-4">
      {project.githubUrl && (
        <CTA
          href={project.githubUrl}
          target="_blank"
          ariaLabel="GitHub repository"
        >
          <Github size={26} />
          <span className="lg:ml-1 sr-only lg:not-sr-only">GitHub</span>
        </CTA>
      )}
      {project.liveUrl && (
        <CTA href={project.liveUrl} target="_blank" ariaLabel="Live demo">
          <Earth size={26} />
          <span className="lg:ml-1 sr-only lg:not-sr-only">Live</span>
        </CTA>
      )}
      {project.externalLink && (
        <CTA
          href={project.externalLink}
          target="_blank"
          ariaLabel="External link"
        >
          <Link2 size={26} />
          <span className="lg:ml-1 sr-only lg:not-sr-only">Learn More</span>
        </CTA>
      )}
      {project.videoUrl && (
        <CTA href={project.videoUrl} target="_blank" ariaLabel="Video demo">
          <PlayCircle size={26} />
          <span className="lg:ml-1 sr-only lg:not-sr-only">Watch Video</span>
        </CTA>
      )}
      {project.folderUrl && (
        <CTA
          href={project.folderUrl}
          target="_blank"
          ariaLabel="Project folder"
        >
          <Folder size={26} />
          <span className="lg:ml-1 sr-only lg:not-sr-only">Project Files</span>
        </CTA>
      )}
      {project.otherFile && (
        <CTA href={project.otherFile} target="_blank" ariaLabel="Related file">
          <File size={26} />
          <span className="lg:ml-1 sr-only lg:not-sr-only">Download File</span>
        </CTA>
      )}
    </div>
  )
}
