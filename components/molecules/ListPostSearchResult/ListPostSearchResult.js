import React, { Component } from 'react'

import { search } from '../../../Api/Api'
import Card from '../../atoms/Card/Card'

class ListPostSearchResult extends Component {
  constructor(props) {
    super(props);
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

      let keyword = this.props.query.s

      return search(keyword, 1).then(res => res.json())
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
    if (this.props.query.s !== prevProps.query.s) {

      // 2回目以降のfetch
      this.fetchData();

    }
  }

  renderPost() {

    const postMaxNum = 10;
    const postNum = this.state.data.total
    const arrPost = this.state.data.posts.slice(0, postNum);

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

    console.log('リストポストサーチリザルト start')
    console.log(this.props.query.s)
    console.log(this.props)
    console.log(this.state)
    console.log('リストポストサーチリザルト end')

    if (this.state.isLoaded) {
      return this.renderPost();
    } else {
      return <p>spiner</p>
    }
  }

}

export default ListPostSearchResult;
