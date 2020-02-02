const db = require('../db/index');


const getPosts = async (req, res, next) => {
    try {
        let posts = await db.any("SELECT * FROM posts");
        res.status(200).json({
            posts,
            status: "Success!",
            message: "ALL posts!"
        })
    } catch (err) {
        next(err);
    }
}

const getPost = async (req, res, next) => {
    try {
        let user = req.params.id;
        let userPosts = await db.any("SELECT * FROM posts WHERE users_id = " + user);
        res.status(200).json({
            userPosts,
            status: "Success!",
            message: "ALL USER posts retrieved!"
        })
    } catch (err) {
        next(err);  
    }
}

const createPost = async (req, res, next) => {
    try {
        await db.none("INSERT INTO posts (users_id, body) VALUES (${users_id}, ${body})", req.body);
        res.status(200).json({
            status: "Success!",
            message: "Created NEW POST!"
        })
    } catch (err) {
        next(err);
    }
}

const deletePost = async (req, res, next) => {
    try {
        await db.none("DELETE FROM posts WHERE id = " + req.params.id);
        res.status(200).json({
            status: "Success!",
            message: "DELETED post!"
        })
    } catch (err) {
        next(err);
    }
}

const editPost = async (req, res, next) => {
    try {
        await db.one("SELECT * FROM posts WHERE id = " + req.params.id);
        res.status(200).json({
            status: "Success!",
            message: "EDITED post!"
        })
    } catch (err) {
        next(err);
    }
}



module.exports = { getPosts, getPost, createPost, deletePost, editPost };