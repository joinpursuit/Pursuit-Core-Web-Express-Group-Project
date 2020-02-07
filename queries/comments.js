const db = require("../DATABASE/index.js");

const createComment = async (req, res, next) => {
   try {
      let comment = await db.none("INSERT INTO comments (commenter_id, posts_id, body) VALUES (${commenter_id}, ${posts_id}, ${body})", req.body)
      res.status(201).json({
         status: "Success",
         message: "You successfully added a comment",
         body: comment
      })
   } catch (err) {
      res.status(406).json({
         status: "Failed, not acceptable",
         message: `${err} is found at createComment`
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
      res.status(404).json({
         status: "Failed, not found",
         message: `${err} is found at deleteComment query`
      })
   }
}
module.exports = { createComment, deleteComment }