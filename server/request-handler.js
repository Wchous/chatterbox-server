var url = require('url');
var querystring = require('querystring')
var fs = require('fs');

var filename = '../../chatterClient/client/index.html'

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

var results = {"results":[{"objectId":"wlYrCX99Vc","username":"dan","text":"first","roomname":"lobby","createdAt":"2017-02-08T21:17:18.455Z","updatedAt":"2017-02-08T21:17:18.455Z"},{"objectId":"7HiU8Ucu1M","username":"ajp213","text":"Good news everyone!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.459Z","updatedAt":"2017-02-08T21:17:18.459Z"},{"objectId":"hXdB11AYFC","username":"jdubz","text":"Put the rhythm in algorithm","roomname":"lobby","createdAt":"2017-02-08T21:17:18.459Z","updatedAt":"2017-02-08T21:17:18.459Z"},{"objectId":"r3iBJOH9Mf","username":"fredx","text":"`var that = this`, never use it.","roomname":"lobby","createdAt":"2017-02-08T21:17:18.460Z","updatedAt":"2017-02-08T21:17:18.460Z"},{"objectId":"5L1cmAjNLp","username":"dan","text":"It's just JavaScript!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.458Z","updatedAt":"2017-02-08T21:17:18.458Z"},{"objectId":"1Zji6ctYfk","username":"properdan","text":"Wow, crazy","roomname":"lobby","createdAt":"2017-02-08T21:17:18.458Z","updatedAt":"2017-02-08T21:17:18.458Z"},{"objectId":"pq8wK1hxFD","username":"betherz","text":"Did you read the README?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.461Z","updatedAt":"2017-02-08T21:17:18.461Z"},{"objectId":"feBUNmDqgy","username":"zestylesty","text":"Did you read the README?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.463Z","updatedAt":"2017-02-08T21:17:18.463Z"},{"objectId":"uYKV4uiwDl","username":"sunnygonna","text":"Did you test this at all?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.464Z","updatedAt":"2017-02-08T21:17:18.464Z"},{"objectId":"5WhG5hgZJT","username":"sunnygonna","text":"What does the error message say?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.464Z","updatedAt":"2017-02-08T21:17:18.464Z"},{"objectId":"nf2DhxFXfI","username":"magee","text":"Just humor me and let’s look at the code anyway","roomname":"lobby","createdAt":"2017-02-08T21:17:18.465Z","updatedAt":"2017-02-08T21:17:18.465Z"},{"objectId":"hedRVgGvr7","username":"magee","text":"Be the machine!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.466Z","updatedAt":"2017-02-08T21:17:18.466Z"},{"objectId":"VjswlujByz","username":"magee","text":"If you used good variable names you wouldn’t have to write so many comments","roomname":"lobby","createdAt":"2017-02-08T21:17:18.466Z","updatedAt":"2017-02-08T21:17:18.466Z"},{"objectId":"qJCoEm1ygt","username":"dan","text":"It's just JavaScript!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.467Z","updatedAt":"2017-02-08T21:17:18.467Z"},{"objectId":"PHarDMoivG","username":"properdan","text":"Wow, crazy","roomname":"lobby","createdAt":"2017-02-08T21:17:18.467Z","updatedAt":"2017-02-08T21:17:18.467Z"},{"objectId":"nooQyS7Dmv","username":"ajp213","text":"Good news everyone!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.467Z","updatedAt":"2017-02-08T21:17:18.467Z"},{"objectId":"v33nboiQRJ","username":"jdubz","text":"Put the rhythm in algorithm","roomname":"lobby","createdAt":"2017-02-08T21:17:18.468Z","updatedAt":"2017-02-08T21:17:18.468Z"},{"objectId":"O9c0t3Pc54","username":"fredx","text":"`var that = this`, never use it.","roomname":"lobby","createdAt":"2017-02-08T21:17:18.468Z","updatedAt":"2017-02-08T21:17:18.468Z"},{"objectId":"kQzS7bq4uh","username":"zestylesty","text":"Did you read the README?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.469Z","updatedAt":"2017-02-08T21:17:18.469Z"},{"objectId":"Y3ajcevx6C","username":"sunnygonna","text":"Did you test this at all?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.470Z","updatedAt":"2017-02-08T21:17:18.470Z"},{"objectId":"0CIGBrmAX9","username":"sunnygonna","text":"What does the error message say?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.470Z","updatedAt":"2017-02-08T21:17:18.470Z"},{"objectId":"lsmj4POpXq","username":"magee","text":"Just humor me and let’s look at the code anyway","roomname":"lobby","createdAt":"2017-02-08T21:17:18.471Z","updatedAt":"2017-02-08T21:17:18.471Z"},{"objectId":"OERWegYId3","username":"betherz","text":"Did you read the README?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.469Z","updatedAt":"2017-02-08T21:17:18.469Z"},{"objectId":"aPASQNWrg8","username":"magee","text":"Be the machine!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.471Z","updatedAt":"2017-02-08T21:17:18.471Z"},{"objectId":"7bnmv79dYJ","username":"magee","text":"If you used good variable names you wouldn’t have to write so many comments","roomname":"lobby","createdAt":"2017-02-08T21:17:18.471Z","updatedAt":"2017-02-08T21:17:18.471Z"},{"objectId":"V983I4RoyW","username":"dan","text":"It's just JavaScript!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.472Z","updatedAt":"2017-02-08T21:17:18.472Z"},{"objectId":"K1lnKnZzT7","username":"properdan","text":"Wow, crazy","roomname":"lobby","createdAt":"2017-02-08T21:17:18.472Z","updatedAt":"2017-02-08T21:17:18.472Z"},{"objectId":"WLmmaOfm1c","username":"ajp213","text":"Good news everyone!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.472Z","updatedAt":"2017-02-08T21:17:18.472Z"},{"objectId":"354SssjDBH","username":"jdubz","text":"Put the rhythm in algorithm","roomname":"lobby","createdAt":"2017-02-08T21:17:18.473Z","updatedAt":"2017-02-08T21:17:18.473Z"},{"objectId":"BJ28rGBjj3","username":"fredx","text":"`var that = this`, never use it.","roomname":"lobby","createdAt":"2017-02-08T21:17:18.473Z","updatedAt":"2017-02-08T21:17:18.473Z"},{"objectId":"NOY22UxcuI","username":"betherz","text":"Did you read the README?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.474Z","updatedAt":"2017-02-08T21:17:18.474Z"},{"objectId":"31CYlf4jXq","username":"zestylesty","text":"Did you read the README?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.474Z","updatedAt":"2017-02-08T21:17:18.474Z"},{"objectId":"4JnfjFF9lH","username":"sunnygonna","text":"Did you test this at all?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.475Z","updatedAt":"2017-02-08T21:17:18.475Z"},{"objectId":"bbHzWhA41C","username":"sunnygonna","text":"What does the error message say?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.475Z","updatedAt":"2017-02-08T21:17:18.475Z"},{"objectId":"yMTVlAcpCB","username":"magee","text":"Just humor me and let’s look at the code anyway","roomname":"lobby","createdAt":"2017-02-08T21:17:18.475Z","updatedAt":"2017-02-08T21:17:18.475Z"},{"objectId":"W3tAR2cAOV","username":"magee","text":"Be the machine!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.476Z","updatedAt":"2017-02-08T21:17:18.476Z"},{"objectId":"cDkCBaj788","username":"magee","text":"If you used good variable names you wouldn’t have to write so many comments","roomname":"lobby","createdAt":"2017-02-08T21:17:18.476Z","updatedAt":"2017-02-08T21:17:18.476Z"},{"objectId":"0QNG3LM7gT","username":"dan","text":"It's just JavaScript!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.477Z","updatedAt":"2017-02-08T21:17:18.477Z"},{"objectId":"SP3FOSATq1","username":"properdan","text":"Wow, crazy","roomname":"lobby","createdAt":"2017-02-08T21:17:18.477Z","updatedAt":"2017-02-08T21:17:18.477Z"},{"objectId":"G5xufJISCE","username":"ajp213","text":"Good news everyone!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.478Z","updatedAt":"2017-02-08T21:17:18.478Z"},{"objectId":"j7lFy3AQ2e","username":"jdubz","text":"Put the rhythm in algorithm","roomname":"lobby","createdAt":"2017-02-08T21:17:18.478Z","updatedAt":"2017-02-08T21:17:18.478Z"},{"objectId":"vYNRNYRGTf","username":"fredx","text":"`var that = this`, never use it.","roomname":"lobby","createdAt":"2017-02-08T21:17:18.478Z","updatedAt":"2017-02-08T21:17:18.478Z"},{"objectId":"jImNBdwszJ","username":"betherz","text":"Did you read the README?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.479Z","updatedAt":"2017-02-08T21:17:18.479Z"},{"objectId":"RqprSTAiXq","username":"zestylesty","text":"Did you read the README?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.480Z","updatedAt":"2017-02-08T21:17:18.480Z"},{"objectId":"afVxpyd3tD","username":"sunnygonna","text":"Did you test this at all?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.480Z","updatedAt":"2017-02-08T21:17:18.480Z"},{"objectId":"2FDUsWiir4","username":"sunnygonna","text":"What does the error message say?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.481Z","updatedAt":"2017-02-08T21:17:18.481Z"},{"objectId":"tvhn3TKZQT","username":"magee","text":"Just humor me and let’s look at the code anyway","roomname":"lobby","createdAt":"2017-02-08T21:17:18.483Z","updatedAt":"2017-02-08T21:17:18.483Z"},{"objectId":"KBtF04f9Eq","username":"magee","text":"Be the machine!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.483Z","updatedAt":"2017-02-08T21:17:18.483Z"},{"objectId":"3KSs48DgqV","username":"magee","text":"If you used good variable names you wouldn’t have to write so many comments","roomname":"lobby","createdAt":"2017-02-08T21:17:18.484Z","updatedAt":"2017-02-08T21:17:18.484Z"},{"objectId":"aEpgtY4XXK","username":"dan","text":"It's just JavaScript!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.484Z","updatedAt":"2017-02-08T21:17:18.484Z"},{"objectId":"0hHX9PP4au","username":"properdan","text":"Wow, crazy","roomname":"lobby","createdAt":"2017-02-08T21:17:18.484Z","updatedAt":"2017-02-08T21:17:18.484Z"},{"objectId":"OLz1wivkhm","username":"ajp213","text":"Good news everyone!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.485Z","updatedAt":"2017-02-08T21:17:18.485Z"},{"objectId":"uf4FhMEf2x","username":"jdubz","text":"Put the rhythm in algorithm","roomname":"lobby","createdAt":"2017-02-08T21:17:18.485Z","updatedAt":"2017-02-08T21:17:18.485Z"},{"objectId":"0vCIkQYqhw","username":"fredx","text":"`var that = this`, never use it.","roomname":"lobby","createdAt":"2017-02-08T21:17:18.486Z","updatedAt":"2017-02-08T21:17:18.486Z"},{"objectId":"kMvFyzV780","username":"betherz","text":"Did you read the README?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.486Z","updatedAt":"2017-02-08T21:17:18.486Z"},{"objectId":"3cqkBvEHev","username":"zestylesty","text":"Did you read the README?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.487Z","updatedAt":"2017-02-08T21:17:18.487Z"},{"objectId":"2ftHv5uK1T","username":"sunnygonna","text":"Did you test this at all?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.487Z","updatedAt":"2017-02-08T21:17:18.487Z"},{"objectId":"ABiQbYexkd","username":"sunnygonna","text":"What does the error message say?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.487Z","updatedAt":"2017-02-08T21:17:18.487Z"},{"objectId":"XieKOAyvf1","username":"magee","text":"Just humor me and let’s look at the code anyway","roomname":"lobby","createdAt":"2017-02-08T21:17:18.489Z","updatedAt":"2017-02-08T21:17:18.489Z"},{"objectId":"m43eVvGw2x","username":"magee","text":"Be the machine!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.489Z","updatedAt":"2017-02-08T21:17:18.489Z"},{"objectId":"Y65aeMUxPa","username":"magee","text":"If you used good variable names you wouldn’t have to write so many comments","roomname":"lobby","createdAt":"2017-02-08T21:17:18.490Z","updatedAt":"2017-02-08T21:17:18.490Z"},{"objectId":"8jmNBEi1c9","username":"dan","text":"It's just JavaScript!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.490Z","updatedAt":"2017-02-08T21:17:18.490Z"},{"objectId":"w8c5JXYnBt","username":"properdan","text":"Wow, crazy","roomname":"lobby","createdAt":"2017-02-08T21:17:18.491Z","updatedAt":"2017-02-08T21:17:18.491Z"},{"objectId":"Jq4oL5bexW","username":"ajp213","text":"Good news everyone!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.491Z","updatedAt":"2017-02-08T21:17:18.491Z"},{"objectId":"zNNjgKtYrn","username":"jdubz","text":"Put the rhythm in algorithm","roomname":"lobby","createdAt":"2017-02-08T21:17:18.492Z","updatedAt":"2017-02-08T21:17:18.492Z"},{"objectId":"hRs8UZzNQQ","username":"fredx","text":"`var that = this`, never use it.","roomname":"lobby","createdAt":"2017-02-08T21:17:18.493Z","updatedAt":"2017-02-08T21:17:18.493Z"},{"objectId":"GbEuDAFzg5","username":"betherz","text":"Did you read the README?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.494Z","updatedAt":"2017-02-08T21:17:18.494Z"},{"objectId":"pA03CdIcgx","username":"zestylesty","text":"Did you read the README?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.495Z","updatedAt":"2017-02-08T21:17:18.495Z"},{"objectId":"5b5CNCuc4h","username":"sunnygonna","text":"Did you test this at all?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.495Z","updatedAt":"2017-02-08T21:17:18.495Z"},{"objectId":"PabBmk1xbw","username":"sunnygonna","text":"What does the error message say?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.496Z","updatedAt":"2017-02-08T21:17:18.496Z"},{"objectId":"SmDJ1RmEw6","username":"magee","text":"Just humor me and let’s look at the code anyway","roomname":"lobby","createdAt":"2017-02-08T21:17:18.497Z","updatedAt":"2017-02-08T21:17:18.497Z"},{"objectId":"LJgT0ys7Pm","username":"magee","text":"Be the machine!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.497Z","updatedAt":"2017-02-08T21:17:18.497Z"},{"objectId":"JF8YC5sG4B","username":"magee","text":"If you used good variable names you wouldn’t have to write so many comments","roomname":"lobby","createdAt":"2017-02-08T21:17:18.497Z","updatedAt":"2017-02-08T21:17:18.497Z"},{"objectId":"C6SB7LOQ20","username":"dan","text":"It's just JavaScript!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.498Z","updatedAt":"2017-02-08T21:17:18.498Z"},{"objectId":"YeVAOiovVW","username":"properdan","text":"Wow, crazy","roomname":"lobby","createdAt":"2017-02-08T21:17:18.498Z","updatedAt":"2017-02-08T21:17:18.498Z"},{"objectId":"hx13nCHwzV","username":"ajp213","text":"Good news everyone!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.499Z","updatedAt":"2017-02-08T21:17:18.499Z"},{"objectId":"8GHqTlD3Aw","username":"jdubz","text":"Put the rhythm in algorithm","roomname":"lobby","createdAt":"2017-02-08T21:17:18.499Z","updatedAt":"2017-02-08T21:17:18.499Z"},{"objectId":"API07YefB5","username":"fredx","text":"`var that = this`, never use it.","roomname":"lobby","createdAt":"2017-02-08T21:17:18.499Z","updatedAt":"2017-02-08T21:17:18.499Z"},{"objectId":"HroLx2kYIm","username":"betherz","text":"Did you read the README?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.500Z","updatedAt":"2017-02-08T21:17:18.500Z"},{"objectId":"mVQ1n5f2DU","username":"zestylesty","text":"Did you read the README?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.501Z","updatedAt":"2017-02-08T21:17:18.501Z"},{"objectId":"vWaDfjVZC7","username":"sunnygonna","text":"Did you test this at all?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.502Z","updatedAt":"2017-02-08T21:17:18.502Z"},{"objectId":"tQMhsii7O8","username":"sunnygonna","text":"What does the error message say?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.502Z","updatedAt":"2017-02-08T21:17:18.502Z"},{"objectId":"Sd5gTGG15h","username":"magee","text":"Just humor me and let’s look at the code anyway","roomname":"lobby","createdAt":"2017-02-08T21:17:18.503Z","updatedAt":"2017-02-08T21:17:18.503Z"},{"objectId":"ePpcr1C9dv","username":"magee","text":"Be the machine!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.503Z","updatedAt":"2017-02-08T21:17:18.503Z"},{"objectId":"LbRngoUBuq","username":"magee","text":"If you used good variable names you wouldn’t have to write so many comments","roomname":"lobby","createdAt":"2017-02-08T21:17:18.503Z","updatedAt":"2017-02-08T21:17:18.503Z"},{"objectId":"QGeKQeT2Ps","username":"dan","text":"It's just JavaScript!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.504Z","updatedAt":"2017-02-08T21:17:18.504Z"},{"objectId":"TpAmH3ysx2","username":"properdan","text":"Wow, crazy","roomname":"lobby","createdAt":"2017-02-08T21:17:18.505Z","updatedAt":"2017-02-08T21:17:18.505Z"},{"objectId":"1APmA1RdaI","username":"ajp213","text":"Good news everyone!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.505Z","updatedAt":"2017-02-08T21:17:18.505Z"},{"objectId":"0QTI82zEOL","username":"jdubz","text":"Put the rhythm in algorithm","roomname":"lobby","createdAt":"2017-02-08T21:17:18.505Z","updatedAt":"2017-02-08T21:17:18.505Z"},{"objectId":"wO0eyfHYx4","username":"fredx","text":"`var that = this`, never use it.","roomname":"lobby","createdAt":"2017-02-08T21:17:18.506Z","updatedAt":"2017-02-08T21:17:18.506Z"},{"objectId":"h4sR8g46lU","username":"betherz","text":"Did you read the README?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.506Z","updatedAt":"2017-02-08T21:17:18.506Z"},{"objectId":"HMncmQCKQc","username":"zestylesty","text":"Did you read the README?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.506Z","updatedAt":"2017-02-08T21:17:18.506Z"},{"objectId":"RQCsta1Vrw","username":"sunnygonna","text":"Did you test this at all?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.507Z","updatedAt":"2017-02-08T21:17:18.507Z"},{"objectId":"f9b4S797q7","username":"sunnygonna","text":"What does the error message say?","roomname":"lobby","createdAt":"2017-02-08T21:17:18.507Z","updatedAt":"2017-02-08T21:17:18.507Z"},{"objectId":"IkXpJ1qI3m","username":"magee","text":"Just humor me and let’s look at the code anyway","roomname":"lobby","createdAt":"2017-02-08T21:17:18.507Z","updatedAt":"2017-02-08T21:17:18.507Z"},{"objectId":"qW4nX8jauA","username":"magee","text":"Be the machine!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.508Z","updatedAt":"2017-02-08T21:17:18.508Z"},{"objectId":"oKjBSeBCnc","username":"magee","text":"If you used good variable names you wouldn’t have to write so many comments","roomname":"lobby","createdAt":"2017-02-08T21:17:18.508Z","updatedAt":"2017-02-08T21:17:18.508Z"},{"objectId":"L5B6fDvvnX","username":"dan","text":"It's just JavaScript!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.508Z","updatedAt":"2017-02-08T21:17:18.508Z"},{"objectId":"GgpC1QCuDJ","username":"properdan","text":"Wow, crazy","roomname":"lobby","createdAt":"2017-02-08T21:17:18.509Z","updatedAt":"2017-02-08T21:17:18.509Z"},{"objectId":"E2bOHXIRFl","username":"ajp213","text":"Good news everyone!","roomname":"lobby","createdAt":"2017-02-08T21:17:18.510Z","updatedAt":"2017-02-08T21:17:18.510Z"}]}

