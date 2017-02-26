// Import a library to help create a component
import React from 'react';
import { Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const HomeScreen = () => {
	const { textStyle, viewStyle } = styles;
  return (
  	<View style={viewStyle}>
    	<Text style={textStyle}>Home</Text>
    </View>
  );
};

HomeScreen.navigationOptions = {
  // title: 'Tab1'
  tabBar: {
    label: 'Home',
    icon: () => (
      <Ionicons name="ios-home-outline" size={35} />
    ),
  },
};

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
