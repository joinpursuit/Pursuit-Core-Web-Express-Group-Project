const db = require('../db/index');

const getAllComments = async (req, res, next) => {
    try {
        let comments = await db.any("SELECT * FROM comments WHERE post_id = " + req.params.post_id)
        res.status(200).json({
            comments,
            status: "success",
            message: "all comments"
        })
    } catch (error) {
        next (error)
    }
}

const addSingleComment =  async (req, res, next) => {
    try {
        req.body.commentor_id = req.params.commentor_id
        req.body.post_id = req.params.post_id
        let comment =  await db.one("INSERT INTO comments (commentor_id, post_id, body) VALUES (${commentor_id}, ${post_id}, ${body}) RETURNING * ", req.body)
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
      let comment = await db.one("UPDATE comments SET body = $1 WHERE commentor_id = $2 RETURNING *", [ req.body.body, req.params.id ]) 
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
        let comment = await db.none("DELETE FROM comments WHERE id = " + req.params.id)
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