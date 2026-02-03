/* @format */

import Link from 'next/link'
import { workItems } from '@/app/data/work'

export type MoreCaseStudiesProps = {
  currentPath: string
}

export default function MoreCaseStudies({
  currentPath,
}: MoreCaseStudiesProps) {
  const filteredItems = workItems.filter(item =>
    item.linksTop.every(link => link.href !== currentPath)
  )

  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-6 text-xl font-semibold text-neutral-900">
          More Case Studies
        </h2>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {filteredItems.map(item => {
            const caseLink = item.linksTop.find(
              link => link.variant === 'primary'
            )

            if (!caseLink) return null

            return (
              <Link
                key={item.title}
                href={caseLink.href}
                className="text-neutral-900 hover:underline"
              >
                {item.title} →
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
