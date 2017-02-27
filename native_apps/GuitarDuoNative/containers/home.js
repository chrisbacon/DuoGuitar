import React, { Component } from 'react';
import LoginBox from '../auth/LoginBox'
import SignOut from '../auth/SignOut'
import Requester from '../components/requester'
// import DuoGuitar from '../containers/duoguitar'

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
    console.log("user: ", user)
    this.setState({currentUser:user});
  }

  fetchUser(){
    console.log("fetching user");
    this.requester.makeRequest({codeDesired: 200, url: 'http://localhost:5000/users.json', type: 'GET', body: '', callback: this.userFetched})
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
        <View>
          <View className='navbar'>
            <text> Welcome {this.state.currentUser.email}</text>
            <SignOut url={this.props.url + "users/sign_out.json"} onSignOut={this.setUser}></SignOut>
          </View>
          // <DuoGuitar user={this.state.currentUser}/>
        </View>
      )
    }
    return <LoginBox setUser={this.setUser} url="http://localhost:5000/" />
  }
}
