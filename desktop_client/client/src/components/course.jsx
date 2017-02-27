import React from 'react';
import Lesson from '../components/Lesson.jsx'
import SubComponentMenu from '../components/subComponentMenu.jsx'

class Course extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lessons: null,
      selectedLesson: null
    }

    this.selectLesson = this.selectLesson.bind(this);
  }

  selectLesson(lesson) {
    this.setState({selectedLesson: lesson})
  }

  render () {

    if (this.state.selectedLesson) {
      // return(<div>{this.state.selectedLesson.name} was selected!!</div>
      return (
          <Lesson 
            name={this.state.selectedLesson.name} exercises={this.state.selectedLesson.exercises}
          />
        )
  } else {
    return(<div>
      <h1>{this.props.name}</h1>
      <SubComponentMenu selectItem={this.selectLesson} items={this.props.lessons}/>
    </div>)
  }


}
}

export default Course;
