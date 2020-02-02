const db = require('../db/index');

const getAllComments = async (req, res, next) => {
    try {
        let comments = await db.any("SELECT * FROM comments")
        res.status(200).json({
            likes,
            status: "success",
            message: "all comments"
        })
    } catch (error) {
        next (error)
    }
}

const addSingleComment =  async (req, res, next) => {
    try {
        let comment =  await db.one("INSERT into comments (commentor_id, post_id, body) VALUES (${commentor_id}, ${post_id}), ${body}", req.body)
        res.status(200).json({
            comment,
            status: "success",
            message: "added a single comment"
        })
    } catch (error) {
        next (error)  
    }
}

const editSingleComment = async (req, res, next) => {
    try {
      let comment = await db.one("UPDATE comments SET body = $1 WHERE commentor_id = $2", req.body) 
      res.status(200).json({
          comment,
          status: "success",
          message: "updated a comment"
      }) 
    } catch (error) {
        next (error)  
    }
}

const deleteComment = async (req, res, next) => {
    try {
        let comment = await db.none("DELETE FROM comments WHERE id = ", req.params.id)
        res.status(200).json({
            comment,
            status: "success",
            message: "deleted a comment"
        })
    } catch (error) {
        next (error)        
    }
}



module.exports = {getAllComments, addSingleComment, editSingleComment, deleteComment}