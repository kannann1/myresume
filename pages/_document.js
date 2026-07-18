import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { site, person } from '../data/profile'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: person.name,
  jobTitle: person.role,
  email: `mailto:${person.email}`,
  url: site.url,
  image: `${site.url}${person.photo}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressCountry: 'IN'
  },
  sameAs: person.social.map((s) => s.url),
  knowsAbout: ['Kubernetes', 'DevOps', 'Cloud Architecture', 'GitOps', 'Terraform', 'CI/CD', 'Java', 'Platform Engineering']
}

export default class MyDocument extends Document {
  render () {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />

          {/* Open Graph */}
          <meta property='og:title' content={site.title} />
          <meta property='og:description' content={site.description} />
          <meta property='og:type' content='website' />
          <meta property='og:url' content={site.url} />
          <meta property='og:image' content={`${site.url}${person.photo}`} />
          <meta property='og:site_name' content={site.title} />
          <meta property='og:locale' content='en_US' />

          {/* Twitter */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content={site.title} />
          <meta name='twitter:description' content={site.description} />
          <meta name='twitter:image' content={`${site.url}${person.photo}`} />

          {/* Structured data */}
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          {/* Fonts & icons */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;600&display=swap'
            rel='stylesheet'
          />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
            crossOrigin='anonymous'
            referrerPolicy='no-referrer'
          />

          {/* Favicon */}
          <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
