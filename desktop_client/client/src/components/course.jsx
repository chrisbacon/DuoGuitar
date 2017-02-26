import React from 'react';
import {Link} from 'react-router';

class Course extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedCourseId: parseInt(props.location.query.course_id),
    }
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
        for(var course of data){
          if (course.id === this.state.selectedCourseId){
            this.setState({selectedCourse: course})
          }
        }
        console.log("I am course " + this.state.selectedCourseId)
        console.log(this.state.selectedCourse)
      } else{
        console.log("User is not logged in")
        browserHistory.goBack()
      }
    }
    request.send(null)
  }

  render(){
    var lessonsDivs = [];

    if(this.state.selectedCourse){
      this.state.selectedCourse.lessons.map((lesson) => {
        console.log(lesson)
        lessonsDivs.push( <div key={lesson.position}>
          <Link key={lesson.position} to={{"pathname": "/lesson", "query": {"course_id": this.state.selectedCourseId, "lesson": lesson.position} }}>{lesson.name}</Link>
        </div> )
      }
    )
  }

  return(
    <div>
      {lessonsDivs.map((lesson) => {
        console.log(lesson)
        return lesson
      })}
    </div>
  )
}
}

export default Course;
