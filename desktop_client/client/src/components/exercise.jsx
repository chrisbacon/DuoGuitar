import React from 'react'
import SubComponentMenu from '../components/SubComponentMenu.jsx'

class Exercise extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    console.log(this.props.item);

    var media = null;

    if (this.props.item.medium.source_type === "video") {
      media = <iframe src={this.props.item.medium.source} width="500" height="300" frameborder="0" />
    }   

    return (
        <div className="exercise-container">
          <h1>{this.props.item.name}</h1>
          <div className="media-container">{media}</div>
          <p>{this.props.item.content}</p>
        </div>
      )
  }

}


export default Exercise