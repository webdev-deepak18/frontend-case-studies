'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Header bar */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          {/* Brand */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-neutral-900">
              Deepak S
            </span>
            <span className="hidden text-sm text-neutral-500 md:block">
              UI Engineer / Front-End Developer
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden gap-8 text-sm text-neutral-700 md:flex">
            <Link href="/" className="hover:text-neutral-900">
              Home
            </Link>
            <Link href="/#work" className="hover:text-neutral-900">
              Work
            </Link>
            <Link href="/about" className="hover:text-neutral-900">
              About
            </Link>
            <Link href="#contact" className="hover:text-neutral-900">
              Contact
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-neutral-900"
            aria-label="Open menu"
          >
            <div className="flex flex-col gap-1">
              <span className="block h-[2px] w-6 bg-neutral-900" />
              <span className="block h-[2px] w-6 bg-neutral-900" />
              <span className="block h-[2px] w-6 bg-neutral-900" />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <aside className="relative flex h-full w-72 flex-col justify-between bg-white px-6 py-8">
          {/* Mobile nav */}
          <nav className="flex flex-col gap-6 text-lg font-medium text-neutral-900">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/#work" onClick={() => setOpen(false)}>
              Work
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/#contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>

          {/* Identity footer */}
          <div className="border-t border-neutral-100 pt-6">
            <div className="text-sm font-semibold text-neutral-900">
              Deepak S
            </div>
            <div className="text-sm text-neutral-500">
              UI Engineer / Front-End Developer
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
