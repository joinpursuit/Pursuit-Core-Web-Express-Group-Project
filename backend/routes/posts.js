const posts = require("express").Router();
const {
  getAllPosts,
  getSinglePost,
  insertSinglePost
} = require("../queries/postQueries");

posts.get("/", getAllPosts); // Get all posts
posts.get("/:id", getSinglePost); // Get single post
posts.post("/", insertSinglePost); // Insert single post

module.exports = posts;
