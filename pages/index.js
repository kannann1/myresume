import React from 'react'
import Header from './../components/Header'
import About from './../components/About'
import Experiences from './../components/Experiences'
import Education from './../components/Education'
import Skills from './../components/Skills'
import Certifications from './../components/Certifications'

const Index = ({ serverData }) => {
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

// This gets called on every request
export async function getServerSideProps() {
  // You can fetch data here that you want to pass to the page
  const serverData = {
    lastRendered: new Date().toISOString()
  }

  // Pass data to the page via props
  return { props: { serverData } }
}

export default Index
