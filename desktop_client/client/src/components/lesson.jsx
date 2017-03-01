import React from 'react'
import Exercise from '../components/Exercise.jsx'
import SubComponentMenu from '../components/subComponentMenu.jsx'
import Requester from '../components/requester.jsx'

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    console.log("lesson props")
    console.log(props)
    this.requester = new Requester()

    this.state = {
      selectedIndex: null,
      exercises: this.props.lesson.exercises
    }

    this.selectExercise = this.selectExercise.bind(this);
    this.resetExercise = this.resetExercise.bind(this);
    this.previousExercise = this.previousExercise.bind(this);
    this.nextExercise = this.nextExercise.bind(this);

    this.populateEnrolledExercises = this.populateEnrolledExercises.bind(this);
    this.getEnrolledExercises = this.getEnrolledExercises.bind(this);
  }

  componentDidMount() {
    this.getEnrolledExercises();
  }

  getEnrolledExercises(){
    this.requester.getItems({url: this.props.url + 'api/subscribed_exercises', callback: this.populateEnrolledExercises})
  }

  populateEnrolledExercises(responseObject){
    if (!responseObject.error){
      console.log(responseObject)
      this.setState( { userExercises: responseObject.response } )
    }
    this.filterExercisesByEnrolled()
  }

  filterExercisesByEnrolled(){
    var userExercises = this.state.userExercises;
    var exercises = this.props.lesson.exercises;

    exercises.forEach((exercise) => {
      userExercises.forEach((userExercise) => {
        if(exercise.id === userExercise.id){
          exercise.enrolled = true;
        }
      })
    })

    this.setState(exercises: exercises)
  }

  selectExercise(index) {
    console.log(this.state.exercises)
    console.log(index)
    if (!this.state.exercises[index].enrolled) {
      const data = {exercise_id: this.state.exercises[index].id}

      this.requester.setItems({url: this.props.url + 'api/subscribed_exercises', data: data, callback: this.getEnrolledExercises})
    }
    this.setState({selectedIndex: index})
  }

  resetExercise() {
    this.setState({selectedIndex: null})
  }

  previousExercise() {
    if (this.state.selectedIndex > 0) {
      this.selectExercise(this.state.selectedIndex - 1)
    }
  }

  nextExercise() {
    if (this.state.selectedIndex < this.props.lesson.exercises.length) {
      this.selectExercise(this.state.selectedIndex + 1)
    }
  }

  render() {

    if (this.state.selectedIndex != null) {
      return (
          <Exercise item={this.props.lesson.exercises[this.state.selectedIndex]} resetExercise={this.resetExercise} prev={this.previousExercise} next={this.nextExercise}/>
      )
    } else {
      return (
          <SubComponentMenu name={this.props.lesson.name} selectItem={this.selectExercise} items={this.props.lesson.exercises} reset={this.props.resetLesson} />
      )
    }
  }

}

export default Lesson
