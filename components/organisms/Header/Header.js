import React, { Component } from 'react'

import MenuBtn from '../../atoms/MenuBtn/MenuBtn'
import SearchBtn from '../../atoms/SearchBtn/SearchBtn'
import SearchArea from '../../molecules/SearchArea/SearchArea'

import './Header.scss'
import { HeaderLogo } from '../../../static/HeaderImage'

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
        <div className="l-header__logo">
          <a href="/">
            <div className="logo">
              <HeaderLogo fname="logo.png" alt="Hivelocity" />
            </div>
          </a>
        </div>
        <SearchBtn onClickSearch={this.onClickSearch} flg={this.state.flg} />
        <SearchArea flg={this.state.flg} />
      </header>
    );
  }
}
export default Header;
