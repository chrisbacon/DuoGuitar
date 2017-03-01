import React from 'react';
import SubComponentMenu from '../components/subComponentMenu.jsx'
import Course from '../components/course.jsx'
import Requester from '../components/requester.jsx'

class DuoGuitar extends React.Component {
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
    this.requester.makeRequest({codeDesired: 200, url: this.props.url + 'api/courses', type: 'GET', body: '', callback: this.populateCourses})
  }

  populateCourses(responseObject){
    if (!responseObject.error){
      this.setState( { courses: responseObject.response } )
    }
    this.getEnrolledCourses();
  }

  getEnrolledCourses(){
    this.requester.makeRequest({codeDesired: 200, url: this.props.url + 'api/subscribed_courses', type: 'GET', body: '', callback: this.populateEnrolledCourses})
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
    if (!this.state.courses[index].enrolled) {
      const data = {course_id: this.state.courses[index].id}
      this.requester.makeRequest({codeDesired: 200, url: this.props.url + 'api/subscribed_courses', type: 'POST', body: '', data: data, callback: this.getEnrolledCourses})
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

        <Course name={course.name} lessons={course.lessons} resetCourse={this.resetCourse}/>
      )

    } else {

      return(

        <SubComponentMenu name="Course List" selectItem={this.selectCourse} items={this.state.courses}/>

      )

    }
  }
}

export default DuoGuitar;
