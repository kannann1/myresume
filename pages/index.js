import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ParticleField from '../components/ParticleField'
import BackToTop from '../components/BackToTop'

export default function Index () {
  return (
    <>
      <div className='backdrop' aria-hidden='true'>
        <div className='aurora aurora-1' />
        <div className='aurora aurora-2' />
        <div className='aurora aurora-3' />
      </div>
      <ParticleField />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
