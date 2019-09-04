import React, { Component } from 'react'

import fetch from 'isomorphic-unfetch'
import { url } from '../../Api/Api'
import Card from '../atoms/Card/Card'

class ListPost extends Component {
  constructor() {
    super();
    this.isLoading = false;
    this.fetchData = this.fetchData.bind(this);
    this.renderPost = this.renderPost.bind(this);
    this.state = {
      data: [],
      isLoaded: false
    }
  }

  fetchData() {
    if (!this.isLoading) {
      console.log(this.props)
      this.isLoading = true;
      const link = `${url}wp/v2/blog`
      return fetch(link).then(res => res.json())
      .then(data => {
        this.setState({
          data: data,
          isLoaded: true
        })
      });
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  renderPost() {
    const postNum = 3;
    const blogPost = this.state.data.slice(0, postNum).map((item, index) => {
      return (
        <Card {...item} key={item.id} />
      )
    });
    if(blogPost.length > 0) {
      return blogPost
    } else {
      return (
        <p>関連記事はありません。</p>
      )
    }
  }

  render() {
    if(this.state.isLoaded) {
      return (
        <div className="p-article-bloc__card-wrap">
          {this.renderPost()}
        </div>
      );
    } else {
      return (
        <div className="p-article-bloc__card-wrap">
          <p>spiner</p>
        </div>
      );
    }
  }

  // render() {
  //   return (
  //     <div className="p-article-bloc__card-warp">
  //
  //       <article className="c-card c-card--l">
  //         <div className="c-card__img">
  //           <div className="img-box"><a href="#"><PostImage fname="eyecatch_02.jpg" alt="eyecatch image" /></a></div>
  //           <div className="badge-category badge-ancientcity"><a href="#">日本の古都</a></div>
  //         </div>
  //         <div className="c-card__txt">
  //           <div className="txt-box">
  //             <h2><a href="#">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが…</a></h2>
  //           </div>
  //         </div>
  //       </article>
  //
  //       <article className="c-card c-card--l">
  //         <div className="c-card__img">
  //           <div className="img-box"><a href="#"><PostImage fname="eyecatch_02.jpg" alt="eyecatch image" /></a></div>
  //           <div className="badge-category badge-ancientcity"><a href="#">日本の古都</a></div>
  //         </div>
  //         <div className="c-card__txt">
  //           <div className="txt-box">
  //             <h2><a href="#">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが…</a></h2>
  //           </div>
  //         </div>
  //       </article>
  //
  //       <article className="c-card c-card--s">
  //         <div className="c-card__img">
  //           <div className="img-box"><a href="#"><PostImage fname="eyecatch_03.jpg" alt="eyecatch image" /></a></div>
  //           <div className="badge-category badge-ancientcity"><a href="#">日本の古都</a></div>
  //         </div>
  //         <div className="c-card__txt">
  //           <div className="txt-box">
  //             <h2><a href="#">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが…</a></h2>
  //           </div>
  //         </div>
  //       </article>
  //
  //       <article className="c-card c-card--s">
  //         <div className="c-card__img">
  //           <div className="img-box"><a href="#"><PostImage fname="eyecatch_04.jpg" alt="eyecatch image" /></a></div>
  //           <div className="badge-category badge-ancientcity"><a href="#">日本の古都</a></div>
  //         </div>
  //         <div className="c-card__txt">
  //           <div className="txt-box">
  //             <h2><a href="#">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが…</a></h2>
  //           </div>
  //         </div>
  //       </article>
  //
  //       <article className="c-card c-card--s">
  //         <div className="c-card__img">
  //           <div className="img-box"><a href="#"><PostImage fname="eyecatch_05.jpg" alt="eyecatch image" /></a></div>
  //           <div className="badge-category badge-ancientcity"><a href="#">日本の古都</a></div>
  //         </div>
  //         <div className="c-card__txt">
  //           <div className="txt-box">
  //             <h2><a href="#">記事のタイトルが入ります記事のタイトルが入ります記事のタイトルが…</a></h2>
  //           </div>
  //         </div>
  //       </article>
  //     </div>
  //   )
  // }
}

export default ListPost;
