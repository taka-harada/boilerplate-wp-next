import React, { Component } from 'react'
import Error from 'next/error'
import Router, { withRouter } from 'next/router'
//import { withRouter } from 'next/router'
import { blogPost } from '../Api/Api'

import Layout from '../components/Layout'
import PostJp from '../components/organisms/ContentAreaPost/PostJp'

// import TopContent from '../components/Project/Top/TopContent'
// import Slider from '../components/Project/Top/Slider'
// import '../components/Project/Top/Top.scss'

class Post extends Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ query, pathname, asPath }) {
    const { id } = query
    const res = await blogPost(id)
    const post = await res.json()
    return {
      post, query, pathname, asPath
    }
  }

  render() {
    console.log('記事詳細pages start')
    console.log(this.props)
    console.log('記事詳細pages end')

    return (
      <Layout title='JP BLOG Single'>
        <PostJp {...this.props} />
      </Layout>
    );
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
