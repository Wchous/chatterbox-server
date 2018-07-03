/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

var results = {results: [{username: 'Bubba', message: 'hello world'}]};

var sendResponse = function(response, data, statusCode){
  statusCode = statusCode || 200;
  response.writeHead(statusCode, defaultCorsHeaders);
  response.end(JSON.stringify(data));
};

var actions = {
  'GET': function(request, response) {
    sendResponse(response, results);
  },
  'POST': function(request, response) {
    var body = '';
      request.on('data', function(data){
      body+=data;
      console.log("Partial body: " + body);
      var parsedBody = JSON.parse(body)
      results.results.unshift(parsedBody)
    });

    sendResponse(response, results, 201)
  }
};

var singleRequestHandler = function (request, response) {
  var action = actions[request.method];
  if (action) {
    action(request, response);
  } else {
    sendResponse(response, 'Not sudoFound', 404);
  }
};


var routes = {
  '/classes/messages': singleRequestHandler
};







var url = require('url');
var requestHandler = function(request, response) {
  // Request and Response come from node's http module.
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/

  // Do some basic logging.
  //
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // console.logs in your code.
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
