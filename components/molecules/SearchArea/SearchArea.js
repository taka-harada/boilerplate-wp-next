import React, { Component } from 'react'

import './SearchArea.scss'

class SearchArea extends Component {

  render() {
    return (
      <div className={this.props.flg ? "c-search" : "c-search is-open"}>
        <div className="c-search__box">
          <form method="get" action="/" role="search">
            <span className="search-input-text">
              <input type="search" name="s" id="s" className="plchldr" placeholder="キーワード" />
              <input type="submit" value="" id="btn-search" />
            </span>
          </form>
        </div>
      </div>
    )
  }
}
export default SearchArea;
