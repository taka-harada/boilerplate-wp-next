import React, { Component } from 'react'

import PostImage from '../../static/PostImage'

class Card extends Component {
  render() {
    return (
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

    )
  }
}

export default Card;
