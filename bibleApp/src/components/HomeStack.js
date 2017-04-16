import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SignUpScreen from './SignUpScreen';
import LogInScreen from './LogInScreen';

const HomeStack = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  SignUpScreen: { screen: SignUpScreen },
  LogInScreen: { screen: LogInScreen },
});

export default HomeStack;