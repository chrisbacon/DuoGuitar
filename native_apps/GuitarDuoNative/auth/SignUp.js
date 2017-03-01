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
    console.log(this.props.url)
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

  handleOnChangeEmail(text) {
    this.setState({email: text})
  }

  handleOnChangePassword(text) {
    this.setState({password: text})
  }

  handleOnChangePassConf(text) {
    this.setState({passwordConfirmation: text})
  }

  render() {
    return (
      <View onSubmit={this.signUp} className='login-form'>
        <Text>Email</Text>
        <TextInput autoCapitalize="none" style={styles.input} onChangeText={this.handleOnChangeEmail}/>
        <Text>Password</Text>
        <TextInput autoCapitalize="none" style={styles.input} onChangeText={this.handleOnChangePassword}/>
        <Text>Confirm password</Text>
        <TextInput autoCapitalize="none" style={styles.input} onChangeText={this.handleOnChangePassConf}/>
        <Button title="Sign Up" onPress={this.signUp}>Sign Up</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: 'beige',
  },
});
