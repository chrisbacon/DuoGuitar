
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

export default class Lesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: null,
      selectedExercise: null
    }

    this.selectExercise = this.selectExercise.bind(this);

  }

  selectExercise(exercise) {
    this.setState({selectedExercise: exercise});
  }

  render() {
    if (this.state.selectedExercise) {
      return (
        <View><Text>{this.state.selectedExercise.name}</Text></View>
        )
    } else {
      return (
        <View>
        <Text>Lesson: {this.props.name}</Text>
        <SubComponentMenu selectItem={this.selectExercise} items={this.props.exercises} />
        </View>
        )
    }
  }

}
