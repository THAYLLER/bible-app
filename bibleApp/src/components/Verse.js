import React, { Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet
} from 'react-native';

class Verse extends Component {
  getText() {
    return `${this.props.verse.index}. ${this.props.verse.contents}`
  }

  render() {
    console.log(this.getText());
    return(
      <Text>
        {this.getText()}
      </Text>
    );
  }
}

export default Verse;