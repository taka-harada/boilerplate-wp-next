import React, { Component } from 'react'

import PostTitle from '../../molecules/PostTitle/PostTitle'
import PostContent from '../../molecules/PostContent/PostContent'
import PostFooter from '../../molecules/PostFooter/PostFooter'
import PopularpostArea from '../../molecules/PopularpostArea/PopularpostArea'
import RankingPostArea from '../../molecules/RankingPostArea/RankingPostArea'
import Button from '../../atoms/Button/Button'
import SocialBox from '../../molecules/SocialBox/SocialBox'

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

          <SocialBox {...this.props} />
        </div>

        <PopularpostArea />
        <RankingPostArea />
      </section>
    )
  }
}

export default PostJp;
