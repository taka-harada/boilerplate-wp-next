import React, { Component } from 'react'
import Link from 'next/link'
import Router, { withRouter } from 'next/router'
import { blog } from '../Api/Api'

import Layout from '../components/Layout'
import ContentAreaBlog from '../components/ContentArea/ContentAreaBlog'
// import TopContent from '../components/Project/Top/TopContent'
// import Slider from '../components/Project/Top/Slider'
// import '../components/Project/Top/Top.scss'

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  static async getInitialProps({query, pathname, asPath}) {
    const res = await blog(query.page)
    const data = await res.json()

    return {data, pathname, asPath}
  }

  render () {

    // console.log('start')
    // const router = this.props.router
    // console.log(router)
    // const query = router.query
    // console.log(query)
    // console.log('end')

    return (
      <Layout title='JP BLOG アーカイブ'>
        <ContentAreaBlog data={this.state.data} route={this.props.router}/>
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

export default withRouter(Post);
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
