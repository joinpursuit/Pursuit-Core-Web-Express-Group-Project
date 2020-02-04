const comments = require("express").Router();

const {
  getAllComments,
  addSingleComment,
  editSingleComment,
  deleteSingleComment,
  deleteAllComments
} = require("../queries/commentsQueries");

comments.get("/posts/:post_id", getAllComments);
comments.post("/posts/:post_id/:author_id", addSingleComment);
comments.patch("/:post_id/:author_id", editSingleComment);
comments.delete("/:id/:post_id", deleteSingleComment);
comments.delete("/:post_id/:author_id", deleteAllComments);

module.exports = comments;
