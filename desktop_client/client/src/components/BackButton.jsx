import React from 'react';

class BackButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault()
        this.props.reset()
    }

    render() {
        return <button onClick={this.handleClick}>Back</button>
    }
}

export default BackButton;