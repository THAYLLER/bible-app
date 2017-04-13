// Import a library to help create a component
import React, { Component, PropTypes } from 'react';
import { View, TouchableHighlight } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import VerseList from './VerseList';
import { 
  Content,
  Container,
  Icon,
  Button,
  Text
} from 'native-base';

class HomeScreen extends Component {
  render() {
    return (
    	<View style={{ flex: 1 }}>
        <Button onPress={() => this.props.navigation.navigate('SignUpScreen')} title="Sign Up">
          <Text>Sign Up!</Text>
        </Button>
  	    <VerseList />
      </View>
    );
  }

  static navigationOptions = {
    title: 'Home',

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
	}
};

// Make the component available to other parts of the App.
export default HomeScreen;
