import React from 'react'
import { person } from '../data/profile'

export default function Footer () {
  return (
    <footer className='footer'>
      <div className='container inner'>
        <p className='mono'>
          <span className='grad-text'>~/</span>{person.shortName.toLowerCase()} · © {new Date().getFullYear()} {person.name}
        </p>
        <div className='links'>
          {person.social.map((s) => (
            <a key={s.name} href={s.url} target='_blank' rel='noopener noreferrer' aria-label={s.name}>
              <i className={s.icon} />
            </a>
          ))}
        </div>
        <p className='built mono'>
          Built with Next.js · Deployed on Netlify ·{' '}
          <a href='https://github.com/kannann1/myresume' target='_blank' rel='noopener noreferrer'>Source</a>
        </p>
      </div>

      <style jsx>{`
        .footer {
          border-top: 1px solid var(--border);
          padding: 34px 0;
          background: rgba(6, 11, 24, 0.6);
        }
        .inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
        }
        p {
          color: var(--text-faint);
          font-size: 0.78rem;
        }
        .links {
          display: flex;
          gap: 18px;
        }
        .links a {
          color: var(--text-faint);
          font-size: 1rem;
        }
        .links a:hover { color: var(--cyan); }
        .built a { color: var(--text-muted); }
        .built a:hover { color: var(--cyan); }
        @media (max-width: 640px) {
          .inner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}
