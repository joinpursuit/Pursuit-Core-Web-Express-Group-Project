const db = require("./../../db/db");

let newDate = () => new Date().toString()

const sendError = (error) => {
    console.log(error);
    res.json({
            status: "error",
            error,
            timestamp: newDate()
        })
} // End of sendError() function

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
        sendError(error);
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
        sendError(error);
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
        sendError(error);
    }
} // End of deletePost() function

module.exports = {getAllPosts, getPostById, deletePost}
