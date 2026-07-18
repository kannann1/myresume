# kannan.dev — Portfolio

Personal portfolio of **Kannan Narayanasamy** — Lead DevOps Engineer & CNCF Kubestronaut.

**Live:** https://kannann1.netlify.app

## Stack

- [Next.js](https://nextjs.org/) (pages router, static export via `output: 'export'`)
- styled-jsx + a single global design-system stylesheet (`styles/globals.css`)
- No CSS framework, no runtime dependencies beyond React — the particle background is ~2 KB of vanilla canvas
- Deployed on Netlify (`publish = "out"`), contact form via Netlify Forms

## Editing content

All site content (roles, experience, projects, skills, certifications) lives in
[`data/profile.js`](data/profile.js). Edit that file to update the site — no
component changes needed.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
```

## Author

**Kannan Narayanasamy** — [GitHub](https://github.com/kannann1) · [LinkedIn](https://www.linkedin.com/in/kannan91/)
