import React from 'react';
import SubComponentMenu from '../components/subComponentMenu.jsx'
import Course from '../components/course.jsx'
import Requester from '../components/requester.jsx'
import Updater from '../components/updater.jsx'

class DuoGuitar extends React.Component {
  constructor(props) {
    super(props);
    this.requester = new Requester();
    console.log(this.requester)

    this.state = {
      everything []
      selectedIndex: null
    }

    this.selectCourse = this.selectCourse.bind(this);
    this.resetCourse = this.resetCourse.bind(this);
  }

  componentDidMount() {

    this.updater = new Updater();
    console.log(this)
    console.log(this.updater)
    console.log(this.updater.everything)
    this.everything = this.updater.everything.bind(this)
    this.populateCourses = this.updater.populateCourses.bind(this);
    this.populateEnrolledCourses = this.updater.populateEnrolledCourses.bind(this);
    this.getEnrolledCourses = this.updater.getEnrolledCourses.bind(this);
    this.filterCoursesByEnrolled = this.updater.filterCoursesByEnrolled.bind(this);
    this.everything(this.props.url);

  }

  resetCourse() {
    this.setState({selectedIndex: null})
  }

  selectCourse(index) {
    if (!this.state.courses[index].enrolled) {
      const data = {course_id: this.state.courses[index].id}

      this.requester.setItems({url: this.props.url + 'api/subscribed_courses', data: data, callback: this.getEnrolledCourses})
    }
    this.setState({selectedIndex: index})
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
