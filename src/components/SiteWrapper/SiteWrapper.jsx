/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react'
import './SiteWrapper.css'

function SiteWrapper(props) {
  const storage = (typeof localStorage !== 'undefined' && localStorage) || {
    getItem: () => 'light',
    setItem: (arg) => arg,
  }
  const [theme, setTheme] = useState(storage.getItem('theme') || 'light')
  const { children } = props

  function toggleTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    storage.setItem('theme', nextTheme)
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
