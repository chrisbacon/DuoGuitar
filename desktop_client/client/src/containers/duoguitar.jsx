import React from 'react';
import SubComponentMenu from '../components/subComponentMenu.jsx'
import Course from '../components/Course.jsx'
import Requester from '../components/Requester.jsx'

class DuoGuitar extends React.Component {
  constructor(props) {
    super(props);
    this.requester = new Requester()

    this.state = {
      user: props.user,
      courses: [],
      selectedCourse: null
    }

    this.selectCourse = this.selectCourse.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
  }

  componentDidMount(){
    console.log(this.state.user)
    this.requester.makeRequest({codeDesired: 200, url: 'http://localhost:5000/api/courses', type: 'GET', body: '', callback: this.handleRequest})
  }

  handleRequest(responseObject){
    if (!responseObject.error){
      this.setState( { courses: responseObject.response } )
    }
  }

  selectCourse(course) {
    this.setState({selectedCourse: course})
  }

  render () {
    console.log('selectedCourse ', this.state.selectedCourse)
    if (this.state.selectedCourse) {
      return(<Course name={this.state.selectedCourse.name} lessons={this.state.selectedCourse.lessons}/>
    )
  } else {
    return(<SubComponentMenu selectItem={this.selectCourse} items={this.state.courses}/>)
  }
}
}

export default DuoGuitar;
