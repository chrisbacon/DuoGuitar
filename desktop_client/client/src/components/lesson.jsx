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

  }

  selectExercise(object, index) {
    this.setState({selectedExerciseIndex: index});
  }

  resetExercise() {
    this.selectExercise(null);
  }

  previousExercise() {}

  nextExercise() {}

  render() {

    if (this.state.selectedExerciseIndex) {
      return (
        <div>
          <Exercise item={this.props.exercises[this.state.selectedExerciseIndex]} resetExercise={this.resetExercise}/>
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