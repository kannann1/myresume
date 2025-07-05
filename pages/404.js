import React from 'react'
import Link from 'next/link'

export default function Custom404() {
  return (
    <section className="hero is-light is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">404</h1>
          <h2 className="subtitle is-3">Page Not Found</h2>
          <p className="mt-4">The page you're looking for doesn't exist or has been moved.</p>
          <Link href="/" className="button is-primary mt-5">
            Return to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
