import React, { Component } from 'react'

import ListPostBlogCategoryIndex from '../../molecules/ListPostBlogCategoryIndex/ListPostBlogCategoryIndex'
import Button from '../../atoms/Button/Button'
import TitleCategory from '../../atoms/TitleCategory/TitleCategory'

class IndexArea extends Component {

  render() {
    console.log('インデックスエリア start')
    console.log(this.props)
    console.log('インデックスエリア　end')
    return (
      <div className="l-wrap__outer p-article-bloc p-article-bloc--category">
        <div className="l-wrap__inner l-wrap__inner--top">

          <dl className="p-article-bloc__title c-bloc-title">
            <dt className="jp">{this.props.jpTitle}</dt>
            <dd className="en">{this.props.enTitle}</dd>
          </dl>

          <div className="p-article-bloc__card-wrap">
            <ListPostBlogCategoryIndex category={this.props.category} />
          </div>

          <div className="p-article-bloc__btn">
            <Button path={this.props.category} >一覧を見る</Button>
          </div>

        </div>
      </div>
    )
  }

}

export default IndexArea;