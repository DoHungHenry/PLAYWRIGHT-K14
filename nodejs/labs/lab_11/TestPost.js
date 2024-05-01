const PostController = require("./PostController");

const url = "https://jsonplaceholder.typicode.com/posts";

const postController = new PostController();

let userId = postController.getUserIdFromUserInput();

let id = postController.getIdFromUserInput();

console.log(`userId: ${userId}, id: ${id}`);

postController.getUserByUserIdAndId(url, userId, id);

postController.getUsersByUserId(url, userId);
