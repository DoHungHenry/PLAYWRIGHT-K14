/* 
## 9.2
* Please using PROMISE and ASYNC/AWAIT to solve this
* Allow user to input an userid and postId, print out that post content
* Print all posts for that user
*/

const readLine = require("readline-sync");

const url = "https://jsonplaceholder.typicode.com/posts";

let userId = getUserIdFromUserInput();

let postId = getPostIdFromUserInput();

console.log(`userId: ${userId}, postId: ${postId}`);

getUserByUserIdAndPostId(userId, postId);

getUsersByUserId(userId);

async function getUserByUserIdAndPostId(userId, postId) {
    const resBody = await (await fetch(url)).json();
    let users = filterUsersByUserId(resBody, userId);
    let user = filterUsersByPostId(users, postId);
    console.log(
      `this is user by userID and id: ${JSON.stringify(user, null, 2)}`
    );
    return user;
}

async function getUsersByUserId(userId) {
    const resBody = await (await fetch(url)).json();
    let users = filterUsersByUserId(resBody, userId);
    console.log(`this is users by userID: ${JSON.stringify(users, null, 2)}`);
    return users;
}

function filterUsersByPostId(data, postId) {
  let users = [];
  data.forEach((post) => {
    if (post.id === postId) {
      users.push(post);
    }
  });
  return users;
}

function filterUsersByUserId(data, userId) {
  let users = [];
  data.forEach((post) => {
    if (post.userId === userId) {
      users.push(post);
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
