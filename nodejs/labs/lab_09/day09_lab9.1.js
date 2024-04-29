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

const readLine = require("readline-sync");

const url = "https://jsonplaceholder.typicode.com/posts";

let userId = getUserIdFromUserInput();

let postId = getPostIdFromUserInput();

getUsersByUserId(postId);

getUserByUserIdAndPostId(userId, postId);

function getUserByUserIdAndPostId(userId, postId) {
  const res = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let users = filterUsersByUserId(data, userId);
      let user = filterUsersByPostId(users, postId);
      console.log(JSON.stringify(user, null, 2));
      return user;
    });
}

function getUsersByUserId(userId) {
  const res = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let users = filterUsersByUserId(data, userId);
      console.log(JSON.stringify(users, null, 2));
      return users;
    });
}

function filterUsersByPostId(data, postId) {
  let posts = [];
  data.forEach((post) => {
    if (post.id === postId) {
      posts.push(post);
    }
  });
  return posts;
}

function filterUsersByUserId(data, userId) {
  let posts = [];
  data.forEach((post) => {
    if (post.userId === userId) {
      posts.push(post);
    }
  });
  return posts;
}

function getUserIdFromUserInput() {
  return Number(readLine.question("Please input userId: "));
}

function getPostIdFromUserInput() {
  return Number(readLine.question("Please input postId: "));
}
