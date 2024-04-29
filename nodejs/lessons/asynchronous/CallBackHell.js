// day 9

/* 
Send api request
Process response
Verify response
Do some work
*/

const url = "https://jsonplaceholder.typicode.com/posts/1";

// callback hell
sendReq(url, function (response) {
  processResponse(response, function (statusCode) {
    verifyResponse(statusCode);
  });
});

// asynchronous
function sendReq(url, callback) {
  console.log("1. Sending request to " + url);
  setTimeout(() => {
    callback({ status: 200 });
  }, 1000);
}

// asynchronous
function processResponse(response, callback) {
  console.log("2. Processing response", response);
  setTimeout(() => {
    callback(response.status);
  }, 1000);
}

// synchronous
function verifyResponse(statusCode) {
  console.log("3. Verifying response", statusCode);
  if (statusCode === 200) {
    return true;
  } else {
    console.log("Error in response");
  }
}
