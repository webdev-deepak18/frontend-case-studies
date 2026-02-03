export const metadata = {
  title: 'About | Deepak S',
  description:
    'UI Engineer and Front-End Developer focused on clarity, structure, and production-ready execution.',
}

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="pt-20 pb-12">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-semibold text-neutral-900">
            About
          </h1>

          <div className="mt-6 space-y-4 text-neutral-800">
            <p>
              I’m a UI designer and front-end developer focused on clarity,
              structure, and execution. I work end-to-end — from defining
              interface hierarchy and visual systems to building clean,
              production-ready front-end code.
            </p>

            <p>
              My work sits at the intersection of design systems, front-end
              implementation, and selective motion. I care deeply about how
              interfaces scale, how information is presented, and how real users
              experience products — not just how things look in isolation.
            </p>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 text-xl font-semibold text-neutral-900">
            How I Work
          </h2>

          <div className="space-y-6 text-neutral-800">
            <div>
              <p className="font-medium text-neutral-900">
                Clarity before polish
              </p>
              <p className="mt-2">
                I focus on information hierarchy, layout structure, and intent
                before visual refinement. A clear interface scales better than a
                visually impressive but fragile one.
              </p>
            </div>

            <div>
              <p className="font-medium text-neutral-900">
                Systems over screens
              </p>
              <p className="mt-2">
                I design reusable components and layout systems instead of
                isolated pages, ensuring consistency, maintainability, and
                real-world scalability across products.
              </p>
            </div>

            <div>
              <p className="font-medium text-neutral-900">
                Execution with constraints
              </p>
              <p className="mt-2">
                I build interfaces with production in mind — clean HTML,
                maintainable CSS, and minimal JavaScript — making deliberate
                trade-offs to balance speed, performance, and long-term clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Snapshot */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 text-xl font-semibold text-neutral-900">
            Experience Snapshot
          </h2>

          <ul className="space-y-3 text-neutral-800 list-disc pl-5">
            <li>
              <strong>17+ years</strong> of overall design experience, with a
              strong foundation in visual systems, layout, and communication
            </li>

            <li>
              <strong>5+ years</strong> focused on modern web development,
              designing and building production-ready interfaces for digital
              products
            </li>

            <li>
              <strong>End-to-end ownership</strong> — from interface hierarchy
              and component systems to clean, maintainable front-end code
            </li>

            <li>
              <strong>Design systems mindset</strong>, prioritizing reuse,
              consistency, and scalability across screens and products
            </li>

            <li>
              <strong>Front-end execution</strong> using HTML, CSS, and
              JavaScript with a focus on performance and long-term
              maintainability
            </li>

            <li>
              <strong>Remote-first experience</strong>, collaborating
              effectively in asynchronous, cross-functional teams
            </li>
          </ul>

          <div className="mt-6 text-neutral-800">
            <p>
              Outside of project work, I enjoy refining workflows, exploring
              creative tools, and building things that balance form, function,
              and performance.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
