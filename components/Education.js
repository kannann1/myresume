import React from 'react'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { education } from '../data/profile'

export default function Education () {
  return (
    <section id='education' className='section'>
      <div className='container'>
        <SectionHeader index='06' kicker='education' title='Where it' accent='started' />

        <div className='grid'>
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.1}>
              <div className='glass-card card'>
                <div className='icon'>
                  <i className={e.icon} />
                </div>
                <div>
                  <span className='chip'>{e.period}</span>
                  <h3>{e.school}</h3>
                  <p className='degree'>{e.degree} — {e.major}</p>
                  {e.detail && <p className='detail mono'>{e.detail}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .card {
          padding: 28px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          height: 100%;
        }
        .icon {
          width: 52px;
          height: 52px;
          flex: 0 0 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          color: var(--teal);
          background: rgba(52, 211, 153, 0.1);
          border: 1px solid rgba(52, 211, 153, 0.28);
        }
        h3 {
          font-size: 1.15rem;
          margin: 12px 0 6px;
        }
        .degree {
          color: var(--text-muted);
          font-size: 0.92rem;
        }
        .detail {
          margin-top: 8px;
          color: var(--cyan);
          font-size: 0.8rem;
        }
        @media (max-width: 768px) {
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
