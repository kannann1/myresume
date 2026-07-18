import React from 'react'
import Link from 'next/link'

export default function Custom404 () {
  return (
    <section className='wrap'>
      <div className='backdrop' aria-hidden='true'>
        <div className='aurora aurora-1' />
        <div className='aurora aurora-2' />
      </div>
      <p className='code mono'><span className='grad-text'>404</span></p>
      <h1>Page not found</h1>
      <p className='hint mono'>$ kubectl get page — Error from server (NotFound)</p>
      <Link href='/' className='btn btn-primary'>
        Return home
      </Link>

      <style jsx>{`
        .wrap {
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 18px;
          padding: 24px;
        }
        .code {
          font-size: clamp(4rem, 14vw, 8rem);
          font-weight: 700;
          line-height: 1;
        }
        h1 { font-size: 1.6rem; }
        .hint {
          color: var(--text-faint);
          font-size: 0.85rem;
          margin-bottom: 16px;
        }
      `}</style>
    </section>
  )
}
