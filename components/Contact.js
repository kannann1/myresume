import React, { useState } from 'react'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { person } from '../data/profile'

export default function Contact () {
  const [status, setStatus] = useState({ state: 'idle', msg: null })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'submitting', msg: null })
    try {
      const formData = new FormData(e.target)
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`)
      setStatus({ state: 'success', msg: 'Thank you for your message! I will get back to you soon.' })
    } catch (err) {
      console.error(err)
      setStatus({ state: 'error', msg: 'There was a problem sending your message. Please try again or email me directly.' })
    }
  }

  return (
    <section id='contact' className='section section-alt'>
      <div className='container'>
        <SectionHeader
          index='07'
          kicker='contact'
          title="Let's build something"
          accent='together'
          sub="I'm always open to discussing new projects, opportunities or collaborations."
        />

        <div className='grid'>
          <Reveal>
            <div className='info'>
              <div className='glass-card card'>
                <h3>Direct channels</h3>
                <a className='line' href={`mailto:${person.email}`}>
                  <i className='fas fa-envelope' /> {person.email}
                </a>
                <a className='line' href={`tel:${person.phone.replace(/[^+\d]/g, '')}`}>
                  <i className='fas fa-phone' /> {person.phone}
                </a>
                <p className='line'>
                  <i className='fas fa-location-dot' /> {person.location}
                </p>
                <div className='socials'>
                  {person.social.map((s) => (
                    <a key={s.name} href={s.url} target='_blank' rel='noopener noreferrer' aria-label={s.name} title={s.name}>
                      <i className={s.icon} />
                    </a>
                  ))}
                </div>
              </div>
              <div className='glass-card card terminal mono' aria-hidden='true'>
                <div className='term-head'>
                  <span /><span /><span />
                  <em>kannan@cloud:~</em>
                </div>
                <p><span className='p'>$</span> kubectl get engineer kannan -o wide</p>
                <p className='out'>NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STATUS&nbsp;&nbsp;&nbsp;&nbsp;ROLE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AGE</p>
                <p className='out'>kannan&nbsp;&nbsp;&nbsp;<span className='ok'>Available</span>&nbsp;&nbsp;Lead&nbsp;DevOps&nbsp;&nbsp;&nbsp;&nbsp;12y+</p>
                <p><span className='p'>$</span> <span className='caret'>_</span></p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {status.state === 'success' ? (
              <div className='glass-card success'>
                <i className='fas fa-circle-check' />
                <p>{status.msg}</p>
              </div>
            ) : (
              <form
                name='contact'
                method='POST'
                data-netlify='true'
                netlify-honeypot='bot-field'
                onSubmit={handleSubmit}
                className='glass-card form'
              >
                <input type='hidden' name='form-name' value='contact' />
                <p className='hp'>
                  <label>Don't fill this out if you're human: <input name='bot-field' /></label>
                </p>
                <div className='row'>
                  <div className='field'>
                    <label htmlFor='cf-name'>Name</label>
                    <input id='cf-name' name='name' type='text' placeholder='Your name' required />
                  </div>
                  <div className='field'>
                    <label htmlFor='cf-email'>Email</label>
                    <input id='cf-email' name='email' type='email' placeholder='you@example.com' required />
                  </div>
                </div>
                <div className='field'>
                  <label htmlFor='cf-subject'>Subject</label>
                  <input id='cf-subject' name='subject' type='text' placeholder='What is this about?' required />
                </div>
                <div className='field'>
                  <label htmlFor='cf-message'>Message</label>
                  <textarea id='cf-message' name='message' rows='5' placeholder='Tell me about your project…' required />
                </div>
                {status.state === 'error' && <p className='error'><i className='fas fa-triangle-exclamation' /> {status.msg}</p>}
                <button type='submit' className='btn btn-primary' disabled={status.state === 'submitting'}>
                  {status.state === 'submitting'
                    ? <><i className='fas fa-spinner fa-spin' /> Sending…</>
                    : <><i className='fas fa-paper-plane' /> Send Message</>}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 22px;
          align-items: start;
        }
        .info {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .card { padding: 28px; }
        h3 {
          font-size: 1.15rem;
          margin-bottom: 18px;
        }
        .line {
          display: flex;
          align-items: center;
          gap: 13px;
          color: var(--text-muted);
          font-size: 0.94rem;
          margin-bottom: 13px;
        }
        a.line:hover { color: var(--cyan); }
        .line i {
          color: var(--cyan);
          width: 18px;
          text-align: center;
        }
        .socials {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }
        .socials a {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: var(--glass);
          color: var(--text-muted);
          transition: all 0.25s ease;
        }
        .socials a:hover {
          color: var(--cyan);
          border-color: var(--cyan);
          transform: translateY(-3px);
        }
        .terminal {
          font-size: 0.78rem;
          color: var(--text-muted);
          padding: 20px 24px;
        }
        .term-head {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 14px;
        }
        .term-head span {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: rgba(148, 163, 184, 0.3);
        }
        .term-head span:nth-child(1) { background: #f87171; }
        .term-head span:nth-child(2) { background: #fbbf24; }
        .term-head span:nth-child(3) { background: #34d399; }
        .term-head em {
          margin-left: auto;
          font-style: normal;
          color: var(--text-faint);
          font-size: 0.7rem;
        }
        .terminal p { line-height: 1.8; }
        .p { color: var(--teal); }
        .out { color: var(--text-faint); }
        .ok { color: var(--teal); }
        .caret {
          animation: blink 1.1s step-end infinite;
          color: var(--cyan);
        }
        @keyframes blink { 50% { opacity: 0; } }

        .form { padding: 30px; }
        .hp { display: none; }
        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .field { margin-bottom: 16px; }
        label {
          display: block;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 7px;
          font-family: var(--font-display);
        }
        input, textarea {
          width: 100%;
          background: rgba(6, 11, 24, 0.55);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 13px 16px;
          color: var(--text);
          font-family: var(--font-body);
          font-size: 0.93rem;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          resize: vertical;
        }
        input::placeholder, textarea::placeholder { color: var(--text-faint); }
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--cyan);
          box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.14);
        }
        .error {
          color: #f87171;
          font-size: 0.86rem;
          margin-bottom: 14px;
          display: flex;
          gap: 8px;
          align-items: center;
        }
        button[disabled] { opacity: 0.7; cursor: wait; }
        .success {
          padding: 44px 30px;
          text-align: center;
          color: var(--text);
        }
        .success i {
          font-size: 2.4rem;
          color: var(--teal);
          margin-bottom: 14px;
          display: block;
        }
        @media (max-width: 900px) {
          .grid { grid-template-columns: 1fr; }
          .row { grid-template-columns: 1fr; gap: 0; }
        }
      `}</style>
    </section>
  )
}
