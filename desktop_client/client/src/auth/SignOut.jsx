import React from 'react'
import { Link } from 'react-router'
import Requester from '../components/requester'

class SignOut extends React.Component{

  constructor(){
    super()
    this.requester = new Requester();
    this.signOut = this.signOut.bind(this)
    this.userSignedOut = this.userSignedOut.bind(this)
  }

  signOut(event){
    event.preventDefault();
    this.requester.makeRequest({codeDesired: 204, url: "http://localhost:5000/users/sign_out", type: 'DELETE', body: '', callback: this.userSignedOut})
  }

  userSignedOut(responseObject){
    if (!responseObject.error){
      this.props.onSignOut(null)
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.signOut}>Sign Out</button>
      </div>
    )
  }
}

export default SignOut
