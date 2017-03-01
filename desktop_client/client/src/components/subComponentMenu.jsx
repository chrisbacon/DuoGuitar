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
          return <button className="button enrolled" onClick={this.handleClick} value={index} key={index}>{item.name}</button>
        } else {
          return <button className="button"  onClick={this.handleClick} value={index} key={index}>{item.name}</button>
        }
      }.bind(this));

      let upButton;
      if (this.props.reset){
        upButton = <UpButton reset={this.props.reset} />
      }
      return (
        <div className="content">
          {upButton}
          <h1>{this.props.name}</h1>
          <div className="items-container">{items}</div>
        </div>

      )
    } else {
      return (<div></div>)
    }
  }
}

export default SubComponentMenu;
