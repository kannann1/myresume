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
            <div className='columns is-centered cta-buttons'>
              <div className='column is-narrow'>
                <Button title='Download Resume' url='/static/resume/Kannan_Resume.pdf' icon='fas fa-file-pdf' download={true} />
              </div>
              <div className='column is-narrow'>
                <Button title='GitHub Profile' url='https://github.com/kannann1' icon='fab fa-github' download={false} />
              </div>
              <div className='column is-narrow'>
                <Button title='LinkedIn' url='https://www.linkedin.com/in/kannan91/' icon='fab fa-linkedin' download={false} />
              </div>
            </div>
            <div className='columns is-centered social-icons'>
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
          .tech-icon-left, .tech-icon-right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            animation: fadeIn 1.5s;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .cta-buttons {
            margin-top: 1rem;
          }
          .social-icons {
            margin-top: 1rem;
          }
          .social-icon {
            color: ${theme.font};
            margin: 0 0.75rem;
            transition: all 0.3s ease;
          }
          .social-icon:hover {
            color: #c0392b;
            transform: translateY(-3px);
          }
        `}</style>
      </header>
    )
  }
}
