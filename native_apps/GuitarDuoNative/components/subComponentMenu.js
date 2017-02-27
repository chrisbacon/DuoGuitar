import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';

export default class SubComponentMenu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault();
    const selectedItem = this.props.items[event.target.value]

    console.log(selectedItem)
    this.props.selectItem(selectedItem)
  }

  render() {

    if (this.props.items) {
      console.log("items: ", this.props.items)
      const items = this.props.items.map(function(item, index) {
        if (item.enrolled === true) {
          return <Button className="enrolled" onClick={this.handleClick} value={index} key={index}>{item.name}</Button>
        } else {
          return <Button className="not-enrolled" onClick={this.handleClick} value={index} key={index}>{item.name}</Button>
        }
      }.bind(this));
      return (<View>{items}</View>)
    } else {
      return (<View></View>)
    }
  }
}
