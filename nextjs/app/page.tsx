import BackgroundVideo from '@/components/BackgroundVideo'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import Profile from '@/components/Profile'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
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
