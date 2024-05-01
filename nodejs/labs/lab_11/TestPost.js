const PostController = require("./PostController");

const url = "https://jsonplaceholder.typicode.com/posts";

const postController = new PostController();

let userId = postController.getUserIdFromUserInput();

let postId = postController.getPostIdFromUserInput();

console.log(`userId: ${userId}, postId: ${postId}`);

postController.getUserByUserIdAndPostId(url, userId, postId);

postController.getUsersByUserId(url, userId);
