import React from 'react'
import Requester from '../components/requester'

class SignIn extends React.Component {

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
    this.requester.makeRequest({codeDesired: 200, url: this.props.url, type: 'POST', data: credentials, body: '', callback: this.userSignedIn})
  }

  userSignedIn(responseObject){
    if (!responseObject.error){
      let user = responseObject.response;
      this.props.onSignIn(user);
    } else {
      console.log("sign-in failed");
    }
  }

  render() {
    return (
      <form  className='login-form' >
        <input type="text" onChange={this.handleOnChangeEmail}  placeholder="Email" />
        <input type="password" onChange={this.handleOnChangePassword}  placeholder="Password" />
        <button onClick={this.signIn}>Sign In</button>
      </form>
    )
  }
}

export default SignIn
