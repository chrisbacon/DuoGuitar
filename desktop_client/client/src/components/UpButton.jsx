import React from 'react';

class UpButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault()
        this.props.reset()
    }

    render() {
        return <button onClick={this.handleClick}>Return</button>
    }
}

export default UpButton;