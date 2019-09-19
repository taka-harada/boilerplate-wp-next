import React, { Component } from 'react'

import PostTitle from './PostTitle'
import PostContent from './PostContent'
import PostFooter from './PostFooter'
import PopularpostArea from '../../PopularpostArea/PopularpostArea'
import RankingPostArea from '../../RankingPostArea/RankingPostArea'
import Button from '../../atoms/Button/Button'

import PostImage from '../../../static/PostImage'
// import './PostJp.scss'

class PostJp extends Component {

  render() {

    // console.log('start postjp')
    // console.log(this.props);
    // console.log('end postjp')

    return (
      <section className="l-content-area">

        <div className="l-content l-content--post">

          <article className="l-wrap__outer p-article">
            <div className="l-wrap__inner l-wrap__inner--post">

              <PostTitle {...this.props} />
              <PostContent {...this.props} />
              <PostFooter />

            </div>
          </article>
          <div className="c-social-ui">
            <ul className="share-btn sticky">
              <li className="fb"><a href="#">f</a></li>
              <li className="tw"><a href="#">t</a></li>
              <li className="hb"><a href="#">h</a></li>
              <li className="ln"><a href="#">n</a></li>
              <li className="favorite"><a href="#"><PostImage fname="heart_plus_icon.svg" /></a></li>
            </ul>
          </div>
        </div>

        <PopularpostArea />
        <RankingPostArea />
      </section>
    )
  }
}

export default PostJp;
