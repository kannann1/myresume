import React from 'react'
import Title from './Title'
import Interersts from './AboutInterest'

export default () => {
  return (
    <section id='about' className='hero wrapper has-text-centered'>
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
        <div className='column detail is-10 is-offset-1 is-8-desktop is-offset-2-desktop is-10-mobile is-offset-1-mobile'>
          <p className='about-intro'>
            I'm a Lead DevOps & Cloud Engineer with 10+ years of hands-on experience architecting and operating high-scale infrastructure and developer platforms. A certified CKA & CKAD, I bring a strong automation-first mindset to everything I do:
          </p>
          
          <div className='about-highlights'>
            <p className='highlight'>
            <span className='highlight-icon'>✅</span> <strong>Drive systemic impact:</strong> Led CI/CD and reliability initiatives that accelerated deployment speeds by 60%, improved system uptime above 99.9%, and cut incident response time by 40%.
            </p>
            
            <p className='highlight'>
            <span className='highlight-icon'>⚙️</span> <strong>Deep technical expertise:</strong> Proficient in Kubernetes, Terraform, ArgoCD, Prometheus, and GitOps. Designed and maintained platforms supporting 10M+ users, delivering robust, scalable, and secure infrastructure.
            </p>
            
            <p className='highlight'>
            <span className='highlight-icon'>🤝</span> <strong>Collaborative leadership:</strong> Partnered across engineering and product teams to drive alignment on platform goals. Mentored 15+ engineers, established best practices around code reviews, documentation, and onboarding processes.
            </p>
            
            <p className='highlight'>
            <span className='highlight-icon'>💬</span> <strong>Passionate communicator:</strong> Regularly deliver talks, write technical articles, and lead workshops to share knowledge and promote DevOps culture and continuous learning within organizations.
            </p>
          </div>
          
          <p className='about-conclusion'>
            I thrive on building resilient, automated infrastructure and developer-friendly platforms—and I'm eager to continue doing this in environments where engineering excellence, innovation, and teamwork are top priorities.
          </p>
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
                        text-align: left;
                    }
                    .detail > b {
                        color: #F1A9A0;
                    }
                    .detail > i {
                        color: #00E640;
                    }
                    .about-intro {
                        margin-bottom: 1.5rem;
                        font-size: 1.1em;
                        line-height: 1.6;
                    }
                    .about-highlights {
                        padding: 0.5rem 0;
                        margin-bottom: 1.5rem;
                    }
                    .highlight {
                        margin-bottom: 1rem;
                        line-height: 1.5;
                        text-align: left;
                    }
                    .highlight strong {
                        color: #ffcc00;
                        margin-right: 0.5rem;
                    }
                    .about-conclusion {
                        font-style: italic;
                        line-height: 1.6;
                        font-size: 1.05em;
                    }
                `}
      </style>
    </section>
  )
}
