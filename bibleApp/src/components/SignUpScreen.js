import React, { Component, PropTypes } from 'react';
import { Text, View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

class SignUpScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      loaded: true,
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <View>
      <Text>Test</Text>
      </View>
    );
  }


  static navigationOptions = {
    title: 'Sign Up',
    tabBar: {
      label: 'Sign Up',
      icon: () => (
        <Ionicons name="ios-home-outline" size={35} />
      ),
    },     
  };


}

export default SignUpScreen;
