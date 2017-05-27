import React from 'react';
import {
  AppRegistry,
  Text,
  Button
} from 'react-native';
import { StackNavigator, DrawerNavigator, NavigationActions } from 'react-navigation';

import Home from './components/Home'
import Splash from './components/Splash'

const AwesomeProject = StackNavigator(
  {
    Splash: {
      screen: Splash,
      headerMode: 'none',
      navigationOptions: {
        header: false
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        title : 'Home'
      }
    },
  }
);

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
