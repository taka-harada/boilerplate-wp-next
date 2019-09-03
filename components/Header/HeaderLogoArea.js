import React, { Component } from 'react'
import { HeaderLogo } from '../../static/HeaderImage'

import './HeaderLogoArea.scss'

class HeaderLogoArea extends Component {
  render() {
    return (
      <div className="l-header__logo">
        <a href="/">
          <div className="logo">
            <HeaderLogo fname="logo.png" alt="Hivelocity" />
          </div>
        </a>
      </div>
    )
  }
}
export default HeaderLogoArea;
