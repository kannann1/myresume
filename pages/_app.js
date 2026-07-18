import React from 'react'
import Head from 'next/head'
import '../styles/globals.css'
import { site } from '../data/profile'

export default function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{site.title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={site.description} />
        <meta name='keywords' content={site.keywords} />
        <meta name='author' content='Kannan Narayanasamy' />
        <meta name='theme-color' content={site.themeColor} />
        <link rel='canonical' href={site.url} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
