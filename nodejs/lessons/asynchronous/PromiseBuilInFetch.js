// day 9
/* 
Send api request
Process response
Verify response
Do some work
*/

// const fetch = require("node-fetch");

const url = "https://jsonplaceholder.typicode.com/todos/1";

// callback hell
sendReq(url, function (response) {
  const statusCode = processResponse(response);
  verifyResponse(statusCode);
});

// asynchronous
function sendReq(url, callback) {
  console.log("1. Sending request to " + url);
  // return a Promise
  fetch(url).then(function (response) {
    callback(response);
  });
}

// asynchronous
function processResponse(response) {
  console.log("2. Processing response", response);
  return response.status;
}

// synchronous
function verifyResponse(statusCode) {
  console.log("3. Verifying response", statusCode);
  if (statusCode === 200) {
    console.log("Response is passed");
    return true;
  } else {
    console.log("Error in response");
  }
}
