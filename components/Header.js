import React from 'react'
import Background from './HeaderBackground'
import ProfileImage from './HeaderProfile'
import Brace from './HeaderBrace'
import Title from './HeaderTitle'
import Button from './HeaderButton'

const themes = {
  light: {
    background: '#f5f5f5',
    font: '#4a4a4a'
  },
  dark: {
    background: '#2f353f',
    font: '#e4e4e4'
  }
}

export default class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      theme: 'light'
    }
  }

  toggleTheme () {
    const newtheme = this.state.theme === 'light' ? 'dark' : 'light'
    this.setState({
      theme: newtheme
    })
  }

  render () {
    const theme = themes[this.state.theme]
    return (
      <header id='header' className='hero is-fullheight has-text-centered'>
        <div className='hero-body'>
          <div className='container'>
            {/* Mobile tech icons - visible only on mobile */}
            <div className='columns is-mobile is-hidden-tablet tech-icons-mobile'>
              <div className='column is-3'>
                <i className="fab fa-kubernetes fa-3x" style={{color: theme.font}}></i>
              </div>
              <div className='column is-3'>
                <i className="fab fa-aws fa-3x" style={{color: theme.font}}></i>
              </div>
              <div className='column is-3'>
                <i className="fab fa-docker fa-3x" style={{color: theme.font}}></i>
              </div>
              <div className='column is-3'>
                <i className="fas fa-cloud fa-3x" style={{color: theme.font}}></i>
              </div>
            </div>
            
            {/* Desktop layout with profile image and tech icons */}
            <div className='columns is-mobile'>
              <div className='column is-hidden-mobile tech-icon-left'>
                <i className="fab fa-kubernetes fa-4x" style={{color: theme.font}}></i>
                <i className="fab fa-aws fa-4x" style={{color: theme.font, marginTop: '30px'}}></i>
              </div>
              <ProfileImage toggle={this.toggleTheme.bind(this)} />
              <div className='column is-hidden-mobile tech-icon-right'>
                <i className="fab fa-docker fa-4x" style={{color: theme.font}}></i>
                <i className="fas fa-cloud fa-4x" style={{color: theme.font, marginTop: '30px'}}></i>
              </div>
            </div>
            
            <div className='columns'>
              <div className='column'>
                <Title color={theme.font} />
              </div>
            </div>
            
            {/* Responsive CTA buttons */}
            <div className='columns is-mobile is-multiline is-centered cta-buttons'>
              <div className='column is-narrow-tablet is-12-mobile'>
                <Button title='Download Resume' url='/static/resume/Kannan_Resume.pdf' icon='fas fa-file-pdf' download={true} />
              </div>
              <div className='column is-narrow-tablet is-6-mobile'>
                <Button title='GitHub' url='https://github.com/kannann1' icon='fab fa-github' download={false} />
              </div>
              <div className='column is-narrow-tablet is-6-mobile'>
                <Button title='LinkedIn' url='https://www.linkedin.com/in/kannan91/' icon='fab fa-linkedin' download={false} />
              </div>
            </div>
            
            {/* Social icons - hidden on mobile as we have buttons above */}
            <div className='columns is-centered social-icons is-hidden-mobile'>
              <div className='column is-narrow'>
                <a href='https://www.linkedin.com/in/kannan91/' target='_blank' rel='noopener noreferrer' className='social-icon'>
                  <i className='fab fa-linkedin fa-2x'></i>
                </a>
              </div>
              <div className='column is-narrow'>
                <a href='https://github.com/kannann1' target='_blank' rel='noopener noreferrer' className='social-icon'>
                  <i className='fab fa-github fa-2x'></i>
                </a>
              </div>
              <div className='column is-narrow'>
                <a href='https://www.credly.com/users/kannann1' target='_blank' rel='noopener noreferrer' className='social-icon'>
                  <i className='fas fa-certificate fa-2x'></i>
                </a>
              </div>
              <div className='column is-narrow'>
                <a href='https://medium.com/@Kannan91' target='_blank' rel='noopener noreferrer' className='social-icon'>
                  <i className='fab fa-medium fa-2x'></i>
                </a>
              </div>
            </div>
          </div>
          <Background color={theme.background} />
        </div>
        <style jsx>{`
          .hero-body {
            padding-bottom: 0;
            padding-top: 1rem;
          }
          @media screen and (max-width: 768px) {
            .hero-body {
              padding: 1rem 0.5rem;
            }
          }
          .social-icon {
            margin: 0 0.5rem;
            color: ${theme.font};
            transition: all 0.5s;
          }
          .social-icon:hover {
            color: #00d1b2;
            transform: scale(1.1);
          }
          .tech-icon-left, .tech-icon-right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .tech-icons-mobile {
            margin-bottom: 1rem;
          }
          .tech-icons-mobile i {
            transition: transform 0.3s ease;
          }
          .tech-icons-mobile i:hover {
            transform: scale(1.2);
          }
          .cta-buttons {
            margin-top: 1.5rem;
          }
          @media screen and (max-width: 768px) {
            .cta-buttons {
              margin-top: 1rem;
            }
            .cta-buttons .column {
              padding: 0.5rem;
            }
          }
          .social-icons {
            margin-top: 1.5rem;
          }
          .social-icons .column {
            padding: 0.5rem;
          }
        `}</style>
      </header>
    )
  }
}
