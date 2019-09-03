import React from "react"
import App, { Container } from "next/app"
import '../node_modules/normalize.css/normalize.css'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
