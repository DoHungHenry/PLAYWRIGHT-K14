/* 
## 9.2
* Please using PROMISE and ASYNC/AWAIT to solve this
* Allow user to input an userid and id, print out that post content
* Print all posts for that user
*/

const readLine = require("readline-sync");
const { sendRequest } = require("../../utils/api.helper");

const url = "https://jsonplaceholder.typicode.com/posts";

let userId = getUserIdFromUserInput();

let id = getIdFromUserInput();

console.log(`userId: ${userId}, id: ${id}`);

getUserByUserIdAndId(userId, id);

getUsersByUserId(userId);

async function getUserByUserIdAndId(userId, id) {
  const resBody = await sendRequest(url);
  let users = filterUsersByUserId(resBody, userId);
  let user = filterUsersById(users, id);
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

function filterUsersById(data, id) {
  return data.filter((user) => user.id === id);
}

function filterUsersByUserId(data, userId) {
  return data.filter((user) => user.userId === userId);
}

function getUserIdFromUserInput() {
  let userId = readLine.question("Please input userId: ");
  return isNaN(userId)
    ? (console.log("Please input a number"), getUserIdFromUserInput())
    : Number(userId);
}

function getIdFromUserInput() {
  // return Number(readLine.question("Please input id: "));
  let id = readLine.question("Please input id: ");
  return isNaN(id)
    ? (console.log("Please input a number"), getIdFromUserInput())
    : Number(id);
}
