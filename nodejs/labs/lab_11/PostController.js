const Post = require("./Post");
const readLine = require("readline-sync");
const { sendRequest } = require("../../utils/api.helper");

class PostController {
  async getUserByUserIdAndId(url, userId, id) {
    const resBody = await sendRequest(url);
    let usersByUserId = this._filterUsersByUserId(resBody, userId);
    let usersByUserIdAndId = this._filterUsersById(usersByUserId, id);
    console.log(
      `this is user by userID and id: ${JSON.stringify(
        usersByUserIdAndId,
        null,
        2
      )}`
    );
    return usersByUserIdAndId.map(
      (user) => new Post(user.userId, user.id, user.title, user.body)
    );
  }

  async getUsersByUserId(url, userId) {
    const resBody = await sendRequest(url);
    let users = this._filterUsersByUserId(resBody, userId);
    console.log(`this is users by userID: ${JSON.stringify(users, null, 2)}`);
    return users.map(
      (user) => new Post(user.userId, user.id, user.title, user.body)
    );
  }

  getUserIdFromUserInput() {
    let userId = readLine.question("Please input userId: ");
    return isNaN(userId)
      ? (console.log("Please input a number"), getUserIdFromUserInput())
      : Number(userId);
  }

  getIdFromUserInput() {
    let id = readLine.question("Please input id: ");
    return isNaN(id)
      ? (console.log("Please input a number"), getIdFromUserInput())
      : Number(id);
  }

  _filterUsersById(data, id) {
    return data.filter((user) => user.id === id);
  }

  _filterUsersByUserId(data, userId) {
    return data.filter((user) => user.userId === userId);
  }
}

module.exports = PostController;
