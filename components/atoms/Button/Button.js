import React, { Component } from 'react'
import './Button.scss'

const LoadMore = ({children}) => <div className="c-btn c-btn--more"><a href="#">{children}</a></div>
const OnlyText = ({children}) => <div className="c-btn"><a href="#">{children}</a></div>

const Button = ({children}) => {
  if(children === '一覧を見る' ){
    return <LoadMore children={children} />
  }
  return <OnlyText children={children} />
}

export default Button;
