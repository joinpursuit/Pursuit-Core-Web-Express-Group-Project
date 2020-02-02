let db = require("./../../../db/db");
const {isPostExisting, sendError, newDate, sendDoesntExist, successReq} = require("./../posts");

const sendNoComments = (res) => {
    res.json({
        status: "error",
        error: "That post has no comments"
    })
} // End of sendNoComments() function

const isCommentExisting = async (postId, commenterId) => {
    try {
        let comment =  await db.any("SELECT * FROM comments WHERE post_id=$1 AND commenter_id=$2",[postId, commentId]);
        if(comment.length) return true
        return false;
    } catch (error) {
        console.log(error);
    }
} // End of isCommentExisting() function

const getComments = async (req, res) => {
    try {
        let {postId} = req.params;
        let comments = await db.any("SELECT * FROM comments INNER JOIN users ON comments.commenter_id=users.id WHERE post_id=$1", postId);
        if(comments.length) {
            successReq(res, comments, "Retrieved all comments");
        } else {
            sendNoComments(res);
        }
    } catch (error) {
        sendError(res, error);
    }
} // End of getComments() function

const addComment = async (req, res) => {
    try {
        let {postId} = req.params;
        let {commenterId, body} = req.body;
        if(isCommentExisting(postId, commenterId)) {
            let comment = await db.one("INSERT INTO comments (commenter_id, post_id, body, creation_date) VALUES($1, $2, $3, $4) RETURNING *", [commenterId, postId, body, newDate()]);
            successReq(res, comment, "Added comment");
        } else {
            sendDoesntExist("post", postId);
        }
        
    } catch (error) {
        sendError(res, error);
    }
} // End of addComment() function

const editComment = (req, res) => {

} // End of editComment() function

const deleteComment = (req, res) => {

} // End of deleteComment() function

module.exports = {getComments, addComment, editComment, deleteComment}