import React, { Component } from 'react'
import { navigate } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../../data/SiteConfig'

class AboutPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      navigate('/')
    }, 30000)
  }

  render() {
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <div
          className="shakeitoff"
          style={{
            height: '100vh',
            width: '100vw',
            background: 'url(/images/taken.png) no-repeat center center'
          }}
        />
        {/* <img src="/images/taken.png" alt="not found" /> */}
      </div>
    )
  }
}

export default AboutPage
