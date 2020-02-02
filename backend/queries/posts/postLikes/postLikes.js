const db = require("./../../../db/db");
const {isPostExisting, sendError, sendDoesntExist, successReq} = require("./../posts");

const sendNoLikes = (res) => {
    res.json({
        status: "error",
        error: "That post has no likes"
    })
} // End of sendNoLikes

const isLikeExisting = async (likerId, postId) => {
    try {
        let like =  await db.any("SELECT * FROM likes WHERE liker_id=$1 AND post_id=$2",[likerId, postId]);
        if(like.length) return true
        return false;
    } catch (error) {
        console.log(error);
    }
} // End of isLikeExisting() function

const getLikes = async (req, res) => {
    try {
        let {postId} = req.params;
        if(isPostExisting(postId)) {
            let likes = await db.any("SELECT COUNT(*) AS likesForPost FROM likes WHERE post_id=$1", postId);
            if(likes.length) {
                successReq(res, likes, `retrieved likes for post ${postId}`);
            } else {
                sendNoLikes(res);
            }
        } else {
            sendDoesntExist(res, "post", postId);
        }
    } catch(error) {
        sendError(res, error);
    }
} // End of getLikes() function

const addLike = async (req, res) => {
    try {
        let {postId} = req.params;
        let {likerId} = req.body;
        if(await isPostExisting(postId)) {
            if(await isLikeExisting(likerId, postId)) {
                res.json({
                    status: "error",
                    error: "The user has liked the post already"
                })
            } else {
                await db.none("INSERT INTO likes (liker_id, post_id) VALUES ($1, $2)", [likerId, postId]);
                let post = await db.one("SELECT * FROM posts WHERE id=$1", postId);
                successReq(res, post, "Added like");
            }
        } else {
            sendDoesntExist(res, "post", postId);
        }
    } catch(error) {
        sendError(res, error);
    }
} // End of addLike() function

const deleteLike = async (req, res) => {
    try {
        let {postId, likerId} = req.params;
        if(isPostExisting(postId)) {
            if(isLikeExisting(likerId, postId)) {
                let like = db.one("DELETE FROM likes WHERE liker_id=$1 AND post_id=$2 RETURNING *", [likerId, postId]);
                successReq(res, like, "deleted like");
            } else {
                sendNoLikes(res);
            }
        } else {
            sendDoesntExist(res, "post", postId);
        }
        
    } catch (error) {
        sendError(error);
    }
} // End of deleteLike() function

module.exports = {getLikes, addLike, deleteLike}