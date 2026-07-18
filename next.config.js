/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Static export for Netlify — `next build` writes the site to ./out
  output: 'export',
  images: {
    unoptimized: true
  }
}
