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
    this.setState({currentUser:user});
  }

  fetchUser(){
    this.requester.makeRequest({codeDesired: 200, url: this.props.url + 'users.json', type: 'GET', body: '', callback: this.userFetched})
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

        <nav>
          <div className='navbar'>
            <h4>DuoGuitar</h4>
            <div id="user-info">
              <h4> Welcome {this.state.currentUser.email}</h4>
              <SignOut url={this.props.url + 'users/sign_out.json'} onSignOut={this.setUser}></SignOut>
            </div>
          </div>
        </nav>
        <main>
          <DuoGuitar user={this.state.currentUser} url={this.props.url}/>
        </main>
        </div>
        )

    }
    return(
      <div>

      <nav>
        <div className='navbar'>
          <h4>DuoGuitar</h4>
          <div id="user-info">
            <h4> Welcome to DuoGuitar!</h4>
          </div>
        </div>
      </nav>
      <main>
        <LoginBox setUser={this.setUser} url={this.props.url} />
      </main>
      </div>
      )
  }
}

export default Home;
