import React, { Component } from "react";
import Link from "next/link";

import "./SlideMenu.scss";

class SlideMenu extends Component {
  render() {
    return (
      <div id="nav-menu">
        <ul className="c-nav-menu__list c-nav-menu__list--category">
          <li>
            <Link as={`/jp/ancient-city/`} href={{ pathname: "/categoryJp" }}>
              <a aria-label="ancient-city">日本の古都</a>
            </Link>
          </li>
          <li>
            <Link as={`/jp/traditional`} href={{ pathname: "/categoryJp" }}>
              <a aria-label="traditional">日本の伝統</a>
            </Link>
          </li>
          <li>
            <Link as={`/jp/culture`} href={{ pathname: "/categoryJp" }}>
              <a aria-label="culture">日本の食文化</a>
            </Link>
          </li>
          <li>
            <Link as={`/jp/classic-ground`} href={{ pathname: "/categoryJp" }}>
              <a aria-label="classic-ground">名所・旧跡</a>
            </Link>
          </li>
          <li>
            <Link as={`/jp/travel-blog`} href={{ pathname: "/categoryJp" }}>
              <a aria-label="travel-blog">旅人のブログ</a>
            </Link>
          </li>
        </ul>
        <ul className="c-nav-menu__list c-nav-menu__list--other">
          <li>
            <a href="/about" aria-label="about">
              このサイトについて
            </a>
          </li>
          <li>
            <a href="/information" aria-label="information">
              個人情報の取扱について
            </a>
          </li>
          <li>
            <a href="/company" aria-label="company">
              運営会社
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default SlideMenu;
