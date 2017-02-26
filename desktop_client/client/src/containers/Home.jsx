import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
    }
  }

  showCourse(event) {
    console.log(event.target.id)

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
        this.setState( { courses: data } )
      } else{
        console.log("User is not logged in")
        browserHistory.goBack()
      }
    }
    request.send(null)
  }

  render() {

    return(

      <div>
        {this.state.courses.map((course) => {
          return <div key={course.id}>
          <Link key={course.id} to={{"pathname": "/course", "query": {"course_id": course.id} }}>{"Course " + course.id}</Link>
          </div>
        })}
      </div>
    )
  }
}

export default Home;

//   <button
//   id={course.id}
//   key={course.id} onClick={this.showCourse.bind(this)}>{course.name}
// </button>
