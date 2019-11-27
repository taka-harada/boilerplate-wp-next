import React, { Component } from 'react'
import './SearchBtn.scss'

class SearchBtn extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   flg: this.props.flg
    // };
    // this.doAction = this.doAction.bind(this);
  }

  render() {
    return (
      <div className="l-header__ui">
        <div id="nav-search" className={this.props.flg ? "" : "is-open"} onClick={this.props.onClickSearch}><a href="#" aria-label="nav-search"><span></span></a></div>
      </div>
    )
  }
}
export default SearchBtn;
