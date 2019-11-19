import React, { Component } from 'react'
import Link from "next/link";
import './Button.scss'

// const LoadMore = ({children}) => <div className="c-btn c-btn--more"><a href="#">{children}</a></div>
// const OnlyText = ({children}) => <div className="c-btn"><a href="#">{children}</a></div>

const Button = ({ path, children }) => {

  switch (children) {
    case '一覧を見る':
    case 'もっと読む':
      return <div className="c-btn c-btn--more"><Link as={path} href={{ pathname: "/categoryJp", asPath: path, query: { id: path } }}><a>{children}</a></Link></div>
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
