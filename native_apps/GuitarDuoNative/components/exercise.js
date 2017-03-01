import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import UpButton from './upButton';
import ForwardButton from './forwardButton';
import BackButton from './backButton';
import ProgressBar from './progressBar';

class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {media: null}
  }

  getMediaType() {

    if (this.props.item.medium) {
      if (this.props.item.medium.source_type === "video") {
        // this.state.media = <iframe src={this.props.item.medium.source} width="500" height="300" frameBorder="5" />
      } else if  (this.props.item.medium.source_type === "image")
      {
        // this.state.media = <img src={this.props.item.medium.source} frameBorder="5" />
      }
    }
  }

  render() {
    this.getMediaType();
    let arrowbar;
    if (this.props.navigable) {
      arrowbar =
      <View className= 'arrowbar'>
        <BackButton click={this.props.prev}/>
        <ProgressBar length={this.props.length} selectedIndex={this.props.selectedIndex}/>
        <ForwardButton click={this.props.next}/>
      </View>
    }

    return (
      <View className="content">
        <UpButton reset={this.props.resetExercise} />
        <Text>{this.props.item.name}</Text>
        <View className="media-container">{this.state.media}</View>
        <Text>{this.props.item.content}</Text>
        {arrowbar}
      </View>
    )
  }
}

export default Exercise
