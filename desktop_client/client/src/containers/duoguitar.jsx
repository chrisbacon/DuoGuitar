import React from 'react';
import SubComponentMenu from '../components/subComponentMenu.jsx'
import Course from '../components/Course.jsx'

class DuoGuitar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: null,
            selectedCourse: null
        }

        this.selectCourse = this.selectCourse.bind(this);
    }

    componentDidMount(){
      var url = 'http://localhost:5000/api/courses'
      var request = new XMLHttpRequest()
      request.open('GET', url)

      request.setRequestHeader('Content-Type', "application/json")
      // request.withCredentials = true

      request.onload = () => {
         if(request.status === 200){
          console.log("request: ", request.responseText)
          var data = JSON.parse(request.responseText)
          this.setState( { courses: data } )
         } else{
          console.log("Uh oh you're not logged in!")
          browserHistory.goBack()
         }
      }
      request.send(null)
    }

    selectCourse(course) {
        this.setState({selectedCourse: course})
    }

    render () {

        if (this.state.selectedCourse) {
            return(<Course name={this.state.selectedCourse.name} lessons={this.state.selectedCourse.lessons}/>
                )
        } else {
            return(<SubComponentMenu selectItem={this.selectCourse} items={this.state.courses}/>)
        }

        
    }
}

export default DuoGuitar;