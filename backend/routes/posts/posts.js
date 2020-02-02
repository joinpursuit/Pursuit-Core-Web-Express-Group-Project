const posts = require("express").Router();
const postCommentsRouter = require("./postComments/postComments");
const postLikesRouter = require("./postLikes/postLikes");
const {getAllPosts, getPostById, deletePost, editPost, createPost} = require("./../../queries/posts/posts");

posts.use("/:postId/comments", postCommentsRouter);
posts.use("/:postId/likes", postLikesRouter);

posts.get("/", getAllPosts);
posts.get("/:postId", getPostById);
posts.delete("/:postId", deletePost);
posts.patch("/:postId", editPost);
posts.post("/", createPost);

module.exports = posts;