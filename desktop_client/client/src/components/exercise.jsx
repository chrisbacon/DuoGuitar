import React from 'react'
import BackButton from '../components/BackButton.jsx'
import SubComponentMenu from '../components/subComponentMenu.jsx'

class Exercise extends React.Component {
  constructor(props) {
    super(props);

    this.state = {media: null}
  }

  getMediaType() {

    if (this.props.item.medium) {

      if (this.props.item.medium.source_type === "video") {
        this.state.media = <iframe src={this.props.item.medium.source} width="500" height="300" frameBorder="5" />
      } else if  (this.props.item.medium.source_type === "image")
      {
        this.state.media = <img src={this.props.item.medium.source} frameBorder="5" />
      }
    }
  }

  render() {

    this.getMediaType();

    return (
      <div className="exercise-container">
        <h1>{this.props.item.name}</h1>
        <div className="media-container">{this.state.media}</div>
        <p>{this.props.item.content}</p>
        <div>
          <button className="prev" onClick={this.props.prev}>Previous Exercise</button>
          <button className="next" onClick={this.props.next}>Next Exercise</button>
        </div>
        <BackButton reset={this.props.resetExercise} />
      </div>
      )
  }

}


export default Exercise
