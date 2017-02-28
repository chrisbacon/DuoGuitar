import React, { Component } from 'react';
import Lesson from '../components/lesson'
import SubComponentMenu from '../components/subComponentMenu'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';

export default class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lessons: null,
      selectedLesson: null
    }

    this.selectLesson = this.selectLesson.bind(this);
    this.resetLesson = this.resetLesson.bind(this);
  }

  selectLesson(lesson) {
    this.setState({selectedLesson: lesson})
  }

  resetLesson() {
    this.selectLesson(null);
  }


  render () {

    if (this.state.selectedLesson) {
      return (
        <Lesson
          name={this.state.selectedLesson.name} exercises={this.state.selectedLesson.exercises}
          resetLesson={this.resetLesson}
          />
      )
    } else {
      return(<View>
        <Text>{this.props.name}</Text>
        <SubComponentMenu selectItem={this.selectLesson} items={this.props.lessons}
          reset={this.props.resetCourse}/>
      </View>)
    }
  }
}
