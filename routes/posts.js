const posts = require("express").Router();
const {getPosts, getPost, createPost, updatePost, deletePost} = require()

posts.get("/", getPosts);

posts.get("/:id", getPost);

posts.post("/", createPost);

posts.patch("/:id", updatePost)

posts.delete("/", deletePost)

module.exports = posts;