// Import a library to help create a component
import React from 'react';
import { Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const BibleScreen = () => {
	const { textStyle, viewStyle } = styles;
  return (
  	<View style={viewStyle}>
    	<Text style={textStyle}>Read The Bible Here</Text>
    </View>
  );
};

BibleScreen.navigationOptions = {
  // title: 'Tab2'
  tabBar: {
    label: 'Bible',
    icon: () => (
      <Ionicons name="ios-bookmarks-outline" size={35} />
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
export default BibleScreen;
