import React, { Component } from 'react';
import Requester from '../components/requester'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class SignOut extends Component{

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
        <Button onClick={this.signOut}>Sign Out</Button>
    )
  }
}

export default SignOut
