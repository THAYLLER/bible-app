// Libraries
import React, { Component } from 'react';
import RNFS from 'react-native-fs';

// Components
import {  Text, 
          View, 
          Image,
          StyleSheet,
          ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Accordion from 'react-native-collapsible/Accordion';
// Models
import BibleBook from '../models/bible_book';


class BibleScreen extends Component {
	// const { textStyle, viewStyle } = styles;

  constructor(props) {
    super(props);

    // Set the default state for the books
    this.state = {
      books: []
    };

    this.fetchBooks();
  }

  getPath() {
    return `${RNFS.MainBundlePath}/bibles/${this.props.bibleVersion}`;
  }

  fetchBooks() {
    var self = this;

    RNFS.readDir(this.getPath())
      .then((directories) => {
        // TODO: Is this a good idea to do in here?
        let books = directories.map( (directory, index) => {
          return new BibleBook(directory.name, self.props.bibleVersion);
        });

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
      <Text style={styles.chapterText}>{book.getPrettyName()}</Text>
    );
  }

  getContent(book, index, isActive) {
    var chapters = [];

    for(var i = 0; i < book.chapters; i++) {
      chapters.push(
        <Text key={i} style={styles.gridItem}>{i + 1}</Text>
      );
    }
    return(
      <View style={styles.grid}>
        {chapters}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.header}>
          <Text style={styles.textStyle}>Read The Bible Here</Text>
        </View>
        <ScrollView style={styles.body}>
          <Accordion
            sections={this.state.books}
            renderHeader={this.getHeader}
            renderContent={this.getContent}
          />
        </ScrollView>
      </View>
    );
  }
}

BibleScreen.navigationOptions = {
  tabBar: {
    label: 'Bible',
    icon: () => (
      <Ionicons name="ios-bookmarks-outline" size={35} />
    ),
  },
};

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
    alignItems: 'flex-start'
  },
  gridItem: {
    padding: 10
  }
});


// Make the component available to other parts of the App.
export default BibleScreen;
