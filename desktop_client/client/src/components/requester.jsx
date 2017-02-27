class Requester{
  constructor() {
  }

  makeRequest(params){
    console.log(this)
    var request = new XMLHttpRequest()
    request.open(params.type, params.url)
    request.setRequestHeader('Content-Type', "application/json")
    // request.withCredentials = true

    request.onload = () => {
      if(request.status === params.codeDesired){
        var responseJson = JSON.parse(request.responseText)
        params.callback({code: request.status, error: false, response: responseJson})
      } else{
        console.log("Error")
        params.callback({code: request.status, error: true})
      }
    }
    request.send(null)
  }
}

export default Requester