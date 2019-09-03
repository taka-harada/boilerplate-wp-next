import React, { Component } from 'react'

import { FooterImage } from '../../static/FooterImage'
import './Footer.scss'

class Footer extends Component {
  render() {
    return (
      <footer className="l-footer l-wrap__outer">
        <div className="l-footer__logo">
          <a href="/">
            <div className="logo"><FooterImage fname="foot_logo.png" /></div>
            <p>きっと楽しい出会いが待っている</p>
          </a>
        </div>
        <div className="l-footer__description">
          <p>このウェブサイトについての説明文がある場合に表記します。このウェブ<br />
          サイトについての説明文がある場合に表記します。このウェブサイトにつ<br />
          いての説明文がある場合に表記します。このウェブサイトについての説明<br />
          文がある場合に表記します。</p>
        </div>
        <div className="l-footer__link">
          <ul className="social">
            <li className="fb"><a href="https://www.facebook.com/jyoshisite.cocobana/" target="_blank"></a></li>
            <li className="tw"><a href="#"></a></li>
            <li className="ln"><a href="#"></a></li>
          </ul>
        </div>
        <div className="l-footer__ci">
          <a href="https://www.jintan.co.jp/" target="_blank"><FooterImage fname="foot_ci.png" /></a>
        </div>
        <address>Copyright&nbsp;&copy;&nbsp;2018&nbsp;Hivelocity&nbsp;Inc.&nbsp;&nbsp;All rights&nbsp;reserved.</address>
      </footer>
    )
  }
}

export default Footer;
