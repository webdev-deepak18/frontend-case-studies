/* @format */

import MoreCaseStudies from '@/app/components/MoreCaseStudies'

export const metadata = {
  title: 'HireFlow — Recruitment Dashboard | Deepak S',
  description:
    'A desktop-first recruitment dashboard built with React, TypeScript, and Tailwind CSS.',
}

export default function HireFlowCaseStudyPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-12">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm text-neutral-500">
            Case Study · React Application
          </p>

          <h1 className="mt-2 text-3xl font-semibold text-neutral-900">
            HireFlow — Recruitment Dashboard
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
              <p className="text-sm text-neutral-500">Tech</p>
              <p className="mt-1 text-sm text-neutral-800">
                React · TypeScript · Tailwind CSS
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">Links</p>
              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                <a
                  href="https://hireflow-ats.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 hover:underline"
                >
                  Live →
                </a>
                <a
                  href="https://www.figma.com/proto/3g2dni5L0OqlG3kSuYUHpC/HireFlow-ATS?node-id=8624-4556&p=f&t=KbsGMG2QtZUHSV8l-0&scaling=min-zoom&content-scaling=fixed&page-id=8621%3A883&starting-point-node-id=8624%3A4461"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 hover:underline"
                >
                  Figma →
                </a>
                <a
                  href="https://github.com/webdev-deepak18/frontend-case-studies/tree/main/05-hireflow-ats/hireflow-app"
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
          HireFlow is a desktop-first recruitment management dashboard designed
          to help recruiters track candidates across hiring stages, review
          profiles, and manage interview workflows through a clean, structured
          interface.
        </p>

        <p>
          The project was designed end-to-end in Figma and implemented as a
          React + TypeScript application using Tailwind CSS for consistent
          styling and layout control.
        </p>

        <p>
          The goal was to simulate a realistic internal recruitment tool —
          prioritizing clarity, scalability, and maintainable front-end
          architecture over surface-level polish.
        </p>
      </Section>

      <Section title="2. Context">
        <p>
          Recruitment platforms are workflow-heavy tools used daily by hiring
          teams. Poor layout decisions, inconsistent components, or unclear
          visual hierarchy quickly impact productivity.
        </p>

        <p>
          This project explores how a recruitment dashboard can be structured
          clearly across multiple screens while remaining scalable as features
          evolve.
        </p>

        <p>
          Tailwind CSS was used to enforce consistent spacing, typography, and
          color usage across the interface, reducing design drift and supporting
          long-term maintainability.
        </p>
      </Section>

      <Section title="3. Problem">
        <ul className="list-disc space-y-2 pl-5">
          <li>Lack of clear hierarchy across recruitment stages</li>
          <li>Fragmented candidate information across screens</li>
          <li>Inconsistent UI patterns that are difficult to scale</li>
          <li>Dashboards that look polished but are not production-ready</li>
        </ul>

        <p className="mt-4">
          The challenge was to design and build a recruitment dashboard that
          feels genuinely usable — balancing information density with clarity
          while supporting real-world hiring workflows.
        </p>
      </Section>

      <Section title="4. Key Decisions">
        <ul className="list-disc space-y-2 pl-5">
          <li>Desktop-first layout with fixed sidebar navigation</li>
          <li>Candidate flows structured around real hiring stages</li>
          <li>Reusable UI primitives built with Tailwind utilities</li>
          <li>Centralized spacing and color tokens</li>
          <li>Layout-based routing using React Router</li>
          <li>Intentional restriction of mobile access</li>
        </ul>
      </Section>

      <Section title="5. Visuals">
        <p className="mb-4 text-sm text-neutral-500">
          Selected screens highlighting layout structure, component consistency,
          and workflow clarity.
        </p>

        <div className="space-y-6">
          {[
            'hireflow-dashboard-screenshot-1.webp',
            'hireflow-dashboard-screenshot-2.webp',
            'hireflow-dashboard-screenshot-3.webp',
          ].map(src => (
            <img
              key={src}
              src={`/img/${src}`}
              alt="HireFlow screen"
              className="rounded-md border border-neutral-200"
              loading="lazy"
            />
          ))}
        </div>
      </Section>

      <Section title="6. Execution">
        <p>
          The interface was first designed in Figma, with layout structure,
          component behavior, and design tokens defined before development.
        </p>

        <p>
          The application was built using React and TypeScript, with Tailwind CSS
          providing a utility-first layer for styling and layout consistency.
        </p>

        <p>
          Authentication state and protected routes were handled using the
          Context API, mirroring real-world SaaS patterns without unnecessary
          backend complexity.
        </p>
      </Section>

      <Section title="7. Outcome">
        <ul className="list-disc space-y-2 pl-5">
          <li>Clear, scalable dashboard architecture</li>
          <li>Consistent visual language across screens</li>
          <li>Future-proof spacing and color system</li>
          <li>Senior-level front-end decision-making</li>
        </ul>

        <p className="mt-4">
          HireFlow demonstrates my ability to design and build production-ready
          SaaS interfaces that are easy to maintain and evolve over time.
        </p>
      </Section>

      <Section title="8. Front-End Performance Snapshot">
        <p className="mb-4 text-sm text-neutral-500">
          Measured using Google PageSpeed Insights (Desktop).
        </p>

        <img
          src="/img/hireflow-dashboard-performance-screenshot.webp"
          alt="Performance report"
          className="rounded-md border border-neutral-200"
          loading="lazy"
        />
      </Section>

      <MoreCaseStudies currentPath="/case-studies/hireflow-ats" />
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
