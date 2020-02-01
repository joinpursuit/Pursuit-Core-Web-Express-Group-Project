const posts = require("express").Router();
const {
  getAllPosts,
  getSinglePost,
  insertSinglePost,
  updateSinglePost,
  deletePost
} = require("../queries/postQueries");

posts.get("/", getAllPosts); // Get all posts
posts.get("/:id", getSinglePost); // Get single post
posts.post("/", insertSinglePost); // Insert single post
posts.patch("/:id", updateSinglePost);
posts.delete("/:id", deletePost);

module.exports = posts;
