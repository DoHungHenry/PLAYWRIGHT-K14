/* 
## 9.2
* Please using PROMISE and ASYNC/AWAIT to solve this
* Allow user to input an userid and postId, print out that post content
* Print all posts for that user
*/

const readLine = require("readline-sync");
const { sendRequest } = require("../../utils/api.helper");

const url = "https://jsonplaceholder.typicode.com/posts";

let userId = getUserIdFromUserInput();

let postId = getPostIdFromUserInput();

console.log(`userId: ${userId}, postId: ${postId}`);

getUserByUserIdAndPostId(userId, postId);

getUsersByUserId(userId);

async function getUserByUserIdAndPostId(userId, postId) {
  const resBody = await sendRequest(url);
  let users = filterUsersByUserId(resBody, userId);
  let user = filterUsersByPostId(users, postId);
  console.log(
    `this is user by userID and id: ${JSON.stringify(user, null, 2)}`
  );
  return user;
}

async function getUsersByUserId(userId) {
  const resBody = await sendRequest(url);
  let users = filterUsersByUserId(resBody, userId);
  console.log(`this is users by userID: ${JSON.stringify(users, null, 2)}`);
  return users;
}

function filterUsersByPostId(data, postId) {
  let users = [];
  data.forEach((user) => {
    if (user.id === postId) {
      users.push(user);
    } else {
      throw new Error("PostId not found");
    }
  });
  return users;
}

function filterUsersByUserId(data, userId) {
  let users = [];
  data.forEach((user) => {
    if (user.userId === userId) {
      users.push(user);
    } else {
      throw new Error("UserId not found");
    }
  });
  return users;
}

function getUserIdFromUserInput() {
  return Number(readLine.question("Please input userId: "));
}

function getPostIdFromUserInput() {
  return Number(readLine.question("Please input postId: "));
}
