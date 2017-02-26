import RNFS from 'react-native-fs';
import BibleVerse from './bible_verse';

class BibleChapter {
  constructor(book, chapter, version) {
    this.book = book;
    this.chapter = chapter;
    this.version = version;
  }

  fetchContents(callback) {
    // if we have contents, lets return those. 
    // we don't want to read twice from the files
    if(!!this.contents) {
      return this.contents;
    }

    var self = this; // little hack to keep scope

    RNFS.readFile(this.getFilePath())
      .then((contents) => {
        self.contents = contents;

        // if a callback exists, lets call it
        if(!!callback) {
          callback(self);
        }
      })
      .catch((err) => {
        self.contents = err.message;

        // if a callback exists, lets call it
        if(!!callback) {
          callback(self);
        }
      });
  }

  getFilePath() {
    let fileName = this.getBuiltChapterString().replace(" ", "_");

    let path = `${RNFS.MainBundlePath}/assets/bibles/${this.version}/${fileName}`;

    return path;
  }

  getBuiltChapterString() {
    return `${this.book} ${this.chapter}`;
  }
}

export default BibleChapter;