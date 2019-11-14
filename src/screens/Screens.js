import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import LandingScreen from './LandingScreen';

const AuthorizedNavigator = createStackNavigator(
    {
      Home: {
        screen: HomeScreen
      },
      Settings: {
        screen: SettingsScreen
      },
    },
    {
      initialRouteName : 'Home',
      headerMode: 'none',
    },
  );

const UnauthorizedNavigator = createStackNavigator(
  {
    SignUp: {
      screen: SignUpScreen
    },
    SignIn: {
      screen: LoginScreen
    },
    Landing: {
      screen: LandingScreen
    }
  },
  {
    initialRouteName: 'Landing',
    headerMode: 'none',
  }
)

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthorizedNavigator,
    NoAuth: UnauthorizedNavigator,
  },
  {
    initialRouteName: 'NoAuth',
  }
)

module.exports = createAppContainer(AppNavigator);