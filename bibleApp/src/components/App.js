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
  tabBarOptions:   {
    initialRouteName: 'Tab1',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      inactiveTintColor: '#888',
      activeBackgroundColor: '#FFF', // iOS
      inactiveBackgroundColor: '#DDD', // iOS
      pressColor: '#e91e63', // Android
      indicatorStyle: { // Android
        backgroundColor: '#242134',
      },
      style: {
        backgroundColor: '#EEE', // Android
      },
    },
  },
});

export default App;