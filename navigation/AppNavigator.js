import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import WelcomeScreen from '../screens/WelcomeScreen';
import DescribeYourselfScreen from '../screens/DescribeYourselfScreen';

const AuthStack = createStackNavigator({ Welcome: WelcomeScreen });
const TestStack = createStackNavigator({ Describe: DescribeYourselfScreen });

export default createAppContainer(createSwitchNavigator({
  Main: MainTabNavigator,
  Auth: AuthStack,
  Test: TestStack,
},
  // change this one for testing
  {
    initialRouteName: 'Main',
  }
));