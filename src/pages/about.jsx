import React, { Component } from 'react'
import Helmet from 'react-helmet'
import About from '../components/About/About'
import Navigation from '../components/Nav/Nav'

class AboutPage extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Helmet>
          {/* <!-- Primary Meta Tags --> */}
          <title>About | Muhammad Rivki - Frontend Engineer</title>
          <meta name="title" content="Muhammad Rivki - Frontend Engineer" />
          <meta
            name="description"
            content="Hello, i'm Muhammad Rivki. A Front-End Engineer currently living in Jakarta, Indonesia. I focus on JavaScript stack and has performance in mind. I love to share knowledge to others."
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://this.rivki.id/" />
          <meta
            property="og:title"
            content="Muhammad Rivki - Frontend Engineer"
          />
          <meta
            property="og:description"
            content="Hello, i'm Muhammad Rivki. A Front-End Engineer currently living in Jakarta, Indonesia. I focus on JavaScript stack and has performance in mind. I love to share knowledge to others."
          />
          <meta property="og:image" content="" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://this.rivki.id/" />
          <meta
            property="twitter:title"
            content="Muhammad Rivki - Frontend Engineer"
          />
          <meta
            property="twitter:description"
            content="Hello, i'm Muhammad Rivki. A Front-End Engineer currently living in Jakarta, Indonesia. I focus on JavaScript stack and has performance in mind. I love to share knowledge to others."
          />
          <meta
            property="twitter:image"
            content="https://this.rivki.id/images/meta-image.png"
          />
        </Helmet>
        <About />
      </>
    )
  }
}

export default AboutPage
