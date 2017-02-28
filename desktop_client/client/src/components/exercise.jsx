import React from 'react'
import SubComponentMenu from '../components/SubComponentMenu.jsx'

class Exercise extends React.Component {
  constructor(props) {
    super(props);

    this.state = {media: null}
  }

  getMediaType() {
    if (this.props.item.medium.source_type === "video") {
      this.state.media = <iframe src={this.props.item.medium.source} width="500" height="300" frameborder="0" />
    } else if  (this.props.item.medium.source_type === "image") 
    {
      this.state.media = <img src={this.props.item.medium.source} width="500" height="300" frameborder="0" />
    }
  }

  render() {  

    this.getMediaType();

    return (
      <div className="exercise-container">
      <h1>{this.props.item.name}</h1>
      <div className="media-container">{this.state.media}</div>
      <p>{this.props.item.content}</p>
      </div>
      )
  }

}


export default Exercise