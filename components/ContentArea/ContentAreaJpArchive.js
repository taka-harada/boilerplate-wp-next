import React, { Component } from 'react'

import ListPostBlog from '../molecules/ListPostBlog/ListPostBlog'
import PopularpostArea from '../molecules/PopularpostArea/PopularpostArea'
import Button from '../atoms/Button/Button'

import PostImage from '../../static/PostImage'
import './ContentAreaJpArchive.scss'
import './Title.scss'

class ContentAreaJpArchive extends Component {

  render() {

    // console.log('ContentAreaBlog のstateを表示');
    // console.log('start')
    // console.log(this.state);
    // console.log('end')

    return (
      <section className="l-content-area">

        <div className="l-content l-content--list">

          <div className="l-wrap__outer p-archive">
            <div className="l-wrap__inner l-wrap__inner--list">

              <dl className="p-archive__title c-bloc-title">
                <dt className="jp">日本</dt>
              </dl>

              <section className="p-archive__list">
                <div id="list-inner" className="p-archive__list--head">
                  <ListPostBlog />
                </div>
              </section>

              <div className="p-archive__btn">
                <Button>もっと読む</Button>
              </div>

            </div>
          </div>
        </div>

        <div>
          <PopularpostArea />
        </div>
      </section>
    )
  }
}

export default ContentAreaJpArchive;
