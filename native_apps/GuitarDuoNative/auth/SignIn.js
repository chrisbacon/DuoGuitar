import React, { Component } from 'react';
import Requester from '../components/requester'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class SignIn extends Component {

  constructor(props){
    super(props)
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
    this.signIn = this.signIn.bind(this);
    this.userSignedIn = this.userSignedIn.bind(this);
    this.requester = new Requester();
    this.state = {
      email:"",
      password:""
    }
  }

  handleOnChangeEmail(event) {
    this.setState({email: event.target.value})
  }

  handleOnChangePassword(event) {
    this.setState({password: event.target.value})
  }

  signIn(event){
    event.preventDefault();
    const credentials = {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    }
    this.requester.makeRequest({codeDesired: 200, url: 'http://localhost:5000/users/sign_in.json', type: 'POST', data: credentials, body: '', callback: this.userSignedIn})
  }

  userSignedIn(responseObject){
    if (!responseObject.error){
      let user = responseObject.response;
      console.log("user from signin api call: ", user)
      this.props.onSignIn(user);
    } else {
      console.log("sign-in failed");
    }
  }

  render() {
    return (
      <View  className='login-form' >
        <TextInput type="text" onChange={this.handleOnChangeEmail}  placeholder="Email"></TextInput>
        <TextInput type="password" onChange={this.handleOnChangePassword}  placeholder="Password"></TextInput>
        <button onClick={this.signIn}>  Sign In </button>
      </View>
    )
  }
}

export default SignIn
