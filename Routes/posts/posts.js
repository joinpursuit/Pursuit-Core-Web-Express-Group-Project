const posts = require("express").Router();
const { getPosts, getPost, createPost, deletePost, editPost } = require("../../queries/posts");


posts.get("/", getPosts);

posts.get("/:id", getPost);

posts.post("/", createPost);

posts.delete("/:id", deletePost);

posts.patch("/:id", editPost);


module.exports = posts;