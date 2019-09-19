import React, { Component } from 'react'

import ListPostPopular from '../ContentArea/ListPostPopular'
import Card from '../atoms/Card/Card'
import Button from '../atoms/Button/Button'

import PostImage from '../../static/PostImage'

class PopularpostArea extends Component {

  render() {

    return (
      <div className="l-wrap__outer p-article-bloc p-article-bloc--recommend">
        <div className="l-wrap__inner l-wrap__inner--reco">

          <dl className="p-article-bloc__title c-bloc-title">
            <dt className="jp">人気の記事</dt>
            <dd className="en">category</dd>
          </dl>

          <div className="p-article-bloc__card-warp">
            <div className="yarpp-related">
              <ListPostPopular />
            </div>
          </div>

          <div className="p-archive__btn">
            <Button>一覧を見る</Button>
          </div>

        </div>
      </div>
    )
  }
}

export default PopularpostArea;
