import React, { Component } from 'react'

import ListPostPopular from '../../ContentArea/ListPostPopular'
import Card from '../../atoms/Card/Card'

import PostImage from '../../../static/PostImage'

class RankingPostArea extends Component {

  render() {

    console.log('start rankingarea')
    console.log(this.props)
    console.log('end rankingarea')
    return (
      <div className="l-wrap__outer p-article-bloc p-article-bloc--ranking">
        <div className="l-wrap__inner l-wrap__inner--reco">

          <dl className="p-article-bloc__title c-bloc-title">
            <dt className="jp">ランキング</dt>
            <dd className="en">Weekly Ranking</dd>
          </dl>

          <div className="p-article-bloc__card-wrap">
            <ListPostPopular />
          </div>

        </div>

      </div>
    )
  }
}

export default RankingPostArea;
