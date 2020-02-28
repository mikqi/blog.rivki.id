import React, { Component } from 'react'
import Helmet from 'react-helmet'
import config from '../../data/SiteConfig'

class HomePage extends Component {
  render() {
    return (
      <div className="Home-container">
        <Helmet title={`Home | ${config.siteTitle}`} />
        <h1>HOMES Page</h1>
      </div>
    )
  }
}

export default HomePage
