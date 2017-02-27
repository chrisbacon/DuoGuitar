import React from 'react'
import Requester from '../components/requester'

class SignUp extends React.Component {

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
    this.requester.makeRequest({codeDesired: 201, url: 'http://localhost:5000/users/sign_up.json', type: 'POST', data: credentials, body: '', callback: this.userSignedUp})
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
      <form onSubmit={this.signUp} className='login-form'>
        <input type="text" onChange={this.handleOnChangeEmail}  placeholder="Email" />
        <input type="password" onChange={this.handleOnChangePassword}  placeholder="Password" />
        <input type="password" onChange={this.handleOnChangePassConf}  placeholder="Password Confirmation" />

        <button onClick={this.signUp}>  Sign Up </button>
      </form>
    )
  }
}

export default SignUp
