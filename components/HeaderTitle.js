import { Typist } from 'react-typist-component'

export default ({ color }) => (
  <div className='is-hidden-touch'>
    <Typist cursor={{ element: '_', hideWhenDone: true, hideWhenDoneDelay: 0 }}>
      I'm <span>Kannan </span>
    </Typist>
    <style jsx>{`
            div {
                color: ${color};
                font-size: 8em;
                font-weight: bold;
            }
            span {
                color: #c0392b;
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
