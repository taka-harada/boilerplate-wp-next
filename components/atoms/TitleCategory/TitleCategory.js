import React, { Component } from 'react'

class TitleCategory extends Component {

  render() {

    console.log('カテゴリタイトル start')
    console.log(this.props);
    console.log('カテゴリタイトル end')

    const currentRoute = this.props.route.asPath

    switch (currentRoute) {
      case '/jp/ancient-city/':
        return (
          <dl className="p-archive__title c-bloc-title">
            <dt className="jp">日本の古都</dt>
            <dd className="en">Japanese Food Culture</dd>
          </dl>
        )
        break;
      case "/jp/traditional/":
        return (
          <dl className="p-archive__title c-bloc-title">
            <dt className="jp">日本の伝統</dt>
            <dd className="en">Japanese Food Culture</dd>
          </dl>
        )
        break;
      case "/jp/culture/":
        return (
          <dl className="p-archive__title c-bloc-title">
            <dt className="jp">日本の食文化</dt>
            <dd className="en">Japanese Food Culture</dd>
          </dl>
        )
        break;
      case "/jp/classic-ground/":
        return (
          <dl className="p-archive__title c-bloc-title">
            <dt className="jp">名所・旧跡</dt>
            <dd className="en">Japanese Food Culture</dd>
          </dl>
        )
        break;
      case "/jp/travel-blog/":
        return (
          <dl className="p-archive__title c-bloc-title">
            <dt className="jp">旅人のブログ</dt>
            <dd className="en">Japanese Food Culture</dd>
          </dl>
        )
        break;
      default:
        return (
          <dl className="p-archive__title c-bloc-title">
            <dt className="jp">日本</dt>
          </dl>
        )
    }
  }

}

export default TitleCategory;