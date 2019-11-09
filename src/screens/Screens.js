import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';

const AppNavigator = createStackNavigator(
    {
      Home: LoginScreen,
      SignUp: SignUpScreen,
    },
    {
      initialRouteName : 'Home',
      headerMode: 'none',
    },
  );

export default createAppContainer(AppNavigator);