import React, { Component } from 'react'
import Link from 'next/link'
import Router, { withRouter } from 'next/router'

import Layout from '../components/Layout'
import MainVisual from '../components/organisms/MainVisual/MainVisual'
import ContentArea from '../components/organisms/ContentArea/ContentArea'
// import TopContent from '../components/Project/Top/TopContent'
// import Slider from '../components/Project/Top/Slider'
// import '../components/Project/Top/Top.scss'

class Top extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   data: this.props.data
    // };
  }

  static async getInitialProps({ query, pathname, asPath }) {
    // const res = await blog(query.page)
    // const data = await res.json()

    return { pathname, asPath }
  }

  render() {
    console.log('インデックス start')
    console.log(this.props)
    console.log(this.state)
    console.log('インデックス end')
    return (
      <Layout title="Top Page">
        <MainVisual />
        <ContentArea {...this.props} />
      </Layout>
    )
  }
}

export default withRouter(Top);

// export default () => (
//   <Layout title="Top Page">
//     <MainVisual />
//     <ContentArea />
//     <Link href="./jp">
//       <button>Go to BLOG ARCHIVE &gt;&gt;</button>
//     </Link>
//     <Link href="./other">
//       <button>Go to Other &gt;&gt;</button>
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
