import React, { Component } from 'react'

/* molecules */
import ListPostSearchResult from '../../molecules/ListPostSearchResult/ListPostSearchResult'

/* atoms */
import TitleCategory from '../../atoms/TitleCategory/TitleCategory'
import Button from '../../atoms/Button/Button'


class SearchResultArea extends Component {
  render() {

    console.log('サーチリザルトエリア start')
    console.log(this.props)
    console.log(this.state)
    console.log('サーチリザルトエリア end')

    return (
      <section className="l-content-area">
        <div className="l-content l-content--list">
          <div className="l-wrap__outer p-archive">
            <div className="l-wrap__inner l-wrap__inner--list">
              <dl className="p-archive__title c-bloc-title">
              </dl>

              <section className="p-archive__list">
                <div id="list-inner" className="p-archive__list--head">
                  <ListPostSearchResult query={this.props.query} />
                </div>
              </section>

              <div className="p-archive__btn">
                <Button >もっと読む</Button>
              </div>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

export default SearchResultArea;
