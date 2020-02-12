import React from 'react';
import { StatusBar } from 'react-native';
import {YellowBox} from 'react-native';


import  Routes from './src/routes';

export default function App() {
  
  YellowBox.ignoreWarnings([ 'VirtualizedLists should never be nested', ]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='#1E90FF' />
      < Routes />
    </>
  );
}


