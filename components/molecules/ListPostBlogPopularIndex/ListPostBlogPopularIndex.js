import React, { Component } from 'react'

import { category } from '../../../Api/Api'
import Card from '../../atoms/Card/Card'

class ListPostBlogPopularIndex extends Component {
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
    if (this.isLoading === false) {

      return category(this.props.route.asPath, 1).then(res => res.json())
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

  componentDidUpdate(prevProps, prevState) {
    if (this.props.route.asPath !== prevProps.route.asPath) {

      // 2回目以降のfetch
      this.fetchData();

    }
  }


  renderPost() {
    const postMaxNum = 5;
    const postNum = this.state.data.total
    const arrPost = this.state.data.posts.slice(0, postMaxNum);

    const popularPost = arrPost.map((item, index) => {
      return (
        <Card {...item} key={item.id} lcardFlg={index < 2} route={'popular'} />
      )
    });

    if (popularPost.length > 0) {
      return popularPost
    } else {
      return (
        <p>関連記事はありません</p>
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

export default ListPostBlogPopularIndex;
