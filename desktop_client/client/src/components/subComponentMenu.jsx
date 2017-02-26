import React from 'react';

class SubComponentMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault();
        const selectedItem = this.props.items[event.target.value]

        console.log(selectedItem)
        this.props.selectItem(selectedItem)
    }

    render() {

        if (this.props.items) {
            const items = this.props.items.map(function(item, index) {
                return <button onClick={this.handleClick} value={index} key={index}>{item.name}</button>
            }.bind(this));
            return (<div>{items}</div>)
        } else {
            return (<div></div>)
        }
        
        
    }
}

export default SubComponentMenu;