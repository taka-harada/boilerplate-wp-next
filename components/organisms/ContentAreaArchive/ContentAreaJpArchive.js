import React, { Component } from 'react'

import ListPostBlog from '../../molecules/ListPostBlog/ListPostBlog'

/* molecules */
import ListPostBlogCategory from '../../molecules/ListPostBlogCategory/ListPostBlogCategory'
import PopularPostArea from '../../molecules/PopularPostArea/PopularPostArea'

/* atoms */
import TitleCategory from '../../atoms/TitleCategory/TitleCategory'
import Button from '../../atoms/Button/Button'

import './ContentAreaJpArchive.scss'
import '../ContentArea/Title.scss'

class ContentAreaJpArchive extends Component {
  render() {

    let jpCategoryRoute = /\/jp\/.*\//
    let currentRoute = jpCategoryRoute.test(this.props.router.asPath)
    console.log('カテゴリアーカイブstart')
    console.log(this.props)
    console.log(this.state)
    console.log('カテゴリアーカイブend')

    return (
      <section className="l-content-area">
        <div className="l-content l-content--list">
          <div className="l-wrap__outer p-archive">
            <div className="l-wrap__inner l-wrap__inner--list">
              <dl className="p-archive__title c-bloc-title">
                <TitleCategory
                  router={this.props.router}
                />
              </dl>

              <section className="p-archive__list">
                <div id="list-inner" className="p-archive__list--head">
                  {currentRoute ? <ListPostBlogCategory router={this.props.router} /> : <ListPostBlog route={this.props.router} />}
                </div>
              </section>

              <div className="p-archive__btn">
                <Button >もっと読む</Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <PopularPostArea {...this.props} />
        </div>
      </section>
    )
  }
}

export default ContentAreaJpArchive;
