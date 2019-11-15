import React, { Component } from 'react'

import fetch from 'isomorphic-unfetch'
import { category, url, postType } from '../../../Api/Api'
import Card from '../../atoms/Card/Card'

class ListPostBlogCategoryIndex extends Component {
  constructor(props) {
    super(props);
    this.isLoading = false;
    this.fetchData = this.fetchData.bind(this);
    this.renderPost = this.renderPost.bind(this);
    this.state = {
      data: [],
      isLoaded: false,
      categoryName: props.category
    }
  }

  fetchData() {
    if (this.isLoading === false) {
      let categoryName = this.props.category

      return category(categoryName, 1).then(res => res.json())
        .then(data => {
          this.setState({
            data: data,
            isLoaded: true,
            isLoading: false
          })
        })
    }
  }

  componentDidMount() {

    //1回目のfetch
    this.fetchData();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.route.asPath !== prevProps.route.asPath) {

  //     // 2回目以降のfetch
  //     this.fetchData();

  //   }
  // }

  renderPost() {

    const postMaxNum = 5;
    const arrPost = this.state.data.posts.slice(0, postMaxNum);

    const blogPost = arrPost.map((item, index) => {
      return (
        <Card {...item} key={item.id} lcardFlg={index < 2} route={'index'} />
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

export default ListPostBlogCategoryIndex;
