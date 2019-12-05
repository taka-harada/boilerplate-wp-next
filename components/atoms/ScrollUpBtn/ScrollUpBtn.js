import React, { Component, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import './ScrollUpBtn.scss'

const ScrollUpBtn = () => {

  // showOnScrollに初期フラグをtrueにセット
  const [showOnScroll, setShowOnScroll] = useState(true)

  useScrollPosition(({ prevPos, currPos }) => {

    const isShow = currPos.y > prevPos.y

    // スクロールダウンするとisShowはfalse、スクロールアップするとisShowはtrue
    if (isShow !== showOnScroll) setShowOnScroll(isShow)
  },
    [showOnScroll],
    false,
    false,
    300
  )

  return (
    <div className={showOnScroll ? "c-page-top" : "c-page-top show"} onClick={event => { scroll.scrollToTop() }}>
      <a href="#"><img src="../../static/common/page_top_icon.svg" alt="pagetop" /></a>
    </div>
  )

}

// class ScrollUpBtn extends Component {

//   constructor(props) {
//     super(props)
//     this.node = React.createRef()
//   }

//   state = {
//     scrollTop: 0
//   }

//   scrollToTop = () => {
//     scroll.scrollToTop();
//   };

//   render() {
//     return (
//       <div className="c-page-top show" onClick={this.scrollToTop}>
//         <a href="#"><img src="../../static/common/page_top_icon.svg" alt="pagetop" /></a>
//       </div>
//     );
//   }
// }

export default ScrollUpBtn;
