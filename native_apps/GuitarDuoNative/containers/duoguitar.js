import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import SubComponentMenu from '../components/subComponentMenu'
import Course from '../components/course'
import Requester from '../components/requester'

export default class DuoGuitar extends Component {
  constructor(props) {
    super(props);
    this.requester = new Requester()

    this.state = {
      courses: [],
      userCourses: [],
      selectedIndex: null
    }

    this.selectCourse = this.selectCourse.bind(this);

    this.populateCourses = this.populateCourses.bind(this);
    this.populateEnrolledCourses = this.populateEnrolledCourses.bind(this);
    this.getEnrolledCourses = this.getEnrolledCourses.bind(this);

    this.resetCourse = this.resetCourse.bind(this);
  }

  componentDidMount() {
    this.requester.getItems({url: this.props.url + 'api/courses', callback: this.populateCourses})
  }

  populateCourses(responseObject){
    if (!responseObject.error){
      this.setState( { courses: responseObject.response } )
    }
    this.getEnrolledCourses();
  }

  getEnrolledCourses(){
    this.requester.getItems({url: this.props.url + 'api/subscribed_courses', callback: this.populateEnrolledCourses})
  }

  populateEnrolledCourses(responseObject){
    if (!responseObject.error){
      this.setState( { userCourses: responseObject.response } )
    }
    this.filterCoursesByEnrolled()
  }

  filterCoursesByEnrolled(){
    var userCourses = this.state.userCourses;
    var courses = this.state.courses;

    courses.forEach((course) => {
      userCourses.forEach((userCourse) => {
        if(course.id === userCourse.id){
          course.enrolled = true;
        }
      })
    })

    this.setState(courses: courses)
  }

  selectCourse(index) {
    console.log(this.state.courses)
    console.log(index)
    if (!this.state.courses[index].enrolled) {
      const data = {course_id: this.state.courses[index].id}

      this.requester.setItems({url: this.props.url + 'api/subscribed_courses', data: data, callback: this.getEnrolledCourses})
    }
    this.setState({selectedIndex: index})
  }

  resetCourse() {
    this.setState({selectedIndex: null})
  }

  render () {
    const course = this.state.courses[this.state.selectedIndex]
    if (this.state.selectedIndex != null) {

      return(

        <Course url={this.props.url} name={course.name} lessons={course.lessons} resetCourse={this.resetCourse}/>
      )

    } else {

      return(

        <SubComponentMenu name="Course List" selectItem={this.selectCourse} items={this.state.courses}/>

      )

    }
  }
}
