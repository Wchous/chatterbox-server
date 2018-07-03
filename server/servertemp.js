
//server.js

var http = require('http');

var url = require('url');

var handleRequest = require('./request-handler.js');

var utilities = require('./utilities.js');

var routes = {    
'/message-app/messages': handleRequest
  };



var server = http.createServer(function(request, response) {
  var urlParts = url.parse(request.url);
  var route = routes[parts.pathname];
  if (route) route(request, response);
  else utilities.sendResponse(response, 'Not Found', 404);
}).listen(3000, '127.0.0.1');





// request-handler.js
var utilities = require('./utilities.js');
var actions = {
  'GET': function(request, response) {
    utilities.sendResponse(response, {results: messages});
};

module.exports = function(request, response) {
  var action = actions[request.method];
  if (action) action(request, response);
  else utilities.sendResponse(response, 'Not Found', 404);
};

// utilities.js
var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'Content-Type': 'application/json'
};
exports.sendResponse = function(response, data, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};


