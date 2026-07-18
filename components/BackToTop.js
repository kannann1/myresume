import React, { useEffect, useState } from 'react'

export default function BackToTop () {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a href='#top' className={`top-btn ${show ? 'show' : ''}`} aria-label='Back to top'>
      <i className='fas fa-arrow-up' />
      <style jsx>{`
        .top-btn {
          position: fixed;
          right: 26px;
          bottom: 26px;
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: var(--glass-strong);
          border: 1px solid var(--border);
          backdrop-filter: blur(12px);
          color: var(--text-muted);
          opacity: 0;
          transform: translateY(16px);
          pointer-events: none;
          transition: all 0.35s ease;
          z-index: 60;
        }
        .top-btn.show {
          opacity: 1;
          transform: none;
          pointer-events: auto;
        }
        .top-btn:hover {
          color: var(--cyan);
          border-color: var(--cyan);
        }
      `}</style>
    </a>
  )
}
