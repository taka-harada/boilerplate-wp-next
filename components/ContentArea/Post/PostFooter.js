import React, { Component } from 'react'

import PostTagbox from './PostTagbox'
import PostAuthorbox from './PostAuthorbox'
import PostImage from '../../../static/PostImage'
import './PostFooter.scss'

class PostFooter extends Component {

  render() {

    return (
      <footer className="p-article__footer">

        <PostTagbox />
        <PostAuthorbox />

      </footer>
    )
  }
}

export default PostFooter;
