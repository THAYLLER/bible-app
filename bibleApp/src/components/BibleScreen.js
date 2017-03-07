// Libraries
import React, { Component } from 'react';
import RNFS from 'react-native-fs';

// Components
import {  Text, 
          View, 
          Image,
          StyleSheet,
          ScrollView,
          TouchableHighlight,
          Platform
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Accordion from 'react-native-collapsible/Accordion';
import App from './App'; // required for the navigator
import Chapter from './chapter';
// Models
import BibleBook from '../models/bible_book';

class BibleScreen extends Component {
  constructor(props) {
    super(props);

    // Set the default state for the books
    this.state = {
      books: []
    };

    if(Platform.OS === "ios") {
      this.fetchiOS();
    } else { // android
      this.fetchAndroid();
    }
  }

  getPath() {
    return `bibles/${this.props.bibleVersion}`;
  }

  fetchiOS() {
    let self = this;
    let path = `${RNFS.MainBundlePath}/${this.getPath()}`

    RNFS.readDir(path)
      .then((directories) => {
        // TODO: Past Mark: Is this a good idea to do in here?
        // TODO: Future Mark: Yes, this is fine.
        let books = directories.map( (directory, index) => {
          return new BibleBook(directory.name, self.props.bibleVersion);
        });

        // sort
        books = BibleBook.sort(books);

        // rerender component
        self.setState({
          books: books
        });
      })
      .catch( (err) => {
        console.log(err.message, err.code);
      });
  }

  fetchAndroid() {
    console.log(this.getPath());  
    let self = this;
    RNFS.readDirAssets(this.getPath())
      .then((directories) => {
        console.log(directories);
        // TODO: Past Mark: Is this a good idea to do in here?
        // TODO: Future Mark: Yes, this is fine.
        let books = directories.map( (directory, index) => {
          return new BibleBook(directory.name, self.props.bibleVersion);
        });

        // sort
        books = BibleBook.sort(books);

        // rerender component
        self.setState({
          books: books
        });
      })
      .catch( (err) => {
        console.log(err.message, err.code);
      });
  }

  getHeader(book, index, isActive) {
    return(
      <Text style={styles.chapterText}>
        {book.getPrettyName()}
      </Text>
    );
  }

  getContent(book, index, isActive) {
    var chapters = [];

    for(var i = 0; i < book.chapters; i++) {
      var press = this.parent.pushChapterReader.bind(this, book, i + 1);

      chapters.push(
        <TouchableHighlight key={i} style={styles.gridItem} onPress={press}>
          <Text>{i + 1}</Text>
        </TouchableHighlight>
      );
    }
    return(
      <View style={styles.grid}>
        {chapters}
      </View>
    );
  }

  pushChapterReader(book, chapter) {
    let navigate = this.parent.props.navigation.navigate;

    navigate('Reader', { book: book, bibleVersion: this.parent.props.bibleVersion, chapter: chapter });
  }

  render() {
    return (
      <View style={styles.view}>
        <ScrollView style={styles.body}>
          <Accordion
            sections={this.state.books}
            renderHeader={this.getHeader}
            renderContent={this.getContent}
            parent={this}
          />
        </ScrollView>
      </View>
    );
  }

  static navigationOptions = {
    title: 'Bible',
    tabBar: {
      label: 'Bible',
      icon: () => (
        <Ionicons name="ios-bookmarks-outline" size={35} />
      )
    }
  }
}

BibleScreen.defaultProps = {
  bibleVersion: 'ESV'
};

BibleScreen.propTypes = {
  bibleVersion: React.PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column'
  },
	header: {
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
  body: {
    flex: 1
  },
  chapterText: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10
  },
  grid: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  gridItem: {
    padding: 10
  }
});


// Make the component available to other parts of the App.
export default BibleScreen;
