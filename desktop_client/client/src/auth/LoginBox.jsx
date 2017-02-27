import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import SignOut from './SignOut'
import Requester from '../components/requester'
import DuoGuitar from '../containers/duoguitar'

class LoginBox extends React.Component {

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
    this.setState({currentUser:user, courselist:[]});
  }

  fetchUser(){
    console.log("fetching user");
    this.requester.makeRequest({codeDesired: 200, url: 'http://localhost:5000/api/users.json', type: 'GET', body: '', callback: this.userFetched})
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

  render () {
    var mainDiv = <div>
      <h4> Please Sign In/Up </h4>
      <SignIn url={this.props.url + "users/sign_in.json"} onSignIn={this.setUser}></SignIn>
      <SignUp url={this.props.url + "users.json"} onSignUp={this.setUser}></SignUp>
    </div>
    if(this.state.currentUser){
      mainDiv = <div>
        <h4> Welcome {this.state.currentUser.email}</h4>
        <SignOut url={this.props.url + "users/sign_out.json"} onSignOut={this.setUser}></SignOut>
        <DuoGuitar user={this.state.currentUser}></DuoGuitar>
      </div>
    }
    return (
      <div>
        { mainDiv }
      </div>
    )
  }
}

export default LoginBox
