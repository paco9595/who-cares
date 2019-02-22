import { createStackNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';

export const AuthStack = createStackNavigator({
        Welcome: WelcomeScreen,
        SignIn: SignInScreen
    },
    {
        initialRouteName: 'Welcome'
    });
