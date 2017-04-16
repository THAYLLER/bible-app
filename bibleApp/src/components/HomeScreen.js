// Import a library to help create a component
import React, { Component, PropTypes } from 'react';
import { View, ActivityIndicator, TouchableHighlight } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import VerseList from './VerseList';
import { 
  Button,
  Text 
} from 'native-base';
import * as firebase from 'firebase';

class HomeScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      isAuthed: false,
      userLoaded: false,
      email: '',
      password: ''
    };

    this.signout = this.signout.bind(this);
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("according to this, the user is logged in!");
        // User is signed in.
        this.setState({
          isAuthed: true
        })  
      } else {
        console.log("according to this, the user is NOT logged in...");
        // User is signed out.
        // ...
      }

      this.setState({
        userLoaded: true
      })      

    }.bind(this));  
  }

  signout(){
    try {
        firebase.auth().signOut();

        // Sign-out successful.
        console.log("sign out was successful!");
        this.setState({
          isAuthed: false
        }); 
    } catch (error) {
        // An error happened.
        console.log("sign out was NOT successful...");
        console.log(error);
    }
  } 

  render() {
    if (this.state.userLoaded) {
      if (this.state.isAuthed === false){
        return (
        	<View style={{ flex: 1 }}>
            <Button onPress={() => this.props.navigation.navigate('SignUpScreen')} title="Sign Up">
              <Text>Sign Up!</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('LogInScreen')} title="Log In" success>
              <Text>Log In!</Text>
            </Button>          
      	    <VerseList />
          </View>
        );
      } else {
        return (
          <View style={{ flex: 1 }}>
            <VerseList />
            <Button onPress={() => this.signout()} danger>
              <Text>Sign Out!</Text>
            </Button>                                          
          </View>
        );
      }
    } else {
      return (
        <ActivityIndicator
                animating={this.state.animating}
                style={[styles.centering, {height: 80}]}
                size="large"
        />      
      )
    }
  }  

  static navigationOptions = {
    header: (navigation) => ({
      title: 'Home',
      right: (
          <Button onPress={() => navigation.navigate('UserDetail')}>
            <Text>Account</Text>
          </Button>         
        )
    }),

    tabBar: {
      label: 'Home',
      icon: () => (
        <Ionicons name="ios-home-outline" size={35} />
      ),
    },
  };  
}

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		// shadowOffset is what tells the element how tall or wide the shadow should be.
		shadowOffset: { width: 0, height: 2 },
		// shadowOpacity is basically the darkness of the shadow
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	},
  cardStyle: {
    paddingBottom: 0
  }  
};

// Make the component available to other parts of the App.
export default HomeScreen;
