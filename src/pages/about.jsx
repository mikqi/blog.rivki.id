import React, { Component } from 'react'
import Helmet from 'react-helmet'
import About from '../components/About/About'
import Navigation from '../components/Nav/Nav'
import config from '../../data/SiteConfig'

class AboutPage extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Helmet title={`About | ${config.siteTitle}`} />
        <About />
      </>
    )
  }
}

export default AboutPage
