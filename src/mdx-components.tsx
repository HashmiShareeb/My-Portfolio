import type { MDXComponents } from 'mdx/types'
import { ProjectWrapper } from '@/app/components/ProjectWrapper'

const components: MDXComponents = {
  ProjectWrapper,
  // You can add more custom components like
  // h1: (props) => <h1 className="text-2xl" {...props} />,
  h2: props => (
    <h2
      className="text-xl font-semibold text-teal-500 dark:text-teal-400 mb-4 mt-4"
      {...props}
    />
  ),
  h3: props => (
    <h3
      className="text-lg font-semibold text-teal-500 dark:text-teal-400 mb-3 mt-4"
      {...props}
    />
  ),
  p: props => <p className="mb-4 mt-4" {...props} />,
  //li: props => <li className="list-disc text-teal-400" {...props} />,
}

export function useMDXComponents(): MDXComponents {
  return components
}
