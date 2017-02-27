import React from 'react'
import LoginBox from '../auth/LoginBox'
import SignOut from '../auth/SignOut'
import Requester from '../components/requester'
import DuoGuitar from '../containers/duoguitar'

class Home extends React.Component {

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
            <div>
                <nav className='navbar'>
                    <h4> Welcome {this.state.currentUser.email}</h4>
                    <SignOut url={this.props.url + "users/sign_out.json"} onSignOut={this.setUser}></SignOut>
                </nav>
                <DuoGuitar user={this.state.currentUser}/>
            </div>
        )

    }
    return <LoginBox setUser={this.setUser} url="http://localhost:5000/" />

}

}

export default Home;