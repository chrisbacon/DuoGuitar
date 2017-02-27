import React, { Component } from 'react';
import Requester from '../components/requester'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
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
    this.requester.makeRequest({codeDesired: 204, url: this.props.url, type: 'DELETE', body: '', callback: this.userSignedOut})
  }

  userSignedOut(responseObject){
    if (!responseObject.error){
      this.props.onSignOut(null)
    }
  }

  render() {
    return (
        <Button title="Sign out" onPress={this.signOut}>Sign Out</Button>
    )
  }
}

export default SignOut
