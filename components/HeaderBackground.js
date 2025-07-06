import React from 'react'
import Particles from 'react-tsparticles'

export default class HeaderBackground extends React.Component {
  constructor () {
    super()
    this.state = {
      windowWidth: 0
    }
  }

  componentDidMount () {
    this.updateDimensions()
    window.addEventListener('resize', () => this.updateDimensions())
  }

  updateDimensions () {
    this.setState({
      windowWidth: window.innerWidth
    })
    console.log(console.log(window.innerWidth))
  }

  render () {
    const bgStyle = {
      position: 'absolute',
      width: '100%',
      zIndex: -1,
      top: 0,
      left: 0,
      backgroundColor: this.props.color
    }

    if (this.state.windowWidth <= 769) {
      return (
        <div style={bgStyle} className='hero is-fullheight' />
      )
    } else {
      return (
        <Particles
          options={{
            particles: {
              number: {
                value: 15 // Reduced from 50
              },
              shape: {
                type: 'circle' // Changed from triangle to circle
              },
              color: {
                value: ['#3498db', '#e0e0e0'] // Reduced color palette
              },
              line_linked: {
                enable: false, // Disabled lines between particles
                color: '#FFF',
                width: 1,
                shadow: {
                  enable: false, // Disabled shadows
                  color: '#333333',
                  blur: 5
                }
              },
              size: {
                value: 5, // Reduced size from 15
                random: true
              },
              opacity: {
                value: 0.3, // Added transparency
                random: true,
                anim: {
                  enable: true,
                  speed: 0.5
                }
              },
              move: {
                speed: 1 // Slower movement
              }
            },
            interactivity: {
              detect_on: 'window',
              events: {
                onhover: {
                  enable: false // Disabled hover effects
                }
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.2
                }
              }
            },
            retina_detect: true
          }}
          style={bgStyle}
          className='hero is-fullheight'
        />
      )
    }
  }
}
