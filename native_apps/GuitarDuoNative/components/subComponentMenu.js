import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';
import UpButton from '../components/upButton'

export default class SubComponentMenu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(index) {
    this.props.selectItem(index)
  }

  render() {
    console.log("in subComponentMenu render")
    if (this.props.items) {
      const items = this.props.items.map(function(item, index) {
        if (item.enrolled === true) {
          return <Button
            title={item.name}
            className="enrolled"
            onPress={() => this.handleClick(index)}
            value={index}
            key={index}>{item.name}
          </Button>
        } else {
          return <Button
            title={item.name}
            className="not-enrolled"
            onPress={() => this.handleClick(index)}
            value={index}
            key={index}>{item.name}</Button>
        }
      }.bind(this));
      console.log("past button renders")
      let upButton;
      if(this.props.reset){
        upButton = <UpButton reset={this.props.reset} />
      }
      console.log("past upbutton make")
      console.log(items)
      return (
        <View className="content">
          {upButton}
          <View classname="items-container">
            {items}
          </View>


        </View>
      )
    } else {
      return (<View></View>)
    }
  }
}
