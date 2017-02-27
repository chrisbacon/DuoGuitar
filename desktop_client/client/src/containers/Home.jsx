import React from 'react'
import LoginBox from '../auth/LoginBox'

class Home extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <LoginBox url="http://localhost:5000" />
      )

  }

}

export default Home;