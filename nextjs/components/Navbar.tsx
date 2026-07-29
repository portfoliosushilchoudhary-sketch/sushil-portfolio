'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { navLinks, site } from '@/lib/site'

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false)
  const [atDepth, setAtDepth] = useState(false)

  // The hero sits on a light video, the sections below on the dark field —
  // flip the bar's ink so it stays legible across both. A project page is
  // all dark field, so `solid` pins the flipped state.
  useEffect(() => {
    const onScroll = () => setAtDepth(window.scrollY > window.innerHeight - 90)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrolled = solid || atDepth
  const ink = scrolled ? 'text-paper' : 'text-ink'
  const bar = scrolled ? 'bg-paper' : 'bg-ink'

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-10 flex w-full flex-row items-center justify-between px-5 py-4 transition-colors duration-500 sm:px-8 sm:py-5 ${
          scrolled ? 'bg-field/80 backdrop-blur-sm' : ''
        }`}
      >
        <Link href="/" className={`flex flex-row items-center gap-3 ${ink}`}>
          <span
            className="text-[21px] tracking-tight sm:text-[26px]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
          >
            {site.name}
          </span>
          <span
            className="text-[25px] select-none sm:text-[30px]"
            style={{ letterSpacing: '-0.02em' }}
          >
            &#x2733;&#xFE0E;
          </span>
        </Link>

        <nav className={`hidden flex-row text-[23px] md:flex ${ink}`}>
          {navLinks.map((link, i) => (
            <span key={link.label}>
              <Link
                href={`/${link.href}`}
                className="transition-opacity hover:opacity-60"
              >
                {link.label}
              </Link>
              {i < navLinks.length - 1 && <span>,&nbsp;</span>}
            </span>
          ))}
        </nav>

        <a
          href={`mailto:${site.email}`}
          className={`hidden text-[23px] underline underline-offset-2 transition-opacity hover:opacity-60 md:block ${ink}`}
        >
          Get in touch
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[5px] md:hidden"
        >
          <span
            className={`h-[2px] w-6 transition-all duration-300 ${
              open ? 'translate-y-[7px] rotate-45 bg-paper' : bar
            }`}
          />
          <span
            className={`h-[2px] w-6 transition-all duration-300 ${bar} ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`h-[2px] w-6 transition-all duration-300 ${
              open ? '-translate-y-[7px] -rotate-45 bg-paper' : bar
            }`}
          />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-[9] flex flex-col justify-center gap-8 bg-ink/95 px-8 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ pointerEvents: open ? 'auto' : 'none' }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={`/${link.href}`}
            className="text-[32px] font-medium text-paper"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={`mailto:${site.email}`}
          className="text-[32px] font-medium text-paper underline underline-offset-2"
          onClick={() => setOpen(false)}
        >
          Get in touch
        </a>
      </div>
    </>
  )
}
