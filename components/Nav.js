import React, { useEffect, useState } from 'react'
import { person } from '../data/profile'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
]

export default function Nav () {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 30)
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(y / max, 1) : 0)

      let current = ''
      for (const { id } of LINKS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} aria-label='Main navigation'>
      <div className='inner'>
        <a href='#top' className='brand mono' onClick={() => setOpen(false)}>
          <span className='grad-text'>~/</span>{person.shortName.toLowerCase()}<span className='cursor'>_</span>
        </a>

        <button
          className={`burger ${open ? 'open' : ''}`}
          aria-label='Toggle menu'
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>

        <div className={`links ${open ? 'open' : ''}`}>
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href={person.resume} download className='resume-btn' onClick={() => setOpen(false)}>
            <i className='fas fa-file-arrow-down' /> Resume
          </a>
        </div>
      </div>
      <div className='progress' style={{ transform: `scaleX(${progress})` }} />

      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease;
          border-bottom: 1px solid transparent;
        }
        .nav.scrolled {
          background: rgba(6, 11, 24, 0.72);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom-color: var(--border);
        }
        .inner {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 24px;
          height: var(--nav-h);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text);
          letter-spacing: 0.02em;
        }
        .brand .cursor {
          color: var(--cyan);
          animation: blink 1.1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .links {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .links a {
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-muted);
          padding: 8px 13px;
          border-radius: 10px;
          transition: color 0.25s ease, background 0.25s ease;
          position: relative;
        }
        .links a:hover { color: var(--text); }
        .links a.active {
          color: var(--cyan);
          background: rgba(34, 211, 238, 0.08);
        }
        .links .resume-btn {
          margin-left: 10px;
          color: #04101c;
          background: var(--gradient);
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .links .resume-btn:hover {
          box-shadow: 0 8px 22px -8px rgba(34, 211, 238, 0.6);
        }
        .burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 42px;
          height: 42px;
          background: transparent;
          border: 0;
          cursor: pointer;
          padding: 9px;
        }
        .burger span {
          display: block;
          height: 2px;
          width: 100%;
          background: var(--text);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .burger.open span:nth-child(2) { opacity: 0; }
        .burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
        .progress {
          height: 2px;
          background: var(--gradient);
          transform-origin: 0 50%;
          transform: scaleX(0);
        }
        @media (max-width: 1023px) {
          .burger { display: flex; }
          .links {
            position: absolute;
            top: calc(var(--nav-h) + 2px);
            left: 0;
            right: 0;
            flex-direction: column;
            align-items: stretch;
            padding: 12px 20px 20px;
            background: rgba(6, 11, 24, 0.96);
            backdrop-filter: blur(18px);
            border-bottom: 1px solid var(--border);
            display: none;
          }
          .links.open { display: flex; }
          .links a { padding: 13px 14px; font-size: 1rem; }
          .links .resume-btn {
            margin: 10px 0 0;
            justify-content: center;
          }
        }
      `}</style>
    </nav>
  )
}
