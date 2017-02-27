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

export default class SignUp extends Component {

  constructor(props) {
    super(props)
    this.requester = new Requester();
    this.signUp = this.signUp.bind(this)
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
    this.handleOnChangePassConf = this.handleOnChangePassConf.bind(this)
    this.userSignedUp = this.userSignedUp.bind(this)
    this.state = {
      email:"",
      password:"",
      passwordConfirmation:""
    }
  }

  signUp(event){
    event.preventDefault();
    const credentials = {
      user: {
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation
      }
    }
    this.requester.makeRequest({codeDesired: 201, url: this.props.url, type: 'POST', data: credentials, body: '', callback: this.userSignedUp})
  }

  userSignedUp(responseObject){
    if (!responseObject.error){
      const user = responseObject.response;
      this.props.onSignUp(user);
    } else {
      console.log("sign-up failed");
    }
  }

  handleOnChangeEmail(event) {
    this.setState({email: event.target.value})
  }

  handleOnChangePassword(event) {
    this.setState({password: event.target.value})
  }

  handleOnChangePassConf(event) {
    this.setState({passwordConfirmation: event.target.value})
  }

  render() {
    return (
      <View onSubmit={this.signUp} className='login-form'>
        <TextInput onChangeText={this.handleOnChangeEmail} value="Email" />
        <TextInput onChangeText={this.handleOnChangePassword}  value="Password" />
        <TextInput onChangeText={this.handleOnChangePassConf} value="Password Confirmation"/>
        <Button title="Sign Up" onPress={this.signUp}>Sign Up</Button>
      </View>
    )
  }
}
