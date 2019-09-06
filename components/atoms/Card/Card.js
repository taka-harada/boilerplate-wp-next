import React, { Component } from 'react'

import PostImage from '../../../static/PostImage'
import './Card.scss'

class Card extends Component {

  renderTopCard() {
    return (
      <article className={this.props.lcardFlg ? 'c-card c-card--l' : 'c-card c-card--s' }>
        <div className="c-card__img">
          <div className="img-box"><a href="#"><img src={this.props.source_url} alt="eyecatch image" /></a></div>
          <div className="badge-category badge-ancientcity"><a href="#">日本の古都</a></div>
        </div>
        <div className="c-card__txt">
          <div className="txt-box">
            <h2><a href="#">{this.props.title.rendered}</a></h2>
          </div>
        </div>
      </article>
    )
  }

  renderArchiveCard() {
    return (
      <article className={this.props.lcardFlg ? 'c-card c-card--archive-row' : 'c-card c-card--archive-column' }>
        <div className="c-card__img">
          <div className="img-box"><a href="#"><img src={this.props.source_url} alt="eyecatch image" /></a></div>
          <div className="badge-category badge-ancientcity"><a href="#">日本の古都</a></div>
        </div>
        <div className="c-card__txt">
          <div className="txt-box">
            <h2><a href="#">{this.props.title.rendered}</a></h2>
          </div>
        </div>
      </article>
    )
  }

  renderPopularCard() {
    return (
      <article className={this.props.lcardFlg ? 'c-card c-card--reco-l' : 'c-card c-card--reco-s' }>
        <div className="c-card__img">
          <div className="img-box"><a href="#"><img src={this.props.source_url} alt="eyecatch image" /></a></div>
          <div className="badge-category badge-ancientcity"><a href="#">日本の古都</a></div>
        </div>
        <div className="c-card__txt">
          <div className="txt-box">
            <h2><a href="#">{this.props.title.rendered}</a></h2>
          </div>
        </div>
      </article>
    )
  }

  render() {

    const currentRoute = this.props.route

    switch(currentRoute){
      case 'archive':
        return this.renderArchiveCard()
      case 'popular':
        return this.renderPopularCard()
      default:
        return this.renderTopCard()

    }
  }
}

export default Card;
