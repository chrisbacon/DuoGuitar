import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
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
    const myimages = {
      "tangos_lesson_1.png": <Image source={require('../images/tangos_lesson_1.png')} />,
    "tangos_lesson_2.png": <Image source={require('../images/tangos_lesson_2.png')} />,
  "tangos_lesson_3.png": <Image source={require('../images/tangos_lesson_3.png')} />,
}

if (this.props.item.medium) {
  if (this.props.item.medium.source_type === "video") {
    // this.state.media = <iframe src={this.props.item.medium.source} width="500" height="300" frameBorder="5" />
    console.log(this.props.item)
  } else if  (this.props.item.medium.source_type === "image")
  {
    console.log(this.props.item)
    this.state.media = myimages[this.props.item.medium.source]
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
