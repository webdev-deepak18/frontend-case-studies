import WorkItem from './WorkItem'
import { workItems } from '../data/work'

export default function MyWork() {
  return (
    <section id="work" className="pt-12 pb-24">
      <h2 className="text-2xl font-semibold text-neutral-900">
        My Work
      </h2>

      <div >
        {workItems.map((item) => (
          <WorkItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}
