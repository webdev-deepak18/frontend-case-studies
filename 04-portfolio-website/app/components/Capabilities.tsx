export default function Capabilities() {
  return (
    <section >
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
            component systems that scale across screens and products.
          </p>
        </div>

        {/* Item 2 */}
        <div>
          <h3 className="text-base font-semibold text-neutral-900">
            Front-End Implementation
          </h3>
          <p className="mt-3 text-neutral-700">
            Building responsive, accessible interfaces using clean HTML, CSS,
            and JavaScript. Experienced with React and Next.js — focused on
            clarity, performance, and scalable UI systems.
          </p>
        </div>

        {/* Item 3 */}
        <div>
          <h3 className="text-base font-semibold text-neutral-900">
            Motion & Creative Tech
          </h3>
          <p className="mt-3 text-neutral-700">
            Using motion and creative tooling selectively to add clarity,
            rhythm, and polish — never as decoration.
          </p>
        </div>
      </div>
    </section>
  )
}
