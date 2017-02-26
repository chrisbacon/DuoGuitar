import React from 'react';
import {Link} from 'react-router';

class Lesson extends React.Component{
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      selectedCourseId: parseInt(props.location.query.course_id),
      selectedLessonId: parseInt(props.location.query.lesson),
    }
    console.log(this.state.selectedLessonId)
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
            for (var lesson of course.lessons){
              if (lesson.position === this.state.selectedLessonId){
                this.setState({selectedLesson: lesson})
              }
            }
          }
        }
        console.log("I am lesson " + this.state.selectedLessonId)
        console.log(this.state.selectedLesson)
      } else{
        console.log("User is not logged in")
        browserHistory.goBack()
      }
    }
    request.send(null)
  }

  render(){
    var exerciseDivs = [];

    if(this.state.selectedLesson){
      this.state.selectedLesson.exercises.map((exercise) => {
        console.log(exercise)
        exerciseDivs.push( <div key={exercise.position}>
          <p key={exercise.position}>{exercise.name}</p>
        </div> )
      }
    )
  }

  return(
    <div>
      <h1>Exercises in this lesson:</h1>
      {exerciseDivs.map((exercise) => {
        console.log(exercise)
        return exercise
      })}
    </div>
  )
}
}

export default Lesson;
