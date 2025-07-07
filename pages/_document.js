import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    const title = "Kannan N | DevOps & Cloud Engineer Portfolio"
    const description = "Experienced DevOps & Cloud Engineer specializing in Kubernetes, AWS, Azure, and containerization with expertise in CI/CD pipelines and infrastructure automation."
    
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://techkannan.dev" />
          <meta property="og:image" content="https://techkannan.dev/static/img/profile.jpg" />
          <meta property="og:site_name" content="Kannan N | DevOps Portfolio" />
          <meta property="og:locale" content="en_US" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content="https://techkannan.dev/static/img/profile.jpg" />
          
          {/* Other metadata */}
          <meta name="ai-access-allowed" content="true" />
          <meta name="application-name" content="Kannan N Portfolio" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Kannan N Portfolio" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          
          {/* Fonts and stylesheets */}
          <link href="https://fonts.googleapis.com/css?family=Questrial:400,500,600,700&display=swap" rel="stylesheet" />
          <link rel='stylesheet' href='/static/css/bulma.css' />
          <link rel='stylesheet' href='/static/css/navbar.css' />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
          
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
