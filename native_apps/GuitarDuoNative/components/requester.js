export default class Requester{
  constructor() {
  }

  makeRequest(params){
    console.log(this)
    console.log(params)
    var request = new XMLHttpRequest()
    request.open(params.type, params.url)
    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
      if(request.status === params.codeDesired){
        console.log("request succeeded")
        var responseJson = {}
        if(request.responseText){
          var responseJson = JSON.parse(request.responseText)
        }
        console.log(responseJson)
        params.callback({code: request.status, error: false, response: responseJson})
      } else{
        console.log("Error")
        params.callback({code: request.status, error: true})
      }
    }
    console.log(request)
    if(params.data){
      request.send(JSON.stringify(params.data))
    } else {
      request.send(null)
    }
  }
}
