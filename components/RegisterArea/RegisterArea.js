import React, { Component } from 'react'

import './RegisterArea.scss'

class RegisterArea extends Component {
  render() {
    return (
      <div className="p-banner-area l-wrap__outer">
        <div class="p-banner-area__inner">
          <h3>新規会員登録</h3>
          <p>会員登録をすると新着情報などを<span>メルマガで受け取ることができます</span></p>
          <div class="p-banner-area__inner__btn-area">
            <div class="c-btn">
              <a href="#">会員登録はこちら</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterArea;
