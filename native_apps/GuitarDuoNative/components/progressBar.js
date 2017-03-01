import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const spans = [];
    for (let i=0; i < this.props.length; i++) {
      if (this.props.selectedIndex === i) {
        spans.push(<View key = {i} className='progressDot current'/>)
      } else {
        spans.push(<View key = {i}  className='progressDot'/>)
      }
    }
    return (

      <View className='progressBar'>
      {spans}
      </View>

    )
  }
}
