const db = require("./../../db/db");

const newDate = () => new Date().toString()

const sendError = (res, error) => {
    console.log(error);
    res.json({
            status: "error",
            error,
            timestamp: newDate()
        })
} // End of sendError() function

const sendDoesntExist = (item, id) => {
    res.json({
        status: "error",
        error: `${item} with id ${id} doesn't exist`
    })
} // End of sendDoesntExist() function

const isPostExisting = async (id) => {
    return await db.any("SELECT * FROM posts WHERE id=$1", id);
} // End of isPostExisting() function

const successReq = (res, data, message) => {
    res.status(200).json({
        status: "success",
        message: message,
        data,
        timestamp: newDate()
    })
} // End of successReq() function

const getAllPosts = async (req, res) => {
    try {
        let posts = await db.any("SELECT * FROM posts INNER JOIN users ON posts.poster_id=users.id");
        successReq(res, posts, "Retrieved all posts");
    } catch(error) {
        sendError(res, error);
    }
} // End of getAllPosts() function

const getPostById = async (req, res) => {
    try {
        let {postId} = req.params;
        let post = await db.any("SELECT * FROM posts WHERE id=$1", postId);
        if(post.length) {
            successReq(res, post, `Retrieved post at id ${postId}`);
        }
    } catch(error) {
        sendError(res, error);
    }
} // End of getPostById() function

const deletePost = async (req, res) => {
    try {
        let {postId} = req.params;
        let post = await db.any("DELETE FROM posts WHERE id=$1 RETURNING *", postId);
        if(post.length) {
            successReq(res, post, `Deleted post at id ${postId}`);
        }
    } catch(error) {
        sendError(res, error);
    }
} // End of deletePost() function

const editPost = async (req, res) => {
    try {
        let {body} = req.body;
        let {postId} = req.params;
        if(isPostExisting(postId)) {
            let post = await db.one("UPDATE posts SET body=$1, creation_date=$2 WHERE id=$3 RETURNING *", [body, newDate(), postId]);
            successReq(res, post, "Updated post");
        } else {
            sendDoesntExist("post", postId);
        }
    } catch(error) {
        sendError(res, error);
    }
} // End of editPost() function

module.exports = {getAllPosts, getPostById, deletePost, editPost}
