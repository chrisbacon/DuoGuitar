import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'


class LoginBox extends React.Component {

  render () {
    return (<div>
      <h4> Please Sign In/Up </h4>
      <SignIn url={this.props.url + "users/sign_in.json"} onSignIn={this.props.setUser}></SignIn>
      <SignUp url={this.props.url + "users.json"} onSignUp={this.props.setUser}></SignUp>
    </div>)
  }
}

export default LoginBox
