import RNFS from 'react-native-fs';

class BibleBook {
  constructor(name, bibleVersion) {
    this.name = name;
    this.bibleVersion = bibleVersion;
    this.chapters = 0;

    let self = this;
    RNFS.readDir(this.getPath())
      .then( (files) => {
        self.chapters = files.length; // this might need to be more than an integer
      })
      .catch( (err) => {
        console.log(err.message, err.code);
      });
  }

  getPrettyName() {
    // format the name this way
    var split = this.name.split(/_| /);
    var corrected = split.map( (x, i) => {
      return x.charAt(0).toUpperCase() + x.slice(1);
    });

    return corrected.join(' ');
  }

  getPath() {
    return `${RNFS.MainBundlePath}/bibles/${this.bibleVersion}/${this.name}`;
  }
}

export default BibleBook;