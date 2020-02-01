const posts = require("express").Router();

const {
  getposts,
  getpost,
  newpost,
  editPost,
  deletePost
} = require("../../queries/posts/posts.js");

posts.get("/", getposts); //get all posts
posts.get("/:id", getpost); //Get single post
posts.post("/", newpost); //Add single post
posts.patch("/:id", editPost); //Edit single post.
posts.delete("/:id", deletePost);

module.exports = posts;
