const db = require("../db/index.js");
// GET /comments/posts/:post_id - Get all comments for a single post.
// POST /comments/posts/:post_id/:commenter_id - Add single comment.
// PATCH /comments/:post_id/:commenter_id - Edit single comment.
// DELETE /comments/:post_id/:commenter_id - Delete single comment.

const getAllComments = async (req, res, next) => {
    try {
        let edit = await db.any("SELECT * FROM comments");
        res.status(200).json({
            status: "status",
            message: "get all comments",
            body: edit
        })
    } catch (err) {
        next(err)
    }
}

const getSingleComment = async (req, res, next) => {
    try {
        let singleComment = await db.one("SELECT * FROM comments WHERE id = $1", req.params.commenter_id);
        res.status(200).json({
            status: "status",
            message: "got the single comment",
            body: singleComment
        })
    } catch (err) {
        next(err)
    }
}

const editSingleComment = async (req, res, next) => {
    try {
        let editComment = await db.one(`UPDATE comments SET body ='${req.params.commenter_id}' WHERE id = ${req.params.commenter_id} RETURNING *`);
        res.status(200).json({
            status: "status",
            message: "the single comment is now edited",
            body: editComment
        })
    } catch (err) {
        next(err)
    }
}

const deleteSingleComment = async (req, res, next) => {
    try {
        let removeComment = await db.none("DELETE FROM comments WHERE id = $1", req.params.commenter_id);
        res.status(200).json({
            status: "status",
            message: "delete was a success",
            body: removeComment
        })

    } catch (err) {
        next(err)
    }
}
module.exports = { getAllComments, getSingleComment, editSingleComment, deleteSingleComment }