// pages/_app.js
import React from "react";
// import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import makeStore from "../src/store";

class MyApp extends App {

  static async getInitialProps({Component, ctx}) {
    console.log('init props')
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return {pageProps};
  }

  render() {
    const {Component, pageProps, store} = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }

}

export default withRedux(makeStore)(MyApp);