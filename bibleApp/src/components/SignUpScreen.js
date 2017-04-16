import React, { Component, PropTypes } from 'react';
import { View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { 
  Content,
  Container,
  Icon,
  Button,
  Text
} from 'native-base';

import * as firebase from 'firebase';
// import Firebase from '../config/firebase';

class SignUpScreen extends Component {

  constructor(props){
    super(props);

    // Firebase.initialise();

    this.state = {
      loaded: true,
      email: '',
      password: '',
      response: ''
    };

    this.signup = this.signup.bind(this);
    this.goToLogin = this.goToLogin.bind(this);

  }

  signup(){
      console.log("do we even get this far?");
      console.log(this.state);

      try {
          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);

          console.log("looks like creating a user was a success, I think..?");
          this.setState({
              response: "Account was successfully created!"
          });

          setTimeout(() => {
              this.props.navigation.navigate('HomeScreen')
          }, 1500);

      } catch (error) {
        console.log("uh oh! There was an error...");
        console.log(error);
          this.setState({
              response: error.toString()
          })
      }

  }

  goToLogin(){
    this.props.navigation.navigate('LogInScreen')
  }

  render() {
    console.log("hellloooo");
    return (
        <View style={styles.container}>
          <View style={styles.body}>
              <TextInput
                  style={styles.textinput}
                  onChangeText={(text) => this.setState({email: text})}
                  value={this.state.email}
              placeholder={"Email Address"}
              />
            <TextInput
              style={styles.textinput}
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
              secureTextEntry={true}
              placeholder={"Password"}
            />

            <Button onPress={() => this.signup()} title="Sign Up" success>
              <Text>Create Account!</Text>
            </Button>

            <Button onPress={() => this.goToLogin()} title="Got an account">
              <Text>Alread have an account?</Text>
            </Button>
          </View>
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

const styles = {
  container: {
    flex: 1,
  },
  body: {
    flex: 9,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textinput: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1
  }
};

export default SignUpScreen;
