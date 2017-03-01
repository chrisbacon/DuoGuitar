import React from 'react';
import Lesson from '../components/Lesson.jsx'
import SubComponentMenu from '../components/subComponentMenu.jsx'
import Requester from '../components/requester.jsx'

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.requester = new Requester()

    this.state = {
      selectedIndex: null
    }

    this.selectLesson = this.selectLesson.bind(this);
    this.resetLesson = this.resetLesson.bind(this);

    this.populateEnrolledLessons = this.populateEnrolledLessons.bind(this);
    this.getEnrolledLessons = this.getEnrolledLessons.bind(this);
  }

  componentDidMount() {
    this.getEnrolledLessons();
  }

  getEnrolledLessons(){
    console.log(this.props.url)
    this.requester.getItems({url: this.props.url + 'api/subscribed_lessons', callback: this.populateEnrolledLessons})
  }

  populateEnrolledLessons(responseObject){
    if (!responseObject.error){
      this.setState( { userLessons: responseObject.response } )
    }
    this.filterLessonsByEnrolled()
  }

  filterLessonsByEnrolled(){
    var userLessons = this.state.userLessons;
    var lessons = this.props.lessons;

    lessons.forEach((lesson) => {
      userLessons.forEach((userLesson) => {
        if(lesson.id === userLesson.id){
          lesson.enrolled = true;
        }
      })
    })

    this.setState(lessons: lessons)
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
        <SubComponentMenu name={this.props.name} selectItem={this.selectLesson} items={this.props.lessons} reset={this.props.resetCourse}/>
      </div>)
    }
  }
}

export default Course;
