const db = require("../DATABASE/index.js");

const createComment = async (req, res, next) => {
   let comment = req.body.body
   try {
      await db.none("INSERT INTO comments (commenter_id, posts_id, body) VALUES (${commenter_id}, ${posts_id}, ${body})", req.body)
      res.status(200).json({
         status: "Success",
         message: "You successfully added a comment",
         body: comment
      })
   } catch (err) {
      res.json({
         status: "Failed",
         message: err
      })
   }
}

const deleteComment = async (req, res, next) => {
   try {
      await db.none('DELETE * FROM comments WHERE id = $1', req.params.id)
      res.status(200).json({
         status: 'Success',
         message: 'Comment is now deleted'
      })
   } catch (err) {
      res.json({
         status: "Failed",
         message: err
      })
   }
}

module.exports = { createComment, deleteComment }