import React from "react";
import "./PostFormatting.css";

class PostFormatting extends React.Component {
  componentDidMount() {
    const elements = document.querySelectorAll('img[src$="#forty-percent"]')
    elements.forEach(element => {
      element.parentElement.addClass('u-align-center')
    })
  }

  render() {
    const { children, className } = this.props;
    return <article className={className}>{children}</article>;
  }
}

export default PostFormatting;
