import { StackNavigator } from 'react-navigation';
import AddNoteForm from './AddNoteForm';
import NotesList from './NotesList';

const NoteStack = StackNavigator({
  NotesList: { screen: NotesList },
  AddNoteForm: { screen: AddNoteForm }
});

export default NoteStack;