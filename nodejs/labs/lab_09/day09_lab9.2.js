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
    `this is user by userID and postId: ${JSON.stringify(user, null, 2)}`
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
  return data.filter((user) => user.id === postId);
}

function filterUsersByUserId(data, userId) {
  return data.filter((user) => user.userId === userId);
}

function getUserIdFromUserInput() {
  let userId = readLine.question("Please input userId: ");
  return isNaN(userId) ? (console.log("Please input a number"), getUserIdFromUserInput()) : Number(userId);
}

function getPostIdFromUserInput() {
  // return Number(readLine.question("Please input postId: "));
  let postId = readLine.question("Please input postId: ");
  return isNaN(postId) ? (console.log("Please input a number"), getPostIdFromUserInput()) : Number(postId);
}
