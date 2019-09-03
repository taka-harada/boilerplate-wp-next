import React, { Component } from 'react'

//import Card from './Card'
import './Card.scss'
import PostImage from '../../static/PostImage'


class ListPost extends Component {
  render() {
    return (
      <div className="p-article-bloc__card-warp">

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
    )
  }
}

export default ListPost;
