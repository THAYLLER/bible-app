import { StackNavigator } from 'react-navigation';
import BibleScreen from './BibleScreen';
import Chapter from './chapter';

const StackReader = StackNavigator({
  BibleScreen: { screen: BibleScreen },
  Reader: { screen: Chapter },
});

export default StackReader;