import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: null
        }
    }

    componentDidMount(){
      var url = 'http://localhost:5000/api/courses'
      var request = new XMLHttpRequest()
      request.open('GET', url)

      request.setRequestHeader('Content-Type', "application/json")
      // request.withCredentials = true

      request.onload = () => {
         if(request.status === 200){
          console.log("request: ", request.responseText)
          var data = JSON.parse(request.responseText)
          this.setState( { courses: data } )
         } else{
          console.log("Uh oh you're not logged in!")
          browserHistory.goBack()
         }
      }
      request.send(null)
    }

    render () {



        return(<div>{JSON.stringify(this.state.courses)}</div>
            )
    }
}

export default Home;