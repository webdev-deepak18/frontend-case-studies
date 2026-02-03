/** @format */

import MoreCaseStudies from '@/app/components/MoreCaseStudies'

export const metadata = {
  title: '17 Oranges Company Website | Deepak S',
  description:
    'A real-world company website designed and built end-to-end using React, JavaScript, and Styled Components, from Figma prototypes to production handoff.',
}

export default function SeventeenOrangesCaseStudyPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-12">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm text-neutral-500">Case Study</p>

          <h1 className="mt-2 text-3xl font-semibold text-neutral-900">
            17 Oranges — Company Website
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
                Real-world client project
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">Links</p>
              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                <a
                  href="https://17oranges.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 hover:underline"
                >
                  Live →
                </a>
                <a
                  href="https://17oranges.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 hover:underline"
                >
                  Netlify →
                </a>
                <a
                  href="https://www.figma.com/proto/3VpM7BZWc0nHIXHemFsCpC/17Oranges?node-id=6-37&p=f&t=vNUJIv5zmRqLD2QT-0&scaling=scale-down&content-scaling=fixed&page-id=6%3A2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 hover:underline"
                >
                  Figma →
                </a>
                <a
                  href="https://github.com/webdev-deepak18/frontend-case-studies/tree/main/00-17-oranges"
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
          <strong>17 Oranges</strong> is a technology consulting and digital
          transformation partner working closely with HR.com. This project
          involved <strong>redesigning and rebuilding their public-facing website</strong> to
          better reflect their services, leadership, and brand maturity.
        </p>

        <p>
          This was a <strong>real-world, end-to-end project</strong> — from
          stakeholder discovery and Figma-based design exploration to a full
          React implementation and production handoff.
        </p>

        <p>
          The goal was to deliver a <strong>modern, scalable marketing website</strong> that
          feels confident, professional, and future-facing, without visual
          clutter or unnecessary complexity.
        </p>
      </Section>

      <Section title="2. Context">
        <p>
          The existing website did not fully communicate the breadth of
          17 Oranges’ services or the seniority of its leadership team.
          <strong> Content-heavy sections</strong> such as leadership profiles,
          services, and case studies lacked a consistent visual system.
        </p>

        <p>
          Stakeholders wanted an <strong>ultra-modern, futuristic design language</strong> while
          maintaining clarity, credibility, and ease of navigation for
          enterprise-focused users.
        </p>
      </Section>

      <Section title="3. Problem">
        <ul className="list-disc space-y-2 pl-5">
          <li>Outdated visual language across pages</li>
          <li>Inconsistent layout and spacing patterns</li>
          <li>Content-heavy sections difficult to scan</li>
          <li>Lack of engaging yet restrained interaction patterns</li>
        </ul>

        <p className="mt-4">
          The challenge was to design and build a website that feels
          <strong> modern and confident</strong> while remaining
          <strong> readable, scalable, and production-ready</strong>.
        </p>
      </Section>

      <Section title="4. Goals">
        <ul className="list-disc space-y-2 pl-5">
          <li>Redesign the site with a modern, future-facing visual identity</li>
          <li>Establish consistent layout, spacing, and typography</li>
          <li>Create reusable UI sections suitable for React components</li>
          <li>Build a clean, maintainable front-end codebase</li>
          <li>Deliver production-ready files to the internal dev team</li>
        </ul>
      </Section>

      <Section title="5. Design Process">
        <p>
          The project began with <strong>stakeholder discussions</strong> to understand
          brand direction, content needs, and visual expectations.
        </p>

        <p>
          Full-page designs were created in <strong>Figma</strong>, including:
        </p>

        <ul className="list-disc space-y-2 pl-5">
          <li>Homepage</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Leadership Team</li>
          <li>Case Studies</li>
          <li>Contact Page</li>
        </ul>

        <p>
          <strong>Interactive prototypes</strong> were used to validate navigation
          flow, interaction behavior, and content hierarchy before development.
        </p>
      </Section>

      <Section title="6. Key Design Decisions">
        <ul className="list-disc space-y-2 pl-5">
          <li>Component-first layout thinking instead of page-specific designs</li>
          <li>Strong typography-led hierarchy for content-heavy pages</li>
          <li>Leadership grid designed for exploration without losing context</li>
          <li>Consistent spacing and alignment rules to reduce visual noise</li>
          <li>Modern aesthetic balanced with enterprise-level professionalism</li>
        </ul>
      </Section>

      <Section title="7. Technical Execution">
        <p>
          The site was developed using <strong>React (2023)</strong> with
          <strong> JavaScript</strong> and <strong>Styled Components</strong> for styling.
        </p>

        <ul className="list-disc space-y-2 pl-5">
          <li>Reusable React components for navigation, sections, cards, and CTAs</li>
          <li>Styled Components used to scope styles and avoid global CSS conflicts</li>
          <li>State-based UI logic for interactive sections</li>
          <li>App-like navigation patterns without unnecessary complexity</li>
        </ul>

        <p className="mt-4">
          The application was <strong>designed, developed, and initially hosted on</strong>{' '}
          <a
            href="https://17oranges.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline text-neutral-900 hover:underline hover:font-bold"
          >
            Netlify
          </a>{' '}
          to validate layout, interactions, and overall behavior before handoff.
        </p>

        <p>
          The project was built <strong>before tools like ChatGPT were available</strong>,
          and all components, layouts, and interactions were
          <strong> manually implemented</strong>.
        </p>

        <p>
          Once validated, the React codebase was transferred to the client’s
          internal development team, who integrated it into their production
          workflow and made the site live.
        </p>
      </Section>

      <Section title="8. Constraints & Real-World Complexity">
        <ul className="list-disc space-y-2 pl-5">
          <li>No backend ownership</li>
          <li>Multiple stakeholder review cycles</li>
          <li>Alignment with internal development standards</li>
          <li>Clean, maintainable code handoff requirements</li>
        </ul>
      </Section>

      <Section title="9. Outcome">
        <ul className="list-disc space-y-2 pl-5">
          <li>Delivered a modern, production-ready website</li>
          <li>Improved visual consistency across all pages</li>
          <li>Established reusable front-end structure</li>
          <li>Successfully translated Figma designs into live code</li>
        </ul>

        <p className="mt-4">
          This project represents a <strong>complete design-to-development lifecycle</strong>,
          not a conceptual or portfolio-only exercise.
        </p>
      </Section>

      <Section title="10. What This Project Demonstrates">
        <ul className="list-disc space-y-2 pl-5">
          <li>Real-world React experience (not a demo project)</li>
          <li>End-to-end ownership from design to handoff</li>
          <li>Strong design judgment applied to production constraints</li>
          <li>Ability to collaborate with stakeholders and internal teams</li>
          <li>Clean, maintainable front-end implementation</li>
        </ul>
      </Section>

      <Section title="11. Visuals">
        <p className="mb-4 text-sm text-neutral-500">
          Selected screens highlighting brand tone, layout structure, and content hierarchy.
        </p>

        <div className="space-y-6">
          {[
            '17oranges-screenshot-1.webp',
            '17oranges-screenshot-2.webp',
            '17oranges-screenshot-3.webp',
          ].map(src => (
            <img
              key={src}
              src={`/img/${src}`}
              alt="17 Oranges website screen"
              className="rounded-md border border-neutral-200"
              loading="lazy"
            />
          ))}
        </div>
      </Section>

      <Section title="12. Front-End Performance Snapshot">
        <p className="mb-4 text-sm text-neutral-500">
          Measured using Google PageSpeed Insights (Desktop).
        </p>

        <img
          src="/img/17oranges-performance-snapshot.webp"
          alt="Performance report"
          className="rounded-md border border-neutral-200"
          loading="lazy"
        />
      </Section>

      <MoreCaseStudies currentPath="/case-studies/17-oranges" />
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
