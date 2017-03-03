import RNFS from 'react-native-fs';

const CORRECT_ORDER = [ // Is this valid across all versions?
  'Genesis',
  'Exodus', 
  'Leviticus', 
  'Numbers',
  'Deuteronomy',
  'Joshua',
  'Judges',
  'Ruth',
  '1_Samuel',
  '2_Samuel',
  '1_Kings', 
  '2_Kings',
  '1_Chronicles',
  '2_Chronicles',
  'Ezra', 
  'Nehemiah',  
  'Esther', 
  'Job',
  'Psalm',
  'Proverbs',  
  'Ecclesiastes',
  'Song_of_Solomon',
  'Isaiah',
  'Jeremiah',
  'Lamentations',
  'Ezekiel',
  'Daniel',
  'Hosea',
  'Joel',
  'Amos',
  'Obadiah',
  'Jonah',
  'Micah',
  'Nahum',
  'Habakkuk',
  'Zephaniah',
  'Haggai',
  'Zechariah',
  'Malachi',
  'Matthew',
  'Mark',
  'Luke',
  'John',
  'Acts',
  'Romans',
  '1_Corinthians',
  '2_Corinthians',
  'Galatians',
  'Ephesians',
  'Philippians',
  'Colossians',
  '1_Thessalonians',
  '2_Thessalonians',
  '1_Timothy',
  '2_Timothy',
  'Titus',
  'Philemon',
  'Hebrews', 
  'James',
  '1_Peter',
  '2_Peter',
  '1_John',
  '2_John',
  '3_John',
  'Jude',
  'Revelation'
];

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

  static sort(books) {
    // This is horribly inefficent code, look away now...
    var correctedOrder = new Array(CORRECT_ORDER.length);

    for(var i = 0; i < books.length; i++) {
      correctedOrder[CORRECT_ORDER.indexOf(books[i].name)] = books[i];
    }

    return correctedOrder;
  }
};

export default BibleBook;