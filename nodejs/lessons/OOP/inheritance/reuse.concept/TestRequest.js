const GetRequest = require('./GetRequest');
const PostRequest = require('./PostRequest');
const url = 'https://my-api.com/api';

// GET
const request = new GetRequest(url);
request.setMethod('GET');
request.send();
request.verifyResponseStatus();

// POST
const postRequest = new PostRequest(url);
postRequest.setMethod();
postRequest.send();
postRequest.verifyResponseStatus();

postRequest.sayHello();