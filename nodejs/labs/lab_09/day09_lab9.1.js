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

let id = getIdFromUserInput();

console.log(`userId: ${userId}, id: ${id}`);

getUserByUserIdAndId(userId, id);

getUsersByUserId(userId);

function getUserByUserIdAndId(userId, id) {
  try {
    fetch(url)
      .then((response) => response.json())
      .then((resBody) => {
        let users = filterUsersByUserId(resBody, userId);
        let user = filterUsersById(users, id);
        console.log(
          `this is user by userID and id: ${JSON.stringify(user, null, 2)}`
        );
        return user;
      });
  } catch {
    throw new Error("Something went wrong");
  }
}

function getUsersByUserId(userId) {
  try {
    fetch(url)
      .then((response) => response.json())
      .then((resBody) => {
        let users = filterUsersByUserId(resBody, userId);
        console.log(
          `this is users by userID: ${JSON.stringify(users, null, 2)}`
        );
        return users;
      });
  } catch {
    throw new Error("Something went wrong");
  }
}

function filterUsersById(data, id) {
  return data.filter((user) => user.id === id);
}

function filterUsersByUserId(data, userId) {
  return data.filter((user) => user.userId === userId);
}

function getUserIdFromUserInput() {
  return Number(readLine.question("Please input userId: "));
}

function getIdFromUserInput() {
  return Number(readLine.question("Please input id: "));
}
