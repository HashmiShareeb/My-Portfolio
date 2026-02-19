import { ProjectData } from '@/app/interfaces/projects.interface'

export function ProjectTags({ tags }: { tags: ProjectData['tags'] }) {
  return (
    <div
      className="
        mb-6
        flex gap-2
        overflow-x-auto
        pb-1
        md:flex-wrap md:overflow-visible
        scrollbar-thin scrollbar-thumb-neutral-300/80 scrollbar-track-transparent
        dark:scrollbar-thumb-slate-700/70
      "
    >
      {tags.map(tag => (
        <span
          key={tag}
          className="mb-4 whitespace-nowrap rounded-full border border-neutral-200/60 bg-white/60 px-2.5 py-1.5 text-xs font-medium text-neutral-500 backdrop-blur-sm dark:border-slate-700/40 dark:bg-slate-800/60 dark:text-gray-300"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
