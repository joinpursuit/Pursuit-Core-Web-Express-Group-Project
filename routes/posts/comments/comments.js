const postsComments = require("express").Router({mergeParams:true});

const { getAllCommentsByPost } = require("../../../queries/posts")

postsComments.get("/:id", getAllCommentsByPost)

module.exports = postsComments;