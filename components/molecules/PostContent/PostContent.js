import React, { Component } from 'react'

import './PostContent.scss'

class PostContent extends Component {

  render() {

    // console.log('start content')
    // console.log(this.props)
    // console.log('end content')

    return (
      <section className="p-article__content" dangerouslySetInnerHTML={{__html: this.props.post.content.rendered}}>
      </section>
    )
  }
}

export default PostContent;
