let db = require("./../../../db/db");
const {isPostExisting, newDate, successReq} = require("./../posts");

const isCommenterExisting = async (commenterId) => {
    try {
        let commenter =  await db.any("SELECT * FROM users WHERE id=$1",commenterId);
        if(commenter.length) return true
        else return false;
    } catch (error) {
        console.log(error);
    }
} // End of isCommentExisting() function

const getComments = async (req, res, next) => {
    try {
        let {postId} = req.params;
        if(await isPostExisting(postId)) {
            let comments = await db.any("SELECT * FROM comments INNER JOIN users ON comments.commenter_id=users.id WHERE post_id=$1", postId);
            if(comments.length) {
                successReq(res, comments, "Retrieved all comments");
            } else {
                throw {status: 404, error: "No comments found"}
            }
        } else {
            throw {status: 404, error: "Post doesn't exist"}
        }
        
    } catch (error) {
        next(error);
    }
} // End of getComments() function

const addComment = async (req, res, next) => {
    try {
        let {postId} = req.params;
        let {commenterId, body} = req.body;
        if(await isPostExisting(postId)) {
            if(await isCommenterExisting(commenterId)) {
                let comment = await db.one("INSERT INTO comments (commenter_id, post_id, body, creation_date) VALUES($1, $2, $3, $4) RETURNING *", [commenterId, postId, body, newDate()]);
                successReq(res, comment, "Added comment");
            } else {
                throw {status: 404, error: "Commenter doesn't exist"}
            }
        } else {
            throw {status: 404, error: "Post doesn't exist"}
        }
    } catch (error) {
        next(error);
    }
} // End of addComment() function

const editComment = async (req, res) => {
    try {
        let {postId, commenterId} = req.params;
        let {body} = req.body;
        if(await isPostExisting(postId)) {
            if(await isCommentExisting(postId, commenterId)) {
                let comment = await db.one("UPDATE comments SET body=$1, creation_date=$2 WHERE post_id=$3 AND commenter_id=$4 RETURNING *", [body, newDate(), postId, commenterId]);
                successReq(res, comment, "edited comment");

            } else {
                throw {status: 404, error: "Comment doesn't exist"}
            }
        } else {
            throw {status: 404, error: "Post doesn't exist"}
        }
    } catch (error) {
        next(error);
    }
} // End of editComment() function

const deleteComment = async (req, res) => {
    try {
        let {postId, commenterId} = req.params;
        if(await isPostExisting(postId)) {
            if(await isCommentExisting(postId, commenterId)) {
                let comment = await db.one("DELETE FROM comments WHERE post_id=$1 AND commenter_id=$2 RETURNING *", [postId, commenterId]);
                successReq(res, comment, "deleted comment");

            } else {
                throw {status: 404, error: "Comment doesn't exist"}
            }
        } else {
            throw {status: 404, error: "Post doesn't exist"}
        }
    } catch (error) {
        next(error);
    }
} // End of deleteComment() function

module.exports = {getComments, addComment, editComment, deleteComment}