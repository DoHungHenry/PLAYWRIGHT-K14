/* 
## General info:
* url: https://jsonplaceholder.typicode.com
* Library: `fetch`
* slugs:

```javascript
GET	/posts
```

## 9.1
* Please using PROMISE and thenable to solve this
* Allow user to input an userid and postId, print out that post content
* Print all posts for that user

*/

// const users = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
const { sendRequest } = require("../../lessons/utils/api.helper");

const url = "https://jsonplaceholder.typicode.com";
const postSlug = "/posts";

sendRequest(`${url}${postSlug}`).then(function (response) {
  console.log(response);
});

// console.log(users);
