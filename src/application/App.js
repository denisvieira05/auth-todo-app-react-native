import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import store from './config/store'
import AppNavigatorContainer from "./config/app-navigator";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigatorContainer />
      </Provider>
    );
  }
}

export default App;