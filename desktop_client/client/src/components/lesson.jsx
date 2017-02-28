import React from 'react'
import Exercise from '../components/Exercise.jsx'
import SubComponentMenu from '../components/subComponentMenu.jsx'

class Lesson extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: null,
      selectedExercise: null

    }

    this.selectExercise = this.selectExercise.bind(this);

  }

  selectExercise(exercise) {
    this.setState({selectedExercise: exercise});
  }

  render() {

    if (this.state.selectedExercise) {
      return (
        <div>
          <Exercise item={this.state.selectedExercise}/>
        </div>
        )
    } else {
      return (
        <div>
        <h1>Lesson: {this.props.name}</h1>
        <SubComponentMenu selectItem={this.selectExercise} items={this.props.exercises} />
        </div>
        )
    }
  }

}

export default Lesson