import React, { Component } from 'react'
import './Button.scss'

// const LoadMore = ({children}) => <div className="c-btn c-btn--more"><a href="#">{children}</a></div>
// const OnlyText = ({children}) => <div className="c-btn"><a href="#">{children}</a></div>

const Button = ({children}) => {

  switch(children){
    case '一覧を見る':
    case 'もっと読む':
      return <div className="c-btn c-btn--more"><a href="#">{children}</a></div>
      break;
    default:
      return <div className="c-btn"><a href="#">{children}</a></div>
  }

  // if(children === '一覧を見る' ){
  //   return (
  //     <div className="c-btn c-btn--more"><a href="#">{children}</a></div>
  //   )
  // }
  // return (
  //   <div className="c-btn"><a href="#">{children}</a></div>
  // )
}

export default Button;
