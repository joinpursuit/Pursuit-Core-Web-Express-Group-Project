const posts = require("express").Router();

const { getPosts, getPost, createPost, deletePost, getAllCommentsByPost } = require("../../queries/posts");

posts.get("/comments/:id", getAllCommentsByPost)

posts.get("/home", getPosts);

posts.get("/:id", getPost);

posts.post("/", createPost);

posts.delete("/", deletePost)

module.exports = posts;