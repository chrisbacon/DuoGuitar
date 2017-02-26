import React from 'react'
import ReactDOM from 'react-dom'
import Home from './containers/Home'
import Course from './components/course'
import Lesson from './components/lesson'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

class App extends React.Component{

  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home}>
          <IndexRoute component={Home} />
        </Route>
        <Route path="home" component={Home}/>
        <Route path="course" component={Course}/>
        <Route path="lesson" component={Lesson}/>
      </Router>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
