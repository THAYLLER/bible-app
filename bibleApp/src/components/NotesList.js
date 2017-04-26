import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { 
  Button,
  Text 
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

class NotesList extends Component {
  state = { 
    notes: [],
  };
// componentWillMount method automatically gets executed as soon as this component is about to get rendered to the screen.
componentWillMount() {

}

render() {
    return (
      <ScrollView>
        <Text>All Notes</Text>
      </ScrollView>
    );
  }

  static navigationOptions = {
    header: (state) => ({
      visible: true,
      title: 'Notes'
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

export default NotesList;