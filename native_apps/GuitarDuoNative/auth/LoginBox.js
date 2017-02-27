import React, { Component } from 'react';
import SignIn from './SignIn'
import SignUp from './SignUp'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';


export default class LoginBox extends Component {

  render() {
    return (
      <View>
      <Text> Please Sign In/Up </Text>
      <SignIn url={this.props.url + "users/sign_in.json"} onSignIn={this.props.setUser}></SignIn>
      <SignUp url={this.props.url + "users.json"} onSignUp={this.props.setUser}></SignUp>
    </View>
  )
  }
}
