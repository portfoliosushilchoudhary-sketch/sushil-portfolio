import { useEffect, useRef } from 'react'
import { work } from '../data/site'

/**
 * Reproduces the cursor-following preview card from the original site:
 * a lerped chase on fine pointers, an instant snap when the visitor has
 * asked for reduced motion, and nothing at all on touch.
 */
function useCursorPreview() {
  const previewRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const preview = previewRef.current
    if (!preview) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let x = 0
    let y = 0
    let cx = 0
    let cy = 0
    let raf: number | null = null

    const place = (px: number, py: number) => {
      preview.style.transform = `translate(${px + 24}px, ${py - 68}px)`
    }

    const loop = () => {
      cx += (x - cx) * 0.16
      cy += (y - cy) * 0.16
      place(cx, cy)
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      if (still) {
        place(x, y)
      } else if (!raf) {
        cx = x
        cy = y
        loop()
      }
    }

    document.addEventListener('mousemove', onMove)
    return () => {
      document.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return previewRef
}

export default function Work() {
  const previewRef = useCursorPreview()

  const show = (label: string) => {
    const preview = previewRef.current
    if (!preview) return
    preview.textContent = label
    preview.classList.add('on')
  }

  const hide = () => previewRef.current?.classList.remove('on')

  return (
    <section
      id="work"
      className="noise relative z-[2] bg-field px-5 py-24 sm:px-8 md:px-10 md:py-32"
    >
      <div className="relative z-[1]">
        <p className="section-label">Selected disciplines — sound on</p>

        <div className="work-list">
          {work.map((item) => (
            <a
              key={item.num}
              className="row"
              href="#contact"
              onMouseEnter={() => show(item.title)}
              onMouseLeave={hide}
              onFocus={() => show(item.title)}
              onBlur={hide}
            >
              <span className="row-num">{item.num}</span>
              <span className="row-title">{item.title}</span>
              <span className="row-disc">{item.disc}</span>
            </a>
          ))}
        </div>
      </div>

      <div ref={previewRef} className="preview" aria-hidden="true" />
    </section>
  )
}
