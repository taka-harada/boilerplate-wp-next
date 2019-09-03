import React, {Component} from 'react'
// import Router, { withRouter } from 'next/router'
import Head from 'next/head'
import Header from '../components/Header/Header'
import GlobalNavi from '../components/GlobalNavi/GlobalNavi'
import RegisterArea from '../components/RegisterArea/RegisterArea'
import Footer from '../components/Footer/Footer'
import ScrollUpBtn from '../components/ScrollUpBtn/ScrollUpBtn'
// import Footer from "../Footer/Index";
// import './Index.scss'

class Layout extends Component {
  render() {
    return (
      <div>
        <Head>
            <title>{ this.props.title }  | Hivelocity (ハイベロシティ) デジタルでビジネスを最適化</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <div id="bst-wrap" className="outer-wrap">
          <div className="l-project-wrap">
            <Header />
            <GlobalNavi />
            {this.props.children}
          </div>
          <RegisterArea />
          <Footer />
          <ScrollUpBtn />
        </div>
      </div>
    );
  }
}
export default Layout;
// class Layout extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     componentDidMount() {
//         window.scrollTo(0, 0)
//     }
//
//     render() {
//         console.log(this.props)
//         let route = this.props.router.route;
//         console.log(route)
//         let className;
//         if(route === "/index" || route === "/") {
//             className = "top"
//         } else {
//             className = "page"
//         }
//             return(
//             <div>
//                 <Head>
//                     <title>{ this.props.title }  | Hivelocity (ハイベロシティ) デジタルでビジネスを最適化</title>
//                     <meta charSet='utf-8' />
//                     <meta name='viewport' content='initial-scale=1.0, width=device-width' />
//                 </Head>
//                 <div id="bst-wrap">
//                     <p>bst-wrap !!</p>
//                     // <div id="hvc-wrap" className={className}>
//                     //     <Header {...this.props} />
//                     //     <PageTitle {...this.props} />
//                     //     {this.props.children}
//                     // </div>
//                     // <Footer/>
//                 </div>
//             </div>
//
//         )
//     }
// }
//
// export default withRouter(Layout)
