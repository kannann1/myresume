import React from 'react'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { experience } from '../data/profile'

// Bold numbers like "45%", "5TB+", "99.95%", "20+", "500+" inside a bullet.
function Metric ({ text }) {
  const parts = text.split(/(\d+(?:\.\d+)?(?:%|TB\+|\+)?(?:\s?minutes|\s?hours)?)/g)
  return (
    <>
      {parts.map((p, i) =>
        /^\d/.test(p) ? <strong key={i} className='metric'>{p}</strong> : p
      )}
      <style jsx>{`
        .metric {
          color: var(--cyan);
          font-weight: 600;
        }
      `}</style>
    </>
  )
}

export default function Experience () {
  return (
    <section id='experience' className='section'>
      <div className='container'>
        <SectionHeader
          index='02'
          kicker='experience'
          title='Where I have'
          accent='shipped'
          sub='From IBM to Palo Alto Networks — seven roles, one constant: making delivery faster and platforms more reliable.'
        />

        <div className='timeline'>
          {experience.map((job, i) => (
            <Reveal key={job.company + job.period} delay={Math.min(i * 0.05, 0.2)}>
              <article className='item'>
                <div className='node' style={{ '--dot': job.color }} aria-hidden='true' />
                <div className='glass-card card'>
                  <div className='head'>
                    <div>
                      <h3>
                        <a href={job.url} target='_blank' rel='noopener noreferrer'>
                          {job.company} <i className='fas fa-arrow-up-right-from-square' />
                        </a>
                      </h3>
                      <p className='role' style={{ color: job.color }}>{job.role}</p>
                    </div>
                    <span className='chip period'>{job.period}</span>
                  </div>
                  <div className='stack'>
                    {job.stack.map((t) => (
                      <span key={t} className='chip'>{t}</span>
                    ))}
                  </div>
                  <ul>
                    {job.bullets.map((b, bi) => (
                      <li key={bi}><Metric text={b} /></li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline {
          position: relative;
          padding-left: 34px;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 8px;
          top: 6px;
          bottom: 6px;
          width: 2px;
          background: linear-gradient(180deg, var(--cyan), var(--indigo), rgba(129, 140, 248, 0.05));
        }
        .item {
          position: relative;
          margin-bottom: 28px;
        }
        .node {
          position: absolute;
          left: -34px;
          top: 30px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--bg);
          border: 3px solid var(--dot, var(--cyan));
          box-shadow: 0 0 18px -2px var(--dot, var(--cyan));
          z-index: 2;
        }
        .card {
          padding: 26px 30px;
        }
        .head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }
        h3 {
          font-size: 1.25rem;
          margin-bottom: 4px;
        }
        h3 a { color: var(--text); }
        h3 a:hover { color: var(--cyan); }
        h3 i {
          font-size: 0.7rem;
          color: var(--text-faint);
          margin-left: 6px;
          vertical-align: 2px;
        }
        .role {
          font-size: 0.92rem;
          font-weight: 600;
        }
        .period {
          color: var(--cyan);
          border-color: rgba(34, 211, 238, 0.35);
          background: rgba(34, 211, 238, 0.07);
        }
        .stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 18px;
        }
        ul {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }
        li {
          position: relative;
          padding-left: 22px;
          color: var(--text-muted);
          font-size: 0.94rem;
        }
        li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--cyan);
        }
        @media (max-width: 640px) {
          .timeline { padding-left: 24px; }
          .timeline::before { left: 5px; }
          .node { left: -24px; width: 14px; height: 14px; top: 28px; }
          .card { padding: 20px; }
        }
      `}</style>
    </section>
  )
}
