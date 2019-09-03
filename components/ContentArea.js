import React, { Component } from 'react'

import PostImage from '../static/PostImage'

class ContentArea extends Component {
  render() {
    return (
      <section className="l-content-area">
        <div className="l-content l-content--top">

          <div className="l-wrap__outer p-article-bloc p-article-bloc--category">
            <div className="l-wrap__inner l-wrap__inner--top">
              <dl className="p-article-bloc__title c-bloc-title">
                <dt className="jp">日本の古都</dt>
                <dd className="en">Ancient City in Japan</dd>
              </dl>

              <div className="p-article-bloc__card-warp">
                <article className="c-card c-card--l">
                  <div className="c-card__img">
                    <div className="img-box"><a href="#"><PostImage fname="eyecatch_01.jpg" alt="eyecatch image" /></a></div>
                    <div className="badge-category badge-ancientcity"><a href="#">日本の古都</a></div>
                  </div>
                  <div className="c-card__txt">
                    <div className="txt-box">
                      <h2><a href="#">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが…</a></h2>
                    </div>
                  </div>
                </article>

                <article className="c-card c-card--l">
                  <div className="c-card__img">
                    <div className="img-box"><a href="#"><PostImage fname="eyecatch_02.jpg" alt="eyecatch image" /></a></div>
                    <div className="badge-category badge-ancientcity"><a href="#">日本の古都</a></div>
                  </div>
                  <div className="c-card__txt">
                    <div className="txt-box">
                      <h2><a href="#">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが…</a></h2>
                    </div>
                  </div>
                </article>

                <article className="c-card c-card--s">
                  <div className="c-card__img">
                    <div className="img-box"><a href="#"><PostImage fname="eyecatch_03.jpg" alt="eyecatch image" /></a></div>
                    <div className="badge-category badge-ancientcity"><a href="#">日本の古都</a></div>
                  </div>
                  <div className="c-card__txt">
                    <div className="txt-box">
                      <h2><a href="#">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが…</a></h2>
                    </div>
                  </div>
                </article>

                <article className="c-card c-card--s">
                  <div className="c-card__img">
                    <div className="img-box"><a href="#"><PostImage fname="eyecatch_04.jpg" alt="eyecatch image" /></a></div>
                    <div className="badge-category badge-ancientcity"><a href="#">日本の古都</a></div>
                  </div>
                  <div className="c-card__txt">
                    <div className="txt-box">
                      <h2><a href="#">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが…</a></h2>
                    </div>
                  </div>
                </article>

                <article className="c-card c-card--s">
                  <div className="c-card__img">
                    <div className="img-box"><a href="#"><PostImage fname="eyecatch_05.jpg" alt="eyecatch image" /></a></div>
                    <div className="badge-category badge-ancientcity"><a href="#">日本の古都</a></div>
                  </div>
                  <div className="c-card__txt">
                    <div className="txt-box">
                      <h2><a href="#">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが…</a></h2>
                    </div>
                  </div>
                </article>
              </div>

              <div className="p-article-bloc__btn">
                <div className="c-btn c-btn--more"><a href="#">一覧を見る</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ContentArea;
