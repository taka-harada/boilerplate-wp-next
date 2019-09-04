import React, { Component } from 'react'
import { animateScroll as scroll } from 'react-scroll'

import './ScrollUpBtn.scss'

class ScrollUpBtn extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="c-page-top show" onClick={this.scrollToTop}>
        <a href="#"><img src="../../static/common/page_top_icon.svg" alt="pagetop" /></a>
      </div>
    );
  }
}

export default ScrollUpBtn;
