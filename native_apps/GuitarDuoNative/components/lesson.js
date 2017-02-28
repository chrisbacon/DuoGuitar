
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
    this.resetExercise = this.resetExercise.bind(this);
    this.previousExercise = this.previousExercise.bind(this);
    this.nextExercise = this.nextExercise.bind(this);
  }

  selectExercise(exercise) {
    this.setState({selectedExercise: exercise});
  }

  resetExercise() {
    this.selectExercise(null);
  }

  previousExercise() {
    console.log("prev button clicked")
    if (this.state.selectedExerciseIndex > 0) {
      this.setState({selectedExerciseIndex: (this.state.selectedExerciseIndex - 1)})
    }
  }

  nextExercise() {
    console.log("next button clicked")
    if (this.state.selectedExerciseIndex < this.state.exercises.length) {
      this.setState({selectedExerciseIndex: (this.state.selectedExerciseIndex + 1)})
    }
  }

  render() {
    if (this.state.selectedExerciseIndex) {
      return (
        <View>
          <Exercise item={this.props.exercises[this.state.selectedExerciseIndex]} resetExercise={this.resetExercise} prev={this.previousExercise} next={this.nextExercise}/>
        </View>
        )
    } else {
      return (
        <View>
        <Text>Lesson: {this.props.name}</Text>
        <SubComponentMenu selectItem={this.selectExercise} items={this.props.exercises} reset={this.props.resetLesson} />
        </View>
        )
    }
  }

}
