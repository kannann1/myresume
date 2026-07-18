import React, { useEffect, useState } from 'react'
import { person } from '../data/profile'

// Typewriter that cycles through roles.
function useTypewriter (words, typeMs = 65, holdMs = 1800) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0])
      return
    }
    let word = 0
    let char = 0
    let deleting = false
    let timer

    const tick = () => {
      const current = words[word]
      if (!deleting) {
        char++
        setText(current.slice(0, char))
        if (char === current.length) {
          deleting = true
          timer = setTimeout(tick, holdMs)
          return
        }
        timer = setTimeout(tick, typeMs)
      } else {
        char--
        setText(current.slice(0, char))
        if (char === 0) {
          deleting = false
          word = (word + 1) % words.length
        }
        timer = setTimeout(tick, deleting ? 28 : 350)
      }
    }
    timer = setTimeout(tick, 400)
    return () => clearTimeout(timer)
  }, [words, typeMs, holdMs])

  return text
}

export default function Hero () {
  const typed = useTypewriter(person.typedRoles)

  return (
    <header id='top' className='hero'>
      <div className='container hero-grid'>
        <div className='intro'>
          <p className='mono kicker'>
            <span className='prompt'>$</span> whoami
          </p>
          <h1 className='name'>
            Kannan <span className='grad-text'>Narayanasamy</span>
          </h1>
          <p className='typed mono' aria-label={person.role}>
            <span className='typed-text'>{typed}</span>
            <span className='caret' aria-hidden='true' />
          </p>
          <p className='summary'>{person.summary}</p>

          <div className='cta'>
            <a href={person.resume} download className='btn btn-primary'>
              <i className='fas fa-file-arrow-down' /> Download Resume
            </a>
            <a href='#contact' className='btn btn-ghost'>
              <i className='fas fa-paper-plane' /> Get in Touch
            </a>
          </div>

          <div className='socials'>
            {person.social.map((s) => (
              <a key={s.name} href={s.url} target='_blank' rel='noopener noreferrer' aria-label={s.name} title={s.name}>
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className='portrait-wrap'>
          <div className='ring' aria-hidden='true' />
          <div className='ring ring-2' aria-hidden='true' />
          <img className='portrait' src={person.photo} alt={person.name} width='320' height='320' />
          <div className='badge glass-card mono'>
            <i className='fas fa-dharmachakra spin' /> Kubestronaut
          </div>
        </div>
      </div>

      <div className='stats container'>
        {person.stats.map((s) => (
          <div key={s.label} className='stat glass-card'>
            <span className='value grad-text'>{s.value}</span>
            <span className='label'>{s.label}</span>
          </div>
        ))}
      </div>

      <a href='#about' className='scroll-hint' aria-label='Scroll to About'>
        <span className='wheel' />
      </a>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: calc(var(--nav-h) + 40px) 0 90px;
          position: relative;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          align-items: center;
          gap: 48px;
          width: 100%;
        }
        .kicker {
          display: flex;
          gap: 9px;
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 18px;
        }
        .prompt { color: var(--teal); }
        .name {
          font-size: clamp(2.6rem, 6.5vw, 4.6rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          margin-bottom: 14px;
        }
        .typed {
          font-size: clamp(1.05rem, 2.2vw, 1.4rem);
          color: var(--cyan);
          min-height: 1.6em;
          margin-bottom: 20px;
        }
        .caret {
          display: inline-block;
          width: 10px;
          height: 1.15em;
          margin-left: 4px;
          background: var(--cyan);
          vertical-align: text-bottom;
          animation: blink 1.1s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
        .summary {
          color: var(--text-muted);
          font-size: 1.08rem;
          max-width: 540px;
          margin-bottom: 34px;
        }
        .cta {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 30px;
        }
        .socials {
          display: flex;
          gap: 10px;
        }
        .socials a {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: var(--glass);
          color: var(--text-muted);
          font-size: 1.05rem;
          transition: all 0.25s ease;
        }
        .socials a:hover {
          color: var(--cyan);
          border-color: var(--cyan);
          transform: translateY(-3px);
        }

        .portrait-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .portrait {
          width: min(320px, 70vw);
          height: auto;
          border-radius: 50%;
          border: 3px solid transparent;
          background:
            linear-gradient(var(--bg), var(--bg)) padding-box,
            var(--gradient) border-box;
          box-shadow: 0 0 80px -18px rgba(34, 211, 238, 0.45);
          position: relative;
          z-index: 2;
        }
        .ring {
          position: absolute;
          width: min(400px, 84vw);
          height: min(400px, 84vw);
          border-radius: 50%;
          border: 1px dashed rgba(148, 163, 184, 0.28);
          animation: rotate 40s linear infinite;
        }
        .ring-2 {
          width: min(470px, 94vw);
          height: min(470px, 94vw);
          border-style: dotted;
          border-color: rgba(148, 163, 184, 0.16);
          animation-direction: reverse;
          animation-duration: 60s;
        }
        @keyframes rotate {
          to { transform: rotate(360deg); }
        }
        .badge {
          position: absolute;
          bottom: 8px;
          right: 4%;
          z-index: 3;
          padding: 10px 16px;
          font-size: 0.78rem;
          color: var(--text);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
        }
        .badge i {
          color: #326ce5;
        }
        .spin { animation: rotate 14s linear infinite; }

        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 64px;
          width: 100%;
        }
        .stat {
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .stat .value {
          font-family: var(--font-display);
          font-size: 1.9rem;
          font-weight: 700;
        }
        .stat .label {
          color: var(--text-muted);
          font-size: 0.84rem;
        }

        .scroll-hint {
          position: absolute;
          bottom: 22px;
          left: 50%;
          transform: translateX(-50%);
          width: 26px;
          height: 42px;
          border: 2px solid rgba(148, 163, 184, 0.4);
          border-radius: 14px;
          display: flex;
          justify-content: center;
          padding-top: 7px;
        }
        .wheel {
          width: 3px;
          height: 8px;
          border-radius: 3px;
          background: var(--cyan);
          animation: wheel 1.8s ease-in-out infinite;
        }
        @keyframes wheel {
          0% { opacity: 1; transform: translateY(0); }
          70% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 0; }
        }

        @media (max-width: 1023px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .portrait-wrap { order: -1; }
          .kicker, .cta, .socials { justify-content: center; }
          .kicker { display: flex; }
          .summary { margin-left: auto; margin-right: auto; }
          .stats { grid-template-columns: repeat(2, 1fr); }
          .badge { right: 50%; transform: translateX(50%); bottom: -10px; }
        }
        @media (max-width: 480px) {
          .stats { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .stat { padding: 16px; }
          .stat .value { font-size: 1.5rem; }
          .scroll-hint { display: none; }
        }
      `}</style>
    </header>
  )
}
