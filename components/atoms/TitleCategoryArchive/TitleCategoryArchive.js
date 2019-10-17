import React, { Component } from 'react'

class TitleCategoryArchive extends Component {

  render() {

    // console.log('カテゴリタイトル start')
    // console.log(this.props);
    // console.log('カテゴリタイトル end')

    const currentRoute = this.props.route.asPath

    switch (currentRoute) {
      case '/jp/ancient-city/':
        return <dt className="jp">日本の古都</dt>
        break;
      case "/jp/traditional/":
        return <dt className="jp">日本の伝統</dt>
        break;
      case "/jp/culture/":
        return <dt className="jp">日本の食文化</dt>
        break;
      case "/jp/classic-ground/":
        return <dt className="jp">名所・旧跡</dt>
        break;
      case "/jp/travel-blog/":
        return <dt className="jp">旅人のブログ</dt>
        break;
      default:
        return <dt className="jp">日本</dt>
    }
  }

}

export default TitleCategoryArchive;