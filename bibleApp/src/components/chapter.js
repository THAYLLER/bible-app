import React, { Component } from 'react';
import { 
  AppRegistry, 
  Text, 
  View,
  StyleSheet 
} from 'react-native';

import BibleChapter from '../models/bible_chapter';

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
    alignItems: 'center',
    marginTop: 10
  }
});

class Chapter extends Component {
  constructor(props) {
    super(props)

    let chapter = new BibleChapter(this.props.book, this.props.chapter, this.props.bibleVersion)

    this.state = {
      model: chapter
    };


    var self = this;
    // this feels a bit hacky. but lets run with it for now.
    chapter.fetchContents((model) => {
      self.setState(model: model);
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.chapter}>
          {this.state.model.getBuiltChapterString()}
        </Text>
        <Text>
          {this.state.model.contents}
        </Text>
      </View>
    );
  }
}

Chapter.defaultProps = {
  book: book,
  chapter: chapter,
  bibleVersion: bibleVersion
};

Chapter.propTypes = {
  book: React.PropTypes.string.isRequired,
  chapter: React.PropTypes.number.isRequired,
  bibleVersion: React.PropTypes.string.isRequired
};

export default Chapter;