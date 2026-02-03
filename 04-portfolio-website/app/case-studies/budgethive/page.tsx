/* @format */

import MoreCaseStudies from '@/app/components/MoreCaseStudies'

export const metadata = {
  title: 'BudgetHive | Deepak S',
  description:
    'A clean, high-conversion SaaS landing page focused on clarity, restraint, and practical front-end execution.',
}

export default function BudgetHiveCaseStudyPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-12">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm text-neutral-500">Case Study</p>

          <h1 className="mt-2 text-3xl font-semibold text-neutral-900">
            BudgetHive
          </h1>

          {/* Meta */}
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-sm text-neutral-500">Role</p>
              <p className="mt-1 text-sm text-neutral-800">
                UI Design · Front-End Development
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">Type</p>
              <p className="mt-1 text-sm text-neutral-800">
                Self-initiated portfolio project
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">Links</p>
              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                <a
                  href="https://budget-hive.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 hover:underline"
                >
                  Live →
                </a>
                <a
                  href="https://www.figma.com/proto/q5BBDxNsBjYj8SWF6Kndzj/01-budget-hive?node-id=1-2&t=EDKYHb3PnvN7psIV-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 hover:underline"
                >
                  Figma →
                </a>
                <a
                  href="https://github.com/webdev-deepak18/frontend-case-studies/tree/main/01-budget-hive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section title="1. Overview">
        <p>
          Designing a clear, high-conversion SaaS landing page focused on clarity
          and restraint.
        </p>

        <p>
          BudgetHive is a modern SaaS landing page concept designed and built to
          demonstrate UI decision-making and practical front-end execution.
        </p>

        <p>
          Designed and developed end-to-end as part of my front-end portfolio.
        </p>
      </Section>

      <Section title="2. Context">
        <p>
          BudgetHive is a self-initiated SaaS landing page created to reflect
          international SaaS design standards while remaining realistic in
          scope.
        </p>

        <p>
          The project prioritizes clear communication, strong visual hierarchy,
          and responsive behavior over feature complexity or visual excess.
        </p>
      </Section>

      <Section title="3. Problem">
        <p>
          Many finance and productivity SaaS websites suffer from poor content
          hierarchy and visual overload, making it difficult for users to
          quickly understand product value.
        </p>

        <p>
          The challenge was to present a financial tool in a way that feels
          approachable, trustworthy, and easy to scan — without relying on
          heavy frameworks, excessive animation, or unnecessary interaction.
        </p>
      </Section>

      <Section title="4. Key Decisions">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Designed a clear hero section with a single primary message and
            focused call-to-action
          </li>
          <li>
            Structured the page into predictable, scannable sections: hero,
            features, pricing, testimonials, and final CTA
          </li>
          <li>
            Used a limited color palette and consistent spacing to reduce
            cognitive load
          </li>
          <li>
            Chose restrained interactions instead of over-animated components
          </li>
          <li>
            Kept navigation minimal to prioritize conversion and content clarity
          </li>
          <li>
            Avoided frameworks to keep the codebase simple, readable, and
            maintainable
          </li>
        </ul>
      </Section>

      <Section title="5. Visuals">
        <p className="mb-4 text-sm text-neutral-500">
          Selected screens highlighting hierarchy, pricing clarity, and
          restraint in interaction.
        </p>

        <div className="space-y-6">
          {[
            'budgethive-screenshot-1.webp',
            'budgethive-screenshot-2.webp',
            'budgethive-screenshot-3.webp',
          ].map(src => (
            <img
              key={src}
              src={`/img/${src}`}
              alt="BudgetHive screen"
              className="rounded-md border border-neutral-200"
              loading="lazy"
            />
          ))}
        </div>
      </Section>

      <Section title="6. Execution">
        <p>
          The interface was first designed in Figma, with layout structure,
          spacing, and component patterns defined before writing any code.
        </p>

        <p>
          The site was built using semantic HTML and CSS with a clean,
          predictable structure. JavaScript was added only where necessary —
          primarily for the mobile navigation menu and testimonial slider.
        </p>

        <p>
          The project was version-controlled using GitHub and deployed via
          Netlify, simulating a real-world design-to-production workflow.
        </p>

        <p>
          AI tools were used selectively during early exploration and content
          structuring to accelerate iteration, while all final design and
          implementation decisions were made manually.
        </p>
      </Section>

      <Section title="7. Outcome">
        <p>
          The final result is a clean, responsive SaaS landing page that
          communicates product value without distraction.
        </p>

        <p>
          The layout scales smoothly across screen sizes, interactions feel
          intentional, and the codebase remains lightweight and easy to extend —
          demonstrating clarity, restraint, and production readiness.
        </p>
      </Section>

      <Section title="8. Front-End Performance Snapshot">
        <p className="mb-4 text-sm text-neutral-500">
          Measured using Google PageSpeed Insights (Desktop).
        </p>

        <img
          src="/img/budgethive-performance-screenshot.webp"
          alt="BudgetHive performance report"
          className="rounded-md border border-neutral-200"
          loading="lazy"
        />
      </Section>

      <MoreCaseStudies currentPath="/case-studies/budgethive" />
    </>
  )
}

/* ---------------- Local helper ---------------- */

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-5 text-xl font-semibold text-neutral-900">
          {title}
        </h2>

        <div className="space-y-4 text-neutral-800">
          {children}
        </div>
      </div>
    </section>
  )
}
