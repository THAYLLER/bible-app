import React from 'react';
// import { View, Image, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import BibleScreen from './BibleScreen';

const App = TabNavigator({
  Tab1: {
    screen: HomeScreen,
  },
  Tab2: {
    screen: BibleScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default App;