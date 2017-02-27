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
    console.log("in duoguitar constructor")
    this.requester = new Requester()

    this.state = {
      courses: [],
      selectedCourse: null
    }

    this.selectCourse = this.selectCourse.bind(this);
    this.populateCourses = this.populateCourses.bind(this);
  }

  componentDidMount(){
    this.requester.makeRequest({codeDesired: 200, url: 'http://localhost:5000/api/courses', type: 'GET', body: '', callback: this.populateCourses})
  }

  populateCourses(responseObject){
    if (!responseObject.error){
      this.setState( { courses: responseObject.response } )
    }
    this.filterCoursesByEnrolled()
  }

  filterCoursesByEnrolled(){
    var userCourses = this.props.user.courses;
    var courses = this.state.courses;
    for(var i=courses.length-1; i>=0; i--) {
      for (var y=0; y<(userCourses.length); y++){
        if(courses[i].id === userCourses[y].id){
          courses[i].enrolled = true;
        }
      }
    }
    this.setState(courses: courses)
  }

  selectCourse(course) {
    this.setState({selectedCourse: course})
  }

  render () {
    console.log('selectedCourse ', this.state.selectedCourse)
    if (this.state.selectedCourse) {
      console.log("selected course exists")
      return(<Course name={this.state.selectedCourse.name} lessons={this.state.selectedCourse.lessons}/>)
    } else {
      console.log("no selected course")
      return(<SubComponentMenu selectItem={this.selectCourse} items={this.state.courses}/>)
    }
  }
}
