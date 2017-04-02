import React, { Component } from 'react';
import {
  View,
  TextInput,
  BackAndroid,
  StatusBar
} from 'react-native'
import { 
  Button, 
  Text
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'
import VerseCard from  './VerseCard';


class AddNoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    }
  }

  addNote() {
    this.setState({
      title: this.state.title,
      body: this.state.body
    })
    console.log("Ok. Next thing to do is fetch!!!");
    fetch('https://www.googleapis.com/upload/storage/v1/b/bible-app-tezt2/o', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body,
      })
    })
    .then((response) => {
      console.log("actually got a response!");
    })
    .catch((error) => {
      console.error(error);
    }); 

    console.log("this is what state loooks like after pressing the button");
    console.log(this.state);
  }  

  render() {
    console.log("here is the state!");
    console.log(this.state);
      return (
        <View style={{ flex: 1 }}>
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Home</Text>
          </View>      
          <View style={ styles.addNotesContainer }>
            <StatusBar
              backgroundColor='#00796b'
              barStyle="light-content"
              animated={true}
            />

            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.inputTitleStyle}
                autoFocus={true}
                placeholder='Note Title...'
                placeholderTextColor='#aaa'
                returnKeyType='next'
                underlineColorAndroid="transparent"
                selectionColor='#e0f2f1'
                onChangeText={(text) => this.setState({ title: text })}
                value={this.state.title}
              />

              <TextInput
                style={styles.inputBodyStyle}
                multiline={true}
                placeholder='Note Body...'
                placeholderTextColor='#aaa'
                returnKeyType='done'
                underlineColorAndroid="transparent"
                selectionColor='#e0f2f1'
                onChangeText={(text) => this.setState({body: text})}
                value={this.state.body}
              />
            </View>

            <Button onPress={this.addNote.bind(this)}>
              <Text>More Info</Text>
            </Button>

          </View>
        </View>
      );
    }

  static navigationOptions = {
    header: (state) => ({
      visible: true,
      title: (
            <Text>
                Notes
            </Text>
      )
    }),

    // title: 'Tab1'
    tabBar: {
      label: 'Notes',
      icon: () => (
        <Ionicons name='ios-home-outline' size={30} />
      ),
    },
  }

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
  addNotesContainer: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  textInputContainer: {
    flex: 1
  },
  inputTitleStyle: {
    height: 60,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 0,
    fontSize: 20
  },
  inputBodyStyle: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 60,
    fontSize: 16,
    textAlignVertical: 'top'
  }
}

export default AddNoteForm;