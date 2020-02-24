import React from 'react'
import classNames from 'classnames'
import './MainContent.css'

class MainContent extends React.Component {
  render() {
    const { children } = this.props

    const classes = classNames('content', this.props.className)

    return (
      <article id="content" className={classes}>
        {children}
      </article>
    )
  }
}

export default MainContent
