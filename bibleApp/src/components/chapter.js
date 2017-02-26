import React, { Component } from 'react';
import { 
  AppRegistry, 
  Text, 
  View,
  StyleSheet 
} from 'react-native';

let bibleVersion = "ESV";
let book = "Romans";
let chapter = 1;

const styles = StyleSheet.create({
  chapter: {
    fontSize: 20,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

class Chapter extends Component {
  constructor(props) {
    super(props)

    const bibleText = require(getFilePath());

    // should I do it this way? I don't like storing this into state... but that's
    // the only way to not read it every time we render
    this.state = {
      content: bibleText
    }
  }

  getFilePath() {
    let fileName = getBuiltChapterString().replace(" ", "_");

    let path = `bibles/${this.props.bibleVersion}/${fileName}`;

    console.log(`Pulling from file at path ${path}`);

    return path;
  }

  getBuiltChapterString() {
    return `${this.props.book} ${chapter}`;
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.chapter}>
          {this.getBuiltChapterString()}
        </Text>
        <Text>
          {this.state.content}
        </Text>
      </View>
    );
  }
}

Chapter.defaultProps = {
  book: book,
  chapter: chapter,
  bibleVersion: bibleVersion
}

Chapter.propTypes = {
  book: React.PropTypes.string.isRequired,
  chapter: React.PropTypes.number.isRequired,
  bibleVersion: React.PropTypes.string.isRequired
}