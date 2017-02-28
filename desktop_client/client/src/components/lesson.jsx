import React from 'react'
import Exercise from '../components/Exercise.jsx'
import SubComponentMenu from '../components/subComponentMenu.jsx'

class Lesson extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: null,
      selectedExerciseIndex: null

    }

    this.selectExercise = this.selectExercise.bind(this);
    this.resetExercise = this.resetExercise.bind(this);
    this.previousExercise = this.previousExercise.bind(this);
    this.nextExercise = this.nextExercise.bind(this);
  }

  selectExercise(object, index) {
    console.log(index)
    this.setState({selectedExerciseIndex: index});
  }

  resetExercise() {
    this.selectExercise(null);
  }

  previousExercise() {
    console.log("prev button clicked")
    if (this.state.selectedExerciseIndex > 0) {
      this.setState({selectedExerciseIndex: (this.state.selectedExerciseIndex - 1)})
    }
  }

  nextExercise() {
    console.log("next button clicked")
    if (this.state.selectedExerciseIndex < this.state.exercises.length) {
      this.setState({selectedExerciseIndex: (this.state.selectedExerciseIndex + 1)})
    }
  }

  render() {

    if (this.state.selectedExerciseIndex) {
      return (
        <div>
          <Exercise item={this.props.exercises[this.state.selectedExerciseIndex]} resetExercise={this.resetExercise} prev={this.previousExercise} next={this.nextExercise}/>
        </div>
        )
    } else {
      return (
        <div>
        <h1>Lesson: {this.props.name}</h1>
        <SubComponentMenu selectItem={this.selectExercise} items={this.props.exercises} reset={this.props.resetLesson} />
        </div>
        )
    }
  }

}

export default Lesson