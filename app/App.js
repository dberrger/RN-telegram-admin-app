import React, { Component } from "react";
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { store, persistor } from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react'
import ApplicationView from "./containers/ApplicationView";


export default class App extends Component {

  render() {
    
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApplicationView/>
        </PersistGate>
      </Provider>
    );
  }
}
