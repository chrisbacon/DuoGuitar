import React from 'react'
import SubComponentMenu from '../components/SubComponentMenu.jsx'

class Exercise extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    console.log(this.props.item)
    return <div>yer maw</div>
  }

}


export default Exercise