import React, { Component } from 'react'
import Link from 'next/link'
import Router, { withRouter } from 'next/router'

import Layout from '../components/Layout'
import SearchResultArea from '../components/organisms/SearchResultArea/SearchResultArea'

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  static async getInitialProps({ query, pathname, asPath }) {

    return { query, pathname, asPath }
  }

  render() {

    console.log('サーチテンプレ start')
    console.log(this.props)
    console.log('サーチテンプレ end')

    return (
      <Layout title='SEARCH RESULT'>
        <SearchResultArea query={this.props.query} />
        <p>Search Resultテンプレート</p>
        <Link href="./index">
          <button>Go to TOP &gt;&gt;</button>
        </Link>
        <Link href="./other">
          <button>Go to OTHER &gt;&gt;</button>
        </Link>
      </Layout>
    )
  }
}

export default withRouter(Archive);
