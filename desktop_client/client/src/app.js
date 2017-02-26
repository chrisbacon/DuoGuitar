var React = require('react');
var ReactDOM = require('react-dom');
import DuoGuitar from './containers/duoguitar.jsx';

window.onload = function () {
  ReactDOM.render(
    <DuoGuitar/>,
    document.getElementById('app')
  );
}
