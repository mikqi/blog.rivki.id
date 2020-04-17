/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* global window */
import React, { useState } from 'react'
import './SiteWrapper.css'

function SiteWrapper(props) {
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') || 'light'
  )
  const { children } = props

  function toggleTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    window.localStorage.setItem('theme', nextTheme)
    setTheme(nextTheme)
  }

  return (
    <div className={`site-wrapper ${theme}`}>
      <label className="dayNight">
        <input
          type="checkbox"
          onClick={toggleTheme}
          checked={theme === 'dark'}
        />
        <div />
      </label>
      {children}
    </div>
  )
}

export default SiteWrapper
