const posts = require("express").Router();
const postCommentsRouter = require("./postComments/postComments");
const postLikesRouter = require("./postLikes/postLikes");
const {getAllPosts} = require("./../../queries/posts/posts");

posts.use("/:postId/comments", postCommentsRouter);
posts.use("/:postId/likes", postLikesRouter);

posts.get("/", getAllPosts);

module.exports = posts;