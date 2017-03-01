import React from 'react';
import Requester from '../components/requester.jsx'

class Updater extends React.Component {

  populateCourses(responseObject){
    console.log("in updater, but this is " + this)
    if (!responseObject.error){
      console.log("attempting to setState on " + this)
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
    console.log("attempting to setState on " + this)
    this.setState(courses: courses)
  }

  everything(url){
    console.log(url)
    console.log(this)
    console.log(this.props.url)
    console.log(this.populateCourses)
    this.requester.getItems({url: this.props.url + 'api/courses', callback: function(){ console.log("I am " + this) ; this.populateCourses }.bind(this).bind(this)})
  }
}

export default Updater;
