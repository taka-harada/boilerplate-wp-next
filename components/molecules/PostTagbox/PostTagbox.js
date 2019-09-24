import React, { Component } from 'react'

import './PostTagbox.scss'

class PostTagbox extends Component {

  render() {

    return (
      <section className="p-articlefoot-tags">
        <ul>
          <li><a href="#">和食</a></li>
          <li><a href="#">日本食</a></li>
        </ul>
      </section>
    )
  }
}

export default PostTagbox;
