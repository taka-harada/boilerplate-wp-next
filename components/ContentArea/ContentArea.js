import React, { Component } from 'react'

import ListPost from './ListPost'

import PostImage from '../../static/PostImage'
import './ContentArea.scss'
import './Title.scss'

class ContentArea extends Component {
  render() {
    return (
      <section className="l-content-area">
        <div className="l-content l-content--top">

          <div className="l-wrap__outer p-article-bloc p-article-bloc--category">
            <div className="l-wrap__inner l-wrap__inner--top">

              <dl className="p-article-bloc__title c-bloc-title">
                <dt className="jp">日本の古都</dt>
                <dd className="en">Ancient City in Japan</dd>
              </dl>

              <ListPost />

              <div className="p-article-bloc__btn">
                <div className="c-btn c-btn--more"><a href="#">一覧を見る</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ContentArea;
