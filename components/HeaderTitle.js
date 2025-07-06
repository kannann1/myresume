import React from 'react'

export default ({ color }) => (
  <div className='is-hidden-touch'>
    <div className="typing-text">
      I'm <span>Kannan </span><span className="cursor">_</span>
    </div>
    <div className="tagline">
      Lead DevOps Engineer • Kubernetes Advocate
    </div>
    <style jsx>{`
            .typing-text {
                color: ${color};
                font-size: 8em;
                font-weight: bold;
            }
            span {
                color: #c0392b;
            }
            .cursor {
                color: ${color};
                animation: blink 1s step-end infinite;
            }
            .tagline {
                color: ${color};
                font-size: 1.5em;
                margin-top: -1.5em;
                margin-bottom: 1em;
                font-weight: 300;
                letter-spacing: 1px;
            }
            @keyframes blink {
                from, to { opacity: 1; }
                50% { opacity: 0; }
            }
            @media screen and ( max-height: 690px ) {
                div {
                    display: none;
                }
            }
        `}
    </style>
  </div>
)
