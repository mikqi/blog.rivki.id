import React from "react";
import "./TOC.css";

class SubscribeButton extends React.Component {
  render() {
    const { tableOfContents, show } = this.props;
    if (tableOfContents && show) {
      return (
        <section
          className="post-toc"
          style={{fontSize: 13}}
          dangerouslySetInnerHTML={{ __html: tableOfContents}}
        />
      );
    }
    return null;
  }
}

export default SubscribeButton;
