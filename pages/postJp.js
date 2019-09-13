import React, { Component } from 'react'
import Error from 'next/error'
import Link from 'next/link'
//import Router, { withRouter } from 'next/router'
import { withRouter } from 'next/router'
import { blogPost } from '../Api/Api'

import Layout from '../components/Layout'
// import ContentAreaBlog from '../components/ContentArea/ContentAreaBlog'

// import TopContent from '../components/Project/Top/TopContent'
// import Slider from '../components/Project/Top/Slider'
// import '../components/Project/Top/Top.scss'

class Post extends Component {

  constructor(props) {
    super(props);
  }

  static async getInitialProps({ query }) {
    const { id } = query
    const res = await blogPost(id)
    const post = await res.json()
    return {
      post
    }
  }

  render () {

    console.log('start post')
    console.log(this.props)
    // const query = router.query
    // console.log(query)
    console.log('end')

    return (
      <Layout title='JP BLOG Single'>
        <article dangerouslySetInnerHTML={ {
          __html: this.props.post.content.rendered
        }}></article>
        <Link href="./index">
          <button>Go to TOP &gt;&gt;</button>
        </Link>
        <Link href="./post">
          <button>Go to POST &gt;&gt;</button>
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
