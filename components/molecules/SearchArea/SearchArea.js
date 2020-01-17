import React, { Component } from 'react'
import Router from 'next/router'

import { search } from '../../../Api/Api'
import './SearchArea.scss'

class SearchArea extends Component {

  constructor(props) {
    super(props);
    this.getResults = this.getResults.bind(this);
    this.state = {
      keyword: '', // Default keyword
      results: [], // Results from search
      loading: false, // Are we still loading the previous results ?
      searched: false // Are we actually even searching (any words in input) ?
    };
  }

  getResults(e) {
    e.preventDefault()
    this.setState({
      searched: true,
    })
    let searchKeyword = this.state.keyword

    Router.push({
      pathname: '/search',
      query: { s: searchKeyword }
    })

    // if (this.state.loading) {
    //   return
    // }

    // // Get the input value
    // const targetKeyword = e.target.value

    // this.setState({
    //   loading: true,
    //   searched: true,
    // })

    // return search(targetKeyword, 1).then(res => res.json())
    //   .then(results => {
    //     this.setState({
    //       results: results,
    //       loading: true,
    //       searched: true
    //     })
    //   })
  }


  // onChange(e) {
  //   const currentVal = e.target.value
  //   const newVal = currentVal.replace(/[^0-9]/g, '') // 数字でない場合は削除
  //   this.setState({
  //     value: newVal
  //   })
  // }

  // onSubmit(e) {
  //   window.alert('値を送信: ' + this.state.value)
  //   e.preventDefault()
  // }

  render() {

    console.log('サーチ start')
    console.log(this.state)
    console.log(this.props)
    console.log('サーチ end')
    return (
      <div className={this.props.flg ? "c-search" : "c-search is-open"}>
        <div className="c-search__box">
          <form onSubmit={(e) => this.getResults(e)} method="get" action="/" role="search">
            <span className="search-input-text">
              <input onChange={e => this.setState({ keyword: e.target.value })} type="text" />
            </span>
          </form>
        </div>
      </div>
    )
  }
}
export default SearchArea;
