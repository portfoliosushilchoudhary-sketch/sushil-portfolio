import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { nda, site, work } from '@/lib/site'

type Params = Promise<{ slug: string }>

export function generateStaticParams() {
  return work.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { slug } = await params
  const project = work.find((w) => w.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} — ${site.name}`,
    description: project.lead,
  }
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params
  const project = work.find((w) => w.slug === slug)
  if (!project) notFound()

  return (
    <>
      <Navbar solid />
      <main className="noise relative z-[2] min-h-screen bg-field px-5 pt-28 pb-24 sm:px-8 md:px-10">
        <div className="relative z-[1]">
          <Link
            href="/#work"
            className="mb-6 inline-block text-[13px] tracking-[0.08em] uppercase text-grey transition-colors hover:text-vermilion"
          >
            &#8592; All work
          </Link>

          <p className="section-label">
            {project.num} — {project.disc}
          </p>

          <div className="prose">
            <h2>{project.title}</h2>
            <p className="lead">{project.lead}</p>
            <p>{project.body}</p>
          </div>

          <p className="nda">{nda.project}</p>

          <p className="section-label clips-label">Selected clips — sound on</p>
          <div className="clips">
            {[1, 2, 3].map((n) => (
              <figure key={n} className="m-0">
                {/* When the video is ready, drop it in public/projects/<slug>/0N.mp4
                    and replace .clip-empty with:
                    <video className="clip-video" src={`/projects/${project.slug}/0${n}.mp4`}
                           controls playsInline preload="metadata" /> */}
                <div className="clip-empty">
                  <span className="clip-tag">
                    {project.num} / Clip 0{n}
                  </span>
                  <span className="clip-note">Video coming soon</span>
                </div>
                <figcaption className="clip-cap">
                  {project.title} — excerpt 0{n}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
