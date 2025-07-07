import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const title = "Kannan N | DevOps & Cloud Engineer Portfolio"
  const description = "Experienced DevOps & Cloud Engineer specializing in Kubernetes, AWS, Azure, and containerization with expertise in CI/CD pipelines and infrastructure automation."
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="keywords" content="DevOps Engineer, Cloud Engineer, Kubernetes, Docker, AWS, Azure, CI/CD, Infrastructure as Code, Terraform, Ansible" />
        <meta name="author" content="Kannan N" />
        <meta name="theme-color" content="#2c3e50" />
        <link rel="canonical" href="https://techkannan.dev" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
