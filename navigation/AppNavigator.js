import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import { AuthStack } from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';
import DescribeYourselfScreen from '../screens/DescribeYourselfScreen';

const TestStack = createStackNavigator({Describe: DescribeYourselfScreen});

export default createAppContainer(createSwitchNavigator({
        Main: MainTabNavigator,
        Auth: AuthStack,
        Test: TestStack,
    },
    // change this one for testing
    {
        initialRouteName: 'Auth',
    }
));
