import { site } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="noise relative z-[2] bg-field px-5 pb-12 sm:px-8 md:px-10">
      <div className="relative z-[1] flex flex-col gap-10 border-t border-[var(--rule)] pt-12 md:flex-row md:items-end md:justify-between">
        <h2
          className="m-0 text-[clamp(34px,4.4vw,60px)] leading-[1.02] font-semibold tracking-[-0.02em]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {site.mark.map((line, i) => (
            <span
              key={line}
              className={`block ${i === site.mark.length - 1 ? 'text-grey' : ''}`}
            >
              {line}
            </span>
          ))}
        </h2>

        <div className="flex flex-col gap-1.5 text-[13px] tracking-[0.08em] text-grey uppercase">
          <span className="text-paper">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-vermilion align-[1px]" />
            {site.status}
          </span>
          <span>{site.location}</span>
          <span>{site.tenure}</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
