import { StackNavigator } from 'react-navigation';
import AddNoteForm from './AddNoteForm';

const NoteStack = StackNavigator({
  AddNoteForm: { screen: AddNoteForm }
});

export default NoteStack;