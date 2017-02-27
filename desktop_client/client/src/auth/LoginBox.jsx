import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp' 
import SignOut from './SignOut'

class LoginBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
    this.setUser = this.setUser.bind(this)
  }

  setUser(user){
    this.setState({currentUser:user, courselist:[]})
  }

  fetchUser(){
    console.log("fetching user");
    const request = new XMLHttpRequest();
    request.open("GET", this.props.url + "users.json");
    request.setRequestHeader("Content-type", "application/json");
    request.withCredentials = true;
    
    request.onload = () => {
      if (request.status === 200) {
        console.log("request.responseText" + request.responseText);
        const receivedUser = JSON.parse(request.responseText);
        this.setUser(receivedUser);
      } else if (request.status === 401) {
        this.setUser(null);
      }
    }
    request.send(null);
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