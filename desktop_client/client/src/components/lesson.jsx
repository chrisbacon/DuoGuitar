import React from 'react'
import Exercise from '../components/Exercise.jsx'
import SubComponentMenu from '../components/subComponentMenu.jsx'

class Lesson extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: null

    }

    this.selectExercise = this.selectExercise.bind(this);
    this.resetExercise = this.resetExercise.bind(this);
    this.previousExercise = this.previousExercise.bind(this);
    this.nextExercise = this.nextExercise.bind(this);
  }

  selectExercise(index) {
    this.setState({selectedIndex: index});
  }

  resetExercise() {
    this.selectExercise(null);
  }

  previousExercise() {
    console.log("prev button clicked", this.state.selectedIndex)
    if (this.state.selectedIndex >= 0) {
      this.selectExercise(this.state.selectedIndex - 1)
    }
  }

  nextExercise() {
    console.log("next button clicked", this.state.selectedIndex, this.props.lesson.exercises.length)
    if (this.state.selectedIndex < this.props.lesson.exercises.length) {
      this.selectExercise(this.state.selectedIndex + 1)
    }
  }

  render() {

    if (this.state.selectedIndex != null) {
      return (
        <div>
          <Exercise item={this.props.lesson.exercises[this.state.selectedIndex]} resetExercise={this.resetExercise} prev={this.previousExercise} next={this.nextExercise}/>
        </div>
        )
    } else {
      return (
        <div>
        <h1>Lesson: {this.props.lesson.name}</h1>
        <SubComponentMenu selectItem={this.selectExercise} items={this.props.lesson.exercises} reset={this.props.resetLesson} />
        </div>
        )
    }
  }

}

export default Lesson