import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';

export default class ForwardButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.click()
  }

  render() {
    return <Button className="arrowbutton right" title="&rarr;" onPress={this.handleClick}></Button>
  }
}
