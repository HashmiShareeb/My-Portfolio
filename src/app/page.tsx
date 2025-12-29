'use client'
import Contact from './components/Contact'
import Intro from './components/Intro'
import FeaturedProjects from './components/FeaturedProjects'
import Skills from './components/Skills'
import About from './components/About'
export default function Home() {
  return (
    <main className="flex flex-col lg:px-52 px-4 list-none ">
      {/* hero (intro) */}
      <Intro />
      {/* about me
      <About /> */}
      {/* projects */}
      <FeaturedProjects />
      {/* skills */}
      <Skills />
      {/* contact */}
      <Contact />
    </main>
  )
}
