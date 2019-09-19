import React, { Component } from 'react'

import './PostTitle.scss'

class PostTitle extends Component {

  render() {

    console.log('start PostTitle')
    console.log(this.props);
    console.log('end PostTitle')

    return (
      <header className="p-article__header">
        <h1>{this.props.post.title.rendered}</h1>
        <ul className="post-date">
          <li className="date">2018.12.20</li>
          <li className="update">2019.08.23<span>Update</span></li>
        </ul>
        <div className="eyecatch">
          <div className="eyecatch-image">
            <div className="img-box"><img src={this.props.post.source_url} /></div>
            <div className="badge-category badge-ancientcity"><a href="#">日本の古都</a></div>
          </div>
        </div>
      </header>
    )
  }
}

export default PostTitle;
