'use client'

import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-12 border-t border-neutral-100">
      {/* CTA section */}
      <div
        id="contact"
        className="mx-auto max-w-6xl px-6 pt-6 pb-12 text-center"
      >
        <h2 className="text-2xl font-semibold text-neutral-900">
          Open to full-time remote opportunities
        </h2>

        <div className="mt-8 flex flex-col items-center gap-4 text-sm text-neutral-600 sm:flex-row sm:justify-center sm:gap-8">
          <a
            href="https://www.linkedin.com/in/deepak-ui-frontend/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900"
          >
            LinkedIn →
          </a>

          <a
            href="mailto:webdev.deepak18@gmail.com"
            className="hover:text-neutral-900"
          >
            webdev.deepak18@gmail.com →
          </a>

          <a
            href="/resume/Deepak-UI-Engineer-Front-End-Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900"
          >
            Resume →
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 text-center text-sm text-neutral-500">
        © {year} Deepak S
      </div>
    </footer>
  )
}
