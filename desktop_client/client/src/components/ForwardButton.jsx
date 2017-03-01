import React from 'react';

class ForwardButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault()
    this.props.click()
  }

  render() {
    return <button className="arrowbutton right" onClick={this.handleClick}>&rarr;</button>
  }
}

export default ForwardButton;
