import React from 'react'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { about, person } from '../data/profile'

export default function About () {
  return (
    <section id='about' className='section section-alt'>
      <div className='container'>
        <SectionHeader index='01' kicker='about' title='Building platforms' accent='engineers love' sub={about.intro} />

        <div className='grid'>
          {about.highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <div className='glass-card card'>
                <div className='icon'>
                  <i className={h.icon} />
                </div>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className='glass-card outro'>
            <p className='quote'>“{about.conclusion}”</p>
            <div className='meta'>
              <div className='meta-item'>
                <i className='fas fa-location-dot' /> {person.location}
              </div>
              <a className='meta-item' href={`mailto:${person.email}`}>
                <i className='fas fa-envelope' /> {person.email}
              </a>
              <div className='interests'>
                {about.interests.map((it) => (
                  <img key={it.name} src={it.image} alt={it.name} title={it.name} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 24px;
        }
        .card {
          padding: 28px;
          height: 100%;
        }
        .icon {
          width: 48px;
          height: 48px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(34, 211, 238, 0.1);
          border: 1px solid rgba(34, 211, 238, 0.25);
          color: var(--cyan);
          font-size: 1.15rem;
          margin-bottom: 18px;
        }
        .card h3 {
          font-size: 1.12rem;
          margin-bottom: 10px;
        }
        .card p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .outro {
          padding: 30px 34px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .quote {
          font-family: var(--font-display);
          font-size: 1.15rem;
          color: var(--text);
          line-height: 1.5;
        }
        .meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px 26px;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--text-muted);
        }
        .meta-item:hover { color: var(--cyan); }
        .meta-item i { color: var(--cyan); }
        .interests {
          display: flex;
          gap: 14px;
          margin-left: auto;
        }
        .interests img {
          height: 34px;
          filter: grayscale(0.4) brightness(1.4);
          transition: transform 0.25s ease, filter 0.25s ease;
        }
        .interests img:hover {
          transform: scale(1.25);
          filter: none;
        }
        @media (max-width: 768px) {
          .grid { grid-template-columns: 1fr; }
          .interests { margin-left: 0; }
        }
      `}</style>
    </section>
  )
}
