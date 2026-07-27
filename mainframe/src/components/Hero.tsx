import { useEffect, useState } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'
import { hero, site } from '../data/site'

const pillBase =
  'inline-flex items-center justify-center rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap transition-colors duration-200'

function CopyIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1" />
      <rect x="1" y="1" width="7.5" height="7.5" rx="1" />
    </svg>
  )
}

export default function Hero() {
  const { displayed, done } = useTypewriter(hero.typewriter)
  const [pillsVisible, setPillsVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setPillsVisible(true), 400)
    return () => clearTimeout(timeout)
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard unavailable — the address is on screen anyway */
    }
  }

  return (
    <section
      id="top"
      className="relative z-[1] flex h-screen flex-col justify-end overflow-hidden px-5 pb-12 sm:px-8 md:justify-center md:px-10 md:pb-0"
    >
      <div className="relative z-10 max-w-xl">
        <p
          className="pointer-events-none mb-5 select-none sm:mb-6"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.3,
            fontWeight: 400,
            color: '#000',
            filter: 'blur(4px)',
          }}
        >
          {hero.introLine1}
          <br />
          {hero.introLine2}
        </p>

        <p
          className="mb-5 min-h-[54px] text-ink sm:mb-6"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.35,
            fontWeight: 400,
          }}
        >
          {displayed}
          {!done && (
            <span className="animate-blink ml-[2px] inline-block h-[1.1em] w-[2px] bg-ink align-middle" />
          )}
        </p>

        <div
          className="flex flex-wrap gap-y-1"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {hero.pills.map((pill) => (
            <a
              key={pill.label}
              href={pill.href}
              className={`${pillBase} border border-black/10 bg-white text-ink hover:bg-ink hover:text-paper`}
            >
              {pill.label}
            </a>
          ))}
          <button
            type="button"
            onClick={copyEmail}
            className={`${pillBase} gap-2 border border-white bg-transparent text-white hover:bg-white hover:text-ink sm:gap-3`}
          >
            <span>
              {copied ? 'Copied — ' : 'Reach me: '}
              <span className="underline underline-offset-1">{site.email}</span>
            </span>
            <CopyIcon />
          </button>
        </div>
      </div>
    </section>
  )
}
