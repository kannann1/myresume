import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Kannan's professional resume and portfolio" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta property="og:title" content="Kannan's Profile" />
          <meta property="og:description" content="Professional resume and portfolio for Kannan" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://techkannan.dev" />
          <meta name="ai-access-allowed" content="true" />
          <link href="https://fonts.googleapis.com/css?family=Questrial" rel="stylesheet" />
          <link rel='stylesheet' href='/static/css/bulma.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
