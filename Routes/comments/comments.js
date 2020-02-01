const comments = require('express').Router;
const { getAllComments, addSingleComment, editComment, deleteComment} = require('');

const commentRouter = require('../comments/comments.js');
comments.use("/:id", commentRouter);
// endpoints

// get all comments
comments.get("/posts/:post_id", getAllComments);

// add a single Comment
comments.post("/posts/:post_id/:commenter_id", addSingleComment);

//edit comment
comments.patch("/posts/:post_id/:id", editComment);

// delete a single comment
comments.delete("/posts/:post_id/:id", deleteComment);


