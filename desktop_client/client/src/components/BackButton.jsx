import React from 'react';

class BackButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault()
    this.props.click()
  }

  render() {
    return <button className="arrowbutton left" onClick={this.handleClick}>&larr;</button>
  }
}

export default BackButton;
