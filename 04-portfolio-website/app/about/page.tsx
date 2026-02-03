export const metadata = {
  title: 'About | Deepak S',
  description:
    'UI designer and front-end developer focused on clarity, structure, and production-ready execution.',
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
              structure, and execution. I work end to end, from defining
              interface hierarchy and visual systems to building clean,
              production-ready front-end code.
            </p>

            <p>
              My work sits at the intersection of design systems, front-end
              implementation, and selective motion. I care deeply about how
              interfaces scale, how information is presented, and how real users
              experience products over time, not just how things look in
              isolation.
            </p>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 text-xl font-semibold text-neutral-900">
            My Journey
          </h2>

          <div className="space-y-4 text-neutral-800">
            <p>
              I started my career in 2008 as a graphic designer, working on
              layout-heavy and long-form design work. Those early years built a
              strong foundation in typography, spacing, visual hierarchy, and
              consistency across complex layouts.
            </p>

            <p>
              Over time, my role evolved beyond static design. While working at
              HR.com, I redesigned digital publications, built reusable layout
              systems, and defined templates that could scale across teams. This
              shift moved my focus from designing individual screens to designing
              systems that could be maintained and extended.
            </p>

            <p>
              As digital products became a larger part of my work, I began
              learning HTML, CSS, and JavaScript to gain more control over how my
              designs were implemented. What started as a practical need
              gradually became a core skill, leading me to own both design and
              front-end execution for web projects.
            </p>
          </div>
        </div>
      </section>

      {/* Design Systems & Front-End */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 text-xl font-semibold text-neutral-900">
            Design Systems and Front-End Work
          </h2>

          <div className="space-y-4 text-neutral-800">
            <p>
              In recent years, I’ve worked extensively in Figma to design
              interface systems for web applications and internal tools. This
              includes defining typography scales, color tokens, spacing
              systems, and reusable components such as buttons, form elements,
              navigation patterns, and data layouts.
            </p>

            <p>
              I’ve designed and prototyped complex CRM-style interfaces with a
              focus on component reuse, interaction flow, and scalability rather
              than isolated screens. Prototyping plays a key role in how I
              validate structure and behavior before development.
            </p>

            <p>
              On the front end, I work primarily with React and Next.js,
              translating system-driven design decisions into maintainable
              components and layouts that evolve over time. My focus stays on
              clarity, performance, and long-term maintainability rather than
              unnecessary complexity.
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
                real-world scalability.
              </p>
            </div>

            <div>
              <p className="font-medium text-neutral-900">
                Execution with constraints
              </p>
              <p className="mt-2">
                I build interfaces with production in mind, making deliberate
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
              <strong>17+ years</strong> of overall design experience, grounded
              in visual systems, layout, and communication
            </li>

            <li>
              <strong>5+ years</strong> designing and building modern web
              interfaces for digital products
            </li>

            <li>
              <strong>End-to-end ownership</strong> from interface hierarchy and
              component systems to clean, maintainable front-end code
            </li>

            <li>
              <strong>Design systems mindset</strong> focused on reuse,
              consistency, and scalability
            </li>

            <li>
              <strong>Front-end execution</strong> using HTML, CSS, and
              JavaScript with a focus on performance and maintainability
            </li>

            <li>
              <strong>Remote-first experience</strong> collaborating effectively
              in asynchronous, cross-functional teams
            </li>
          </ul>

          <div className="mt-6 text-neutral-800 space-y-4">
            <p>
              Alongside interface work, I’ve also created explainer and
              short-form product videos to support content-driven platforms.
              This experience has strengthened my understanding of visual
              storytelling, pacing, and how motion supports clarity rather than
              distraction.
            </p>

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
