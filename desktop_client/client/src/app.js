var React = require('react');
var ReactDOM = require('react-dom');
import DuoGuitar from './containers/duoguitar.jsx';
import Home from './containers/Home.jsx';

window.onload = function () {
  ReactDOM.render(
    <Home url='http://localhost:5000/'/>,
    document.getElementById('app')
  );
}
