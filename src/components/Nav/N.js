/* eslint-disable no-inner-declarations */
import $ from 'jquery'
import Velocity from 'velocity-animate'

require('./utils')

if (window && document) {

  const overlayNav = document.querySelector('.c-overlay-nav')
  const overlayContent = document.querySelector('.c-overlay-content')
  const navigation = document.querySelector('.c-primary-nav')
  const toggleNav = document.querySelector('.c-nav-trigger')
  
  console.log('mamam')
  console.log(overlayNav)

  console.log($)
  
  function layerInit () {
    // eslint-disable-next-line no-restricted-properties
    const diameterValue = (Math.sqrt(Math.pow($(window).height(), 2) + Math.pow($(window).width(), 2)) * 2)
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
  $(window).on('resize', () => {
    window.requestAnimationFrame(layerInit)
  })
  
  // open/close the menu and cover layers
  toggleNav.on('click', () => {
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
  
      // overlayNav.querySelector('span').velocity()
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
  
        // overlayNav.querySelector('span').velocity()
  
        overlayContent.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () => {
          Velocity(overlayContent.querySelector('span'), {
            translateZ: 0,
            scaleX: 0,
            scaleY: 0
          }, 0, () => {
            overlayContent.removeClass('is-hidden')
          })
          // overlayContent.querySelector('span').velocity({
          //   translateZ: 0,
          //   scaleX: 0,
          //   scaleY: 0
          // }, 0, () => {
          //   overlayContent.removeClass('is-hidden')
          // })
        })
        if (document.queryS('html').hasClass('no-csstransitions')) {
          Velocity(overlayContent.querySelector('span'), {
            translateZ: 0,
            scaleX: 0,
            scaleY: 0
          }, 0, () => {
            overlayContent.removeClass('is-hidden')
          })
          // overlayContent.querySelector('span').velocity()
        }
      })
  
      // overlayContent.querySelector('span').velocity()
    }
  })

}  
