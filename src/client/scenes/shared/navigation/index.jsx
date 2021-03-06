/* @flow */
/* eslint "jsx-quotes": ["error", "prefer-double"] */ // eslint rule to prefer doublequotes inside html tags

import React, { Component } from 'react'
import {Link, IndexLink} from 'react-router'
import './index.local.scss'
import img from '../../../styles/img/profilna.jpg'

class Navigation extends Component {
  render (): React.Element<any> {
    return (
      <div styleName="container">
        {/* For Demonstration purpose */}

        <nav className="navbar navbar-toggleable-sm navbar-light bg-faded" styleName="nav-bar">
          {/* hamburger menu on small screen size */}
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          {/* navigation bar brend */}
          <a className="navbar-brand" href="/">Ultimate React Boilerplate</a>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto" styleName="nav-link">
              <IndexLink to="/" className="nav-item nav-link">Home</IndexLink>
              <Link to="/feature" className="nav-item nav-link">Feature</Link>
            </div>
            <div className="navbar-nav ml-auto">
              <span className="navbar-text" styleName="nav-text">Made by <a href="https://github.com/Igor-Vuk" target="_blank">Igor Vukelić</a><img src={img} styleName="profileImg" /></span>
            </div>
          </div>
        </nav>

        <h2 styleName="header">Navigation Scene - shared between components</h2>

      </div>
    )
  }
}

export default Navigation
