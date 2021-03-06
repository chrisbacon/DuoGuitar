import React, { Component } from 'react';
import Lesson from '../components/lesson'
import SubComponentMenu from '../components/subComponentMenu'
import Requester from '../components/requester'
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
    console.log("in course constructor")
    this.requester = new Requester()

    this.state = {
      selectedIndex: null,
      lessons: this.props.lessons
    }

    this.selectLesson = this.selectLesson.bind(this);
    this.resetLesson = this.resetLesson.bind(this);

    this.populateEnrolledLessons = this.populateEnrolledLessons.bind(this);
    this.getEnrolledLessons = this.getEnrolledLessons.bind(this);
  }

  componentDidMount() {
    this.getEnrolledLessons();
  }

  getEnrolledLessons(){
    this.requester.getItems({url: this.props.url + 'api/subscribed_lessons', callback: this.populateEnrolledLessons})
  }

  populateEnrolledLessons(responseObject){
    if (!responseObject.error){
      console.log(responseObject)
      this.setState( { userLessons: responseObject.response } )
    }
    this.filterLessonsByEnrolled()
  }

  filterLessonsByEnrolled(){
    var userLessons = this.state.userLessons;
    var lessons = this.props.lessons;

    lessons.forEach((lesson) => {
      userLessons.forEach((userLesson) => {
        if(lesson.id === userLesson.id){
          lesson.enrolled = true;
        }
      })
    })

    this.setState(lessons: lessons)
  }

  selectLesson(index) {
    console.log(this.state.lessons)
    console.log(index)
    if (!this.state.lessons[index].enrolled) {
      const data = {lesson_id: this.state.lessons[index].id}

      this.requester.setItems({url: this.props.url + 'api/subscribed_lessons', data: data, callback: this.getEnrolledLessons})
    }
    this.setState({selectedIndex: index})
  }

  resetLesson() {
    this.setState({selectedIndex: null})
  }

  render () {
    console.log("in course render")
    if (this.state.selectedIndex != null) {

      return (
        <Lesson
          url={this.props.url}
          lesson={this.props.lessons[this.state.selectedIndex]} resetLesson={this.resetLesson}
          />
      )

    } else {

      return(
        <SubComponentMenu name={this.props.name} selectItem={this.selectLesson} items={this.props.lessons} reset={this.props.resetCourse}/>)
    }
  }
}
