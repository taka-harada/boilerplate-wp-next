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
    let currentRoute = jpCategoryRoute.test(this.props.route.asPath)

    return (
      <section className="l-content-area">
        <div className="l-content l-content--list">
          <div className="l-wrap__outer p-archive">
            <div className="l-wrap__inner l-wrap__inner--list">
              <dl className="p-archive__title c-bloc-title">
                <TitleCategory
                  route={this.props.route}
                />
              </dl>

              <section className="p-archive__list">
                <div id="list-inner" className="p-archive__list--head">
                  {currentRoute ? <ListPostBlogCategory route={this.props.route} /> : <ListPostBlog route={this.props.route} />}
                </div>
              </section>

              <div className="p-archive__btn">
                <Button >もっと読む</Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <PopularPostArea route={this.props.route} />
        </div>
      </section>
    )
  }
}

export default ContentAreaJpArchive;
