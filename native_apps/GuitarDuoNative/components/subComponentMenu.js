import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';
import BackButton from '../components/backButton'

export default class SubComponentMenu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(index) {
    console.log("index", index)
    const selectedItem = this.props.items[index]
    console.log(selectedItem)
    this.props.selectItem(selectedItem)
  }

  render() {

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
      let backButton = null;
      if(this.props.reset){
        backButton = <BackButton reset={this.props.reset} />
      }
      return (
        <View>
          <View>{items}</View>
          {backButton}
        </View>
      )
    } else {
      return (<View></View>)
    }
  }
}
