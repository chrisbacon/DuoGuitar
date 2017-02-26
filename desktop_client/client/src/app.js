// var React = require('react');
// var ReactDOM = require('react-dom');
// import DuoGuitar from './containers/duoguitar.jsx';

// window.onload = function () {
//   ReactDOM.render(
//     <DuoGuitar/>,
//     document.getElementById('app')
//   );
// }


import React from 'react'
import ReactDOM from 'react-dom'
import Home from './containers/Home'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

class App extends React.Component{

  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))

// <Route path='/shows' component={Listing} />