/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Firebase from './src/config/firebase';
import App from './src/components/App';


export default class bibleApp extends Component {
  constructor(props){
    super(props);

    Firebase.initialise();
  }

  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('bibleApp', () => bibleApp);
