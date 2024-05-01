const Post = require("./Post");
const readLine = require("readline-sync");
const { sendRequest } = require("../../utils/api.helper");

class PostController {
    
  async getUserByUserIdAndPostId(url, userId, postId) {
    const resBody = await sendRequest(url);
    let usersByUserId = this._filterUsersByUserId(resBody, userId);
    let usersByUserIdAndPostId = this._filterUsersByPostId(usersByUserId, postId);
    console.log(
      `this is user by userID and postId: ${JSON.stringify(usersByUserIdAndPostId, null, 2)}`
    );
    return usersByUserIdAndPostId.map(user => new Post(user.userId, user.id, user.title, user.body));
  };

  async getUsersByUserId(url, userId) {
    const resBody = await sendRequest(url);
    let users = this._filterUsersByUserId(resBody, userId);
    console.log(`this is users by userID: ${JSON.stringify(users, null, 2)}`);
    return users.map(
      (user) => new Post(user.userId, user.id, user.title, user.body)
    );
  };

  getUserIdFromUserInput() {
    let userId = readLine.question("Please input userId: ");
    return isNaN(userId)
      ? (console.log("Please input a number"), getUserIdFromUserInput())
      : Number(userId);
  };

  getPostIdFromUserInput() {
    let postId = readLine.question("Please input postId: ");
    return isNaN(postId)
      ? (console.log("Please input a number"), getPostIdFromUserInput())
      : Number(postId);
  };

  _filterUsersByPostId(data, postId) {
    return data.filter((user) => user.id === postId);
  };

  _filterUsersByUserId(data, userId) {
    return data.filter((user) => user.userId === userId);
  };
}

module.exports = PostController;
