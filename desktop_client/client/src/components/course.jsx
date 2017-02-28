import React from 'react';
import Lesson from '../components/Lesson.jsx'
import SubComponentMenu from '../components/subComponentMenu.jsx'

class Course extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: null
    }

    this.selectLesson = this.selectLesson.bind(this);
    this.resetLesson = this.resetLesson.bind(this);
  }

  selectLesson(index) {
    this.setState({selectedIndex: index})
  }

  resetLesson() {
    this.selectLesson(null);
  }

  render () {
    if (this.state.selectedIndex != null) {

      return (
          <Lesson 
            lesson={this.props.lessons[this.state.selectedIndex]} resetLesson={this.resetLesson}
          />
        )

  } else {

    return(<div>
      <h1>{this.props.name}</h1>
      <SubComponentMenu selectItem={this.selectLesson} items={this.props.lessons} reset={this.props.resetCourse}/>
    </div>)
    
  }


}
}

export default Course;
