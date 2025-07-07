import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta property="og:title" content="Kannan's Profile" />
          <meta property="og:description" content="Professional resume and portfolio for Kannan" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://techkannan.dev" />
          <meta name="ai-access-allowed" content="true" />
          <link href="https://fonts.googleapis.com/css?family=Questrial" rel="stylesheet" />
          <link rel='stylesheet' href='/static/css/bulma.css' />
          <link rel='stylesheet' href='/static/css/navbar.css' />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
