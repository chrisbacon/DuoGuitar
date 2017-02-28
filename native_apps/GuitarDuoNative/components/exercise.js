import BackButton from '../components/backButton'
import React, { Component } from 'react';
import SubComponentMenu from '../components/subComponentMenu'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';

export default class Exercise extends Component {
  constructor(props) {
    super(props);
    console.log("in exercise constructor")

    this.state = {media: null}
  }

  getMediaType() {

    if (this.props.item.medium) {

      if (this.props.item.medium.source_type === "video") {
        this.state.media = <iframe src={this.props.item.medium.source} width="500" height="300" frameBorder="5" />
      } else if  (this.props.item.medium.source_type === "image")
      {
        this.state.media = <img src={this.props.item.medium.source} frameBorder="5" />
      }
    }
  }

  render() {

    this.getMediaType();

    return (
      <View className="exercise-container">
        <Text>{this.props.item.name}</Text>
        <View className="media-container">{this.state.media}</View>
        <p>{this.props.item.content}</p>
        <View>
          <Button className="prev" onPress={this.props.prev}>Previous Exercise</Button>
          <Button className="next" onPress={this.props.next}>Next Exercise</Button>
        </View>
        <BackButton reset={this.props.resetExercise} />
      </View>
      )
  }

}
