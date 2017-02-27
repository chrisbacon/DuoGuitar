import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

// import SubComponentMenu from '../components/subComponentMenu.jsx'
// import Course from '../components/Course.jsx'
// import Requester from '../components/Requester.jsx'

export default class DuoGuitar extends Component {
//   constructor(props) {
//     super(props);
//     this.requester = new Requester()
//
//     this.state = {
//       courses: [],
//       selectedCourse: null
//     }
//
//     this.selectCourse = this.selectCourse.bind(this);
//     this.populateCourses = this.populateCourses.bind(this);
//   }
//
//   componentDidMount(){
//     this.requester.makeRequest({codeDesired: 200, url: 'http://localhost:5000/api/courses', type: 'GET', body: '', callback: this.populateCourses})
//   }
//
//   populateCourses(responseObject){
//     if (!responseObject.error){
//       this.setState( { courses: responseObject.response } )
//     }
//     this.filterCoursesByEnrolled()
//   }
//
//   filterCoursesByEnrolled(){
//     var userCourses = this.props.user.courses;
//     var courses = this.state.courses;
//     for(var i=courses.length-1; i>=0; i--) {
//       for (var y=0; y<(userCourses.length); y++){
//         if(courses[i].id === userCourses[y].id){
//           courses[i].enrolled = true;
//         }
//       }
//     }
//     this.setState(courses: courses)
//   }
//
//   selectCourse(course) {
//     this.setState({selectedCourse: course})
//   }
//
//   render () {
//     console.log('selectedCourse ', this.state.selectedCourse)
//     if (this.state.selectedCourse) {
//       return(<Course name={this.state.selectedCourse.name} lessons={this.state.selectedCourse.lessons}/>
//     )
//   } else {
//     return(<SubComponentMenu selectItem={this.selectCourse} items={this.state.courses}/>)
//   }
// }
}
