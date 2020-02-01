const comments = require('express').Router()
const { getAllComments, addSingleComment, editComment, deleteComment} = require('')
//

const commentRouter = require('../comments/comments.js')

// endpoints

comments.get("/posts/:post_id", getAllComments);

comments.post("/posts/:post_id/:commenter_id")