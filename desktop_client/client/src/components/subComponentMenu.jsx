import React from 'react';
import UpButton from '../components/UpButton.jsx'

class SubComponentMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault();
    this.props.selectItem(parseInt(event.target.value));
  }

  render() {

    if (this.props.items) {
      const items = this.props.items.map(function(item, index) {
        if (item.enrolled === true) {
          return <button className="btn btn-success"onClick={this.handleClick} value={index} key={index}>{item.name}</button>
        } else {
          return <button className="btn btn-outline-primary"  onClick={this.handleClick} value={index} key={index}>{item.name}</button>
        }
      }.bind(this));

      return (
        <div>
        <UpButton reset={this.props.reset} />
        <h1>{this.props.name}</h1>
        <div>{items}</div>
        </div>

        )
    } else {
      return (<div></div>)
    }
  }
}

export default SubComponentMenu;
