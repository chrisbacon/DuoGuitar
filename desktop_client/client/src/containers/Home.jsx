import React from 'react'
import LoginBox from '../auth/LoginBox'
import SignOut from '../auth/SignOut'
import Requester from '../components/requester'
import DuoGuitar from '../containers/duoguitar'
import Tabber from '../components/tabber'

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
    // if(this.state.currentUser){
    //   return(
    //     <div>
    //
    //     <nav>
    //       <div className='navbar'>
    //         <h4>DuoGuitar</h4>
    //         <div id="user-info">
    //           <h4> Welcome {this.state.currentUser.email}</h4>
    //           <SignOut url={this.props.url + 'users/sign_out.json'} onSignOut={this.setUser}></SignOut>
    //         </div>
    //       </div>
    //     </nav>
    //     <main>
    //       <DuoGuitar user={this.state.currentUser} url={this.props.url}/>
    //     </main>
    //     </div>
    //     )
    //
    // }
    // return <LoginBox setUser={this.setUser} url={this.props.url} />
    return <Tabber tabString="e|--17b--17--15-|-14h15p14------15-|-14h15p14------------14--|---------------------------|----------------------|-------------------|------------------|---------15b--15-----------|----------------|---------|breakb|--------------|-----------17-----|-----------17-16--17-----|--15b---12-----------------|-------------------13-|-12h13p12/10---13b-|--13--12-12--12b--|--12---------------7b(1/2)-|--7-------------|---------|breakg|--------------|------------------|-------------------------|-----------14b--12-11h12p11|-----------11-12-14---|-------------------|------------------|------14-------------------|-----9--8b(1/2)-|-8/11-9b-|breakd|--------------|------------------|-------------------------|---------------------------|--14--14--------------|-------------------|------------------|---------------------------|----------------|---------|breaka|--------------|------------------|-------------------------|---------------------------|----------------------|-------------------|------------------|---------------------------|----------------|---------|breake|--------------|------------------|-------------------------|---------------------------|----------------------|-------------------|------------------|---------------------------|----------------|---------|break"></Tabber>
  }
}

export default Home;
