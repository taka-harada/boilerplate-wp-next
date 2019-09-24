import React, { Component } from 'react'

import SlideMenu from '../../organisms/SlideMenu/SlideMenu'
import './MenuBtn.scss'

class MenuBtn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flg: true,
    };
    this.onClickMenu = this.onClickMenu.bind(this);
  }

  // onClickMenu(e) {
  //   this.setState({
  //     flg: !this.state.flg,
  //   });
  // }

  onClickMenu() {
    this.setState((state) => ({
      flg: !state.flg,
    }));
  }

  render() {
    return (
      <nav className={this.state.flg ? 'c-nav-menu' : 'c-nav-menu is-open alp' } onClick={this.onClickMenu}>
        <SlideMenu />
        <div id="nav-btn"><a href="#" aria-label="nav-btn"><span></span><span></span><span></span></a></div>
      </nav>
    )
  }
}
export default MenuBtn;
