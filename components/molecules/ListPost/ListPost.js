import React, { Component } from 'react'

import fetch from 'isomorphic-unfetch'
import { url } from '../../../Api/Api'
import Card from '../../atoms/Card/Card'

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
    const postNum = 5;
    const arrPost = this.state.data.slice(0, postNum);

    const blogPost = arrPost.map((item, index) => {
      return (
        <Card {...item} key={item.id} lcardFlg={index < 2} route={'top'} />
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
      return this.renderPost();
    } else {
      return <p>spiner</p>
    }
  }

}

export default ListPost;
