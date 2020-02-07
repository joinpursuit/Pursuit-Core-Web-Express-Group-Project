const comments = require("express").Router();

const { createComment, deleteComment } = require("../../queries/comments");

comments.post("/", createComment);

comments.delete("/:id", deleteComment);

module.exports = comments;