import React, { Component } from 'react'

import {MainAreaImage} from '../static/MainAreaImage'

class MainArea extends Component {
  render() {
    return (
      <section className="p-main-area">
        <div className="p-slider-area">
          <ul className="p-slider-area__image">
            <li className="slide-bg slide-bg--01"></li>
          </ul>
          <div className="p-slider-area__title">
            <h1>
              <MainAreaImage fname="main_logo.png" alt="boilerplate media" class="pc" />
              <MainAreaImage fname="main_logo-sp.png" alt="boilerplate media" class="sp" />
            </h1>
          </div>
          <div className="p-slider-area__arrow">
            <span><MainAreaImage fname="main_arw.png" alt="scroll" /></span>
          </div>
        </div>
      </section>
    )
  }
}

export default MainArea;
