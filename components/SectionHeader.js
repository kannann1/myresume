import React from 'react'
import Reveal from './Reveal'

export default function SectionHeader ({ index, kicker, title, accent, sub }) {
  return (
    <Reveal>
      <p className='section-kicker'>{index} · {kicker}</p>
      <h2 className='section-title'>
        {title} {accent && <span className='grad-text'>{accent}</span>}
      </h2>
      {sub && <p className='section-sub'>{sub}</p>}
    </Reveal>
  )
}
