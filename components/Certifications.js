import React, { useMemo, useState } from 'react'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { certifications } from '../data/profile'

export default function Certifications () {
  const [issuer, setIssuer] = useState('All')

  const issuers = useMemo(
    () => ['All', ...new Set(certifications.map((c) => c.issuer))],
    []
  )

  const shown = issuer === 'All'
    ? certifications
    : certifications.filter((c) => c.issuer === issuer)

  return (
    <section id='certifications' className='section section-alt'>
      <div className='container'>
        <SectionHeader
          index='05'
          kicker='certifications'
          title='Proof of'
          accent='work'
          sub='19 certifications across CNCF, Microsoft, Oracle, AWS and more — including the full CNCF Kubestronaut set.'
        />

        <Reveal>
          <div className='filters' role='group' aria-label='Filter by issuer'>
            {issuers.map((name) => (
              <button
                key={name}
                className={`filter ${issuer === name ? 'active' : ''}`}
                onClick={() => setIssuer(name)}
              >
                {name}
                <span className='count'>
                  {name === 'All'
                    ? certifications.length
                    : certifications.filter((c) => c.issuer === name).length}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className='grid'>
          {shown.map((cert, i) => (
            <Reveal key={cert.id} delay={Math.min(i * 0.04, 0.3)}>
              <a
                href={cert.verifyLink}
                target='_blank'
                rel='noopener noreferrer'
                className={`glass-card card ${cert.featured ? 'featured' : ''}`}
              >
                <div className='logo'>
                  {cert.logo
                    ? <img src={cert.logo} alt={`${cert.issuer} logo`} loading='lazy' />
                    : <i className={cert.icon} style={{ color: cert.iconColor }} />}
                </div>
                <div className='body'>
                  <h3>{cert.name}</h3>
                  <p className='meta mono'>{cert.issuer} · {cert.date}</p>
                  <div className='tags'>
                    {cert.tags.map((t) => (
                      <span key={t} className='chip'>{t}</span>
                    ))}
                  </div>
                </div>
                <span className='verify'>
                  <i className='fas fa-arrow-up-right-from-square' />
                </span>
                {cert.featured && <span className='star mono'>★ featured</span>}
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 34px;
        }
        .filter {
          border: 1px solid var(--border);
          background: var(--glass);
          color: var(--text-muted);
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 999px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          transition: all 0.25s ease;
        }
        .filter:hover {
          color: var(--text);
          border-color: var(--border-strong);
        }
        .filter.active {
          background: var(--gradient);
          border-color: transparent;
          color: #04101c;
        }
        .count {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          background: rgba(4, 16, 28, 0.18);
          border-radius: 999px;
          padding: 1px 8px;
        }
        .filter:not(.active) .count {
          background: rgba(148, 163, 184, 0.12);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .card {
          padding: 22px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          position: relative;
          color: var(--text);
        }
        .card.featured {
          border-color: rgba(34, 211, 238, 0.45);
          box-shadow: 0 0 40px -16px rgba(34, 211, 238, 0.5);
        }
        .logo {
          width: 46px;
          height: 46px;
          flex: 0 0 46px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 7px;
        }
        .logo img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .logo i { font-size: 1.4rem; }
        h3 {
          font-size: 0.95rem;
          line-height: 1.35;
          margin-bottom: 6px;
        }
        .meta {
          color: var(--text-faint);
          font-size: 0.72rem;
          margin-bottom: 10px;
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .verify {
          position: absolute;
          top: 16px;
          right: 16px;
          color: var(--text-faint);
          font-size: 0.75rem;
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .card:hover .verify {
          opacity: 1;
          color: var(--cyan);
        }
        .star {
          position: absolute;
          bottom: 12px;
          right: 16px;
          font-size: 0.68rem;
          color: var(--cyan);
          letter-spacing: 0.08em;
        }
        @media (max-width: 1000px) {
          .grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
