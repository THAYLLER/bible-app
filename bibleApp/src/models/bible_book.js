import { Platform } from 'react-native';
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
  '1 Samuel',
  '2 Samuel',
  '1 Kings', 
  '2 Kings',
  '1 Chronicles',
  '2 Chronicles',
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
  '1 Corinthians',
  '2 Corinthians',
  'Galatians',
  'Ephesians',
  'Philippians',
  'Colossians',
  '1 Thessalonians',
  '2 Thessalonians',
  '1 Timothy',
  '2 Timothy',
  'Titus',
  'Philemon',
  'Hebrews', 
  'James',
  '1 Peter',
  '2 Peter',
  '1 John',
  '2 John',
  '3 John',
  'Jude',
  'Revelation'
];

class BibleBook {
  constructor(name, bibleVersion, chapters) {
    this.name = name;
    this.bibleVersion = bibleVersion;
    this.chapters = chapters;
  }

  getPrettyName() {
    // format the name this way
    var split = this.name.split(/_| /);
    var corrected = split.map( (x, i) => {
      return x.charAt(0).toUpperCase() + x.slice(1);
    });

    return corrected.join(' ');
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