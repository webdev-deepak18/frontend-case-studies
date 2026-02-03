export default function Capabilities() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-neutral-900">
        Capabilities
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
        {/* Item 1 */}
        <div>
          <h3 className="text-base font-semibold text-neutral-900">
            UI Design & Systems
          </h3>
          <p className="mt-3 text-neutral-700">
            Designing clear interface structures, visual hierarchy, and
            component systems that scale across screens and products. Strong
            focus on layout, typography, spacing, and consistency to support
            real-world usability and long-term maintainability.
          </p>
        </div>

        {/* Item 2 */}
        <div>
          <h3 className="text-base font-semibold text-neutral-900">
            Front-End Implementation
          </h3>
          <p className="mt-3 text-neutral-700">
            Building responsive, accessible interfaces using clean HTML, CSS,
            and JavaScript. Experienced with React and Next.js, translating
            design systems into reusable components and scalable front-end
            structures with clarity and performance in mind.
          </p>
        </div>

        {/* Item 3 */}
        <div>
          <h3 className="text-base font-semibold text-neutral-900">
            Product & Interface Thinking
          </h3>
          <p className="mt-3 text-neutral-700">
            Making deliberate design and implementation decisions based on
            context, constraints, and real usage. Focused on clarity,
            maintainability, and building interfaces that work well over time,
            not just at launch.
          </p>
        </div>
      </div>
    </section>
  )
}
