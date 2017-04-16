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

class LogInScreen extends Component {

  constructor(props){
    super(props);

    // Firebase.initialise();

    this.state = {
      email: '',
      password: '',
      response: ''
    };

    this.login = this.login.bind(this);
    this.goToSignUp = this.goToSignUp.bind(this);
  }

  login(){
    try {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

        this.setState({
            response: "Logged In!"
        });

        setTimeout(() => {
            this.props.navigation.navigate('HomeScreen')
        }, 1500);

    } catch (error) {
        this.setState({
            response: error.toString()
        })
    }
  }

  goToSignUp(){
    this.props.navigation.navigate('SignUpScreen')
  }

  render() {
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

          <Button onPress={() => this.login()} title="Log In" success>
            <Text>Log In</Text>
          </Button>

          <Button onPress={() => this.goToSignUp()} title="Go to sign up">
            <Text>Don't have an account?</Text>
          </Button>        
        </View>
      </View>
    );
  }


  static navigationOptions = {
    title: 'Log In',
    tabBar: {
      label: 'Log In',
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

export default LogInScreen;
