import React, { Component } from 'react'

import Button from '../../atoms/Button/Button'
import './RegisterArea.scss'

class RegisterArea extends Component {
  render() {
    return (
      <div className="p-banner-area l-wrap__outer">
        <div className="p-banner-area__inner">
          <h3>新規会員登録</h3>
          <p>会員登録をすると新着情報などを<span>メルマガで受け取ることができます</span></p>
          <div className="p-banner-area__inner__btn-area">
            <Button>会員登録はこちら</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterArea;
