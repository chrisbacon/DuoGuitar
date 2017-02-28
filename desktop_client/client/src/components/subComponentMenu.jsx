import React from 'react';
import BackButton from '../components/BackButton.jsx'

class SubComponentMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault();
    console.log(event.target.value, parseInt(event.target.value), event.target)
    this.props.selectItem(parseInt(event.target.value));
  }

  render() {

    if (this.props.items) {
      const items = this.props.items.map(function(item, index) {
        if (item.enrolled === true) {
          return <button title="enrolled" className="enrolled" onClick={this.handleClick} value={index} key={index}>{item.name}</button>
        } else {
          return <button title="not-enrolled" className="not-enrolled" onClick={this.handleClick} value={index} key={index}>{item.name}</button>
        }
      }.bind(this));
      return (
        <div>
        <div>{items}</div>
        <BackButton reset={this.props.reset} />
        </div>

        )
    } else {
      return (<div></div>)
    }
  }
}

export default SubComponentMenu;
