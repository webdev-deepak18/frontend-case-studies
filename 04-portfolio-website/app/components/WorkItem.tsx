import WorkActions from './WorkActions'
import { WorkItemData } from '../data/work'

export default function WorkItem({
  title,
  description,
  stack,
  linksTop,
  linksBottom,
}: WorkItemData) {
  return (
    <article className="flex flex-col gap-8 border-b border-neutral-200 py-12 md:flex-row md:items-start md:justify-between">

      {/* Left */}
      <div className="max-w-2xl">
        <h3 className="text-lg font-semibold text-neutral-900">
          {title}
        </h3>

        <p className="mt-3 text-neutral-700">
          {description}
        </p>

        <p className="mt-3 text-sm text-neutral-500">
          {stack}
        </p>
      </div>

      {/* Right */}
      <WorkActions top={linksTop} bottom={linksBottom} />
    </article>
  )
}
