import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SignUpScreen from './SignUpScreen';
import LogInScreen from './LogInScreen';
import UserDetail from './UserDetail';

const HomeStack = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  SignUpScreen: { screen: SignUpScreen },
  LogInScreen: { screen: LogInScreen },
  UserDetail: { screen: UserDetail },
});

export default HomeStack;