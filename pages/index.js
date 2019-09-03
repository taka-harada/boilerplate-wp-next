import Link from 'next/link'
import Layout from '../components/Layout'
import MainVisual from '../components/MainVisual/MainVisual'
import ContentArea from '../components/ContentArea/ContentArea'
// import TopContent from '../components/Project/Top/TopContent'
// import Slider from '../components/Project/Top/Slider'
// import '../components/Project/Top/Top.scss'

export default () => (
  <Layout title="Top Page">
    <MainVisual />
    <ContentArea />
    <Link href="./other">
      <button>Go to Other &gt;&gt;</button>
    </Link>
  </Layout>
);

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
