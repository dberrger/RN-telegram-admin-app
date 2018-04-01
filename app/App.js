import React, { Component } from "react";
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import configureStore from './store/configureStore';

import ApplicationView from "./containers/ApplicationView";

const store = configureStore({});


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApplicationView/>
      </Provider>
    );
  }
}
