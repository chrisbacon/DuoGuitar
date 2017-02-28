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
      selectedIndex: null
    }

    this.selectCourse = this.selectCourse.bind(this);
    this.populateCourses = this.populateCourses.bind(this);
    this.resetCourse = this.resetCourse.bind(this);
  }

  componentDidMount() {
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
        } else {
          courses[i].enrolled = false;
        }
      }
    }
    this.setState(courses: courses)
  }

  selectCourse(index) {

    if (!this.state.courses[index].enrolled) {
      const data = {course_id: this.state.courses[index].id}
      this.requester.makeRequest({codeDesired: 201, url: 'http://localhost:5000/api/subscribed_courses', type: 'POST', body: '', data: data, callback: function() {this.state.courses[index].enrolled = true}.bind(this)})
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
