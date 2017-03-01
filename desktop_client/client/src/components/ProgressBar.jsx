import React from 'react';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const spans = [];
        for (let i=0; i < this.props.length; i++) {
            if (this.props.selectedIndex === i) {
                spans.push(<span className='progressDot current'/>)
            } else {
                spans.push(<span className='progressDot'/>)
            }
        }
        return (

            <div className='progressBar'>
                {spans}
            </div>

            )
    }
}

export default ProgressBar;