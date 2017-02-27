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

export default class SignIn extends Component {

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

  handleOnChangeEmail(text) {
    this.setState({email: text})
  }

  handleOnChangePassword(text) {
    this.setState({password: text})
  }

  signIn(event){
    event.preventDefault();
    const credentials = {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    }
    this.requester.makeRequest({codeDesired: 200, url: this.props.url, type: 'POST', data: credentials, body: '', callback: this.userSignedIn})
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
        <Text>Email</Text>
        <TextInput style={styles.input} onChangeText={this.handleOnChangeEmail}/>
        <Text>Password</Text>
        <TextInput style={styles.input} onChangeText={this.handleOnChangePassword}/>
        <Button title="Sign In" onPress={this.signIn}>Sign In</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 20,
    backgroundColor: 'beige',
  },
});
