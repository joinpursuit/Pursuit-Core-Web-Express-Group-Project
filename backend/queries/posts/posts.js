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

const sendDoesntExist = (res, item, id) => {
    res.json({
        status: "error",
        error: `${item} with id ${id} doesn't exist`
    })
} // End of sendDoesntExist() function

const isPostExisting = async (id) => {
    try {
        let post = await db.any("SELECT * FROM posts WHERE id=$1", id);
        if(post.length) return true;
        else return false;
    } catch (err) {
        console.log(err);
    }
    
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
        if(isPostExisting(postId)) {
            let post = await db.one("SELECT * FROM posts WHERE id=$1", postId);
            successReq(res, post, `Retrieved post at id ${postId}`);
        } else {
            sendDoesntExist(res, "post", postId);
        }
    } catch(error) {
        sendError(res, error);
    }
} // End of getPostById() function

const deletePost = async (req, res) => {
    try {
        let {postId} = req.params;
        if(isPostExisting(postId)) {
            let post = await db.one("DELETE FROM posts WHERE id=$1 RETURNING *", postId);
            successReq(res, post, `Deleted post at id ${postId}`);
        } else {
            sendDoesntExist(res, "post", postId);
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
            sendDoesntExist(res, "post", postId);
        }
    } catch(error) {
        sendError(res, error);
    }
} // End of editPost() function

const createPost = async (req, res) => {
    try {
        let {posterId, body} = req.body;
        let post = await db.one("INSERT INTO posts (poster_id, body, creation_date) VALUES($1, $2, $3) RETURNING *", [posterId, body, newDate()]);
        successReq(res, post, "Created post");
    } catch (error) {
        sendError(error);
    }
} // End of createPost() function

module.exports = {getAllPosts, getPostById, deletePost, editPost, createPost, isPostExisting, sendError, newDate, sendDoesntExist, successReq}
