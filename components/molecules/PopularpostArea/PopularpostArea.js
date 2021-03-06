import React, { Component } from 'react'

/* molecules */
import ListPostBlogPopularIndex from '../../molecules/ListPostBlogPopularIndex/ListPostBlogPopularIndex'

/* atoms */
import Button from '../../atoms/Button/Button'

import PostImage from '../../../static/PostImage'

class PopularPostArea extends Component {

  render() {

    console.log('ポピュラーポスト')
    console.log(this.props)
    console.log(this.state)
    let categoryRoute = this.props.route

    return (
      <div className="l-wrap__outer p-article-bloc p-article-bloc--recommend">
        <div className="l-wrap__inner l-wrap__inner--reco">

          <dl className="p-article-bloc__title c-bloc-title">
            <dt className="jp">おすすめ記事</dt>
            <dd className="en">category</dd>
          </dl>

          <div className="p-article-bloc__card-warp">
            <div className="yarpp-related">
              <ListPostBlogPopularIndex {...this.props} />
            </div>
          </div>

          <div className="p-archive__btn">
            {categoryRoute && (
              <Button path={this.props.route.asPath}>一覧を見る</Button>
            )}
            {!categoryRoute && (
              <Button>一覧を見る</Button>
            )}
          </div>

        </div>
      </div>
    )
  }
}

export default PopularPostArea;
