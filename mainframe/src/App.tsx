import { useEffect, useState } from 'react'
import BackgroundVideo from './components/BackgroundVideo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectPage from './components/ProjectPage'
import { work } from './data/site'

/** #p/<slug> opens a discipline page; anything else shows the landing. */
function useProjectRoute() {
  const [slug, setSlug] = useState<string | null>(null)

  useEffect(() => {
    const read = () => {
      const m = window.location.hash.match(/^#p\/([a-z-]+)$/)
      setSlug(m && work.some((w) => w.slug === m[1]) ? m[1] : null)
    }
    read()
    window.addEventListener('hashchange', read)
    return () => window.removeEventListener('hashchange', read)
  }, [])

  return slug
}

export default function App() {
  const slug = useProjectRoute()
  const project = work.find((w) => w.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // Landing anchors (#work, #contact) sit in the DOM that a project view
  // replaces — once the landing is back, finish the interrupted jump.
  useEffect(() => {
    if (project) return
    const hash = window.location.hash
    if (/^#[a-z]+$/.test(hash)) {
      document.querySelector(hash)?.scrollIntoView()
    }
  }, [project])

  if (project) {
    return (
      <>
        <Navbar solid />
        <ProjectPage project={project} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <BackgroundVideo />
      <Navbar />
      <Hero />
      <Work />
      <Profile />
      <Contact />
      <Footer />
    </>
  )
}
