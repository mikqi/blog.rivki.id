import React from 'react'
import Velocity from 'velocity-animate'
import './Nav.css'

export default class Nav extends React.Component {
  componentDidMount() {
    if (window) {
      require('./utils')
      const navLinks = document.querySelectorAll('.js-nav-link')
      const navTrigger = document.querySelector('.js-nav-trigger')
      const overlayNav = document.querySelector('.c-overlay-nav')
      const overlayContent = document.querySelector('.c-overlay-content')

      // eslint-disable-next-line no-inner-declarations
      function layerInit () {
        // eslint-disable-next-line no-restricted-properties
        const diameterValue = (Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2)) * 2)
        Velocity(overlayNav.querySelector('span'), {
          scaleX: 0,
          scaleY: 0,
          translateZ: 0
        }, 50)

        Velocity(overlayNav.querySelector('span'), {
          height: `${diameterValue  }px`,
          width: `${diameterValue  }px`,
          top: `${-(diameterValue / 2)  }px`,
          left: `${-(diameterValue / 2)  }px`
        }, 0)
        // overlayNav.querySelector('span').velocity(.velocity()

        Velocity(overlayContent.querySelector('span'), {
          scaleX: 0,
          scaleY: 0,
          translateZ: 0
        }, 50)
      
        Velocity(overlayContent.querySelector('span'), {
          height: `${diameterValue  }px`,
          width: `${diameterValue  }px`,
          top: `${-(diameterValue / 2)  }px`,
          left: `${-(diameterValue / 2)  }px`
        }, 0)

        // overlayContent.querySelector('span').velocity().velocity()
      }
      
      // inizialize navigation and content layers
      layerInit()
      window.addEventListener('resize', () => {
        window.requestAnimationFrame(layerInit)
      })
  
      navLinks.forEach((nav) =>
        nav.addEventListener('click', () =>
          navTrigger.click()
        )
      )
    }
  }
  
  // eslint-disable-next-line class-methods-use-this
  handleClick = () => {
    const overlayNav = document.querySelector('.c-overlay-nav')
    const overlayContent = document.querySelector('.c-overlay-content')
    const navigation = document.querySelector('.c-primary-nav')
    const toggleNav = document.querySelector('.c-nav-trigger')

    if (!toggleNav.hasClass('close-nav')) {
      // it means navigation is not visible yet - open it and animate navigation layer
      toggleNav.addClass('close-nav')

      Velocity(overlayNav.querySelector('span'), {
        translateZ: 0,
        scaleX: 1,
        scaleY: 1
      }, 500, 'easeInCubic', () => {
        navigation.addClass('fade-in')
      })

    } else {
      // navigation is open - close it and remove navigation layer
      toggleNav.removeClass('close-nav')

      Velocity(overlayContent.querySelector('span'), {
        translateZ: 0,
        scaleX: 1,
        scaleY: 1
      }, 500, 'easeInCubic', () => {
        navigation.removeClass('fade-in')
        Velocity(overlayNav.querySelector('span'), {
          translateZ: 0,
          scaleX: 0,
          scaleY: 0
        }, 0)

        const events = ['transitionend', 'webkitTransitionEnd', 'otransitionend', 'oTransitionEnd', 'msTransitionEnd']
        overlayContent.addClass('is-hidden')
        events.forEach(e => {
          overlayContent.addEventListener(e, () => {
            Velocity(overlayContent.querySelector('span'), {
              translateZ: 0,
              scaleX: 0,
              scaleY: 0
            }, 0, () => {
              overlayContent.removeClass('is-hidden')
            })
          })
        })

        if (document.querySelector('html').hasClass('no-csstransitions')) {
          Velocity(overlayContent.querySelector('span'), {
            translateZ: 0,
            scaleX: 0,
            scaleY: 0
          }, 0, () => {
            overlayContent.removeClass('is-hidden')
          })
        }
      })
    }
  }

  render () {
    return (
      <div>
        <nav>
          <ul className="c-primary-nav">
            <li><a className="js-nav-link" href="/">Home</a></li>
            <li><a className="js-nav-link" href="about">About page</a></li>
            {/* <li><a className="js-nav-link" href="portfolio">Portfolio</a></li> */}
            <li><a className="js-nav-link" href="https://blog.rivki.id/">Blog</a></li>
          </ul>
        </nav>
    
        <div className="c-overlay-nav">
          <span />
        </div>
    
        <div className="c-overlay-content">
          <span />
        </div>
    
        <a href="#0" className="c-nav-trigger js-nav-trigger" onClick={this.handleClick}>
Menu
          <span className="c-icon" />
        </a>
      </div>
    )
  }
}
