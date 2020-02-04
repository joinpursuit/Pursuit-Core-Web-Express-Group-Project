const posts = require("express").Router();

const { getPosts, getPost, createPost, deletePost } = require("../../queries/posts");

//kelvin work on these routes
// const postsCommentsRouter = require("./comments/comments.js")

// const postsLikesRouter = require("./likes/likes")

// posts.use("/:id", postsCommentsRouter);
// posts.use("/:id", postsLikesRouter);

posts.get("/", getPosts);

posts.get("/:id", getPost);

posts.post("/", createPost);

// posts.patch("/:id", updatePost)

posts.delete("/", deletePost)

module.exports = posts;