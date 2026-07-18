import React from 'react'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { projects } from '../data/profile'

export default function Projects () {
  return (
    <section id='projects' className='section section-alt'>
      <div className='container'>
        <SectionHeader
          index='03'
          kicker='projects'
          title='Open source &'
          accent='platform tooling'
          sub='Things I design, build and document in the open.'
        />

        <div className='grid'>
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <article className='glass-card card'>
                <div className='top'>
                  <div className='folder'>
                    <i className='far fa-folder-open' />
                  </div>
                  <a className='gh' href={p.url} target='_blank' rel='noopener noreferrer' aria-label={`${p.name} on GitHub`}>
                    <i className='fab fa-github' />
                  </a>
                </div>
                <h3 className='mono'>{p.name}</h3>
                <p className='role'>{p.role}</p>
                <p className='desc'>{p.description}</p>
                <ul>
                  {p.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
                <div className='stack'>
                  {p.stack.map((t) => (
                    <span key={t} className='chip'>{t}</span>
                  ))}
                </div>
                <a href={p.url} target='_blank' rel='noopener noreferrer' className='btn btn-ghost view'>
                  <i className='fab fa-github' /> View on GitHub
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
          align-items: stretch;
        }
        .card {
          padding: 30px;
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient);
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .card:hover::before { opacity: 1; }
        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .folder {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: var(--cyan);
          background: rgba(34, 211, 238, 0.1);
          border: 1px solid rgba(34, 211, 238, 0.25);
        }
        .gh {
          color: var(--text-muted);
          font-size: 1.4rem;
        }
        .gh:hover { color: var(--cyan); }
        h3 {
          font-size: 1.2rem;
          margin-bottom: 6px;
          word-break: break-word;
        }
        .role {
          color: var(--indigo);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 14px;
        }
        .desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 16px;
        }
        ul {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }
        li {
          position: relative;
          padding-left: 20px;
          color: var(--text-muted);
          font-size: 0.88rem;
        }
        li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--teal);
        }
        .stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
          margin-top: auto;
        }
        .view { align-self: flex-start; }
        @media (max-width: 900px) {
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
