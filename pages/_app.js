import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kannan's Profile</title>
        <meta name="description" content="Kannan's professional resume and portfolio" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
