import React from 'react'
import Header from './../components/Header'
import About from './../components/About'
import Experiences from './../components/Experiences'
import Education from './../components/Education'
import Skills from './../components/Skills'
import Certifications from './../components/Certifications'

const Index = () => {
  return (
    <main>
      <Header />
      <About />
      <Experiences />
      <Education />
      <Skills />
      <Certifications />
      <style jsx global>{`
        body {
          font-family: 'Questrial', sans-serif;
        }
      `}</style>
    </main>
  )
}


export default Index
