import React, { useEffect, useRef, useState } from 'react'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { skillGroups, softSkillGroups, proficiencyLevels } from '../data/profile'

const TABS = [
  { id: 'technical', label: 'Technical', icon: 'fas fa-laptop-code' },
  { id: 'soft', label: 'Soft Skills', icon: 'fas fa-users' },
  { id: 'levels', label: 'Proficiency', icon: 'fas fa-chart-line' }
]

export default function Skills () {
  const [tab, setTab] = useState('technical')
  const [animate, setAnimate] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id='skills' className='section' ref={sectionRef}>
      <div className='container'>
        <SectionHeader
          index='04'
          kicker='skills'
          title='Tools of the'
          accent='trade'
          sub='From cluster to codebase — the stack I reach for and how deep it goes.'
        />

        <Reveal>
          <div className='tabs' role='tablist' aria-label='Skill categories'>
            {TABS.map((t) => (
              <button
                key={t.id}
                role='tab'
                aria-selected={tab === t.id}
                className={`tab ${tab === t.id ? 'active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                <i className={t.icon} /> {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        {tab === 'technical' && (
          <div className='groups'>
            {skillGroups.map((group) => (
              <Reveal key={group.name}>
                <div className='glass-card group'>
                  <div className='group-head'>
                    <i className={group.icon} />
                    <div>
                      <h3>{group.name}</h3>
                      <p>{group.description}</p>
                    </div>
                  </div>
                  <div className='skill-grid'>
                    {group.skills.map((s, i) => (
                      <div key={s.label} className='skill'>
                        <div className='skill-top'>
                          <i className={s.icon} style={{ color: s.color }} />
                          <span className='skill-name'>{s.label}</span>
                          <span className='skill-level'>{s.level}</span>
                        </div>
                        <div className='bar'>
                          <div
                            className='fill'
                            style={{
                              width: animate ? `${s.value}%` : '0%',
                              transitionDelay: `${(i % 6) * 0.07}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {tab === 'soft' && (
          <div className='groups'>
            {softSkillGroups.map((group) => (
              <Reveal key={group.name}>
                <div className='glass-card group'>
                  <div className='group-head'>
                    <i className={group.icon} />
                    <div>
                      <h3>{group.name}</h3>
                    </div>
                  </div>
                  <div className='soft-grid'>
                    {group.skills.map((s) => (
                      <div key={s.name} className='soft'>
                        <i className={s.icon} />
                        <div>
                          <h4>{s.name}</h4>
                          <p>{s.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {tab === 'levels' && (
          <Reveal>
            <div className='glass-card group levels'>
              {proficiencyLevels.map((l) => (
                <div key={l.level} className='level'>
                  <span className='level-badge' style={{ color: l.color, borderColor: l.color }}>{l.level}</span>
                  <p>{l.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>

      <style jsx>{`
        .tabs {
          display: inline-flex;
          gap: 6px;
          padding: 6px;
          border-radius: 14px;
          background: var(--glass);
          border: 1px solid var(--border);
          margin-bottom: 34px;
        }
        .tab {
          border: 0;
          background: transparent;
          color: var(--text-muted);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.9rem;
          padding: 10px 18px;
          border-radius: 10px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          transition: all 0.25s ease;
        }
        .tab:hover { color: var(--text); }
        .tab.active {
          background: var(--gradient);
          color: #04101c;
        }
        .groups {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .group { padding: 28px 30px; }
        .group-head {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        .group-head > i {
          width: 46px;
          height: 46px;
          flex: 0 0 46px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--indigo);
          background: rgba(129, 140, 248, 0.1);
          border: 1px solid rgba(129, 140, 248, 0.28);
          font-size: 1.1rem;
        }
        .group-head h3 { font-size: 1.15rem; }
        .group-head p {
          color: var(--text-faint);
          font-size: 0.85rem;
        }
        .skill-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px 28px;
        }
        .skill-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }
        .skill-top i { width: 20px; text-align: center; }
        .skill-name {
          font-size: 0.9rem;
          font-weight: 600;
        }
        .skill-level {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-faint);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .bar {
          height: 6px;
          border-radius: 6px;
          background: rgba(148, 163, 184, 0.12);
          overflow: hidden;
        }
        .fill {
          height: 100%;
          border-radius: 6px;
          background: var(--gradient);
          transition: width 1.1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .soft-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }
        .soft {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .soft > i {
          color: var(--teal);
          margin-top: 4px;
          width: 22px;
          text-align: center;
        }
        .soft h4 {
          font-size: 0.98rem;
          margin-bottom: 4px;
        }
        .soft p {
          color: var(--text-muted);
          font-size: 0.87rem;
        }
        .levels {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .level {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .level-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border: 1px solid;
          border-radius: 999px;
          padding: 5px 14px;
          flex: 0 0 130px;
          text-align: center;
        }
        .level p {
          color: var(--text-muted);
          font-size: 0.92rem;
        }
        @media (max-width: 900px) {
          .skill-grid { grid-template-columns: repeat(2, 1fr); }
          .soft-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .skill-grid { grid-template-columns: 1fr; }
          .tabs { width: 100%; }
          .tab { flex: 1; justify-content: center; padding: 10px 8px; font-size: 0.8rem; }
          .level { flex-direction: column; align-items: flex-start; gap: 8px; }
          .group { padding: 20px; }
        }
      `}</style>
    </section>
  )
}