var sendResponse = function(response, data, statusCode){
  statusCode = statusCode || 200;
  response.writeHead(statusCode, defaultCorsHeaders);
  
  // var sendBack = {};
  // fs.writeFile(filename,sendBack,function(error){
  //   if(error) throw error
  //   console.log('html created')
  // })
  // console.log(sendBack)
  var styler = ""
  fs.readFile(filename, (err, data)=> {
    if (err) throw err;
    
    styler += data
    
  // response.on("end", function (data){fs.readFile(filename,function(error,html){
  // if(error) throw error
  // response.writeHead(200,{'Content-Type': 'text/html'})
  // response.write(html)
  // })
  // })
  response.end(response.write(styler), JSON.stringify(data));
  });
};

var actions = {
  'GET': function(request, response, results) {
    sendResponse(response, results);
  },
  'POST': function(request, response) {
    var body = '';
      request.on('data', function(data){
      body+=data;
      console.log("Partial body: " + body);
      var parsedBody = JSON.parse(body)
      results.results.unshift(data)
    });

    sendResponse(response, results, 201)
  }
};

var singleRequestHandler = function (request, response) {
  var action = actions[request.method];
  if (action) {
    action(request, response);
  } else {
    sendResponse(response, 'Not Found', 404);
  }
};

var searchResults = function(results, searchParams) {
  var sortedData = [];
  results.results.forEach(function(element){
    console.log(element)
    if (element.username === searchParams) {
      sortedData.push(element)
      
    }
  })
  return sortedData

}
var routes = {
  '/': singleRequestHandler,
  '/classes/messages': singleRequestHandler,
  '/classes/messages/username': function(request, response) {
    var method = request.method;
    var handler = actions[method];
    var param = querystring.parse(request.url)
    for (var i in param) {
      param = param[i]
    }
    console.log(param)
    var sortedData = searchResults(results,param);
    handler(request, response, sortedData)
  }
};

// var searchParams = {

// where:,
// createdAt:

// };

//parse on '?' & '='

var requestHandler = function(request, response) {
  console.log('Serving request type ' + request.method + ' for url ' + request.url);
  var urlParts = url.parse(request.url);
  var route = routes[urlParts.pathname];
  if (route) {
    route(request, response);
  } else {
    sendResponse(response, 'Not Found', 404);
  }  
};

exports.requestHandler = requestHandler;
