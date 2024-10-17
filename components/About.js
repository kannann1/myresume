import React from 'react'
import Title from './Title'
import Interersts from './AboutInterest'

export default () => {
  return (
    <section className='hero wrapper has-text-centered'>
      <Title title='About me' color='#ffffff' />
      <div className='columns is-mobile'>
        <div className='column has-text-right-tablet has-text-center is-12-mobile is-6-desktop'>
          <dl>
            <dt>FULL NAME</dt>
            <dd>Kannan Narayanasamy</dd>
            <dt>EMAIL</dt>
            <dd><a href='mailto:n.kannan200@gmail.com'>n.kannan200@gmail.com</a></dd>
            <dt>MOBILE NO.</dt>
            <dd><a href='tel:+919591977331'>+91-9591977331</a></dd>
          </dl>
        </div>
        <div className='column has-text-left'>
          <img src='/static/images/mascot.png' className='mascot' />
        </div>
      </div>
      <div className='columns'>
        <div className='column detail is-10 is-offset-1 is-6-desktop is-offset-3-desktop is-10-mobile is-offset-1-mobile'>
          Kubestronaut(CKAD+CKA+KCNA+KCSA+CKS). Adaptable Senior Software Engineer talented at providing customized and optimized solutions for all needs. Thrives within tight deadlines by applying agile development strategies. Comfortable overseeing large-scale development teams or independently coding complex projects.
        </div>
      </div>
      <Interersts />
      <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #34495e;
                        color: #ffffff;
                        font-size: 1.3em;
                    }
                    dl > dt {
                        color: #ffcc00;
                        font-weight: bold;
                    }
                    dl > dd {
                        margin-bottom: 30px;
                    }
                    .mascot {
                        margin-left: 20px;
                        width: 180px;
                    }
                    .detail {
                        font-size: 0.95em;
                    }
                    .detail > b {
                        color: #F1A9A0;
                    }
                    .detail > i {
                        color: #00E640;
                    }
                `}
      </style>
    </section>
  )
}
