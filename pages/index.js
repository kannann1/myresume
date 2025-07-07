import React from 'react'
import Header from './../components/Header'
import Navbar from './../components/Navbar'
import About from './../components/About'
import Experiences from './../components/Experiences'
import Projects from './../components/Projects'
import Education from './../components/Education'
import Skills from './../components/Skills'
import Certifications from './../components/Certifications'
import Contact from './../components/Contact'

const Index = () => {
  return (
    <main>
      <Header />
      <Navbar />
      <style jsx global>{`
        body {
          padding-top: 52px; /* Height of the navbar */
        }
        /* Reset padding for the header section */
        #header {
          margin-top: -52px;
        }
      `}</style>
      <About />
      <Experiences />
      <Projects />
      <Education />
      <Skills />
      <Certifications />
      <Contact />
      <style jsx global>{`
        body {
          font-family: 'Questrial', sans-serif;
        }
      `}</style>
    </main>
  )
}


export default Index
