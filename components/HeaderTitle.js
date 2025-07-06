import React from 'react'

export default ({ color }) => (
  <div className='is-hidden-touch'>
    <div className="typing-text">
      I'm <span>Kannan </span><span className="cursor">_</span>
    </div>
    <style jsx>{`
            div {
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
