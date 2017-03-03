import RNFS from 'react-native-fs';
import BibleVerse from './bible_verse';

class BibleChapter {
  constructor(book, chapter, version) {
    this.book = book;
    this.chapter = chapter;
    this.version = version;
    this.verses = [];
  }

  fetchContents(callback) {
    // if we have contents, lets return those. 
    // we don't want to read twice from the files
    if(!!this.contents || this.verses.length > 0) {
      return;
    }

    var self = this; // little hack to keep scope

    RNFS.readFile(this.getFilePath())
      .then((contents) => {
        self.contents = contents;

        let split = self.contents.split("\n");
        this.verses = split.map( (item, index) => {
          return new BibleVerse(index, item);
        });
        
        // if a callback exists, lets call it
        if(!!callback) {
          callback(self);
        }
      })
      .catch((err) => {
        console.log(err);
        self.contents = err.message;

        // if a callback exists, lets call it
        if(!!callback) {
          callback(self);
        }
      });
  }

  getFilePath() {
    let fileName = this.getBuiltChapterString().replace(" ", "_");

    let path = `${RNFS.MainBundlePath}/bibles/${this.version}/${this.book.name}/${this.chapter}`;

    return path;
  }

  getBuiltChapterString() {
    return `${this.book.getPrettyName()} ${this.chapter}`;
  }
}

export default BibleChapter;