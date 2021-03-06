import React, { Component } from "react";
import Link from "next/link";
import Moment from "react-moment";
import "./Card.scss";

class Card extends Component {
  renderTopCard() {
    return (
      <article className={this.props.lcardFlg ? "c-card c-card--l" : "c-card c-card--s"}>
        <div className="c-card__img">
          <div className="img-box">
            <Link as={`/jp/${this.props.id}`} href={{ pathname: "/postJp", query: { id: this.props.id } }}>
              <a>
                <img src={this.props.featured_image} alt="eyecatch image" />
              </a>
            </Link>
          </div>
          {this.props.jpcategory && (
            <div className="badge-category badge-ancientcity">
              <Link as={`/jp/${this.props.jpcategory[0].slug}`} href={{ pathname: "/categoryJp", query: { slug: this.props.slug } }}>
                <a>{this.props.jpcategory[0].name}</a>
              </Link>
            </div>
          )}
        </div>
        <div className="c-card__txt">
          <div className="txt-box">
            <h2>
              <Link
                as={`/jp/${this.props.id}`}
                href={{ pathname: "/postJp", query: { id: this.props.id } }}
              >
                <a>{this.props.title.rendered}</a>
              </Link>
            </h2>
          </div>
        </div>
      </article>
    );
  }

  renderArchiveCard() {
    return (
      <article className={this.props.lcardFlg ? "c-card c-card--archive-row" : "c-card c-card--archive-column"}>
        <div className="c-card__img">
          <div className="img-box">
            <Link
              as={`/jp/${this.props.id}`}
              href={{ pathname: "/postJp", query: { id: this.props.id } }}
            >
              <a>
                <img src={this.props.featured_image} alt="eyecatch image" />
              </a>
            </Link>
          </div>
          {this.props.jpcategory && (
            <div className="badge-category badge-ancientcity">
              <Link
                as={`/jp/tag/${this.props.jpcategory[0].slug}`}
                href={{
                  pathname: "/categoryJp",
                  query: { slug: this.props.slug }
                }}
              >
                <a>{this.props.jpcategory[0].name}</a>
              </Link>
            </div>
          )}
        </div>
        <div className="c-card__txt">
          <div className="txt-box">
            <h3 class="date"><Moment format="YYYY.MM.DD">{this.props.date}</Moment></h3>
            <h2>
              <Link
                as={`/jp/${this.props.id}`}
                href={{ pathname: "/postJp", query: { id: this.props.id } }}
              >
                <a>{this.props.title.rendered}</a>
              </Link>
            </h2>
          </div>
        </div>
      </article>
    );
  }

  renderPopularCard() {
    return (
      <article
        className={
          this.props.lcardFlg
            ? "c-card c-card--reco-l"
            : "c-card c-card--reco-s"
        }
      >
        <div className="c-card__img">
          <div className="img-box">
            <Link
              as={`/jp/${this.props.id}`}
              href={{ pathname: "/postJp", query: { id: this.props.id } }}
            >
              <a>
                <img src={this.props.featured_image} alt="eyecatch image" />
              </a>
            </Link>
          </div>
          {this.props.jpcategory && (
            <div className="badge-category badge-ancientcity">
              <Link
                as={`/jp/${this.props.jpcategory[0].slug}`}
                href={{
                  pathname: "/categoryJp",
                  query: { slug: this.props.slug }
                }}
              >
                <a>{this.props.jpcategory[0].name}</a>
              </Link>
            </div>
          )}
        </div>
        <div className="c-card__txt">
          <div className="txt-box">
            <h2>
              <Link
                as={`/jp/${this.props.id}`}
                href={{ pathname: "/postJp", query: { id: this.props.id } }}
              >
                <a>{this.props.title.rendered}</a>
              </Link>
            </h2>
          </div>
        </div>
      </article>
    );
  }

  render() {

    console.log('カード start')
    console.log(this.props)
    console.log(this.state)
    console.log('カード end')
    const currentRoute = this.props.route;

    switch (currentRoute) {
      case "archive":
        return this.renderArchiveCard();
      case "popular":
        return this.renderPopularCard();
      default:
        return this.renderTopCard();
    }
  }
}

export default Card;
