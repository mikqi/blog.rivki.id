import React, { Component } from "react";
import { Link } from "gatsby";
import "./BlogHomeLogo.css";

class BlogLogo extends Component {
  render() {
    const { logo, url, title } = this.props;
    if (logo) {
      return (
        <Link className="blog-home-logo" to={url || "/"}>
          {/* style={{ boxShadow: "none" }}> */}
          <img src={logo} alt={title} />
        </Link>
      );
    }
    return null;
  }
}

export default BlogLogo;
