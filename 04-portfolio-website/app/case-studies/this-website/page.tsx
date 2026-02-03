/* @format */

import MoreCaseStudies from '@/app/components/MoreCaseStudies'

export const metadata = {
  title: 'This Website | Deepak S',
  description:
    'A focused portfolio website built with Next.js to clearly communicate UI thinking, front-end execution, and decision-making.',
}

export default function ThisWebsiteCaseStudyPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-12">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm text-neutral-500">Case Study</p>

          <h1 className="mt-2 text-3xl font-semibold text-neutral-900">
            This Website
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
                Self-initiated portfolio website
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">Links</p>
              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                <a
                  href="https://www.figma.com/proto/GINMVXH4L3eg0ZTO9sF6eJ/04-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 hover:underline"
                >
                  Figma →
                </a>
                <a
                  href="https://github.com/webdev-deepak18/frontend-case-studies/tree/main/04-portfolio-website"
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
          Designing and building a focused portfolio website to clearly
          communicate UI thinking, front-end execution, and decision-making.
        </p>

        <p>
          This website was intentionally designed as a quiet alternative to
          visually loud portfolios — prioritizing clarity, structure, and
          content hierarchy over decoration.
        </p>

        <p>
          The goal was to present work in a way that hiring managers and
          engineers can quickly scan, understand, and trust.
        </p>
      </Section>

      <Section title="2. Context">
        <ul className="list-disc space-y-2 pl-5">
          <li>How decisions were made</li>
          <li>How systems scale</li>
          <li>How design translates into production-ready code</li>
        </ul>

        <p className="mt-4">
          Many portfolios optimize for visual impact but fail to communicate
          process, structure, and execution quality.
        </p>

        <p>
          As someone applying for UI and front-end roles, I needed a portfolio
          that reflects how I think — not just how things look.
        </p>

        <p>
          This site acts as both a showcase and a filter, highlighting clarity,
          restraint, and execution quality.
        </p>
      </Section>

      <Section title="3. Problem">
        <ul className="list-disc space-y-2 pl-5">
          <li>Over-designed layouts that distract from content</li>
          <li>Case studies buried behind complex interactions</li>
          <li>Heavy animations that slow comprehension</li>
          <li>Inconsistent structure across projects</li>
        </ul>

        <p className="mt-4">
          The challenge was to design a site that stays minimal without feeling
          empty, and confident without feeling generic.
        </p>
      </Section>

      <Section title="4. Key Decisions">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Kept the layout intentionally simple to prioritize reading and
            scanning
          </li>
          <li>
            Used consistent structure across all case studies for
            predictability
          </li>
          <li>Avoided unnecessary motion, effects, and page transitions</li>
          <li>
            Designed navigation to minimize friction between case studies
          </li>
          <li>
            Chose typography, spacing, and hierarchy as primary visual tools
          </li>
          <li>Treated white space as structure, not decoration</li>
        </ul>

        <p className="mt-4">
          Every decision was evaluated against one question: does this improve
          clarity or reduce friction?
        </p>
      </Section>

      <Section title="5. Case Study Structure">
        <ul className="list-disc space-y-2 pl-5">
          <li>Overview</li>
          <li>Context</li>
          <li>Problem</li>
          <li>Key Decisions</li>
          <li>Visuals</li>
          <li>Execution</li>
          <li>Outcome</li>
        </ul>

        <p className="mt-4">
          Each case study follows a consistent narrative that mirrors how design
          work is discussed in real product teams and interviews.
        </p>

        <p>
          This makes the portfolio easier to navigate, compare, and evaluate.
        </p>
      </Section>

      <Section title="6. Execution">
        <p>
          The site was first designed in Figma with clear layout rules, spacing
          systems, and reusable patterns.
        </p>

        <p>Front-end implementation is built using:</p>

        <ul className="list-disc space-y-2 pl-5">
          <li>Next.js App Router for structured, scalable routing</li>
          <li>Server-rendered pages for fast performance and SEO</li>
          <li>Reusable React components for consistency</li>
          <li>Utility-first styling for predictable layout control</li>
        </ul>

        <p className="mt-4">
          The project is version-controlled using GitHub and deployed using a
          modern production workflow.
        </p>

        <p>
          AI tools were used selectively during early exploration and content
          structuring, while all final design and implementation decisions were
          made manually.
        </p>
      </Section>

      <Section title="7. Outcome">
        <ul className="list-disc space-y-2 pl-5">
          <li>Clearly communicates design thinking</li>
          <li>Demonstrates front-end execution discipline</li>
          <li>Makes case studies easy to explore and compare</li>
          <li>
            Reflects a strong balance between form, function, and performance
          </li>
        </ul>

        <p className="mt-4">
          This website acts as a direct extension of how I approach product
          design — intentional, structured, and execution-focused.
        </p>
      </Section>

      <Section title="8. Front-End Performance Snapshot">
        <p className="mb-4 text-sm text-neutral-500">
          Measured using Google PageSpeed Insights (Desktop).
        </p>

        <img
          src="/img/this-website-performance-screenshot.webp"
          alt="Portfolio website performance report"
          className="rounded-md border border-neutral-200"
          loading="lazy"
        />
      </Section>

      <MoreCaseStudies currentPath="/case-studies/this-website" />
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
