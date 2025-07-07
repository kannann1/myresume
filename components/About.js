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
            <strong>Platform-first DevOps leader with hands-on Kubernetes expertise and <span className="highlight-text">11+ years</span> of experience</strong> architecting and operating high-scale infrastructure and developer platforms. A certified CKA & CKAD, I bring a strong automation-first mindset to everything I do:
          </p>
          
          <div className='about-highlights'>
            <p className='highlight'>
              <strong>Drive systemic impact:</strong> Led CI/CD and reliability initiatives that accelerated deployment speeds by <span className="highlight-text">60%</span>, improved system uptime above <span className="highlight-text">99.9%</span>, and cut incident response time by <span className="highlight-text">40%</span>.
            </p>
            
            <p className='highlight'>
              <strong>Deep technical expertise:</strong> Proficient in <span className="highlight-text">Kubernetes</span>, <span className="highlight-text">Terraform</span>, <span className="highlight-text">ArgoCD</span>, Prometheus, and GitOps. Designed and maintained platforms supporting millions of users, delivering robust, scalable, and secure infrastructure.
            </p>
            
            <p className='highlight'>
              <strong>Collaborative leadership:</strong> Partnered across engineering and product teams to drive alignment on platform goals. Mentored <span className="highlight-text">15+</span> engineers, established best practices around code reviews, documentation, and onboarding processes.
            </p>
            
            <p className='highlight'>
              <strong>Passionate communicator:</strong> Regularly deliver talks, write technical articles, and lead workshops to share knowledge and promote DevOps culture and continuous learning within organizations.
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
                    @media screen and (max-width: 768px) {
                        .wrapper {
                            padding-top: 30px;
                            padding-bottom: 30px;
                            font-size: 1.1em;
                        }
                    }
                    dl > dt {
                        color: #ffcc00;
                        font-weight: bold;
                    }
                    dl > dd {
                        margin-bottom: 30px;
                    }
                    @media screen and (max-width: 768px) {
                        dl > dt {
                            margin-top: 15px;
                        }
                        dl > dd {
                            margin-bottom: 15px;
                        }
                    }
                    .mascot {
                        margin-left: 20px;
                        width: 150px;
                    }
                    @media screen and (max-width: 768px) {
                        .mascot {
                            margin: 0 auto;
                            width: 120px;
                            display: block;
                        }
                    }
                    .detail {
                        font-size: 0.9em;
                        line-height: 1.6;
                    }
                    @media screen and (max-width: 768px) {
                        .detail {
                            font-size: 0.85em;
                            line-height: 1.5;
                            padding: 0 0.5rem;
                        }
                    }
                    .about-intro, .about-conclusion {
                        margin-bottom: 1.8rem;
                    }
                    .about-highlights {
                        margin-bottom: 1.8rem;
                    }
                    @media screen and (max-width: 768px) {
                        .about-intro, .about-conclusion, .about-highlights {
                            margin-bottom: 1.2rem;
                        }
                    }
                    .highlight {
                        margin-bottom: 1.2rem;
                        position: relative;
                        padding-left: 1rem;
                        border-left: 3px solid #3498db;
                    }
                    @media screen and (max-width: 768px) {
                        .highlight {
                            margin-bottom: 1rem;
                            padding-left: 0.75rem;
                            text-align: left;
                        }
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
                    @media screen and (max-width: 768px) {
                        .about-conclusion {
                            font-size: 0.95em;
                            line-height: 1.5;
                        }
                    }
                `}
      </style>
    </section>
  )
}
