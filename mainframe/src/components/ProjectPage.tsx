import { nda, work } from '../data/site'

type Project = (typeof work)[number]

/**
 * One discipline's page: description, the NDA notice, and three clip slots.
 * The slots render as "coming soon" placeholders until a video exists at
 * /projects/<slug>/0N.mp4 — drop the file in and swap the placeholder for
 * the <video> element noted below.
 */
export default function ProjectPage({ project }: { project: Project }) {
  return (
    <main className="noise relative z-[2] min-h-screen bg-field px-5 pt-28 pb-24 sm:px-8 md:px-10">
      <div className="relative z-[1]">
        <a
          href="#work"
          className="mb-6 inline-block text-[13px] tracking-[0.08em] uppercase text-grey transition-colors hover:text-vermilion"
        >
          &#8592; All work
        </a>

        <p className="section-label">
          {project.num} — {project.disc}
        </p>

        <div className="prose">
          <h2>{project.title}</h2>
          <p className="lead">{project.lead}</p>
          <p>{project.body}</p>
        </div>

        <p className="nda">{nda.project}</p>

        <p className="section-label mt-14">Selected clips — sound on</p>
        <div className="clips">
          {[1, 2, 3].map((n) => (
            <figure key={n} className="m-0">
              {/* When the video is ready, replace .clip-empty with:
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
  )
}
