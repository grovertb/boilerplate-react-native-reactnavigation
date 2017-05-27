import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  Image
} from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class Splash extends React.Component {

  componentDidMount() {
    setTimeout(()=>{
      this._navigateTo('Home')
    },2000)
  }

  _navigateTo = (routeName: string) => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  render() {
    return (
        <View>
          <Text>SplashScreen!</Text>
          <Image source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}} style={{width: 100, height: 100}} />
        </View>
    );
  }
}
