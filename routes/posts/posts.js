const posts = require("express").Router();

const { getPosts } = require("../../queries/posts")

// const postsCommentsRouter = require("./comments/comments.js")

// const postsLikesRouter = require("./likes/likes")

// posts.use("/:id", postsCommentsRouter);
// posts.use("/:id", postsLikesRouter);

posts.get("/", getPosts);

// posts.get("/:id", getPost);

// posts.post("/", createPost);

// posts.patch("/:id", updatePost)

// posts.delete("/", deletePost)

module.exports = posts;