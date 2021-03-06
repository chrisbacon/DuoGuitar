export default class Requester{
  constructor() {
  }

  makeRequest(params){
    var request = new XMLHttpRequest()
    request.open(params.type, params.url)
    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
      if(request.status === params.codeDesired){
        var responseJson = {}
        if(request.responseText){
          var responseJson = JSON.parse(request.responseText)
        }
        params.callback({code: request.status, error: false, response: responseJson})
      } else{
        console.log("Error - unexpected API response code")
        params.callback({code: request.status, error: true})
      }
    }
    if(params.data){
      request.send(JSON.stringify(params.data))
    } else {
      request.send(null)
    }
  }

  getItems(params){
    this.makeRequest({codeDesired: 200, url: params.url, type: 'GET', body: '', callback: params.callback})
  }

  setItems(params){
    this.makeRequest({codeDesired: 200, url: params.url, type: 'POST', body: '', data: params.data, callback: params.callback})
  }

}
