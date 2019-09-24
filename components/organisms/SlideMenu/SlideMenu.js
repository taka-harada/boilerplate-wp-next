import React, { Component } from 'react'

import './SlideMenu.scss'

class SlideMenu extends Component {

  render() {
    return (
      <div id="nav-menu">
        <ul className="c-nav-menu__list c-nav-menu__list--category">
          <li><a href="/jp/ancient-city" aria-label="ancient-city">日本の古都</a></li>
          <li><a href="/jp/traditional" aria-label="traditional">日本の伝統</a></li>
          <li><a href="/jp/culture" aria-label="culture">日本の食文化</a></li>
          <li><a href="/jp/classic-ground" aria-label="classic-ground">名所・旧跡</a></li>
          <li><a href="/jp/travel-blog" aria-label="travel-blog">旅人のブログ</a></li>
        </ul>
        <ul className="c-nav-menu__list c-nav-menu__list--other">
          <li><a href="/about" aria-label="about">このサイトについて</a></li>
          <li><a href="/information" aria-label="information">個人情報の取扱について</a></li>
          <li><a href="/company" aria-label="company">運営会社</a></li>
        </ul>
      </div>
    )
  }
}
export default SlideMenu;
