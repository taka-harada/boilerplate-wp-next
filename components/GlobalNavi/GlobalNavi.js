import React, { Component } from 'react'

import {ArwLeft, ArwRight} from '../../static/GlobalNaviImage';
import './GlobalNavi.scss'

class GlobalNavi extends Component {
  render() {
    return (
      <nav className="c-nav-category">
        <div className="c-nav-category__wrap">
          <div className="c-nav-category__arw c-nav-category__arw--left">
            <a href="#">
              <ArwLeft fname="nav_arw_left.png" alt="＜" />
            </a>
          </div>
          <div className="c-nav-category__menu">
            <ul>
              <li><a href="#">日本の古都</a></li>
              <li><a href="#">日本の伝統</a></li>
              <li><a href="#">日本の食文化</a></li>
              <li><a href="#">名所・旧跡</a></li>
              <li><a href="#">旅人のブログ</a></li>
            </ul>
            <ul>
              <li><a href="#">プレコンとカラダ</a></li>
              <li><a href="#">眠りとカラダ</a></li>
              <li><a href="#">おなかとカラダ</a></li>
              <li><a href="#">レシピとカラダ</a></li>
              <li><a href="#">運動とカラダ</a></li>
            </ul>
          </div>
          <div className="c-nav-category__arw c-nav-category__arw--right">
            <a href="#">
              <ArwLeft fname="nav_arw_right.png" alt="＞" />
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default GlobalNavi;
