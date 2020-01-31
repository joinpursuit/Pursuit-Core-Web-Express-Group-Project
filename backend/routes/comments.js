const comments = require("express").Router()

comments.get("/posts/:post_id", getAllCommentsOnSinglePost)
comments.post("/post/:post_id/:commenter_id", addSingleComment)
comments.patch("/post_id/:commenter_id", editSingleComment)
comments.delete("/:post_id/:commenter_id", deleteSingleComment)




module.exports = comments