import React, { Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

// Components
import Verse from './Verse';

// Models
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

  getChapterVerses() {
    return this.state.model.verses;
  }

  render() {
    var verses = [];
    if(!!this.getChapterVerses()) {
      verses = this.getChapterVerses().map( (verse) => {
        return <Verse verse={verse} key={verse.index}></Verse>
      });
    }

    return(
      <View style={styles.container}>
        <Text style={styles.chapter}>
          {this.state.model.getBuiltChapterString()}
        </Text>
        <ScrollView>
          {verses}
        </ScrollView>
      </View>
    );
  }
}

// temp for now
import Ionicons from 'react-native-vector-icons/Ionicons'
Chapter.navigationOptions = {
  tabBar: {
    label: 'Test Chapter',
    icon: () => (
      <Ionicons name="ios-bookmarks-outline" size={35} />
    ),
  },
};

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