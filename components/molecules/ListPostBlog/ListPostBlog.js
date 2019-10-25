import React, { Component } from 'react'

import fetch from 'isomorphic-unfetch'
import { blog, url, postType } from '../../../Api/Api'
import Card from '../../atoms/Card/Card'

class ListPostBlog extends Component {
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
      return blog().then(res => res.json())
        .then(data => {
          this.setState({
            data: data,
            isLoaded: true,
            isLoading: false
          })
        });
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  renderPost() {
    const postNum = 10;
    const arrPost = this.state.data.slice(0, postNum);

    const blogPost = arrPost.map((item, index) => {
      return (
        <Card {...item} key={item.id} lcardFlg={index < 2} route={'archive'} />
      )
    });

    if (blogPost.length > 0) {
      return blogPost
    } else {
      return (
        <p>関連記事はありません。</p>
      )
    }
  }

  render() {

    if (this.state.isLoaded) {
      return this.renderPost();
    } else {
      return <p>spiner</p>
    }
  }

}

export default ListPostBlog;
