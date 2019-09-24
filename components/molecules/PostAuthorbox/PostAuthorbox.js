import React, { Component } from 'react'

import PostImage from '../../../static/PostImage'
import './PostAuthorbox.scss'

class PostAuthorbox extends Component {

  render() {

    return (
      <section className="p-articlefoot-author">
        <div className="p-articlefoot-author__head">
          <h2>この記事に取材協力してくれた方</h2>
        </div>
        <div className="p-articlefoot-author__body">
          <div className="p-articlefoot-author__body-left">
            <div className="img-box"><PostImage fname="author.jpg" /></div>
          </div>
          <div className="p-articlefoot-author__body-right">
            <h3>農林水 産太郎 a.k.a. MAFF TARO</h3>
            <p>「食料の安定供給の確保、農林水産業の発展、農林漁業者の福祉の増進、農山漁村及び中山間地域等の振興、農業の多面にわたる機能の発揮、森林の保続培養及び森林生産力の増進並びに水産資源の適切な保存及び管理を図ること」を任務とし粛々と遂行するストイックな男である。</p>
            <p>農林水産省 <br />
            <a href="http://www.vivalita.com/index.htm" target="_blank">http://www.vivalita.com/index.htm</a></p>
          </div>
        </div>
      </section>
    )
  }
}

export default PostAuthorbox;
