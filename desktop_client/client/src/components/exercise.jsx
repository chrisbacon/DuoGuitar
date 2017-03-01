import React from 'react';
import UpButton from './UpButton.jsx';
import SubComponentMenu from './subComponentMenu.jsx';
import ForwardButton from './ForwardButton.jsx';
import BackButton from './BackButton.jsx';
import ProgressBar from './ProgressBar.jsx';

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
    let arrowbar;
    if (this.props.navigable) {
      arrowbar =
        <div className= 'arrowbar'>
          <BackButton click={this.props.prev}/>
          <ProgressBar length={this.props.length} selectedIndex={this.props.selectedIndex}/>
          <ForwardButton click={this.props.next}/>
        </div>
    }


    return (
      <div className="content">
        <UpButton reset={this.props.resetExercise} />
        <h1>{this.props.item.name}</h1>
        <div className="media-container">{this.state.media}</div>
        <p>{this.props.item.content}</p>
        {arrowbar}
      </div>
    )
  }
}

export default Exercise
