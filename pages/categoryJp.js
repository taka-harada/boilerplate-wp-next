import React, { Component } from 'react'
import Link from 'next/link'
import Router, { withRouter } from 'next/router'
import { category } from '../Api/Api'

import Layout from '../components/Layout'
import ContentAreaJpArchive from '../components/ContentArea/ContentAreaJpArchive'
// import TopContent from '../components/Project/Top/TopContent'
// import Slider from '../components/Project/Top/Slider'
// import '../components/Project/Top/Top.scss'

class Archive extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  static async getInitialProps({query, pathname, asPath}) {

    // const {id, apiRoute} = query
    // const response = await blogPost(id)
    // const post = await response.json()

    const res = await category(asPath, 1)
    const data = await res.json()

    return {data, query, pathname, asPath}
  }

  render () {

    console.log('start cate')
    console.log(this.props)
    console.log('end cate')

    return (
      <Layout title='JP CATEGORY アーカイブ'>
        <ContentAreaJpArchive data={this.state.data} route={this.props.router}/>
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
// export default () => (
//   <Layout title="Archive Blog Page">
//     <ContentAreaBlog />
//     <Link href="./index">
//       <button>Go to TOP &gt;&gt;</button>
//     </Link>
//     <Link href="./other">
//       <button>Go to OTHER &gt;&gt;</button>
//     </Link>
//   </Layout>
// );

// export default withRouter(class extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         let lang = this.props.router.query.lang
//         return (
//             <Layout title="Home">
//                 <div>
//                     <p>hoge</p>
//                 // <Slider />
//                 // <TopContent lang={lang}/>
//                 </div>
//             </Layout>
//         );
//     }
// })
