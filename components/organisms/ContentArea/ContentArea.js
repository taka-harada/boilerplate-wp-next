import React, { Component } from 'react'
import IndexArea from '../../molecules/IndexArea/IndexArea'

import './ContentArea.scss'
import './Title.scss'

class ContentArea extends Component {

  render() {

    console.log('コンテンツインデックス start')
    console.log(this.props)
    console.log('コンテンツインデックス end')

    return (
      <section className="l-content-area">
        <div className="l-content l-content--top">

          <IndexArea jpTitle={'日本の古都'} enTitle={'Ancient City in Japan'} category={'/jp/ancient-city'} />
          <IndexArea jpTitle={'日本の伝統'} enTitle={'Japan Traditional'} category={'/jp/traditional'} />
          <IndexArea jpTitle={'日本の食文化'} enTitle={'Japanese Food Culture'} category={'/jp/culture'} />
          <IndexArea jpTitle={'名所・旧跡'} enTitle={'Classic Ground'} category={'/jp/classic-ground'} />
          <IndexArea jpTitle={'旅人のブログ'} enTitle={'Classic Ground'} category={'/jp/travel-blog'} />

        </div>
      </section>
    )
  }
}

export default ContentArea;
