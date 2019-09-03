import React, { Component } from 'react'

import MenuBtn from './MenuBtn'
import HeaderLogoArea from './HeaderLogoArea'
import SearchBtn from './SearchBtn'
import SearchArea from './SearchArea'

import './Header.scss'

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      flg: true
    };
    this.onClickSearch = this.onClickSearch.bind(this);
  }

  onClickSearch() {
    this.setState({
      flg: !this.state.flg
    });
  }

  render() {
    return (
      <header className="l-header">
        <MenuBtn />
        <HeaderLogoArea />
        <SearchBtn onClickSearch={this.onClickSearch} flg={this.state.flg} />
        <SearchArea flg={this.state.flg} />
      </header>
    );
  }
}
export default Header;
