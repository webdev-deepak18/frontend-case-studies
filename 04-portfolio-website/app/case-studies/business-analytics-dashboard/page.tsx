/* @format */

import MoreCaseStudies from '@/app/components/MoreCaseStudies'

export const metadata = {
  title: 'Business Analytics Dashboard | Deepak S',
  description:
    'A functional, multi-page analytics dashboard focused on clarity, hierarchy, and realistic data presentation.',
}

export default function BusinessAnalyticsCaseStudyPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-12">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm text-neutral-500">Case Study</p>

          <h1 className="mt-2 text-3xl font-semibold text-neutral-900">
            Business Analytics Dashboard
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
                  href="https://business-analytics-dashboard-ds.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 hover:underline"
                >
                  Live →
                </a>
                <a
                  href="https://www.figma.com/proto/QEZGHwbdSiscORiHcM9kMQ/02-Business-Analytics-Dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 hover:underline"
                >
                  Figma →
                </a>
                <a
                  href="https://github.com/webdev-deepak18/frontend-case-studies/tree/main/02-business-analytics-dashboards"
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
          Designing and building a functional, multi-page analytics dashboard
          focused on clarity, hierarchy, and realistic data presentation.
        </p>

        <p>
          This project was created to demonstrate my approach to complex
          information design, dashboard layout systems, and scalable front-end
          structure.
        </p>

        <p>
          The goal was not visual flair, but to simulate a real-world internal
          analytics product where speed, clarity, and usability matter more than
          decoration.
        </p>
      </Section>

      <Section title="2. Context">
        <p>
          Many analytics dashboards prioritize dense data display without
          sufficient attention to hierarchy, scanning patterns, or real usage
          scenarios.
        </p>

        <p>
          This project explores how business metrics can be structured and
          presented clearly across multiple screens while remaining flexible,
          scalable, and easy to extend.
        </p>

        <p>
          The dashboard was designed to feel realistic — similar to internal
          tools used by product, operations, or leadership teams.
        </p>
      </Section>

      <Section title="3. Problem">
        <ul className="list-disc space-y-2 pl-5">
          <li>Overloaded screens with no visual prioritization</li>
          <li>Inconsistent spacing and component usage</li>
          <li>Poor responsiveness across screen sizes</li>
          <li>Dashboards that look impressive but are hard to read or act upon</li>
        </ul>

        <p className="mt-4">
          The challenge was to design a dashboard that balances data density with
          clarity, allowing users to quickly understand trends, metrics, and
          changes without cognitive overload.
        </p>
      </Section>

      <Section title="4. Key Decisions">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Structured the dashboard using a clear layout hierarchy: global
            metrics, section-level insights, and detailed breakdowns
          </li>
          <li>
            Designed reusable components for cards, tables, charts, and filters
          </li>
          <li>
            Used consistent spacing, typography, and alignment to support fast
            scanning
          </li>
          <li>Prioritized readability over visual embellishment</li>
          <li>
            Designed realistic interaction patterns such as filtering,
            navigation, and state changes
          </li>
          <li>Ensured layouts scale cleanly across desktop and large screens</li>
        </ul>
      </Section>

      <Section title="5. Visuals">
        <p className="mb-4 text-sm text-neutral-500">
          Selected screens highlighting information hierarchy, data grouping,
          and interaction clarity.
        </p>

        <div className="space-y-6">
          {[
            'dashboard-screenshot-1.webp',
            'dashboard-screenshot-2.webp',
            'dashboard-screenshot-3.webp',
          ].map(src => (
            <img
              key={src}
              src={`/img/${src}`}
              alt="Business analytics dashboard screen"
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
          The front-end was built using semantic HTML, clean CSS, and structured
          JavaScript to simulate interactive behavior.
        </p>

        <p>
          Special attention was given to maintainable layout structure,
          reusable UI patterns, realistic responsiveness, and
          production-oriented front-end thinking.
        </p>

        <p>
          Version control and deployment were handled using GitHub and Netlify,
          mirroring real-world workflows.
        </p>
      </Section>

      <Section title="7. Outcome">
        <ul className="list-disc space-y-2 pl-5">
          <li>Strong information hierarchy</li>
          <li>Scalable layout systems</li>
          <li>Practical front-end execution</li>
          <li>Senior-level decision-making for data-heavy interfaces</li>
        </ul>

        <p className="mt-4">
          The project highlights my ability to design and build interfaces where
          clarity and usability take priority over surface-level aesthetics.
        </p>
      </Section>

      <Section title="8. Front-End Performance Snapshot">
        <p className="mb-4 text-sm text-neutral-500">
          Measured using Google PageSpeed Insights (Desktop).
        </p>

        <img
          src="/img/business-analytics-dashboard-performance-screenshot.webp"
          alt="Performance report"
          className="rounded-md border border-neutral-200"
          loading="lazy"
        />
      </Section>

      <MoreCaseStudies currentPath="/case-studies/business-analytics-dashboard" />
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
