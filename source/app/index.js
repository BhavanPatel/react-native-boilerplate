import React, { Component } from "react";
import { Provider } from "react-redux";
import createStore from "../redux/store";
import Router from "../navigation";

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <Router />
      </Provider>
    );
  }
}
