const posts = require("express").Router();
const {getPosts, getPost, createPost, updatePost, deletePost} = require("../../queries/posts")

const postsCommentsRouter = require("./comments/comments")

const postsLikesRouter = require("./likes/likes")

post.use("/:id", postsCommentsRouter);
post.use("/:id", postsLikesRouter);

posts.get("/", getPosts);

posts.get("/:id", getPost);

posts.post("/", createPost);

posts.patch("/:id", updatePost)

posts.delete("/", deletePost)

module.exports = posts;