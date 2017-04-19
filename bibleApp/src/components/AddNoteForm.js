import React, { Component } from 'react';
import {
  View,
  TextInput,
  BackAndroid,
  StatusBar
} from 'react-native'
import RNFS from 'react-native-fs';
import RNFetchBlob from 'react-native-fetch-blob';
import { 
  Button, 
  Text
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as firebase from 'firebase';
import VerseCard from  './VerseCard';


class AddNoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      response: ''
    }

    this.createNote = this.createNote.bind(this);
    this.uploadNote = this.uploadNote.bind(this);
    this.goToHome = this.goToHome.bind(this);
  }

  uploadNote(path) {
    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs
    const user = firebase.auth().currentUser;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob
    return Blob.build(RNFetchBlob.wrap(path))
    .then((blob) => {
      return firebase.storage().ref().child(`notes/${user.uid}/${this.state.title}.txt`).put(blob)
      .then(snapshot => {
        console.log('Uploaded note to Firebase Storage', snapshot);
        blob.close();
        this.setState({
          response: "Note Was Saved!"
        });

        // setTimeout(() => {
        //     this.props.navigation.navigate('HomeScreen')
        // }, 1500);
      })
      .catch(err => {
        // TODO: Proper error handling
        console.error('There was an error: ', err);
        this.setState({
          response: error.toString()
        });        
      });
    });
  }

  createNote() {
    console.log("Here goes nothing..");
    var path = `${RNFS.DocumentDirectoryPath}/${this.state.title}.txt`;
    const Blob = RNFetchBlob.polyfill.Blob;
    console.log(path);

    // write the file
    RNFS.writeFile(path, `${this.state.body}`, 'utf8')
      .then((success) => {
        console.log('FILE WRITTEN!');
        this.uploadNote(path);
      })
      .catch((err) => {
        console.log(err.message);
      });

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

            <View>
              <Text style={styles.response}>{this.state.response}</Text>
            </View>            

            <Button onPress={() =>this.createNote()}>
              <Text>Add Note</Text>
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
        <Ionicons name='ios-clipboard-outline' size={30} />
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
  },
  response: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    paddingTop: 0,
    padding: 50
  }  
}

export default AddNoteForm;