import React, { Component } from 'react';
import { 
  View,
  StyleSheet
} from 'react-native';
import { 
  Button,
  Text 
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as firebase from 'firebase';

class UserDetail extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  getUserInfo() {
    const user = firebase.auth().currentUser;

    if (user != null) {
      return (
        <View>
          <Text>Email: {user.email}</Text>
          <Text>Sign-in provider: {user.providerId}</Text>
          <Text>Provider-specific UID: {user.uid}</Text>
        </View>);
    } else {
      return (
        <View>
          <Text>User is either null, or not logged in.</Text>

          <Button onPress={() => this.props.navigation.navigate('SignUpScreen')} title="Sign Up">
            <Text>Sign Up!</Text>
          </Button>
          <Button onPress={() => this.props.navigation.navigate('LogInScreen')} title="Log In" success>
            <Text>Log In!</Text>
          </Button>  

        </View>
      )
    }
  }

  render() {
    return this.getUserInfo();
  }

  static navigationOptions = {
    title: 'Profile',
    tabBar: {
      label: 'Profile',
      icon: () => (
        <Ionicons name="ios-home-outline" size={35} />
      ),
    },     
  };

}

export default UserDetail;