import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link href='https://fonts.googleapis.com/css?family=Questrial' rel='stylesheet' />
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
