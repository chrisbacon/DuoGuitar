import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';

export default class UpButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault()
    this.props.reset()
  }

  render() {
    return <Button className='arrowbutton up' title='&uarr;' onPress={this.handleClick}>&uarr;</Button>
  }
}
