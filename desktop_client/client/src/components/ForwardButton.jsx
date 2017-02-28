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
        return <span className="glyphicon glyphicon-arrow-right" onClick={this.handleClick}></span>
    }
}

export default ForwardButton;