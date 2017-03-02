import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Home from './containers/home';
import MainStyle from './stylesheets/mainStyle'

export default class GuitarDuoNative extends Component {
  render() {
    const mainStyle = MainStyle
    return (
      <View style={mainStyle.container}>
        <View style={mainStyle.topBar}>
        </View>
        <View style={mainStyle.mainContainer}>
          <Home mainStyle={mainStyle} url="http://10.0.2.2:5000/"></Home>
        </View>
    </View>
);
}
}

AppRegistry.registerComponent('GuitarDuoNative', () => GuitarDuoNative);
