import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <h1>404 Page</h1>
      </div>
    );
  }
}

export default AboutPage;
