import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SignUpScreen from './SignUpScreen';

const HomeStack = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  SignUpScreen: { screen: SignUpScreen },
});

export default HomeStack;