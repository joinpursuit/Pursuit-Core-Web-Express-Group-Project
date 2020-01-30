const posts = require("express").Router();

posts.get("/", getPosts);

posts.get("/:id", getPost);

posts.post("/", createPost);

posts.delete("/", deletePost)

module.exports = posts;