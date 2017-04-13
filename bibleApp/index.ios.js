/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as firebase from 'firebase';
import App from './src/components/App';

export default class bibleApp extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('bibleApp', () => bibleApp);