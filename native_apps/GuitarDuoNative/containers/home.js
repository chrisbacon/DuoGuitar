import React, { Component } from 'react';
import LoginBox from '../auth/LoginBox'
import SignOut from '../auth/SignOut'
import Requester from '../components/requester'
import DuoGuitar from '../containers/duoguitar'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
    this.setUser = this.setUser.bind(this);
    this.requester = new Requester();
    this.userFetched = this.userFetched.bind(this);
  }

  setUser(user){
    this.setState({currentUser:user});
  }

  fetchUser(){
    this.requester.makeRequest({codeDesired: 200, url: this.props.url + '/users.json', type: 'GET', body: '', callback: this.userFetched})
  }

  userFetched(responseObject){
    if (!responseObject.error){
      var receivedUser = responseObject.response;
      this.setUser(receivedUser);
    } else {
      this.setUser(null);
    }
  }

  componentDidMount(){
    this.fetchUser()
  }

  render() {
    if(this.state.currentUser){
      return(
        <View style={this.props.mainStyle.container}>
          <View style={this.props.mainStyle.navbar}>
            <View style={this.props.mainStyle.navbar}>
            <Text style={{color: "white", fontWeight: 'bold', fontSize: 35}}>DuoGuitar</Text>
            </View>
            <View style={this.props.mainStyle.userInfo}>

              <Text style={{color: "white"}}> Welcome {this.state.currentUser.email}</Text>
              <SignOut url={this.props.url + "users/sign_out.json"} onSignOut={this.setUser}></SignOut>

            </View>
          </View>
          <View style={this.props.mainStyle.main}>
            <DuoGuitar url={this.props.url} user={this.state.currentUser}></DuoGuitar>
          </View>
        </View>
      )
    }

    return <LoginBox setUser={this.setUser} url={this.props.url} />
  }
}
