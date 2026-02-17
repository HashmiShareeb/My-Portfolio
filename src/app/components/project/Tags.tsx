import { ProjectData } from '@/app/interfaces/projects.interface'

export function ProjectTags({ tags }: { tags: ProjectData['tags'] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map(tag => (
        <span
          key={tag}
          className="rounded-full border border-neutral-200/60 bg-white/60 px-2.5 py-1.5 text-xs font-medium text-neutral-500 backdrop-blur-sm dark:border-slate-700/40 dark:bg-slate-800/60 dark:text-gray-300"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
