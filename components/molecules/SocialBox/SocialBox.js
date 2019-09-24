import React, { Component } from 'react'

import './SocialBox.scss'

import PostImage from '../../../static/PostImage'

class SocialBox extends Component {

  render() {
    let currentPath = this.props.router.asPath

    return (
      <div className="c-social-ui">
        <ul className="share-btn sticky">
          <li className="fb"><a href={`https://www.facebook.com/sharer.php?src=bm&u=https://www.hivelocity.co.jp/${currentPath}/&t=${this.props.post.title.rendered}`} target="_blank">f</a></li>
          <li className="tw"><a href={`https://twitter.com/intent/tweet?text=${this.props.post.title.rendered}&amp;url=https://www.hivelocity.co.jp${currentPath}/`} target="_blank">t</a></li>
          <li className="hb"><a href={`https://b.hatena.ne.jp/entry/https://www.hivelocity.co.jp${currentPath}/`} target="_blank">h</a></li>
          <li className="ln"><a href={`https://line.naver.jp/R/msg/text/?${this.props.post.title.rendered}https://www.hivelocity.co.jp${currentPath}`} target="_blank">n</a></li>
          <li className="favorite"><a href="#"><PostImage fname="heart_plus_icon.svg" /></a></li>
        </ul>
      </div>
    );
  }
}

export default SocialBox;
